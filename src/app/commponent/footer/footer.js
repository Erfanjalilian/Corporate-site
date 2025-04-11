import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // آیکون‌های اضافی

import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        {/* نام شرکت */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">شرکت نمونه</h2>
          <p className="text-gray-400 mt-2">ما به عنوان یک شرکت پیشرو در صنعت، خدمات با کیفیت بالا ارائه می‌دهیم.</p>
        </div>

        {/* لینک‌های سریع */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-4">لینک‌های سریع</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-all">درباره ما</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-all">خدمات</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-all">تماس با ما</Link></li>
              <li><Link href="#faq" className="text-gray-400 hover:text-white transition-all">سوالات متداول</Link></li>
            </ul>
          </div>
          
          {/* اطلاعات تماس */}
          <div>
            <h3 className="text-xl font-semibold mb-4">اطلاعات تماس</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">📍 آدرس: تهران، ایران</li>
              <li className="text-gray-400">📞 تلفن: +9821 1234 5678</li>
              <li className="text-gray-400">📧 ایمیل: info@company.com</li>
            </ul>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div>
            <h3 className="text-xl font-semibold mb-4">دنبال کنید ما را</h3>
            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-all">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-all">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-all">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-all">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          {/* ثبت‌نام در خبرنامه */}
          <div>
            <h3 className="text-xl font-semibold mb-4">عضویت در خبرنامه</h3>
            <p className="text-gray-400 mb-4">برای دریافت آخرین اخبار و به‌روزرسانی‌ها، ایمیل خود را وارد کنید:</p>
            <div className="flex justify-center md:justify-start space-x-2">
              <input 
                type="email" 
                className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none" 
                placeholder="ایمیل خود را وارد کنید" 
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
                عضویت
              </button>
            </div>
          </div>
        </div>

        {/* لینک لاگین مدیر */}
        <div className="text-center mt-8">
          <Link 
            href="/admin-login" 
            className="text-gray-400 hover:text-white transition-all text-lg font-semibold"
          >
            ورود به پنل مدیریتی
          </Link>
        </div>

        {/* کپی رایت */}
        <div className="text-center mt-8">
          <p className="text-gray-400"> طراحی شده توسط عرفان جلیلیان © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
