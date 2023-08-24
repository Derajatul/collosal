import Link from 'next/link'
import Button from './Button'

const Navbar = () => {
  return(
    <nav className="hidden absolute top-0 left-0 right-0 h-[80px] lg:flex justify-between items-center bg-black px-[8%] ">
      <div className="flex items-center justify-center gap-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18.9221 5.77922V3C18.9221 1.89543 18.0266 1 16.9221 1H3C1.89543 1 1 1.89543 1 3V16.9221C1 18.0266 1.89543 18.9221 3 18.9221H6.22727" stroke="white" stroke-width="2"/>
          <rect x="7.07812" y="6.48052" width="15.9221" height="15.9221" rx="1" stroke="white" stroke-width="2"/>
        </svg>
        <h2 className="text-white font-bold text-2xl">Collosal</h2>
      </div>

      <div className="flex items-center justify-center gap-10">
        <Link href="#" className="paragraph">Services</Link>
        <Link href="#" className="paragraph">How We Work</Link>
        <Link href="#" className="paragraph">Projects</Link>
        <Link href="#" className="paragraph">About</Link>
      </div>

      <Button 
        onHref="https://example.com/"
        style="light"
        color="white"
        border="square"
        size="small"
        >Contact
      </Button>
    </nav>
  )
}

export default Navbar