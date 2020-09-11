import React, { forwardRef } from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';
import Noty from "noty";
import "../node_modules/noty/lib/noty.css"
import "../node_modules/noty/lib/themes/mint.css"

const CheckoutProduct = forwardRef(({ id, title, image, price, rating, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();
    console.log(id, title, image, price, rating);
    const removeFromBasket = () => {
        // remove item from basket...
        new Noty({
            type: "success",
            layout: "topRight",
            timeout: 1000,
            text: `<div class="noty__container"><img src=${image}> ${title} has been removed from basket</div>`,
            closeWith: ["click"]
        }).show();

        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div ref={ref} className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span role="img" aria-label="star">🌟</span>
                        ))}
                </div>
                {!hideButton && (
                    <button onClick={id && removeFromBasket}>Remove from basket</button>
                )}
            </div>
        </div>
    )
})

export default CheckoutProduct
