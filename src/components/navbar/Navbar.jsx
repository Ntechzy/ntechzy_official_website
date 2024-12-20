"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const menuItems = [
        { name: "Home", href: "/" },
        {
            name: "Services",
            submenu: [
                { name: "Website development", href: "/book-detail" },
                { name: "App development", href: "/book-detail" },
                { name: "Students assignment support", href: "/book-detail" },
                { name: "Research and report", href: "/book-detail" },
            ],
        },
        { name: "Portfolio", href: "/portfolio" },
        {
            name: "Article",
            submenu: [
                { name: "Single post page", href: "/book-detail" },
                { name: "Multiple post page", href: "/book-detail" },
                { name: "Single detail page", href: "/book-detail" },
            ],
        },
        { name: "About", href: "/me" },
        { name: "Contact", href: "/contact" },
    ];



    return (
        <nav className="w-full flex items-center gap-x-36  md:flex-row z-50 shadow">
            {/* Logo Section */}
            <Link href="/" className="text-2xl text-zinc-200 font-bold mr-16 flex items-center">
                <img
                    src="/logo.png"
                    alt="Laptop with glowing screen"
                    className="h-full w-full object-cover"
                />
            </Link>

            {/* Toggle button */}
            <button
                onClick={handleClick}
                className="flex-1 lg:hidden text-zinc-600 hover:text-indigo-600 ease-in-out duration-300 flex items-center justify-end"
            >
                {open ? <LiaTimesSolid className="text-xl" /> : <FaBars className="text-xl" />}
            </button>

            <div
                className={`${open ? "flex absolute top-14 left-0 w-full h-auto" : "hidden"
                    } flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 p-4 justify-between md:bg-transparent bg-zinc-900 md:shadow-none sm:shadow-md shadow-md rounded-md`}
            >
                <ul className="list-none flex md:items-center sm:items-start items-start gap-x-7 gap-y-2 flex-wrap md:flex-row sm:flex-col flex-col text-base text-zinc-500 font-normal">
                    {menuItems.map((item, index) => (
                        <li key={index} className={`relative group ease-in-out duration-300`}>
                            {item.submenu ? (
                                <>
                                    <h6 className="hover:text-indigo-500 ease-in-out duration-300 flex items-center gap-x-1 cursor-pointer">
                                        {item.name} <IoMdArrowDropdown />
                                    </h6>
                                    <div className="absolute top-6 left-0 group-hover:block hidden rounded-lg md:py-5 py-3 max-w-[400px] w-[300px] min-w-[250px] h-auto ease-in-out duration-300 z-50">
                                        <div className="w-full relative bg-white rounded-lg p-4 shadow-md border border-zinc-700">
                                            <div className="absolute -top-[1.45rem] left-0 text-4xl text-zinc-700 -z-10">
                                                <IoMdArrowDropup />
                                            </div>
                                            <div className="space-y-2">
                                                {item.submenu.map((submenuItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={submenuItem.href}
                                                        onClick={handleClose}
                                                        className="hover:text-indigo-500 ease-in-out duration-300 block"
                                                    >
                                                        {submenuItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    onClick={handleClose}
                                    className={`hover:text-indigo-600 ease-in-out duration-300`}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="flex md:items-center sm:items-start items-start gap-x-5 gap-y-2 flex-wrap md:flex-row sm:flex-col flex-col text-base font-medium text-zinc-800">
                    <Link
                        href="#"
                        className="w-fit px-8 py-2 rounded-lg bg-white hover:bg-secondary flex items-center gap-x-2 justify-center text-primary hover:text-white"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;