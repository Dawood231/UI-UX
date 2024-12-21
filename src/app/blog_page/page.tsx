import Header from "../components/Header";
import SecHeader from "../components/SecHeader";
import "./blog.css";
import { LuCalendar1 } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";
import { BsPersonCircle } from "react-icons/bs";
import Image from "next/image";
import { VscTwitter } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { ImPinterest } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { PiClockClockwiseFill } from "react-icons/pi";

import quotes from "../images/quotes2.png";
import ellipse from "../images/ellipse.png";


// social icons
import { FaPinterestSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";

export default function page() {
  return (
    <div>
      <Header />
      <SecHeader />

      <div className="blog">
        <div className="blog-left">
          <div className="b-l-img"></div>

          <div className="b-l-text-one">
            <LuCalendar1 /> <span className="b-l-date">Feb 14, 2022 /</span>
            <LuMessagesSquare />
            <span>3 /</span>
            <BsPersonCircle />
            <span>Admin</span>
          </div>

          <h3>10 Reasons To Do A Digital Detox Challenge</h3>

          <p className="b-para-1">
            Netus pretium tellus nulla commodo massa adipiscing in elementum
            magna congue condimentum placerat habitasse potenti ac orci a
            quisque tristique elementum et viverra at condimentum scelerisque eu
            mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque
            aliquet tempus faucibus quam ac aliquet nibh a condimentum
            suspendisse hac integer leo erat aliquam ut himenaeos.
          </p>

          <p className="b-para-2">
            Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis
            varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt
            per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc
            torquent euismod adipiscing adipiscing dui gravida justo.
          </p>

          <div className="b-card">
            <Image src={quotes} alt="quote" className="b-card-img"></Image>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>

          <p className="b-para-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>

          <div className="b-l-3">
            <div className="b-l-text-3">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing
              </p>
            </div>
            <div className="b-l-image-3"></div>
          </div>

          <p className="b-para-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>

          <p className="b-para-5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>

          <div className="b-l-tags">
            <div className="tag-1">
              <span>Tags:</span>
              <p>Restaurant, Dinner, Pizza, Yummy,</p>
            </div>
            <div className="tag-2">
              <span>Share: </span>
              <VscTwitter />
              <FaFacebookF />
              <RiInstagramLine />
              <ImPinterest />
            </div>
          </div>
        </div>

        <div className="blog-right">
          <div className="b-r-search">
            <input
              type="text"
              placeholder="Search Your Keword.."
              className="b-sea-field"
            />
            <div className="b-search">
              <IoSearch />
            </div>
          </div>

          <div className="b-r-profile">
            <Image src={ellipse} alt="profile-icon" className="b-r-pro"></Image>

            <h2>Prince Miyako</h2>
            <span>Blogger/Photographer</span>
            <div className="b-r-star">
              <FaStar className="full-star" />
              <FaStar className="full-star" />
              <FaStar className="full-star" />
              <FaStar className="full-star" />
              <FaStar className="light-star" />
              <span>(1 Review)</span>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis
              distinctio, odio eligendi suscipit reprehenderit atque
            </p>

            <div className="b-r-p-so-icons">
              <VscTwitter />
              <FaFacebookF />
              <RiInstagramLine />
              <ImPinterest />
            </div>
          </div>

          <div className="b-l-post">
            <h2>Recent Post</h2>
            <div className="post-card">
              <div className="postimg"></div>
              <div className="post-text">
                <span>June 22, 2020</span>
                <p>Lorem ipsum dolor sit cing elit, sed do.</p>
              </div>
            </div>

            <div className="post-line"></div>

            <div className="post-card">
              <div className="postimg2"></div>
              <div className="post-text">
                <span>June 22, 2020</span>
                <p>Lorem ipsum dolor sit cing elit, sed do.</p>
              </div>
            </div>

            <div className="post-line"></div>

            <div className="post-card">
              <div className="postimg3"></div>
              <div className="post-text">
                <span>June 22, 2020</span>
                <p>Lorem ipsum dolor sit cing elit, sed do.</p>
              </div>
            </div>

            <div className="post-line"></div>

            <div className="post-card">
              <div className="postimg4"></div>
              <div className="post-text">
                <span>June 22, 2020</span>
                <p>Lorem ipsum dolor sit cing elit, sed do.</p>
              </div>
            </div>
          </div>

          <div className="b-l-filter">
            <h2>Filter By Menu</h2>
            <div className="b-l-fil">
              <div className="fil-image-1"></div>
              <div className="fil-para">Chicken Fry</div>
              <div className="fil-price">26</div>
            </div>

            <div className="b-l-fil">
              <div className="fil-image-2"></div>
              <div className="fil-para">Burger Food</div>
              <div className="fil-price">46</div>
            </div>

            <div className="b-l-fil">
              <div className="fil-image-3"></div>
              <div className="fil-para">Pizza</div>
              <div className="fil-price">16</div>
            </div>

            <div className="b-l-fil">
              <div className="fil-image-4"></div>
              <div className="fil-para">Fresh Fruits</div>
              <div className="fil-price">36</div>
            </div>

            <div className="b-l-fil">
              <div className="fil-image-5"></div>
              <div className="fil-para">Vegetables</div>
              <div className="fil-price">16</div>
            </div>
          </div>
{/* 
          <div className="b-l-populer">
            <h2>Populer Tags</h2>
            <div className="l-p-box1">Sandwich</div>
            <div className="l-p-box1">Tikka</div>
            <div className="l-p-box1">Bbq</div>
            <div className="l-p-box1">Restaurant</div>
            <div className="l-p-box1">Chicken Sharma</div>
            <div className="l-p-box1">Health</div>
            <div className="l-p-box1">Fastfood</div>
            <div className="l-p-box1">Pizza</div>
            <div className="l-p-box1">Burger</div>
            <div className="l-p-box1">Chicken</div>
          </div> */}

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