"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Share2, Tag, Gift } from "lucide-react";
import { useWaitlist } from "@/api/useWaitlist";

const Hero = () => {
  const { email, setEmail, message, loading, handleJoinWaitlist } = useWaitlist();

  return (
    <div className="min-h-screen bg-orange-50/50">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-8 max-w-[1450px] mx-auto">
        <div className="flex items-center space-x-3">
          <div className="absolute flex items-center justify-center w-12 h-12 bg-orange-500 shadow-lg rounded-2xl">
            <span className="text-2xl font-bold text-white">N</span>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-[1450px] mx-auto px-8 pb-20">
        <div className="flex flex-col items-center gap-28">
          {/* Main Content */}
          <div className="flex flex-col items-center justify-between w-full gap-20 lg:flex-row">
            {/* Left Image */}
            <motion.div
              className="lg:w-[550px] relative group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 transition-opacity bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30"></div>
              <Image
                src="https://imgur.com/V7n79SG.png"
                alt="Healthy Meal Preparation"
                width={450}
                height={550}
                className="relative transition-transform duration-500 transform rounded-3xl group-hover:scale-105"
              />
            </motion.div>

            {/* Center Content */}
            <motion.div
              className="lg:w-[650px] flex flex-col items-center px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-full space-y-6">
                <div className="text-center">
                  <h1 className="font-black tracking-tight text-orange-500 text-7xl md:text-8xl">
                    Nutri
                  </h1>
                  <h1 className="font-black tracking-tight text-orange-500 text-7xl md:text-8xl">
                    Bulk
                  </h1>
                  <h1 className="font-black tracking-tight text-orange-500 text-7xl md:text-8xl">
                    Cut
                  </h1>
                </div>
                <p className="text-xl leading-relaxed text-center text-gray-600">
                  Having trouble staying on track with your fitness and nutrition? Join our waitlist today for a simple solution!
                </p>
                <div className="pt-4 space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 text-lg transition-all border-2 border-orange-200 outline-none rounded-2xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                  />
                  <Button
                    onClick={handleJoinWaitlist}
                    disabled={loading}
                    className="w-full py-6 text-lg text-white transition-transform bg-orange-500 shadow-lg hover:bg-orange-600 hover:scale-105 rounded-2xl"
                  >
                    {loading ? "Submitting..." : "Join the Waitlist"}
                  </Button>
                  {message && (
                    <p className={`text-sm text-center ${message.includes("Thank you") ? "text-green-500" : "text-red-500"}`}>
                      {message}
                    </p>
                  )}
                  {!message && <div className="min-h-[20px]"></div>}
                  <p className="text-sm text-center text-gray-700">
                    We will notify you when we launch. No spam, guaranteed.
                  </p>
                </div>

                {/* Benefits Section */}
                <div className="pt-4">
                  <h3 className="mb-4 text-2xl font-bold text-center text-orange-500">
                    Why Join the Waitlist?
                  </h3>
                  <div className="flex justify-center gap-8">
                    <div className="flex flex-col items-center text-orange-500 transition-all hover:text-orange-600">
                      <Tag className="w-8 h-8" />
                      <p className="text-sm font-medium">Discounts</p>
                      <p className="text-xs text-center text-gray-600">Get 50% off at launch</p>
                    </div>
                    <div className="flex flex-col items-center text-orange-500 transition-all hover:text-orange-600">
                      <Share2 className="w-8 h-8" />
                      <p className="text-sm font-medium">Referral Rewards</p>
                      <p className="text-xs text-center text-gray-600">Invite friends to earn free upgrades</p>
                    </div>
                    <div className="flex flex-col items-center text-orange-500 transition-all hover:text-orange-600">
                      <Gift className="w-8 h-8" />
                      <p className="text-sm font-medium">Early Access</p>
                      <p className="text-xs text-center text-gray-600">Be the first to try it</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="lg:w-[450px] relative group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 transition-opacity bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30"></div>
              <Image
                src="https://imgur.com/z5KXW6W.png"
                alt="Fitness Results"
                width={450}
                height={550}
                className="relative transition-transform duration-500 transform rounded-3xl group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
