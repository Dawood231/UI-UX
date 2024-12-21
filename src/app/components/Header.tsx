import "../menu_page/menu.css";
import logo from "../images/Foodtuck.png";

// icons
import { BsMinecartLoaded } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="header-wt">
        <div className="header-logo">
          <Image src={logo} alt="logo" className="image" width={100}></Image>
        </div>
        <div className="navlinks">
          <Link href="./" className="link">
            Home
          </Link>
          <Link href="./menu_page" className="link">
            Menu
          </Link>
          <Link href="./blog_page" className="link">
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
          <Link href="./signup_page" className="link">
            Signup
          </Link>
        </div>
        <div className="head-icon">
          <IoSearch className="card-icon-white" />
          <BsMinecartLoaded className="cart-icon-white" />
          <BsPerson />
        </div>
      </div>
  )
}