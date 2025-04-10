"use client"

import { useState } from 'react';
import Link from 'next/link';

const WebDesignPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    phone: '',
    projectDetails: ''
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
      <header className="bg-white py-16 shadow-sm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-16">خدمات طراحی وبسایت اختصاصی</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            طراحی وبسایت حرفه‌ای با آخرین فناوری‌های روز، مناسب برای کسب‌وکارها، استارتاپ‌ها و سازمان‌ها
          </p>
        </div>
      </header>

      {/* بخش خدمات */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* کارت خدمات ۱ */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 mb-6 flex justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-center mb-4">وبسایت شرکتی</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>طراحی UI/UX مدرن</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>سئو بهینه‌شده</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>پنل مدیریت اختصاصی</span>
              </li>
            </ul>
          </div>

          {/* کارت خدمات ۲ */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 mb-6 flex justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-center mb-4">فروشگاه اینترنتی</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>یکپارچه با درگاه پرداخت</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>سیستم مدیریت محصولات</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>پشتیبانی 24/7</span>
              </li>
            </ul>
          </div>

          {/* کارت خدمات ۳ */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 mb-6 flex justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-center mb-4">وب اپلیکیشن</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>توسعه با React/Next.js</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>API اختصاصی</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>امنیت بالا</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* بخش نمونه کارها */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">نمونه‌کارهای ما</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* نمونه کار ۱ */}
            <div className="group relative overflow-hidden rounded-xl shadow-md">
              <Image 
                src="https://arnikaweb.com/wp-content/uploads/2016/07/gilas_rayaneh_arnikaweb.jpg" 
                alt="نمونه کار طراحی وبسایت شرکتی" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">وبسایت شرکتی آریا</h3>
                  <Link 
                    href="/portfolio/web-project-1" 
                    className="text-blue-300 hover:text-white font-medium"
                  >
                    مشاهده جزئیات →
                  </Link>
                </div>
              </div>
            </div>

            {/* نمونه کار ۲ */}
            <div className="group relative overflow-hidden rounded-xl shadow-md">
              <Image 
                src="https://dl.dastyarwp.com/html-templates/shop/dastyarwp_shop.jpg" 
                alt="نمونه کار فروشگاه اینترنتی" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">فروشگاه اینترنتی مد</h3>
                  <Link 
                    href="/portfolio/web-project-2" 
                    className="text-blue-300 hover:text-white font-medium"
                  >
                    مشاهده جزئیات →
                  </Link>
                </div>
              </div>
            </div>

            {/* نمونه کار ۳ */}
            <div className="group relative overflow-hidden rounded-xl shadow-md">
              <Image 
                src="https://www.karlancer.com/blog/wp-content/uploads/2020/07/taskulu.png" 
                alt="نمونه کار وب اپلیکیشن" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">وب اپلیکیشن مدیریت پروژه</h3>
                  <Link 
                    href="/portfolio/web-project-3" 
                    className="text-blue-300 hover:text-white font-medium"
                  >
                    مشاهده جزئیات →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/portfolio" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              مشاهده تمام نمونه کارها
            </Link>
          </div>
        </div>
      </section>

      {/* بخش فرم درخواست */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">درخواست طراحی وبسایت</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="companyName" className="block text-gray-700 mb-2">نام شرکت/شخص</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
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

              <div className="mb-8">
                <label htmlFor="projectDetails" className="block text-gray-700 mb-2">توضیحات پروژه</label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="نوع وبسایت مورد نیاز، ویژگی‌های خاص، بودجه و..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-10 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  ارسال درخواست
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesignPage;