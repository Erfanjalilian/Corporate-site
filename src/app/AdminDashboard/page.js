"use client"
import { useState } from 'react';


const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [services, setServices] = useState([
    { id: 1, title: 'طراحی وبسایت', description: 'طراحی حرفه‌ای وبسایت شرکتی', active: true },
    { id: 2, title: 'سئو و بهینه‌سازی', description: 'بهبود رتبه در موتورهای جستجو', active: true },
    { id: 3, title: 'مشاوره دیجیتال مارکتینگ', description: 'برنامه‌ریزی استراتژی‌های بازاریابی', active: false },
  ]);

  const [portfolioItems, setPortfolioItems] = useState([
    { id: 1, title: 'شرکت نمونه ۱', category: 'طراحی وب', image: '/placeholder.jpg' },
    { id: 2, title: 'شرکت نمونه ۲', category: 'سئو', image: '/placeholder.jpg' },
    { id: 3, title: 'شرکت نمونه ۳', category: 'مشاوره', image: '/placeholder.jpg' },
  ]);

  const [companyInfo, setCompanyInfo] = useState({
    name: 'شرکت فناوری اطلاعات نمونه',
    description: 'ما یک شرکت فعال در زمینه طراحی وب و دیجیتال مارکتینگ هستیم که از سال ۱۳۹۰ فعالیت می‌کنیم.',
    expertise: 'طراحی وب، سئو، دیجیتال مارکتینگ',
    address: 'تهران، خیابان نمونه، پلاک ۱۲۳',
    phone: '021-12345678',
    email: 'info@example.com'
  });

  const handleServiceToggle = (id) => {
    setServices(services.map(service => 
      service.id === id ? {...service, active: !service.active} : service
    ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">پنل مدیریت شرکت نمونه</h1>
          <div className="flex items-center space-x-4 space-x-reverse">
            <span className="text-sm">مدیریت محتوا</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 container mx-auto">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-l border-gray-200 p-4 hidden md:block">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('services')}
              className={`w-full text-right p-3 rounded-lg ${activeTab === 'services' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
            >
              مدیریت خدمات
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`w-full text-right p-3 rounded-lg ${activeTab === 'portfolio' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
            >
              مدیریت نمونه کارها
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`w-full text-right p-3 rounded-lg ${activeTab === 'about' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
            >
              اطلاعات شرکت
            </button>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6">
          {/* Services Management */}
          {activeTab === 'services' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">مدیریت خدمات شرکت</h2>
              
              <div className="mb-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  افزودن خدمت جدید
                </button>
              </div>

              <div className="space-y-4">
                {services.map(service => (
                  <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg">{service.title}</h3>
                        <p className="text-gray-600 mt-1">{service.description}</p>
                      </div>
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <span className={`px-3 py-1 rounded-full text-sm ${service.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {service.active ? 'فعال' : 'غیرفعال'}
                        </span>
                        <button 
                          onClick={() => handleServiceToggle(service.id)}
                          className={`px-3 py-1 rounded-lg text-sm ${service.active ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}
                        >
                          {service.active ? 'غیرفعال کردن' : 'فعال کردن'}
                        </button>
                        <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm">
                          ویرایش
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Portfolio Management */}
          {activeTab === 'portfolio' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">مدیریت نمونه کارها</h2>
              
              <div className="mb-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  افزودن نمونه کار جدید
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map(item => (
                  <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">تصویر نمونه کار</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.category}</p>
                      <div className="mt-4 flex space-x-2 space-x-reverse">
                        <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm">
                          ویرایش
                        </button>
                        <button className="bg-red-100 text-red-800 px-3 py-1 rounded-lg text-sm">
                          حذف
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Company Information */}
          {activeTab === 'about' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">اطلاعات شرکت</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-1">نام شرکت</label>
                  <input 
                    type="text" 
                    value={companyInfo.name}
                    onChange={(e) => setCompanyInfo({...companyInfo, name: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">توضیحات درباره شرکت</label>
                  <textarea 
                    value={companyInfo.description}
                    onChange={(e) => setCompanyInfo({...companyInfo, description: e.target.value})}
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">حوزه‌های تخصصی</label>
                  <input 
                    type="text" 
                    value={companyInfo.expertise}
                    onChange={(e) => setCompanyInfo({...companyInfo, expertise: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">آدرس</label>
                    <input 
                      type="text" 
                      value={companyInfo.address}
                      onChange={(e) => setCompanyInfo({...companyInfo, address: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">تلفن</label>
                    <input 
                      type="text" 
                      value={companyInfo.phone}
                      onChange={(e) => setCompanyInfo({...companyInfo, phone: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">ایمیل</label>
                    <input 
                      type="email" 
                      value={companyInfo.email}
                      onChange={(e) => setCompanyInfo({...companyInfo, email: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                    ذخیره تغییرات
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;