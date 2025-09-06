"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Button } from "../ui/button";

export default function FeaturesCard({
  icon,
  title,
  description,
  link,
  buttonText = "Try It",
}) {
  return (
    <Card className="h-full flex flex-col bg-white/95 backdrop-blur-sm border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-amber-100 text-gray-700 hover:bg-amber-200 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      </CardHeader>

      <CardContent className="flex-1 text-center px-6">
        <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="pt-6 pb-6 flex justify-center">
        <Button
          variant="outline"
          className="px-8 py-2 rounded-full border-gray-300 hover:bg-amber-100 hover:border-amber-200 transition-all duration-300 text-sm font-medium"
          onClick={() => window.open(link, "_blank")}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
