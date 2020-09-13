import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
import { Zoom } from '@material-ui/core';
import FlipMove from 'react-flip-move';
import { Link } from "react-router-dom";
import emptyCart from './img/emptyCart.png';

function Checkout() {
    const [{ basket, user }] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <Zoom in={true}>
                    <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg" alt="" />
                </Zoom>
                {basket?.length === 0 ? (
                    <div className='empty_cart'>
                        <img src={emptyCart} alt='' />
                        <h2>You Cart Is Empty</h2>
                        <Link to='/' className='add-to-cart'>
                            Add to Cart
                    </Link>
                    </div>
                ) : (
                        <Zoom in={true}>
                            <div>
                                <div className="checkout__title">
                                    <h2>Hello, {user
                                        ? user.email
                                            .substring(0, user.email.lastIndexOf("@"))
                                            .toUpperCase()
                                        : "Guest"}</h2>
                                    <h3 >Your Shopping Basket</h3>
                                </div>
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
