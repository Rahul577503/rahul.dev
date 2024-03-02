import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="text-gray-200">
      <div className="flex justify-center flex-col items-center">
        <p className="text-xs lg:text-sm text-center lg:text-center lg:mb-2 lg:mt-2">
          &copy; {new Date().getFullYear()}-present Rahul Maurya. All Rights Reserved.
        </p>
        <p className="text-sm text-center lg:text-center">
          Developed with ❤️ by{' '}
          <Link href="https://example.com" className="text-blue-500 cursor-pointer hover:text-blue-300">
            Rahul
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
