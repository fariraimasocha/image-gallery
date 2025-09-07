"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <nav className="flex items-center justify-between p-6 lg:px-16 max-w-5xl mx-auto">
        <div className="flex gap-3">
          <Image src="/logo/logo.png" alt="line" width={40} height={10} />
          <h1 className="text-xl mt-1.5 font-bold">Saasfast</h1>
        </div>
        <ul className="hidden md:flex">
          <Link href="/">
            <li className="inline-block hover:underline transition duration-200 p-4 text-gray-600 hover:text-gray-900">
              Features
            </li>
          </Link>
          <Link href="/">
            <li className="inline-block hover:underline transition duration-200 p-4 text-gray-600 hover:text-gray-900">
              Pricing
            </li>
          </Link>
        </ul>
        <Button
          asChild
          variant="secondary"
          className="font-bold bg-amber-200 text-gray-900 hidden md:block"
        >
          <Link href="/auth/signin">Login</Link>
        </Button>
        <Button
          onClick={toggleMenu}
          variant="outline"
          className="md:hidden p-2"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-10">
            <ul className="flex flex-col items-center">
              <Link href="/" onClick={closeMenu}>
                <li className="w-full text-center hover:underline transition duration-200 p-4 text-gray-600 hover:text-gray-900 border-b">
                  Features
                </li>
              </Link>
              <Link href="/" onClick={closeMenu}>
                <li className="w-full text-center hover:underline transition duration-200 p-4 text-gray-600 hover:text-gray-900 border-b">
                  Pricing
                </li>
              </Link>
              <Button
                onClick={closeMenu}
                className="font-bold bg-amber-200 text-gray-900 m-4 w-[90%]"
                asChild
              >
                <Link href="/auth/signin">Login</Link>
              </Button>
            </ul>
          </div>
        )}
      </nav>
    </section>
  );
}
