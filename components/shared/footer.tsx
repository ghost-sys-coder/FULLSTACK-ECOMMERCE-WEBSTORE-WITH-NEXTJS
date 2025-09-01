import Link from 'next/link';
import Image from 'next/image';
import { footerLinks, socialLinks } from '@/constants';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports & Activities */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Sports & Activities</h3>
            <ul className="space-y-2">
              {footerLinks.sports.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Support & Services</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company Info</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-400 text-sm mb-4">Get the latest news and updates from Shopora.</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-r-md hover:bg-gray-200 transition-colors duration-200">
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links and Legal */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <Link key={social.href} href={social.href} className="hover:opacity-75 transition-opacity duration-200">
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {footerLinks.legal.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Shopora, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;