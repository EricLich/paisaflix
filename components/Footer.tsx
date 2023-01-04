"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-auto mb-14">
      <div className="w-[85%] mx-auto flex items-start">
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

        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
