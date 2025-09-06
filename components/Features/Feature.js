import Link from "next/link";
import React from "react";
import FeaturesCard from "./featuresCard";
import {
  PartyPopper,
  UserLock,
  CircleDollarSign,
  Newspaper,
  CreditCard,
  Settings,
  MessageSquare,
  Zap,
  UserCog,
} from "lucide-react";

export default function Feature() {
  return (
    <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
          Explore the Features
        </h2>
        <p className="mt-4 text-xs sm:text-sm lg:text-lg text-gray-600">
          And try them on this{" "}
          <span>
            <Link
              href="/"
              className="underline font-medium text-gray-700 hover:text-blue-500"
            >
              fully functional demo!
            </Link>
          </span>
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          <FeaturesCard
            title="Free to host"
            description="Instructions included for Vercel. Free to start, and cost effective to scale."
            icon={<PartyPopper />}
            link="http://payfari.com/"
          />
          <FeaturesCard
            title="User Auth"
            description="Sign up, sign out, forgot password, email verification, and oAuth. Powered by Next Auth."
            icon={<UserLock />}
            link="http://payfari.com/"
          />
          <FeaturesCard
            title="Pricing Page"
            description="Create a beautiful pricing page with multiple plans and features. Powered by Stripe."
            icon={<CircleDollarSign />}
            link="http://payfari.com/"
          />
          <FeaturesCard
            title="Subscriptions"
            description="User friendly subscriptions powered by Stripe Checkout."
            icon={<CreditCard />}
            link="http://payfari.com/"
          />
          <FeaturesCard
            title="Billing Portal"
            description="Self-serve portal for updating card, receipts, upgrades, downgrades and more."
            icon={<Settings />}
            link="http://payfari.com/"
          />
          <FeaturesCard
            title="User Dashboard"
            description="User profile, user settings, update email/password, billing, and more."
            icon={<UserCog />}
            link="http://payfari.com/"
          />
        </div>
      </div>
    </section>
  );
}
