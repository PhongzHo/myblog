'use client'
import React, { useEffect, useState } from 'react'
import logo from '../../../../public/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Hamburger from 'hamburger-react'


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
            <nav className='bg-black gap-4 p-4'>
                <div className='md:hidden flex justify-between'>
                    <Link href={"/"}>
                        <Image src={logo} width={71} height={35} alt='logo' className='pt-2'/>
                    </Link>
                    {
                        isOpen ? <div></div> : <Hamburger toggled={isOpen} size={20} toggle={setOpen} color='white' />
                    }
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