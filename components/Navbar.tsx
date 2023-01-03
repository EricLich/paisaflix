"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [showBg, setShowBg] = useState<boolean>(false);
  const menuItems: Array<{ routeName: string; route: string }> = [
    {
      routeName: "Home",
      route: "/",
    },
    {
      routeName: "Contact Us",
      route: "/contact",
    },
    {
      routeName: "FAQ",
      route: "/faq",
    },
    {
      routeName: "Pricing",
      route: "/pricing",
    },
  ];

  const handleScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
  }, [menuItems]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full mx-auto h-[80px] flex justify-center items-center top-0 z-50 sticky duration-200 ${
        showBg ? "bg-black opacity-90" : "bg-transparent"
      }`}
    >
      <nav className="w-[85%] mx-auto flex justify-between items-center opacity-100">
        <Link href={"/"} className="mr-[75px] text-4xl font-bold text-white">
          Paisaflix
        </Link>
        <ul className="flex items-center gap-12 mr-auto">
          {menuItems.map((menuItem) => (
            <li key={menuItem.routeName}>
              <Link
                href={menuItem.route}
                className={`${pathname !== menuItem.route ? "text-gray-300 font-normal" : "text-white font-bold"}`}
              >
                {menuItem.routeName}
              </Link>
              {pathname === menuItem.route && <div className="w-[40px] h-1 bg-yellow-300 mx-auto mt-1"></div>}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-10">
          <p className="text-white">search icon</p>
          <div className="w-[35px] h-[35px] rounded-full bg-white"></div>
          <h3 className="text-white font-bold">Profile name</h3>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
