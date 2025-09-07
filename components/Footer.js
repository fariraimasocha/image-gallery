import React from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Separator className="mb-8" />
      <footer className="pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 justify-items-start max-w-2xl mx-auto">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Explore
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Sponsor
            </h2>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Linkgenie
            </h1>
            <Link
              href="https://linkgenieone"
              target="_blank"
              rel="noopener noreferrer"
              className="space-y-2"
            >
              <p className="text-gray-600 leading-relaxed hover:underline transition-colors duration-300">
                Transform your LinkedIn presence with posts that capture your
                unique voice. Stand out from the crowd with content that drives
                engagement and grows your network.
              </p>
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
}
