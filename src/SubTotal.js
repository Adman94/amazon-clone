import React from 'react'
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer'
import './SubTotal.css';

function SubTotal() {
    const history = useHistory();
    const [{ basket, user }] = useStateValue();

    const handleProcessButtonClick = () => {
        if (basket.length === 0) {
            alert("Please select a product to continue checkout");
            return;
        } else if (!user) {
            alert("Please Login!");
            return;
        } else {
            history.push("/payment");
            // alert(`Do you wants to buy ${items.length} items?`);
        }
    };

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={handleProcessButtonClick} disabled={basket.length === 0}>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
