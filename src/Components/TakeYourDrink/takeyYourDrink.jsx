import './TakeYourDrink.css'; // External CSS

export const TakeYourDrink = ({index}) => {
    return(
        <>
            <div className="vending-machine-screen">
                <div className="vending-message">
                    "Brew.......Take your drink" at index: {index}
                </div>
            </div>
        </>
    )
}