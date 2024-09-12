import { PayCredit } from '../PayCredit/PayCredit';
import { PayCash } from '../PayCash/PayCash';
import './PaymentOptions.css'; 

// Payment options screen 
export const PaymentOptions = ({ nextScreen, price, index }) => {

  const selectPayment = (e) => {
    e.preventDefault();
    console.log("pay with", e.target.value);
    if (e.target.value == "cash") {
      nextScreen(<PayCash price={price} index={index} />);
    } else if (e.target.value == "card") {
      nextScreen(<PayCredit price={price} index={index} />)
    }
  }

  return (
    <>
      <div className="payment-options-container">
        <h2>Select Payment Method</h2>
        <button value="cash" className="payment-button cash" onClick={selectPayment}>
          <h1>Cash</h1>
        </button>
        <button value="card" className="payment-button card" onClick={selectPayment}>
          <h1>Card</h1>
        </button>
      </div>
    </>


  );
};
