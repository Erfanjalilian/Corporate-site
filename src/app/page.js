"use client";
import { motion } from "framer-motion";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      {/* سکشن اصلی */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          به شرکت ما خوش آمدید
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl max-w-2xl"
        >
          ما ارائه دهنده بهترین خدمات برای رشد کسب و کار شما هستیم.
        </motion.p>
        <motion.a
          href="#services"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-blue-600 mt-6 px-6 py-3 bg-white font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all"
        >
          مشاهده خدمات
        </motion.a>
      </section>

      {/* سکشن درباره ما */}
      <section id="about" className="py-20 bg-blue-50  text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-3xl font-bold"
          >
            درباره ما
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg"
          >
            شرکت ما با بیش از ۱۰ سال تجربه در ارائه خدمات دیجیتال مارکتینگ، طراحی سایت و توسعه نرم‌افزار فعالیت دارد.
          </motion.p>
        </div>
      </section>

      {/* سکشن خدمات */}
      <section id="services" className="py-20 bg-white text-center px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-3xl font-bold"
          >
            خدمات ما
          </motion.h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {['طراحی وبسایت', 'سئو و دیجیتال مارکتینگ', 'توسعه نرم‌افزار'].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * index, duration: 0.8 }}
                className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold">{service}</h3>
                <p className="mt-2">ارائه بهترین خدمات برای کسب و کار شما</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* سکشن تماس با ما */}
      <section id="contact" className="py-20 bg-blue-50 text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-3xl font-bold"
          >
            تماس با ما
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg"
          >
            برای اطلاعات بیشتر با ما در ارتباط باشید.
          </motion.p>
          <motion.a
  href="mailto:info@company.com"
  initial={{ scale: 0.9 }}
  animate={{ scale: 1 }}
  transition={{ delay: 1, duration: 0.5 }}
  className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
>
  ارسال ایمیل
</motion.a>
        </div>
      </section>
    </div>
  );
}
export default HomePage;