 
 import {Emulator} from '../../emulator';
 import { useState } from 'react';
import { TakeYourDrink } from '../TakeYourDrink/takeyYourDrink';
 // pay cash screen
 export const PayCash = ({price,index}) => {

    const[vend, setVend] = useState(null);
    const[status, setStatus] = useState(0);

    const vendResult = (result) => {
      if(index === result){
          setVend(true);
          //return true;
      }
      else{
          setVend(false);
      }
  };

    const insertCash = (amount) => {
        const more = status + amount;
        setStatus(more);

        if(status === parseInt(price)){
            console.log("Call Vend from Emulator");
            document.removeEventListener("keydown",simulateVendingOperations);  
        }
    };
    
    const stopCashin = () => {
        document.removeEventListener("keydown",simulateVendingOperations);
    };

        const simulateVendingOperations = (event) => {
  
        if (event.ctrlKey && event.key === 'a') {
          event.preventDefault();
          Emulator.StartCashin(insertCash);
        }
    
        if (event.ctrlKey && event.key === 'q') {
          event.preventDefault();
          Emulator.StopCashin(stopCashin);
        }

            // Vend success
            if (event.ctrlKey && event.key === 'c') {
              event.preventDefault();
              Emulator.Vend(index,vendResult);
          }
  
          // Vend fail
          if (event.ctrlKey && event.key === 'v') {
              event.preventDefault();
              Emulator.Vend(20,vendResult);
          }
      }
    
    document.addEventListener(
        "keydown",simulateVendingOperations,
        false,
      );

    return (
        <> 
          <p className="drink">Balance: {status - price}</p>
            <input className="drink" value={status}></input>
            <div>
              {vend && <TakeYourDrink index={index} />}
            </div>
        </>
    )
}