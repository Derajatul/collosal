"use client"

import Link from 'next/link'
import Button from './Button'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  const pathname = usePathname()
  const navLinks = [
    {
      name: "Services",
      href: "/services"
    },
    {
      name: "How We Work",
      href: "/work"
    },
    {
      name: "Projects",
      href: "/projects"
    },
    {
      name: "About",
      href: "/about"
    }
  ]

  return( 
    <>
    <nav className="h-[80px] fixed top-0  max-w-6xl w-full md:p-0 px-[20px] bg-[#0B0B22] md:hidden">
      <Link href='/' className="flex items-center gap-5 no-underline">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18.9221 5.77922V3C18.9221 1.89543 18.0266 1 16.9221 1H3C1.89543 1 1 1.89543 1 3V16.9221C1 18.0266 1.89543 18.9221 3 18.9221H6.22727" stroke="white" stroke-width="2"/>
          <rect x="7.07812" y="6.48052" width="15.9221" height="15.9221" rx="1" stroke="white" stroke-width="2"/>
        </svg>
        <h2 className="text-white font-bold text-2xl">Collosal</h2>
      </Link>

     <div className={`flex flex-col ${isOpen ? 'block' : 'hidden'}`}>
        <Link href="/services" className="paragraph hover:text-white py-5 bg-[#0B0B22]">Services</Link>
        <Link href="/work" className="paragraph hover:text-white py-5 bg-[#0B0B22]">How We Work</Link>
        <Link href="/projects" className="paragraph hover:text-white py-5 bg-[#0B0B22]">Projects</Link>
        <Link href="/about" className="paragraph hover:text-white py-5 bg-[#0B0B22]">About</Link>
       <div className="bg-[#0B0B22] py-2">
         <Button style="light" color="white" border="square" size="small" onHref="/contact">Contact</Button>
       </div>    
      </div>

      <div onClick={toggleNavbar} className="top-0 right-0 md:p-0 p-[20px] absolute h-[80px] flex items-center">
        <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >
          <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M2 6h20M2 12h20M2 18h20"
          />
        </svg>
      </div>
      

    </nav>

      {/* Desktop  */}
     <nav className="hidden h-[80px] fixed top-0 md:flex justify-between items-center max-w-6xl w-full bg-[#0B0B22]">
      <Link href='/' className="flex items-center justify-center gap-5 no-underline">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18.9221 5.77922V3C18.9221 1.89543 18.0266 1 16.9221 1H3C1.89543 1 1 1.89543 1 3V16.9221C1 18.0266 1.89543 18.9221 3 18.9221H6.22727" stroke="white" stroke-width="2"/>
          <rect x="7.07812" y="6.48052" width="15.9221" height="15.9221" rx="1" stroke="white" stroke-width="2"/>
        </svg>
        <h2 className="text-white font-bold text-2xl">Collosal</h2>
      </Link>

      <div className="flex items-center justify-center gap-10">
        {navLinks.map((link) => {
        const isActive = pathname === link.href
 
        return (
          <Link
            className={isActive ? '!text-white paragraph hover:text-white' : 'paragraph hover:text-white'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}

      </div>

      <Button 
        onHref="/contact"
        style="light"
        color="white"
        border="square"
        size="small"
        >Contact
      </Button>
    </nav>
    </>
  )
}

export default Navbar
