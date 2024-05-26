'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'contact',
        path: '/contact',
    },
];
const Nav = () => {
const pathName = usePathname();
  return <header className="flex gap-8">
    {links.map((link, index) => {
        return (
            <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent-DFFAULT border-b-2 border-accent-DFFAULT"} capitalize font-medium hover:text-accent-hover transition-all xl:text-xl`}>
                {link.name}
            </Link>
        )
    })}
  </header>;
};

export default Nav;
