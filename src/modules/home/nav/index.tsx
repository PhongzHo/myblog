'use client'
import React, { useEffect, useState } from 'react'
import logo from '../../../../public/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Hamburger from 'hamburger-react'
import { motion } from 'framer-motion'


export default function Nav() {
    const links = [
        {
            name: "Home",
            path: "/",
            id: 1
        },
        {
            name: "Portfolio",
            path: "/portfolio",
            id: 2
        },
        {
            name: "Project",
            path: "/project",
            id: 3
        },
        {
            name: "Blog",
            path: "/blog",
            id: 4
        },
    ]
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <nav className='sticky top-0 animate-slide mb-20 backdrop-blur-xl bg-[#2E3840] mx-4 rounded-br-3xl rounded-bl-3xl'>
                {/* Mobile */}
                <div className='flex justify-center md:justify-between p-2'>
                    <Link href={"/"}>
                        <Image src={logo} width={99} alt='logo' className='select-none py-1'/>
                    </Link>
                    <div className='md:hidden'>
                        <Hamburger toggled={isOpen} size={20} toggle={setOpen} color='white' />
                    </div>
                    {/* {
                        isOpen ? <motion.div className='text-red-500'>
                            <button onClick={() => {
                                
                            }}></button>
                        </motion.div> : <Hamburger toggled={isOpen} size={20} toggle={setOpen} color='white' />
                    } */}
                </div>
            </nav>
        </>
    )
}

// {
//                     links.map((link) => (
//                         <Link href={link.path} key={link.id}> {link.name}</Link>
//                     ))
//                 }