"use client";
// components/Sidebar.js

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  
  console.log(pathname);
  return (
    <div className="flex sticky top-0 flex-col h-screen w-64 bg-gray-200 text-black font-medium text-md">
      <div className="flex flex-col flex-grow gap-2">
        <Link href="/profile" className=" px-4 py-3 hover:bg-[#2f2f2f] hover:text-white ">
          Profile
        </Link>
        <Link href="/performance" className="px-4 py-3 hover:bg-[#2f2f2f] hover:text-white">
          Performance
        </Link>
        <Link href="/history" className="px-4 py-3 hover:bg-[#2f2f2f] hover:text-white">
          History
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
