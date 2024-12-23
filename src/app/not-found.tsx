import "./globals.css";

// social icons
import { FaPinterestSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";

import { PiClockClockwiseFill } from "react-icons/pi";
import Header from "@/app/components/Header";
import SecHeader from "@/app/components/SecHeader";

export default function notfound() {
  return (
    <>
      <Header />
      {/* Passing title and para props to SecHeader */}
      <SecHeader 
        title="Page Not Found" 
        para="Oops! Looks like something went wrong" 
      />

      <div className="page-not">
        <h1>404</h1>
        <p>Oops! Looks like something went wrong</p>
        <span>
          Age cannot be found! We'll have it figured out in no time. Meanwhile,
          check out these fresh ideas:
        </span>
        <button className="btn-404">Go Back to Home</button>
      </div>

      <footer>
        <div className="support">
          <div className="sup-text">
            <div className="sup-text-inner">
              <h2>
                <span className="yellow">St</span>ill You Need Our Support?
              </h2>
              <p>
                Don’t wait, make a smart & logical quote here. It’s pretty easy.
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
              Corporate clients and leisure travelers have been relying on
              Groundlink for dependable, safe, and professional chauffeured car
              service in major cities across the world.
            </p>
            <div className="f-ab-card">
              <div className="f-ab-icon">
                <PiClockClockwiseFill />
              </div>
              <div className="f-ab-text">
                <h4>Opening Hours</h4>
                <p>Mon - Sat (8.00 - 6.00)</p>
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
              <li>Terms & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="f-col-4">
            <h4>Recent Posts</h4>
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
    </>
  );
}
