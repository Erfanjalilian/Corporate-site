// app/services/consulting/page.js



const ConsultingDetails = () => {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 mt-16">خدمات مشاوره تخصصی</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* بخش‌های خدمات */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">مشاوره مالی</h2>
            <ul className="list-disc pr-4 space-y-2">
              <li>تحلیل بازار سرمایه و رمزارزها</li>
              <li>برنامه‌ریزی مالی شخصی و سازمانی</li>
              <li>مدیریت ریسک و بیمه</li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold mb-4">مشاوره حقوقی</h2>
            <ul className="list-disc pr-4 space-y-2">
              <li>تنظیم قراردادهای بین‌المللی</li>
              <li>پیگیری دعاوی قضایی</li>
              <li>مشاوره مالکیت فکری</li>
            </ul>
          </div>
        </div>
  
        {/* فرم درخواست مشاوره */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">درخواست جلسه مشاوره</h2>
          <form>
            <input type="text" placeholder="نام کامل" className="w-full p-2 mb-4 border rounded" />
            <input type="tel" placeholder="شماره تماس" className="w-full p-2 mb-4 border rounded text-right" />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              ارسال درخواست
            </button>
          </form>
        </div>
      </div>
    );
  };
  export default ConsultingDetails;