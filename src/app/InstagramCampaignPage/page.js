"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function InstagramCampaignPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 p-8"
    >
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl text-center space-y-6 mt-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          مطالعات موردی: کمپین اینستاگرام برند مدو
        </h1>
        <p className="text-gray-600 text-lg">
          این کمپین اینستاگرامی با هدف افزایش آگاهی از برند، تعامل با کاربران و افزایش فروش اجرا شد.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">هدف کمپین</h2>
            <p className="text-gray-600">افزایش آگاهی از برند و جذب دنبال‌کنندگان جدید از طریق محتوای تعاملی.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">استراتژی محتوا</h2>
            <p className="text-gray-600">استفاده از محتوای ویدئویی، استوری‌های جذاب و همکاری با اینفلوئنسرها.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">نتایج به‌دست‌آمده</h2>
            <p className="text-gray-600">افزایش ۵۰٪ تعامل کاربران، جذب ۲۰هزار دنبال‌کننده جدید و افزایش نرخ تبدیل.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">ابزارهای مورد استفاده</h2>
            <p className="text-gray-600">اینستاگرام آنالیتیکس، تبلیغات هدفمند و هشتگ‌های برندینگ.</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 bg-pink-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-pink-700 transition"
        >
          <Link href="/InstagramCampaignCaseStudies">
          مشاهده تصاویر کمپین
          </Link>
        </motion.button>
      </div>
    </motion.div>
  );
}
