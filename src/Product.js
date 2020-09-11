import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider";
import StarIcon from '@material-ui/icons/Star';
import Noty from "noty";
import "../node_modules/noty/lib/noty.css"
import "../node_modules/noty/lib/themes/mint.css"
function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        // console.log("add to basket")

        const newBasket = [...state.basket];
        const item = newBasket.find(item => item.id === id);
        if (item) {
            item.quantity += 1;
        }

        new Noty({
            type: "success",
            layout: "topRight",
            timeout: 1000,
            text: `<div class="noty__container"><img src=${image}> ${title} has been added to basket</div>`,
            closeWith: ["click"]
        }).show();

        dispatch({
            type: "ADD_TO_BASKET",
            item: item ? item : {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                quantity: 1

            }
        });

    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}><StarIcon /></p>
                    ))}
                </div>
            </div>

            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product;
