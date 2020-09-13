import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider";
import StarIcon from '@material-ui/icons/Star';
import Noty from "noty";
import "../node_modules/noty/lib/noty.css"
import "../node_modules/noty/lib/themes/mint.css"
function Product({ id, title, image, price, rating, click }) {

    document.querySelectorAll(".button").forEach((button) =>
        button.addEventListener("click", (e) => {
            e.preventDefault();
            if (!button.classList.contains("loading")) {
                button.classList.add("loading");

                setTimeout(() => button.classList.remove("loading"), 3700);
            }
        })
    );

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
                    <medium>$ </medium>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}><StarIcon /></p>
                    ))}
                </div>
            </div>

            <img src={image} alt="" />
            <button class="button" onClick={addToBasket}>
                <span>Add to cart </span>
                <div class='cart'>
                    <svg viewBox='0 0 36 26'>
                        <polyline points='1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5'></polyline>
                        <polyline points='15 13.5 17 15.5 22 10.5'></polyline>
                    </svg>
                </div>
            </button>
        </div>
    )
}

export default Product;
