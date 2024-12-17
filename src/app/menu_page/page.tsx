import "./menu.css";
import logo from "../images/Foodtuck.png";
import Link from "next/link";
import Image from "next/image";

// icons
import { BsMinecartLoaded } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

import { PiClockClockwiseFill } from "react-icons/pi";

// icon-social
import prochef from "../images/feature1.png";
import itemoffood from "../images/feature2.png";
import yeaofexp from "../images/feature3.png";
import hapcus from "../images/feature4.png";

// brand
import brand1 from "../images/brand1.png";
import brand2 from "../images/brand2.png";
import brand3 from "../images/brand3.png";
import brand4 from "../images/brand5.png";
import brand5 from "../images/brand4.png";
import brand6 from "../images/brand6.png";

// social icons
import { FaPinterestSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import Header from "../components/Header";
import SecHeader from "../components/SecHeader";

export default function page() {
  return (
    <div className="menu-page">
    <Header/>

    <SecHeader/>
    

      <div className="menu-sec">
        <div className="starter-menu">
          <div className="startimage"></div>
          <div className="starttext">
            <h2>Starter Menu</h2>
            <div className="star-list">
              <div className="star-bt">
                <h3>Alder Grilled Chinook Salmon</h3> <span>32$</span>
              </div>
              <p>Toasted French bread topped with romano, cheddar</p>
              <span>560 cal</span>
            </div>

            <div className="star-list">
              <div className="star-bt">
                <h3>Berries and creme tart</h3> <span>43$</span>
              </div>
              <p>Gorgonzola, ricotta, mozzarella, taleggio</p>
              <span>700 cal</span>
            </div>

            <div className="star-list">
              <div className="star-bt">
                <h3>Tormentoso Bush Pizza Pintoage</h3> <span>14$</span>
              </div>
              <p>Ground cumin, avocados, peeled and cubed</p>
              <span>1000 cal</span>
            </div>

            <div className="star-list">
              <div className="star-bt">
                <h3>Spicy Vegan Potato Curry</h3> <span>35$</span>
              </div>
              <p>Spreadable cream cheese, crumbled blue cheese</p>
              <span>500 cal</span>
            </div>
          </div>
        </div>

        {/* second main course */}
        <div className="starter-menu">
          <div className="starttext">
            <h2>Main Course</h2>
            <div className="star-list">
              <div className="star-bt">
                <h3>Alder Grilled Chinook Salmon</h3> <span>32$</span>
              </div>
              <p>Toasted French bread topped with romano, cheddar</p>
              <span>560 cal</span>
            </div>

            <div className="star-list">
              <div className="star-bt">
                <h3>Berries and creme tart</h3> <span>43$</span>
              </div>
              <p>Gorgonzola, ricotta, mozzarella, taleggio</p>
              <span>700 cal</span>
            </div>

            <div className="star-list">
              <div className="star-bt">
                <h3>Tormentoso Bush Pizza Pintoage</h3> <span>14$</span>
              </div>
              <p>Ground cumin, avocados, peeled and cubed</p>
              <span>1000 cal</span>
            </div>

            <div className="star-list">
              <div className="star-bt">
                <h3>Spicy Vegan Potato Curry</h3> <span>35$</span>
              </div>
              <p>Spreadable cream cheese, crumbled blue cheese</p>
              <span>500 cal</span>
            </div>
          </div>
          <div className="startimage-1"></div>
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

      <div className="menu-sec">
        <div className="starter-menu">
          <div className="startimage-2"></div>
          <div className="starttext">
            <h2>Dessert</h2>
            <div className="star-list">
              <div className="star-bt">
                <h3>Alder Grilled Chinook Salmon</h3> <span>32$</span>
              </div>
              <p>Toasted French bread topped with romano, cheddar</p>
              <span>560 cal</span>
            </div>

            <div className="star-list">
              <div className="star-bt">
                <h3>Berries and creme tart</h3> <span>43$</span>
              </div>
              <p>Gorgonzola, ricotta, mozzarella, taleggio</p>
              <span>700 cal</span>
            </div>

            <div className="star-list">
              <div className="star-bt">
                <h3>Tormentoso Bush Pizza Pintoage</h3> <span>14$</span>
              </div>
              <p>Ground cumin, avocados, peeled and cubed</p>
              <span>1000 cal</span>
            </div>

            <div className="star-list">
              <div className="star-bt">
                <h3>Spicy Vegan Potato Curry</h3> <span>35$</span>
              </div>
              <p>Spreadable cream cheese, crumbled blue cheese</p>
              <span>500 cal</span>
            </div>
          </div>
        </div>

        {/* Drinks course */}
        <div className="starter-menu">
          <div className="starttext">
            <h2>Drinks</h2>
            <div className="star-list">
              <div className="star-bt">
                <h3>Alder Grilled Chinook Salmon</h3> <span>32$</span>
              </div>
              <p>Toasted French bread topped with romano, cheddar</p>
              <span>560 cal</span>
            </div>

            <div className="star-list">
              <div className="star-bt">
                <h3>Berries and creme tart</h3> <span>43$</span>
              </div>
              <p>Gorgonzola, ricotta, mozzarella, taleggio</p>
              <span>700 cal</span>
            </div>

            <div className="star-list">
              <div className="star-bt">
                <h3>Tormentoso Bush Pizza Pintoage</h3> <span>14$</span>
              </div>
              <p>Ground cumin, avocados, peeled and cubed</p>
              <span>1000 cal</span>
            </div>

            <div className="star-list">
              <div className="star-bt">
                <h3>Spicy Vegan Potato Curry</h3> <span>35$</span>
              </div>
              <p>Spreadable cream cheese, crumbled blue cheese</p>
              <span>500 cal</span>
            </div>
          </div>
          <div className="startimage-3"></div>
        </div>

        <div className="partners">
          <span>Partners & Clients</span>
          <h3>We work with the best pepole</h3>

          <div className="brands-app">
            <Image src={brand1} alt="brand-1" className="brandlogo"></Image>

            <Image src={brand2} alt="brand-1" className="brandlogo"></Image>

            <Image src={brand3} alt="brand-1" className="brandlogo"></Image>

            <Image src={brand4} alt="brand-1" className="brandlogo"></Image>

            <Image src={brand5} alt="brand-1" className="brandlogo"></Image>

            <Image src={brand6} alt="brand-1" className="brandlogo"></Image>
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
                Dont wait make a smart & logical quote here. Its pretty easy.
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