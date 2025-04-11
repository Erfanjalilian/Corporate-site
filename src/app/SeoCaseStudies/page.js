"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

export default function SeoCaseStudies() {
  const caseStudies = [
    {
      title: "افزایش رتبه فروشگاه X در گوگل",
      description: "بهبود رتبه کلمات کلیدی اصلی و افزایش بازدید ارگانیک.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8yOdK9hEKcuQriP2ye3QsBZxDK6vMexOMQ&s",
    },
    {
      title: "کاهش نرخ پرش و بهینه‌سازی سرعت",
      description: "بهینه‌سازی فنی برای بهبود تجربه کاربری و افزایش ماندگاری کاربران.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIpgVFj2qfy06C09OjLQHykra6oS-kVSZqg&s",
    },
    {
      title: "افزایش فروش از طریق محتوای سئو شده",
      description: "استراتژی تولید محتوا و بهینه‌سازی توضیحات محصول برای جذب مشتریان هدفمند.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4u5Jd5tJJPjd7-HZHFQskYpfQ4xm3ptcJIw&s",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 p-8"
    >
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">نمونه کارهای سئو</h1>
        <p className="text-gray-600 text-lg mb-8">
          در این بخش برخی از نمونه‌کارهای موفق سئو برای فروشگاه‌های اینترنتی را مشاهده می‌کنید.
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
