"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

export default function GoogleAdsCaseStudies() {
  const caseStudies = [
    {
      title: "افزایش نرخ تبدیل با تبلیغات هدفمند",
      description: "بهینه‌سازی کلمات کلیدی و صفحات فرود که نرخ تبدیل را ۴۰٪ افزایش داد.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhpRg2KtJ6BV-ZbApztUlrPQXuQ2ahqNOQKw&s",
    },
    {
      title: "کاهش هزینه هر کلیک (CPC)",
      description: "استراتژی مزایده هوشمندانه که هزینه هر کلیک را ۳۰٪ کاهش داد.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_9L673-NkFCYoG1WWXV9AuUShjQeVa3TM_A&s",
    },
    {
      title: "افزایش بازگشت سرمایه (ROI) تبلیغات",
      description: "بهینه‌سازی متن تبلیغات و مخاطب‌گذاری که ROI را دو برابر کرد.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWxvKaulir6-f-FB4pAw41u7hD2_wZVQjcA&s",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-r from-green-500 to-teal-500 p-8"
    >
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">مطالعات موردی بهینه‌سازی گوگل ادز</h1>
        <p className="text-gray-600 text-lg mb-8">
          در این بخش، نمونه‌های موفق از بهینه‌سازی تبلیغات گوگل ادز برای کلینیک‌های زیبایی را مشاهده می‌کنید.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((caseItem, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-4 rounded-lg shadow-md"
            >
              <Image
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{caseItem.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{caseItem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
