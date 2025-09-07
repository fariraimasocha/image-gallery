"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

export default function Auth() {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/dashboard" });
    toast.loading("Redirecting to Google...", { id: "googleSignIn" });
  };

  const handleGitHubSignIn = () => {
    signIn("github", { callbackUrl: "/dashboard" });
    toast.loading("Redirecting to GitHub...", { id: "githubSignIn" });
  };
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto w-full">
        <Card className="bg-white/95 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300">
          <CardHeader className="text-center space-y-2 pb-2">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Welcome Back
              <span className="block mt-1">
                <span className="bg-amber-200 px-2 py-1 rounded rotate-1 inline-block">
                  to the future.
                </span>
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
              Continue with your preferred login method
            </p>
          </CardHeader>

          <CardContent className="space-y-4 p-6">
            <Button
              variant="outline"
              className="w-full h-14 flex items-center justify-center gap-3 hover:bg-amber-50 hover:border-amber-200 transition-all duration-300 text-gray-700"
              onClick={handleGoogleSignIn}
            >
              <Image
                src="/auth/google.png"
                alt="Google Logo"
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="text-base font-medium">
                Continue with Google
              </span>
            </Button>

            <Button
              variant="outline"
              className="w-full h-14 mt-2 flex items-center justify-center gap-3 hover:bg-amber-50 hover:border-amber-200 transition-all duration-300 text-gray-700"
              onClick={handleGitHubSignIn}
            >
              <Image
                src="/auth/github.png"
                alt="GitHub Logo"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-base font-medium">
                Continue with GitHub
              </span>
            </Button>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            By continuing, you agree to our{" "}
            <Link
              href="/terms-of-service"
              className="underline hover:text-gray-700 transition-colors"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="underline hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
