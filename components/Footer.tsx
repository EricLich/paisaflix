"use client";
import Link from "next/link";
import React from "react";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const footerTitles: [string, string, string] = ["Product", "Media", "Sitemap"];
  const footerLinks: Array<Array<{ routeName: string; route: string }>> = [
    [
      { routeName: "Movies", route: "/movies" },
      { routeName: "TV Shows", route: "/tv-shows" },
      { routeName: "Videos", route: "/videos" },
    ],
    [
      { routeName: "Nice Studio", route: "/nice-studio" },
      { routeName: "Nice News", route: "/nice-news" },
      { routeName: "Nice TV", route: "/nice-tv" },
    ],
    [
      { routeName: "About", route: "/about" },
      { routeName: "Careers", route: "/careers" },
      { routeName: "Press", route: "/press" },
    ],
  ];

  const contactLinks: Array<{ icon: JSX.Element; data: string }> = [
    {
      icon: <FontAwesomeIcon icon={faLocationDot} />,
      data: "Address",
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      data: "mail@mail.com",
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} />,
      data: "+999999999",
    },
  ];

  return (
    <footer className="w-full mt-auto mb-14">
      <div className="w-[85%] mx-auto flex items-start gap-[20%]">
        <div className="flex flex-col gap-8">
          <h2 className="text-white text-6xl font-semibold">TheFlix</h2>
          <p className="text-white text-base font-semibold">Join the Newsletter</p>
          <form className="h-16 w-[280px] border border-gray-800 flex items-center justify-between rounded-lg gap-2 px-3">
            <input
              type="text"
              placeholder="Insert your name here"
              className="bg-transparent pr-4 text-[#AAAAB6] opacity-60 font-light h-full focus:outline-none"
            />
            <button className="h-12 w-12 bg-yellow-300 rounded-md text-2xl hover:bg-yellow-500 duration-200">→</button>
          </form>
        </div>

        <div className="flex flex-col justify-between items-start flex-1 gap-[100px] pt-8">
          <div className="flex flex-row items-start gap-36">
            {footerTitles.map((title, titleIndex: number) => (
              <div className="flex flex-col gap-6" key={title}>
                <h3 className="text-white font-bold">{title}</h3>
                {footerLinks.map((linksLevel, index: number) => (
                  <Link href={footerLinks[titleIndex][index].route} className="text-[#E6E6E6] font-light" key={index}>
                    {footerLinks[titleIndex][index].routeName}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="flex gap-6">
            {contactLinks.map((contactLink) => (
              <div className="flex items-center text-white gap-2" key={contactLink.data}>
                {contactLink.icon}
                <span className="text-sm">{contactLink.data}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
