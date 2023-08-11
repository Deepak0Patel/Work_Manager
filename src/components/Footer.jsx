"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-25 bg-purple-600 text-white">
      <div className="flex justify-between p-3">
        <div className="text-center flex  flex-col justify-center-center">
          <h1 className="text-3xl">welcome to work manager</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem consequatur illo velit ea similique.
          </p>
        </div>
        <div className="text-center">
          <h1>Important links</h1>
          <ul>
            <li>
              <Link href="">Facebook</Link>
            </li>
            <li>
              <Link href="">Youtube</Link>
            </li>
            <li>
              <Link href="">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
