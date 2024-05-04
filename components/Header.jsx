"use client";
// Header.jsx

import React, { useState } from "react";
import Image from "next/image";
import ksrce from "../public/ksrce.jpg";
import { GiPowerButton } from "react-icons/gi";
import { MdNotificationsActive } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between bg-gray-200 text-white ">
      <Image src={ksrce} className="w-auto h-20  " />
      <div className="flex items-center align-middle justify-center">
        <div className="px-2 text-black block lg:mr-10">
          <button className="md:text-2xl text-xl px-2 md:hover:scale-[1.4]">
            <MdNotificationsActive />
          </button>
          <button className="md:text-2xl text-xl px-2 md:hover:scale-[1.4]">
            <GiPowerButton />
          </button>
        </div>
        <div className="">
          <button
            className="lg:hidden text-black text-2xl mr-4  mb-2"
            onClick={handleMenuToggle}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden h-1/12 absolute inset-x-0 top-0 z-10">
          <div className=" bg-[#1b1b1b] p-4 flex flex-col justify-between">
            {/* Correct usage of Link */}

            <Link
              href="profile"
              className="block text-white mb-2 hover:bg-white hover:text-black p-3 "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Profile
            </Link>
            <Link
              href="performance"
              className="block text-white mb-2 hover:bg-white hover:text-black p-3 "
              onClick={() => setIsMenuOpen(false)}
            >
              Performance
            </Link>
            <Link
              href="history"
              className="block text-white hover:bg-white hover:text-black p-3 "
              onClick={() => setIsMenuOpen(false)}
            >
              History
            </Link>
          </div>
          <div
            className="text-center flex justify-center bg-red-400 p-3 hover:bg-red-500 hover:cursor-pointer text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <IoClose />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

// https://chat.openai.com/c/907d74ec-1c0b-4a0a-9b04-40b3b75c671e
