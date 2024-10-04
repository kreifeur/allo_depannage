import React from "react";
import image from "../../../public/w-logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white p-6 min-h-[30vh] font-bold">
      <div className="flex items-center justify-between p-3 border-b sm:flex-row flex-col gap-8">
        <div className="w-[150px]">
          <img src={image.src} alt="" srcset="" />
        </div>
        <ul className="flex items-center sm:gap-8 sm:flex-row flex-col gap-3">
          <li>CONTACT US</li>
          <li>LOCATIONS</li>
          <li>INTERNATIONAL</li>
          <li>CONTACT</li>
        </ul>
      </div>

      <div className="flex items-center justify-between p-3 sm:flex-row flex-col gap-8">
        <ul className="flex items-center gap-8 ">
          <li>
            <FaFacebook className="text-2xl" />
          </li>
          <li>
            <AiFillInstagram className="text-2xl" />
          </li>
          <li>
            <FaYoutube className="text-2xl" />
          </li>
        </ul>
        <ul className="flex items-center sm:gap-8 sm:flex-row flex-col gap-3">
          <li>Privacy</li>
          <li>Terms of Service</li>
          <li>Accessibility</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
