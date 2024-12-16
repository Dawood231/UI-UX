import Image from "next/image";
import logo from "./images/Foodtuck.png";

// icons
import { IoSearch } from "react-icons/io5";
import { BsMinecartLoaded } from "react-icons/bs";
import wineicon from "./images/Wine.png";
import burgericon from "./images/Hamburger.png";
import cookieicon from "./images/Cookie.png";
import prochef from "./images/feature1.png";
import itemoffood from "./images/feature2.png";
import yeaofexp from "./images/feature3.png";
import hapcus from "./images/feature4.png";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoIosPlayCircle } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiClockClockwiseFill } from "react-icons/pi";

// social icons
import { FaPinterestSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";

// styles
import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      <div className="hero-sec">

        <div className="header-bg">
        <header>
          <div>
            {" "}
            <Image src={logo} alt="logo" className="image"></Image>{" "}
          </div>

          <div className="navbar">
            <nav>
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
            </nav>
            <div className="search">
              <div className="input-field">
                <input type="text" placeholder="Search..." />
                <IoSearch className="card-icon-white" />
              </div>
              <div>
                <BsMinecartLoaded className="cart-icon-white" />
              </div>
            </div>
          </div>
        </header>

        <div className="inner-hero">
          <div className="hero-text">
            <h3>Its Quick & Amusing!</h3>
            <h1>
              <span className="yellow">Th</span>e Art of speed food Quality
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
            <button>See Menu</button>
          </div>
          <div className="hero-image"></div>
        </div>
        </div>

        <div className="about-us">
          <div className="about-text">
            <h3>About us</h3>
            <h1>
              <span className="yellow">We</span> Create the best foody product
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>

            <p>✔ Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

            <p>
              ✔ Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
            </p>

            <p>✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

            <button>Read More</button>
          </div>

          <div className="about-grid">
            <div className="about-row-1"></div>
            <div className="about-row-2">
              <div className="about-col-1"></div>
              <div className="about-col-2"></div>
            </div>
          </div>
        </div>

        <div className="food-cate">
          <h3>food category</h3>
          <h1>
            <span className="yellow">Ch</span>oose Food Iteam
          </h1>
          <div className="category-image">
            <div className="box-1"></div>
            <div className="box-2"></div>
            <div className="box-3"></div>
            <div className="box-4"></div>
          </div>
        </div>

        <div className="why-choose">
          <div className="why-grid"></div>
          <div className="why-choose-text">
            <h3>Why Choose us</h3>
            <h1>
              <span className="yellow">Ex</span>tra ordinary taste and
              Experienced
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>

            <div className="why-cards">
              <div className="wcard-1">
                <Image
                  src={burgericon}
                  alt="burger-icon"
                  className="why-icon"
                ></Image>
                Fast Food
              </div>
              <div className="wcard-2">
                <Image
                  src={cookieicon}
                  alt="cookie-icon"
                  className="why-icon"
                ></Image>
                Lunch
              </div>
              <div className="wcard-3">
                <Image
                  src={wineicon}
                  alt="wine-icon"
                  className="why-icon"
                ></Image>
                Dinner
              </div>
            </div>

            <div className="why-exp-card">
              <div className="exp-head">30+</div>
              <div className="exp-text">
                <span>Years of</span>
                <p>Experienced</p>
              </div>
            </div>
          </div>
        </div>

        <div className="feature">
          <div className="fea-card">
            <Image src={prochef} alt="fea-icon" className="fea-icon"></Image>
            <h3 className="fea-h3">Professional chefs</h3>
            <h2 className="fea-h2">420</h2>
          </div>

          <div className="fea-card">
            <Image src={itemoffood} alt="fea-icon" className="fea-icon"></Image>
            <h3 className="fea-h3">Items of food</h3>
            <h2 className="fea-h2">320</h2>
          </div>

          <div className="fea-card">
            <Image src={yeaofexp} alt="fea-icon" className="fea-icon"></Image>
            <h3 className="fea-h3">Years of Experienced </h3>
            <h2 className="fea-h2">30+</h2>
          </div>

          <div className="fea-card">
            <Image src={hapcus} alt="fea-icon" className="fea-icon"></Image>
            <h3 className="fea-h3">happy Customers</h3>
            <h2 className="fea-h2">220</h2>
          </div>
        </div>

        <div className="chef">
          <h3>Chef</h3>
          <h1>
            <span className="yellow">Me</span>et Our Chef
          </h1>

          <div className="chef-cont">
            <div className="chef-card1">
              <div className="chef-mini">
                <h4>D.Estwood</h4>
                <span>Chief Chef</span>
              </div>
            </div>

            <div className="chef-card2">
              <div className="chef-mini">
                <h4>D.Estwood</h4>
                <span>Chief Chef</span>
              </div>
            </div>

            <div className="chef-card3">
              <div className="chef-mini">
                <h4>D.Estwood</h4>
                <span>Chief Chef</span>
              </div>
            </div>

            <div className="chef-card4">
              <div className="chef-mini">
                <h4>D.Estwood</h4>
                <span>Chief Chef</span>
              </div>
            </div>
          </div>
          <div className="chef-button">See More</div>
        </div>

        <div className="client-section">
          <div className="text-al-lf">
            <h3>Testimonials</h3>
            <h1>What our client are saying</h1>
          </div>

          <div className="client-card">
            <div className="profile-avatar"></div>
            <div className="quote">
              <div className="inner-quote"></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>

            <div className="chef-star">
              <FaStar className="full-star" />
              <FaStar className="full-star" />
              <FaStar className="full-star" />
              <FaStar className="full-star" />
              <FaStar className="light-star" />
            </div>
            <h6 className="client-name">Alamin Hasan</h6>
            <span className="client-des">Food Specialist</span>
          </div>

          <div className="client-circles">
            <div className="com-cricle"></div>
            <div className="hol-cricle"></div>
            <div className="hol-cricle"></div>
            <div className="hol-cricle"></div>
          </div>
        </div>

        <div className="res-process">
          <div className="res-text">
            <h3>Restaurant Active Process</h3>
            <h1>
              <span className="yellow">We</span> Every Food <br /> Bean Process
              untile it is saved
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque <br /> bibendum non dui volutpat fringilla
              bibendum. Urna, elit augue urna,
            </p>
            <div className="res-btns">
              <button className="res-1">Read More</button>
              <div className="res-btn-2">
                <IoIosPlayCircle className="res-play" />
                <span>Play Video</span>
              </div>
            </div>
          </div>
        </div>

        <div className="blog">
          <h3>Blog Post</h3>
          <h1>
            <span className="yellow">La</span>test News & Blog
          </h1>
          <div className="blog-card-cont">
            <div className="blog-card">
              <div className="blog-img"></div>
              <div className="blog-text-pad">
                <span>10 February 2022 </span>
                <p>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>

                <div className="blog-card-btn">
                  <span>Learn More</span>
                  <div className="blog-btn-icon">
                    <AiOutlineLike className="blog-icon-wh" />
                    <LuMessageSquareMore className="blog-icon-ye" />
                    <IoShareSocialOutline className="blog-icon-wh" />
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-img-2"></div>
              <div className="blog-text-pad">
                <span>10 February 2022 </span>
                <p>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>

                <div className="blog-card-btn">
                  <span>Learn More</span>
                  <div className="blog-btn-icon">
                    <AiOutlineLike className="blog-icon-wh" />
                    <LuMessageSquareMore className="blog-icon-ye" />
                    <IoShareSocialOutline className="blog-icon-wh" />
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-img-3"></div>
              <div className="blog-text-pad">
                <span>10 February 2022 </span>
                <p>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>

                <div className="blog-card-btn">
                  <span>Learn More</span>
                  <div className="blog-btn-icon">
                    <AiOutlineLike className="blog-icon-wh" />
                    <LuMessageSquareMore className="blog-icon-ye" />
                    <IoShareSocialOutline className="blog-icon-wh" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="support">
            <div className="sup-text">
              <div className="sup-text-inner">
              <h2>
                <span className="yellow">St</span>ill You Need Our Support ?
              </h2>
              <p>
                Don’t wait make a smart & logical quote here. Its pretty easy.
              </p>
              </div>
            
            <div className="sup-field">
              <input type="text" placeholder="Enter your Email" />
              <button>Subscribe Now</button>
            </div>
            </div>

            <div className="sup-line"></div>
          </div>

          <div className="footer-text">
            <div className="f-col-1">
              <h2>About Us.</h2>
              <p>
                orporate clients and leisure travelers has been relying on
                Groundlink for dependab safe, and professional chauffeured car
                service in major cities across World.
              </p>
              <div className="f-ab-card">
                <div className="f-ab-icon">
                  <PiClockClockwiseFill />
                </div>
                <div className="f-ab-text">
                  <h4>Opening Houres</h4>
                  <p>Mon - Sat(8.00 - 6.00)</p>
                  <p>Sunday - Closed</p>
                </div>
              </div>
            </div>

            <div className="f-col-2">
              <h4>Useful Links</h4>
              <ul>
                <li>About</li>
                <li>News</li>
                <li>Partners</li>
                <li>Team</li>
                <li>Menu</li>
                <li>Contacts</li>
              </ul>
            </div>
            <div className="f-col-3">
              <h4>Help?</h4>
              <ul>
                <li>FAQ</li>
                <li>Term & conditions</li>
                <li>Reporting</li>
                <li>Documentation</li>
                <li>Support Policy</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div className="f-col-4">
              <h4>Recent Post</h4>
              <div className="f-card-1">
                <div className="f-card-img"></div>
                <div className="f-card-text">
                  <span>20 Feb 2022</span>
                  <p>Keep Your Business</p>
                </div>
              </div>

              <div className="f-card-1">
                <div className="f-card-img-2"></div>
                <div className="f-card-text">
                  <span>20 Feb 2022</span>
                  <p>Keep Your Business</p>
                </div>
              </div>

              <div className="f-card-1">
                <div className="f-card-img-3"></div>
                <div className="f-card-text">
                  <span>20 Feb 2022</span>
                  <p>Keep Your Business</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="lower-footer">
        <div className="l-f-text">
          Copyright © 2024 by Dawood Siddiqui. All Rights Reserved.
        </div>
        <div className="l-f-icons">
          <FaFacebookSquare className="l-f-wh" />
          <FaTwitterSquare className="l-f-wh" />
          <FaSquareInstagram className="l-f-wh" />
          <FaYoutubeSquare className="l-f-wh" />
          <FaPinterestSquare className="l-f-wh" />
        </div>
      </div>
    </div>
  );
}
