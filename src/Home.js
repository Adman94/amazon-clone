import React from 'react'
import './Home.css'
import Product from './Product'
import CarouselPage from './slideFeature';
// import { itemData, itemData2 } from "./itemsData.js";

function Home() {
    return (
        <div className="home">
            <CarouselPage />
            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12321341"
                    title="How to Day Trade for a Living: Tools, Tactics, Money Management, Discipline and Trading Psychology"
                    price={10.53}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/5187KS2mlFL.jpg"
                />
                <Product
                    id="12679341"
                    title="Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition by Gayle Laakmann McDowell (Author)"
                    price={20.61}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51l5XzLln+L._SX348_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="74756432"
                    title="Apple AirPods with Wired Charging Case"
                    price={129.72}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg"
                />
                <Product
                    id="23428343"
                    title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
                    price={899.52}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71k3fJh5EwL._AC_SL1500_.jpg"
                />
                <Product
                    id="78646113"
                    title="Gaming Headset,UNIOJO Stereo PS4 Headset,Xbox One Headset,Professional Wired Gaming Bass Over-Ear Headphones with Mic,Vibration Effect, LED Light, Noise..."
                    price={29.92}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71WuBEj3i3L._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="58768565"
                    title='AOC CU34G2X 34" Curved Frameless Immersive Gaming Monitor, UltraWide QHD 3440x1440, VA Panel, 1ms 144Hz Freesync, Height Adjustable, 3-Yr Zero Dead Pixels'
                    price={599.35}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81kqFYbImYL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
