import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Hamburger.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import menu from './img/menu.svg'
import close from './img/close.svg'

const category = [
  "Amazon Music",
  "Kindle E-readers",
  "Appstore for Android",
  "Mobiles",
  "Televisions",
  "Laptops",
  "Cameras",
  "Amazon Fashion",
  "Apparel",
  "Watches",
  "Jewellery",
  "Shoes",
  "Books",
  "Movies & TV Shows",
  "Music",
  "Video Games",
  "Home & Kitchen",
  "Gourmet",
  "Pet Supplies",
  "Car & Motorbike",
  "Toys & Baby Products",
  "Sports",
  "Beauty & Health",
  "Beauty",
  "Health",
  "Personal Care Appliances",
  "Household Supplies",
  "TV & Entertainment",
  "Home Entertainment",
  "Musical Instruments",
  "Office Supplies",
  "Accessories",
  "Fashion Accessories",
  "Luggage",
  "Handbags",
  "Travel Accessories",
  "Sunglasses",
];

function Hamburger() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <Menu
      width={"25%"}
      customBurgerIcon={<img src={menu} />}
      customCrossIcon={<img src={close} />}
    >
      <div className='bm-menu-head'>
        <AccountCircleIcon className='user' />

        {user ?
          <h3>
            Hello {" "}
            {(
              user.email.substring(0, user.email.lastIndexOf("@")).toUpperCase()
            )}
          </h3> : (
            <Link className='signin' to='/login'>
              {" "}
              <p >Sign In</p>{" "}
            </Link>
          )}

      </div>
      <div className='menu__category'>
        <h4>Shop By Category</h4>
        {category.map((item) => (
          <a id='home' className='menu-item' href='/'>
            <span>{item}</span>
            <ChevronRightIcon className='right' />
          </a>
        ))}
      </div>
    </Menu>
  );
}

export default Hamburger;
