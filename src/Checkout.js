import React, { forwardRef } from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{ basket, user }] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping basket is empty</h2>
                        <p>You have no items in your basket. To buy one or more items, click, "Add to basket" next to the item</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {/* List out all of the Checkout Products */}
                            <FlipMove>
                                {basket?.map(item => {
                                    console.log(item);
                                    return (
                                        <CheckoutProduct
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating}
                                        />
                                    )
                                })}
                            </FlipMove>
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <SubTotal />
                </div>
            )}
        </div>
    )
}

export default Checkout;
