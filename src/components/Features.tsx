"use client";

import { motion } from "framer-motion";
import { Dumbbell, Apple, Utensils, Brain } from "lucide-react";

const features = [
  {
    title: "AI-Driven Meal Plans",
    description: "Personalized nutrition plans tailored to your goals",
    details: "Our AI analyzes your body type, preferences, and fitness goals to create the perfect meal plan for you.",
    icon: Brain,
  },
  {
    title: "Smart Progress Tracking",
    description: "Track your fitness journey with precision",
    details: "Monitor your progress with detailed analytics and get real-time adjustments to your plan.",
    icon: Dumbbell,
  },
  {
    title: "Macro Optimization",
    description: "Perfect balance of nutrients",
    details: "Get the exact macro ratios you need whether bulking or cutting, all personalized to your body.",
    icon: Apple,
  },
  {
    title: "Recipe Database",
    description: "Diverse and delicious meal options",
    details: "Access hundreds of recipes that match your meal plan and dietary preferences.",
    icon: Utensils,
  },
];

const Features = () => {
  return (
    <section className="px-8 py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-5xl font-black text-orange-500 md:text-6xl">
            Smart Features
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Transform your nutrition journey with our AI-powered features
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-xl opacity-5 group-hover:opacity-10"></div>
              <div className="relative p-8 transition-all duration-300 bg-white border border-orange-100 shadow-xl rounded-3xl hover:border-orange-200">
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 transition-transform duration-300 transform shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl group-hover:scale-110">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm leading-relaxed text-gray-500">
                  {feature.details}
                </p>

                <div className="mt-6 h-1.5 bg-orange-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;