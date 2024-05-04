// components/Sidebar.js

import Link from 'next/link';
import React from 'react';
const Sidebar = () => {
  return (
    <div className="flex sticky top-0 flex-col h-screen w-64 bg-gray-800 text-white">
    
      <div className="flex flex-col flex-grow">
        <Link href="/profile" className="px-4 py-2 hover:bg-gray-700">Profile</Link>
        <Link href="/performance" className="px-4 py-2 hover:bg-gray-700">Performance</Link>
        <Link href="/history" className="px-4 py-2 hover:bg-gray-700">History</Link>
      </div>
    </div>
  );
};

export default Sidebar;
