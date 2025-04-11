

const AdminLogin = () => {

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-4">ورود به پنل مدیریتی</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">نام کاربری</label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                placeholder="نام کاربری خود را وارد کنید"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">رمز عبور</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                placeholder="رمز عبور خود را وارد کنید"
              />
            </div>
            <div className="flex justify-center mt-6">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                ورود
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AdminLogin;
  