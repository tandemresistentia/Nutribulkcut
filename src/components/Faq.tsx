"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What makes NutriBulkCut different?",
    answer: "NutriBulkCut uses advanced AI to create personalized nutrition plans that adapt to your progress. Unlike traditional apps, we consider your body type, metabolism, fitness goals, and food preferences to create truly customized meal plans that evolve with you."
  },
  {
    question: "How does the AI meal planning work?",
    answer: "Our AI analyzes multiple factors including your current weight, target goals, dietary restrictions, and eating habits. It then creates a balanced meal plan that matches your macro requirements while considering your food preferences. The plan automatically adjusts based on your progress and feedback."
  },
  {
    question: "What features are included in the free plan?",
    answer: "The free Starter plan includes basic meal planning, calorie tracking, simple workout logging, and access to our supportive community. You can track your daily meals, monitor basic nutrients, and get started on your fitness journey without any cost."
  },
  {
    question: "Can I switch between bulking and cutting plans?",
    answer: "Absolutely! You can switch between bulking and cutting phases anytime. The AI will automatically adjust your meal plans and macro ratios to match your new goals while ensuring smooth transitions between phases."
  },
  {
    question: "Are the meal plans suitable for dietary restrictions?",
    answer: "Yes! Our meal plans accommodate various dietary preferences and restrictions including vegetarian, vegan, keto, paleo, gluten-free, and more. You can specify your dietary requirements, and the AI will create appropriate meal plans."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide email support for all users, with priority support for Pro members and 24/7 dedicated support for Elite members. Our community forum is also a great place to get advice and share experiences with other members."
  }
];

const Faq = () => {
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
            Common Questions
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Everything you need to know about NutriBulkCut
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, 3).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`left-${index}`}
                  className="bg-white border border-orange-100 shadow-lg rounded-2xl"
                >
                  <AccordionTrigger className="hover:text-orange-500 text-lg font-semibold px-6 [&[data-state=open]>div]:text-orange-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(3).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`right-${index}`}
                  className="bg-white border border-orange-100 shadow-lg rounded-2xl"
                >
                  <AccordionTrigger className="hover:text-orange-500 text-lg font-semibold px-6 [&[data-state=open]>div]:text-orange-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        {/* Support Call-to-Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 text-gray-600">
            <MessageCircle className="w-5 h-5 text-orange-500" />
            <span>Still have questions? Contact our support team</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;