"use client";

import { motion } from "framer-motion";
import Link from "next/link";


export default function SeoStorePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 p-8"
    >
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl text-center space-y-6 mt-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          پروژه سئو فروشگاه لوازم خانگی
        </h1>
        <p className="text-gray-600 text-lg">
          هدف این پروژه افزایش رتبه فروشگاه لوازم خانگی در گوگل، افزایش ترافیک سایت و جذب مشتریان هدفمند است.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">تحلیل کلمات کلیدی</h2>
            <p className="text-gray-600">ما تحقیق جامعی در مورد کلمات کلیدی مرتبط انجام دادیم تا بیشترین بازدهی را کسب کنیم.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">بهینه‌سازی فنی</h2>
            <p className="text-gray-600">بهینه‌سازی ساختار سایت، افزایش سرعت بارگذاری و بهبود تجربه کاربری.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">تولید محتوای سئو شده</h2>
            <p className="text-gray-600">مقالات و توضیحات محصولات بهینه‌سازی شدند تا به جذب مشتریان کمک کنند.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">لینک‌سازی خارجی</h2>
            <p className="text-gray-600">ایجاد بک‌لینک‌های قوی و معتبر برای افزایش اعتبار دامنه.</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          <Link href="/SeoCaseStudies">
          مشاهده نمونه کارها
          </Link>
        </motion.button>
      </div>
    </motion.div>
  );
}