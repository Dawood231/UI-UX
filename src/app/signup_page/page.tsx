import "./signup.css";
import Image from "next/image";
import Link from "next/link";

import { PiClockClockwiseFill } from "react-icons/pi";
import "@/app/globals.css";

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
    <div className="signin-page">
      <Header />

      <SecHeader para="SignIn" title="SignIn"/>

      <div className="signin-sec"></div>
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-gray-100 shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign In</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign In
            </button>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">
                Forgot password?
              </Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              Sign in with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              Sign in with Apple
            </button>
          </div>
        </div>
      </section>

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
