import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <section>
      <nav className="flex items-center justify-between p-6 lg:px-16 max-w-5xl mx-auto">
        <div className="flex gap-3">
          <Image src="/logo/logo.png" alt="line" width={40} height={10} />
          <h1 className="text-xl mt-1.5 font-bold">Saasfast</h1>
        </div>
        <ul>
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
        <Button className="font-bold bg-amber-200 text-gray-900">Login</Button>
      </nav>
    </section>
  );
}
