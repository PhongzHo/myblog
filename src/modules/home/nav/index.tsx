import Link from 'next/link'
import React from 'react'

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

    return (
        <>
            <nav className='flex bg-green-300 gap-4 justify-between'>
                {
                    links.map((link) => (
                        <Link href={link.path} key={link.id}> {link.name}</Link>
                    ))
                }
            </nav>
        </>
    )
}
