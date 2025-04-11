"use client"

import { useState } from 'react';
import Link from 'next/link';



const DigitalMarketingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: '',
    budget: '',
    requirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ارسال داده‌های فرم به سرور
    
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* هدر صفحه */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">خدمات تخصصی بازاریابی دیجیتال</h1>
          <p className="text-xl max-w-3xl mx-auto">
            افزایش فروش و برندینگ با استراتژی‌های هوشمند دیجیتال مارکتینگ
          </p>
        </div>
      </header>

      {/* بخش خدمات */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">خدمات ما</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* کارت خدمات ۱ */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
            <div className="text-blue-600 mb-6 flex justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">سئو (SEO)</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>بهینه‌سازی فنی سایت</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>تحلیل کلمات کلیدی</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>تولید محتوای سئو شده</span>
              </li>
            </ul>
          </div>

          {/* کارت خدمات ۲ */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
            <div className="text-purple-600 mb-6 flex justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">تبلیغات اینستاگرام</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>مدیریت حرفه‌ای پیج</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>تبلیغات هدفمند</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>تولید محتوای جذاب</span>
              </li>
            </ul>
          </div>

          {/* کارت خدمات ۳ */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-500">
            <div className="text-red-600 mb-6 flex justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">گوگل ادز (Google Ads)</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>تبلیغات در نتایج جستجو</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>مدیریت حرفه‌ای کمپین</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>تحلیل ROI پیشرفته</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* بخش نمونه کارها */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">پروژه‌های موفق ما</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* نمونه کار ۱ */}
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">+70% ترافیک ارگانیک</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">پروژه سئو فروشگاه لوازم خانگی</h3>
                <p className="text-gray-600 mb-4">افزایش 70 درصدی ترافیک ارگانیک در 3 ماه</p>
                <Link href="/SeoCaseStudy" className="text-blue-600 hover:underline">
                  مطالعه موردی →
                </Link>
              </div>
            </div>

            {/* نمونه کار ۲ */}
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-purple-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3x افزایش فروش</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">کمپین اینستاگرام برند مد</h3>
                <p className="text-gray-600 mb-4">3 برابر شدن فروش در 2 ماه</p>
                <Link href="/InstagramCampaignPage" className="text-blue-600 hover:underline">
                  مطالعه موردی →
                </Link>
              </div>
            </div>

            {/* نمونه کار ۳ */}
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-red-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">50% کاهش CPA</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">بهینه‌سازی گوگل ادز کلینیک زیبایی</h3>
                <p className="text-gray-600 mb-4">کاهش 50% هزینه به ازای هر مشتری</p>
                <Link href="/GoogleAdsOptimizationPage" className="text-blue-600 hover:underline">
                  مطالعه موردی →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/portfolio?category=digital-marketing" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              مشاهده تمام پروژه‌های بازاریابی دیجیتال
            </Link>
          </div>
        </div>
      </section>

      {/* بخش فرم درخواست */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">درخواست مشاوره رایگان</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">شماره تماس</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="businessType" className="block text-gray-700 mb-2">نوع کسب‌وکار</label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="ecommerce">فروشگاه اینترنتی</option>
                    <option value="service">خدماتی</option>
                    <option value="manufacturing">تولیدی</option>
                    <option value="other">سایر</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-gray-700 mb-2">بودجه ماهانه (تومان)</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="1-3">1-3 میلیون</option>
                    <option value="3-5">3-5 میلیون</option>
                    <option value="5-10">5-10 میلیون</option>
                    <option value="10+">بیش از 10 میلیون</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="requirements" className="block text-gray-700 mb-2">نیازهای شما</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="نیازهای بازاریابی، اهداف کسب‌وکار و..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-10 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  دریافت مشاوره رایگان
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* بخش CTA پایانی */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">آماده رشد کسب‌وکار خود هستید؟</h2>
          <p className="text-xl mb-6">همین امروز با متخصصان ما تماس بگیرید</p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            تماس با ما
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;