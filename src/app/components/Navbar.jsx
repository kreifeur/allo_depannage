"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import image from "../../../public/v-logo.png";
import { IoLocation } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const handleCall = () => {
    window.location.href = "tel:+213556347931"; // Replace with your desired number
  };
  const [menu, setMenu] = useState("hidden");
  return (
    <div className="uppercase tracking-wider sticky top-0 z-[100] font-bold">
      <div className="h-[7vh] bg-gray-100 sm:px-[4vh] px-2 flex items-center justify-between font-bold">
        <a href="/#ile" className="flex items-center gap-1">
          {" "}
          <IoLocation className="text-md" /> Île-de-France
        </a>
        <a href="/#contact" className="flex items-center gap-1 ">
          Contact us <FaArrowRightLong className="text-md text-[#03a776]" />
        </a>
      </div>

      <div className="h-[14vh] flex items-center   border-b justify-between bg-white">
        <Link href="/" className="h-[10vh]  sm:px-[4vh] px-2 z-[3]">
          <Image className="h-full" width={150} height={300} src={image.src} srcSet="cc"
              alt="einma"/>
        </Link>
        <ul className="flex gap-7 items-center h-full">
          <div className="sm:flex hidden gap-7 items-center h-full ">
            {/* <li>Locations</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>about</li> */}
            <Link href="/Certificat de cession.pdf" passHref>
              Certificat de cession
            </Link>
            <Link href="/privacy">Politique de confidentialité</Link>
            <Link href="https://siv.interieur.gouv.fr/map-usg-ui/do/accueil_certificat">
              Certificat de non-gage
            </Link>
          </div>
          <div className="flex h-full">
            <li onClick={handleCall} className="sm:px-6 px-4 bg-[#03a776] h-full flex items-center font-bold text-white gap-2">
              <FaPhone className="sm:text-xl text-2xl" />{" "}
              <div  className="sm:flex hidden">
                Call now{" "}
              </div>
            </li>
            <li className="sm:px-10 px-4 bg-black h-full flex items-center font-bold text-white sm:hidden  z-[3]">
              {menu == "hidden" ? (
                <FiMenu onClick={() => setMenu("fixed")} className="text-3xl" />
              ) : (
                <MdClose
                  onClick={() => setMenu("hidden")}
                  className="text-3xl"
                />
              )}
            </li>
          </div>
        </ul>
      </div>

      <ul
        className={`${menu} h-[100vh] w-full bg-black flex flex-col items-center justify-center text-white gap-5 inset-0 z-[2] sm:hidden`}
      >
        <Link href="/Certificat de cession.pdf" passHref>
          Certificat de cession
        </Link>
        <Link href="/privacy">Politique de confidentialité</Link>
        <Link href="https://siv.interieur.gouv.fr/map-usg-ui/do/accueil_certificat">
          Certificat de non-gage
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
