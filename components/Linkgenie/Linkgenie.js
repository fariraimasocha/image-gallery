import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Linkgenie() {
  return (
    <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl mb-12">
          See it in Action
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/linkgenie/genie.png"
                alt="Linkgenie Demo"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full h-auto object-contain hover:scale-105 hover:rotate-1 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-left lg:text-left">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                LinkGenie was created by <strong>SaasFast</strong>: a powerful
                starter kit designed to help developers launch SaaS products
                faster with pre-built components, authentication, and
                deployment-ready infrastructure.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our{" "}
                <Link
                  href="https://www.linkgenie.one/"
                  className="text-gray-600 hover:text-gray-800 underline font-medium"
                >
                  live platform
                </Link>{" "}
                is the best example of SaasFast with real functionality and
                polished user experience. See how quickly you can build and
                deploy professional SaaS applications.
              </p>
              <div className="pt-4">
                <Button
                  asChild
                  className="px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200"
                >
                  <Link
                    href="https://www.linkgenie.one/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See it in action
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
