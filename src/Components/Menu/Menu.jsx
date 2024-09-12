
import { useEffect, useState } from 'react';
import '../../css/Menu.css';
import { PaymentOptions } from '../PaymentOptions/paymentOption';

// Drinks menu with description and pricing

export const Menu = ({ menu_data }) => {

    const [screen, setScreen] = useState(null);

    const selectDrink = (e) => {
        e.preventDefault();
        const [price, index] = e.target.value.split(',');
        setScreen(<PaymentOptions nextScreen={setScreen} price={price} index={index} />);
    }

    const drinkScreen = menu_data.map(drink =>
        <>
            <div className="drink" key={drink.price}>
                <h1 key={drink.name}>{drink.name}</h1>
                <p key={drink.desc}>{drink.desc}</p>
                <button key={drink.index} value={[drink.price, drink.index]} onClick={selectDrink}>{drink.price}</button>
            </div>
        </>

    )

    useEffect(() => {
        if (screen == null) {
            setScreen(drinkScreen);
        }
    }, [screen])


    return (
        <>

            <div className="menu-container">
                {screen}
            </div>

        </>
    )

}

