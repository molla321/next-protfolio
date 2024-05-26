"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Logo />

        {/* <Link href="/">
          <h1 className="text-4xl font-semibold">
            Rabbi<span className="text-accent-DFFAULT">.</span>
          </h1>
        </Link> */}

        {/* destop nav */}

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hear me</Button>
          </Link>
        </div>


        {/* mobile nav */}

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
