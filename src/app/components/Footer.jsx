"use client";
import Link from "next/link";
import React from "react";
import image from "../../../public/2.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-white p-6 min-h-[30vh] font-bold">
      <div className="flex items-center justify-between p-3 border-b sm:flex-row flex-col gap-8">
        <div className="w-[150px]">
          <Image
            className="h-full"
            width={150}
            height={300}
            src={image.src}
            srcSet="cc"
            alt="einma"
          />
        </div>
        <ul className="flex items-center sm:gap-8 sm:flex-row flex-col gap-3">
          <a href="/#ile" className="flex items-center gap-1">
            {" "}
            <IoLocation className="text-md" /> Île-de-France
          </a>
          <a href="/#contact" className="flex items-center gap-1 ">
            Contactez-nous
          </a>
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
          <Link href="/Certificat de cession.pdf" passHref>
            Certificat de cession
          </Link>
          <Link href="https://siv.interieur.gouv.fr/map-usg-ui/do/accueil_certificat">
            Certificat de non-gage
          </Link>
          <Link href="/privacy">Politique de confidentialité</Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
