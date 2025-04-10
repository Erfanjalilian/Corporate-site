"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GoogleAdsOptimizationPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 p-8"
    >
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl text-center space-y-6 mt-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          مطالعات موردی: بهینه‌سازی گوگل ادز کلینیک زیبایی
        </h1>
        <p className="text-gray-600 text-lg">
          در این پروژه، تبلیغات گوگل ادز برای کلینیک زیبایی بهینه‌سازی شد تا نرخ کلیک و بازگشت سرمایه افزایش یابد.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">هدف پروژه</h2>
            <p className="text-gray-600">افزایش نرخ تبدیل و جذب مشتریان هدفمند از طریق تبلیغات گوگل ادز.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">استراتژی تبلیغاتی</h2>
            <p className="text-gray-600">تحقیق کلمات کلیدی، بهینه‌سازی صفحات فرود و هدف‌گذاری دقیق کاربران.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">نتایج به‌دست‌آمده</h2>
            <p className="text-gray-600">افزایش ۴۰٪ نرخ کلیک، کاهش هزینه هر کلیک و بهبود ۳۰٪ نرخ تبدیل.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">ابزارهای مورد استفاده</h2>
            <p className="text-gray-600">Google Ads، Google Analytics، A/B Testing، بهینه‌سازی صفحات فرود.</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition"
        >
          <Link href="/GoogleAdsCaseStudies">
          مشاهده جزئیات کمپین
          </Link>
        </motion.button>
      </div>
    </motion.div>
  );
}
