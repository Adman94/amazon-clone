import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
import { Zoom } from '@material-ui/core';
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{ basket, user }] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <Zoom in={true}>
                    <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg" alt="" />
                </Zoom>
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping basket is empty</h2>
                        <p>You have no items in your basket. To buy one or more items, click, "Add to basket" next to the item</p>
                    </div>
                ) : (
                        <Zoom in={true}>
                            <div>
                                <h2>Hello, {!user ? 'Guest' : user.email}</h2>
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
                        </Zoom>
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
