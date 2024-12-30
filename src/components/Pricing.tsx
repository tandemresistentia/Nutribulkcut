"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started",
    features: [
      "Basic meal planning",
      "Calorie tracking",
      "Basic workout logs",
      "Community access"
    ]
  },
  {
    name: "Pro",
    price: "$19.99",
    period: "/month",
    description: "Most popular for fitness enthusiasts",
    popular: true,
    features: [
      "AI-powered meal plans",
      "Advanced progress tracking",
      "Custom macro goals",
      "Recipe database access",
      "Priority support"
    ]
  },
  {
    name: "Elite",
    price: "$29.99",
    period: "/month",
    description: "Complete solution for serious gains",
    features: [
      "Everything in Pro",
      "1-on-1 coaching",
      "Custom workout plans",
      "Nutrition consulting",
      "Premium recipes",
      "24/7 support"
    ]
  }
];

const Pricing = () => {
  return (
    <section className="px-8 py-24 bg-gradient-to-b from-white to-orange-50">
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
            Simple Pricing
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Choose the perfect plan for your fitness journey
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-xl opacity-5 group-hover:opacity-10"></div>
              
              <Card className={`relative overflow-hidden group transition-all duration-300 border-2 hover:border-orange-200 ${
                plan.popular ? 'border-orange-500 shadow-xl' : 'border-orange-100 shadow-lg'
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 px-4 py-1 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-bl-xl">
                    Most Popular
                  </div>
                )}

                <CardHeader className="pt-8 pb-6 text-center">
                  <CardTitle>
                    <h3 className="mb-2 text-2xl font-bold text-gray-800">{plan.name}</h3>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-4xl font-black text-orange-500">{plan.price}</span>
                      {plan.period && (
                        <span className="text-gray-500">{plan.period}</span>
                      )}
                    </div>
                  </CardTitle>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                </CardHeader>

                <CardContent className="pb-8">
                  <div className="mb-8 space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 bg-orange-100 rounded-full">
                          <Check className="w-3 h-3 text-orange-600" />
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
                    className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg'
                        : 'bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;