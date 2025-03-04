"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { cloneElement, ReactElement } from 'react'

const NavLink = ({ navLink }: { navLink: { link: string; label: string; icon: ReactElement  }}) => {
    const pathName = usePathname(); // Hook that needs to be in client side
    const isActive = pathName === navLink.link;
    return (
        <Link href={navLink.link} className={`flex ${isActive ? "text-rose-400" : "text-gray-50"} hover:text-rose-400 my-2 duration-200 gap-2 items-center p-2 hover:bg-gray-300 rounded-md`}>
            {cloneElement(navLink.icon, { className: "w-6 h-6" })}
            {navLink.label}
        </Link>
    )
}

export default NavLink