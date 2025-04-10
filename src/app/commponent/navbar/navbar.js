"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">شرکت نمونه</h1>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">صفحه اصلی</Link>
          <Link href="/AboutUs" className="text-gray-700 hover:text-blue-600">درباره ما</Link>
          <Link href="/Services" className="text-gray-700 hover:text-blue-600">خدمات</Link>
          <Link href="/ContactUs" className="text-gray-700 hover:text-blue-600">تماس با ما</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md p-4 flex flex-col space-y-4 text-center"
        >
          <Link href="/" className="text-gray-700 hover:text-blue-600">صفحه اصلی</Link>
          <Link href="/AboutUs" className="text-gray-700 hover:text-blue-600">درباره ما</Link>
          <Link href="/Services" className="text-gray-700 hover:text-blue-600">خدمات</Link>
          <Link href="/ContactUs" className="text-gray-700 hover:text-blue-600">تماس با ما</Link>
        </motion.div>
      )}
    </header>
  );
};
export default Header;