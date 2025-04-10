'use client';

import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* عنوان صفحه */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mt-16">خدمات ما</h2>
          <p className="text-lg text-gray-600 mt-4">خدماتی که به رشد کسب و کار شما کمک می‌کنیم.</p>
        </motion.div>

        {/* بخش خدمات */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* سرویس اول */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-right">خدمات مشاوره</h3>
            <p className="text-gray-700 mb-6 text-right">
              ما خدمات مشاوره‌ای حرفه‌ای در زمینه استراتژی کسب و کار، بهبود عملکرد و رشد بلندمدت به شما ارائه می‌دهیم.
            </p>
            <a href="/Services/Consulting" className="text-teal-600 hover:text-teal-700">جزئیات بیشتر</a>
          </motion.div>

          {/* سرویس دوم */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-right">طراحی وب‌سایت</h3>
            <p className="text-gray-700 mb-6 text-right">
              تیم ما بهترین وب‌سایت‌های کاربردی و جذاب را بر اساس نیازهای خاص شما طراحی می‌کند.
            </p>
            <a href="/Services/Web-design" className="text-teal-600 hover:text-teal-700">جزئیات بیشتر</a>
          </motion.div>

          {/* سرویس سوم */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-right">بازاریابی دیجیتال</h3>
            <p className="text-gray-700 mb-6 text-right">
              ما شما را در راه‌اندازی کمپین‌های تبلیغاتی آنلاین موفق کمک می‌کنیم تا برند شما دیده شود.
            </p>
            <a href="/Services/DigitalMarketingPage" className="text-teal-600 hover:text-teal-700">جزئیات بیشتر</a>
          </motion.div>
        </motion.div>

        {/* بخش تماس */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">تماس با ما</h3>
          <p className="text-lg text-gray-600 mb-4">اگر به خدمات ما علاقه دارید یا سوالی دارید، خوشحال می‌شویم که با شما در ارتباط باشیم.</p>
          <a href="#contact" className="text-white bg-teal-600 hover:bg-teal-700 py-2 px-6 rounded-lg transition-all">تماس با ما</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
