"use client";

import { motion } from "framer-motion";

export default function InstagramCampaignCaseStudies() {
  const caseStudies = [
    {
      title: "افزایش تعامل کاربران با مسابقه اینستاگرامی",
      description: "اجرای یک کمپین مسابقه‌ای که نرخ تعامل را ۷۵٪ افزایش داد.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqr49xQDgWHr0YAEMmoB-15S-zQafTNuClnQ&s",
    },
    {
      title: "همکاری با اینفلوئنسرهای مد و زیبایی",
      description: "همکاری با ۱۰ اینفلوئنسر مطرح که فروش را ۵۰٪ افزایش داد.",
      image: "https://img.baba-blog.com/2024/05/two-women-posing-for-social-media.jpeg?x-oss-process=style%2Ffull",
    },
    {
      title: "استفاده از تبلیغات هدفمند استوری",
      description: "استفاده از تبلیغات استوری برای جذب ۲۰هزار فالوور جدید.",
      image: "https://www.portal.ir/uploads/posts/6f25aa.jpg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-500 p-8"
    >
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">مطالعات موردی کمپین اینستاگرام</h1>
        <p className="text-gray-600 text-lg mb-8">
          این کمپین‌های موفق اینستاگرامی تأثیر زیادی در رشد برند مدو داشته‌اند.
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
