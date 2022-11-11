import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/salty-logo.png";

console.log(logo);
function Nav() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-16 items-center">
        <Image
          className="my-4 h-8 w-auto"
          src={logo}
          alt="salty logo"
          priority
        />

        <ul className="flex items-center gap-6 text-[#2E476B] text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/blog/hello-world">Destinations</Link>
          </li>
          <li>
            <Link href="/blog/hello-world">Tours</Link>
          </li>
          <li>
            <Link href="/blog/hello-world">Blog</Link>
          </li>
        </ul>
        </div>
        <button type="button" class="px-6 border border-[#F66F4D] rounded-full my-6 h-10 w-auto text-[#F66F4D] text-sm">
        Book Now
      </button>
    </div>
  );
}

export default Nav;
