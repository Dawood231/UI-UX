import './menu.css'
import logo from "../images/Foodtuck.png";
import Link from "next/link";
import Image from 'next/image';

// icons
import { BsMinecartLoaded } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";


export default function page() {
  return (
    <div className='menu-page'>
      <div className='header-wt'>
        <div className='header-logo'>
        <Image src={logo} alt="logo" className="image" width={100}></Image>
        </div>
        <div className='navlinks'>
        <Link href="./menu_page" className="link">
                Home
              </Link>
              <Link href="./menu_page" className="link">
                Menu
              </Link>
              <Link href="./menu_page" className="link">
                Blog
              </Link>
              <Link href="./menu_page" className="link">
                Pages
              </Link>
              <Link href="./menu_page" className="link">
                About
              </Link>
              <Link href="./menu_page" className="link">
                Shop
              </Link>
              <Link href="./menu_page" className="link">
                Contact
              </Link>
        </div>
        <div className='head-icon'>
      <IoSearch className="card-icon-white" />
      <BsMinecartLoaded className="cart-icon-white" />
      <BsPerson />
        </div>
      </div>

      <div className='second-header'>
        <h2>Our Menu</h2>
        <p>Home<IoIosArrowForward />
        <span>Menu</span></p>
      </div>
    <div className='menu-sec'>
      <div className='starter-menu'>
        <div className='startimage'></div>
        <div className='starttext'>
          <h2>Starter Menu</h2>
          <div className='star-list'>
          <div className='star-bt'><h3>Alder Grilled Chinook Salmon</h3> <span>32$</span></div>
          <p>Toasted French bread topped with romano, cheddar</p>
          <span>560 cal</span>
          </div>

          <div className='star-list'>
          <div className='star-bt'><h3>Berries and creme tart</h3> <span>43$</span></div>
          <p>Gorgonzola, ricotta, mozzarella, taleggio</p>
          <span>700 cal</span>
          </div>

          <div className='star-list'>
          <div className='star-bt'><h3>Tormentoso Bush Pizza Pintoage</h3> <span>14$</span></div>
          <p>Ground cumin, avocados, peeled and cubed</p>
          <span>1000 cal</span>
          </div>

          <div className='star-list'>
          <div className='star-bt'><h3>Spicy Vegan Potato Curry</h3> <span>35$</span></div>
          <p>Spreadable cream cheese, crumbled blue cheese</p>
          <span>500 cal</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
