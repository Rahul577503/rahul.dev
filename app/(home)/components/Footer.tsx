import React from 'react';
import Link from 'next/link';
const Footer=() => {
  return (
    <div className="text-gray-200 mt-20 ">
      <div className="mx-auto flex justify-center flex-col items-center ">
        <p className="text-sm">&copy; {new Date().getFullYear()}-present Rahul Maurya. All Rights Reserved.</p>
        <p className="text-sm">Developed with ❤️ by <Link href="https://example.com" className="text-blue-500 cursor-pointer hover:text-blue-300">Rahul</Link></p>
      </div>
    </div>
  );
};

export default Footer;
