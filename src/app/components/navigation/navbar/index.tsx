'use client'

import React from "react";
import Link from "next/link";
import Button from "../../shared/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-white border-b-2 border-black">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white text-center items-center">
              <li>
                <Image width={70} height={20} src={"/apedul.png"} alt={""} />
              </li>
              <li className="">
                <Link href="/guess">
                  <p className="text-black font-bold">Guess</p>
                </Link>
              </li>
              <li>
                <p className="text-black text-3xl">|</p>
              </li>
              {/* <li> */}
                <Button text={"Support Us"} style={"rounded-md p-2"} onClick={() => {}}/>
              {/* </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;