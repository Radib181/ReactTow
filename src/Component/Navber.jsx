import React from 'react';
import logo from '../Phots/logo.png';

function Navber2() {
  return (
    <footer className=" bg-[#2928343D] text-white py-12 mt-20 mb-[190px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-start space-y-4">
          <img src={logo} alt="Logo" className="w-32" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover the power of our secure and rewarding credit cards.
          </p>
        </div>

        {/* Footer Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">Investors</li>
            <li className="hover:text-gray-300 cursor-pointer">Features</li>
            <li className="hover:text-gray-300 cursor-pointer">Book a Demo</li>
            <li className="hover:text-gray-300 cursor-pointer">Security</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Products</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">Credit Cards</li>
            <li className="hover:text-gray-300 cursor-pointer">Gift Cards</li>
            <li className="hover:text-gray-300 cursor-pointer">Savings Accounts</li>
            <li className="hover:text-gray-300 cursor-pointer">NFT</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Free Rewards</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">Documentation</li>
            <li className="hover:text-gray-300 cursor-pointer">Gift Cards</li>
            <li className="hover:text-gray-300 cursor-pointer">Affiliate Program</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Social</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">License</li>
            <li className="hover:text-gray-300 cursor-pointer">Site Maps</li>
            <li className="hover:text-gray-300 cursor-pointer">News</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6">
        <p className="text-gray-500 text-center text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Navber2;
