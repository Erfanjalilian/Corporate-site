"use client"

import { motion } from "framer-motion";

const About = () => {
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
          <h2 className="text-4xl font-bold text-gray-900 mt-16">درباره ما</h2>
          <p className="text-lg text-gray-600 mt-4">با ما بیشتر آشنا شوید و دریابید که چگونه می‌توانیم به رشد شما کمک کنیم.</p>
        </motion.div>

        {/* بخش اول: اطلاعات کلی */}
        <br />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-right">ما کی هستیم؟</h3>
            <p className="text-gray-700 leading-relaxed text-right">
              شرکت ما به عنوان یک رهبر در صنعت، به مشتریان خود خدماتی منحصر به فرد و با کیفیت بالا ارائه می‌دهد. 
              با تیمی متخصص و متعهد، ما می‌خواهیم شما را در مسیر موفقیت همراهی کنیم.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-right">چرا انتخاب ما؟</h3>
            <p className="text-gray-700 leading-relaxed text-right">
              ما با توجه به نیازهای خاص هر مشتری، راه‌حل‌هایی سفارشی و متناسب با شرایط خاص ارائه می‌دهیم. 
              این باعث شده است که نام ما به عنوان یک انتخاب مطمئن در صنعت شناخته شود.
            </p>
          </div>
        </motion.div>

        {/* بخش دوم: تاریخچه شرکت */}
        <br />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-semibold text-gray-900 text-center mb-6">تاریخچه ما</h3>
          <p className="text-gray-700 leading-relaxed text-center">
            شرکت ما در سال ۲۰۰۰ تأسیس شد و با گذشت زمان به یکی از پیشروترین شرکت‌های فعال در صنعت خود تبدیل شد. 
            ما از همان ابتدا هدف‌مان ارائه بهترین کیفیت و نوآوری در هر پروژه بوده است.
          </p>
        </motion.div>

        {/* بخش سوم: تیم ما */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">تیم ما</h3>
          <p className="text-lg text-gray-600 mb-12">هر فرد از تیم ما با تخصص و انگیزه بالا در کنار یکدیگر برای رسیدن به بهترین نتیجه کار می‌کند.</p>

          {/* لیست اعضای تیم */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-12"
          >
            <div className="text-center">
              <Image src="https://rcrdc.iums.ac.ir/uploads/203/2023/Jan/23/anvari.jpg" alt="Team Member 1" className="w-40 h-40 mx-auto mb-4 rounded-full" />
              <h4 className="text-xl font-semibold text-gray-800">علی احمدی</h4>
              <p className="text-gray-600">مدیر عامل</p>
            </div>
            <div className="text-center">
              <Image src="https://rcrdc.iums.ac.ir/uploads/203/2023/Jan/23/goodarzi.jpg" alt="Team Member 2" className="w-40 h-40 mx-auto mb-4 rounded-full" />
              <h4 className="text-xl font-semibold text-gray-800">مریم رضا</h4>
              <p className="text-gray-600">مدیر فنی</p>
            </div>
            <div className="text-center">
              <Image src="https://rcrdc.iums.ac.ir/uploads/203/2023/Jan/23/fallahpoor.jpg" alt="Team Member 3" className="w-40 h-40 mx-auto mb-4 rounded-full" />
              <h4 className="text-xl font-semibold text-gray-800">سینا کریمی</h4>
              <p className="text-gray-600">مدیر بازاریابی</p>
            </div>
          </motion.div>
        </motion.div>

        {/* بخش چهارم: تماس با ما */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">تماس با ما</h3>
          <p className="text-lg text-gray-600 mb-4">برای ارتباط با ما، لطفاً از طریق فرم زیر اقدام کنید.</p>
          <Link href="#contact" className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg transition-all">تماس با ما</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
