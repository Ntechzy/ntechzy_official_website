'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import useScrollPosition from '@/hooks/useScrollPosition';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [selected, setSelected] = useState('Home')
    const scrollPosition = useScrollPosition()

    // Handle body scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);

    const handleSubmenuClick = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },

        { name: "Portfolio", href: "/portfolio" },
        {
            name: "Blogs", href: "/blogs"
        },
        {
            name: "Team", href: "/team"
        }, 
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <nav className={`h-24 px-6 flex items-center justify-between transition-all duration-500 ${scrollPosition > 500 ? "bg-[#292b2d] shadow-lg fixed top-0 left-0 right-0 z-40" : "bg-transparent"}`}>
                {/* Logo */}
                <Link href="/" className="relative z-50">
                    <img
                        src="/logo.png"
                        alt="Company Logo"
                        className="h-12 w-auto"
                    />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(true)}
                    className="lg:hidden relative z-50 p-2 text-white hover:text-blue-500 transition-colors"
                    aria-label="Open menu"
                >
                    <FaBars className="text-2xl" />
                </button>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    <ul className="flex items-center space-x-6">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative group">
                                {item.submenu ? (
                                    <div className="relative">
                                        <button className="flex items-center space-x-1 text-white hover:text-blue-500 transition-colors">
                                            <span>{item.name}</span>
                                            <IoMdArrowDropdown />
                                        </button>
                                        <div className="absolute top-full left-0 hidden group-hover:block pt-2">
                                            <div className="bg-white rounded-lg shadow-lg p-4 min-w-[200px]">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={subItem.href}
                                                        className="block py-2 text-gray-800 hover:text-blue-500 transition-colors"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onClick={() => setSelected(item.name)}
                                        className="text-white hover:text-blue-500 transition-colors"
                                    >
                                        {item.name === selected && <span className='blue-polygon mr-1' />} {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <Link
                    href="#"
                    className="hidden lg:block px-6 py-2 bg-white text-primary rounded-lg hover:bg-secondary hover:text-white transition-colors"
                >
                    Get Started
                </Link>
            </nav>

            {/* Mobile Menu Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 left-0 bottom-0 w-[300px] bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center text-primary justify-between p-6 border-b">
                    <h2 className="text-xl font-semibold">Menu</h2>
                    <button
                        onClick={() => setOpen(false)}
                        className="p-2 hover:text-blue-500 transition-colors"
                        aria-label="Close menu"
                    >
                        <LiaTimesSolid className="text-2xl" />
                    </button>
                </div>
                <div className="overflow-y-auto h-[calc(100%-80px)]">
                    <ul className="p-4 space-y-2">
                        {menuItems.map((item, index) => (
                            <li key={index} className="border-b border-gray-100 last:border-none">
                                {item.submenu ? (
                                    <div>
                                        <button
                                            onClick={() => handleSubmenuClick(index)}
                                            className="flex items-center justify-between w-full py-3 text-gray-800 hover:text-blue-500 transition-colors"
                                            aria-expanded={activeSubmenu === index}
                                            aria-controls={`submenu-${index}`}
                                        >
                                            <span>{item.name}</span>
                                            {activeSubmenu === index ? (
                                                <IoMdArrowDropup className="text-xl" />
                                            ) : (
                                                <IoMdArrowDropdown className="text-xl" />
                                            )}
                                        </button>
                                        <div id={`submenu-${index}`} className={`overflow-hidden transition-all duration-300 ${activeSubmenu === index ? 'max-h-[500px]' : 'max-h-0'
                                            }`}>
                                            <div className="pl-4 pb-3 space-y-2">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={subItem.href}
                                                        onClick={() => setOpen(false)}
                                                        className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="block py-3 text-gray-800 hover:text-blue-500 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="p-4">
                        <Link
                            href="#"
                            onClick={() => setOpen(false)}
                            className="block w-full py-3 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

