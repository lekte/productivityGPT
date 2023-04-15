import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        {/* <Image
          alt="header text"
          src="/logo.svg"
          className="sm:w-12 sm:h-12 w-8 h-8"
          width={32}
          height={32}
        /> */}
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          ProductiveAI
        </h1>
      </Link>
    </header>
  );
};

export default Header;
