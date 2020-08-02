export const initialState = {
    basket: [{
        id: "37292947",
        title: "Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 256GB) - Space Gray (4th Generation)",
        price: 1249.99,
        rating: 5,
        image: "https://images-na.ssl-images-amazon.com/images/I/81Pi4nhjlwL._AC_SL1500_.jpg"
    },
    {
        id: "37292947",
        title: "Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 256GB) - Space Gray (4th Generation)",
        price: 1249.99,
        rating: 5,
        image: "https://images-na.ssl-images-amazon.com/images/I/81Pi4nhjlwL._AC_SL1500_.jpg"
    }],
    user: null
};

export const getBasketTotal = basket => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            // Logic from Removing item from basket

            // we cloned the basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if(index >= 0) {
                // item exists in basket, remove it...
                newBasket.splice(index, 1)
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id} as it's not in basket)`
                )
            }
            return {
                ...state,
                basket: newBasket,
            }
                
        default:
            return state;
    }
}

export default reducer;