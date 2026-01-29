import Link from "next/link";
import { navLinks, contactInfo } from "../data/data";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">IT Rating</h3>
            <p className="text-gray-300 mb-4">
              Най-добрият начин да откриете и оцените IT събития в България.
              Нашата мисия е да свържем технологичната общност и да споделим
              най-качествените събития.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Бързи връзки</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакти</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: {contactInfo.email}</li>
              <li>Телефон: {contactInfo.phone}</li>
              <li>Адрес: {contactInfo.address}</li>
              <li>Работно време: {contactInfo.workingHours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} IT Rating. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}
