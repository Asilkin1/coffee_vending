import {Emulator} from '../../emulator';
import { useState } from 'react';
import { TakeYourDrink } from '../TakeYourDrink/takeyYourDrink';
import '../../css/Menu.css'

   // pay credit screen
  export  const PayCredit = ({needtoPay, index}) => {

    const[status, setStatus] = useState('');
    const[vend, setVend] = useState(null);

    const showPurchaseResult = (result) => {
        console.log('status', result);
        setStatus(result);
      };

    const vendResult = (result) => {
        if(index === result){
            setVend(true);
            //return true;
        }
        else{
            setVend(false);
           // return false;
        }
    };

      const cardPurchase = (amount) => {
    
        if(amount === needtoPay){
            return true;
        } 
        else if(amount < needtoPay){
            return false;
        }
    }

    const simulateVendingOperations = (event) => {
  
        // BankCard purchase success
        if (event.ctrlKey && event.key === 's') {
          event.preventDefault();
          Emulator.BankCardPurchase(needtoPay, cardPurchase, showPurchaseResult)
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
        // BankCard purchase fail
        if (event.ctrlKey && event.key === 'd') {
          event.preventDefault();
          Emulator.BankCardPurchase(10,cardPurchase,showPurchaseResult);
        }
        
        // BankCard cancel operation
        if (event.ctrlKey && event.key === 'q') {
          event.preventDefault();
          Emulator.BankCardCancel();
        }
      }
    
    document.addEventListener(
        "keydown",simulateVendingOperations,
        false,
      );
    
    return (
    <>
        <div className="drink">
        {status}
        
        </div>
        {vend && <TakeYourDrink index={index} /> }
        
    </>
)}
