import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Star } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { technologies, technologyLinks } from "@/utils/technologies";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
          <span className="block">Launch Your Startup </span>
          <span className="block">
            in days,
            <span className="bg-amber-200 px-2 py-1 rounded rotate-1 inline-block">
              not months.
            </span>
          </span>
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
          We&apos;ve already done the hard part. This template has all the
          essential features you need, from user auth to payments.
        </p>
        <div className="flex justify-center items-center gap-2">
          <Button asChild variant="" className="px-8">
            <Link href="/">
              <Star />
              us on Github
            </Link>
          </Button>
          <Button asChild variant="outline" className="px-8">
            <Link href="/signup">
              Get Started
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="max-w-md mx-auto text-sm text-gray-500 mt-6">
          Built with{" "}
          {technologyLinks.map((tech, index) => (
            <React.Fragment key={tech.name}>
              <Link
                href={tech.href}
                className="underline hover:text-gray-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {tech.name}
              </Link>
              {index < technologyLinks.length - 2
                ? ", "
                : index === technologyLinks.length - 2
                ? ", and "
                : ""}
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
          {technologies.map((tech) => (
            <Image
              key={tech.alt}
              src={tech.src}
              alt={tech.alt}
              width={tech.width}
              height={tech.height}
              className="object-contain hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
