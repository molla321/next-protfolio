import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src="/logo-white-removebg-preview (1).png"
        width={78}
        height={78}
        priority
        alt=""
      />
    </Link>
  );
};

export default Logo;
