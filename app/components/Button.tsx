import { ReactNode } from 'react';
import Link from 'next/link'

type ButtonProps = {
  children: ReactNode;
  onHref: string;
  size: 'normal' | 'small';
  colorBg: 'primary' | 'white';
  styleBg: 'solid' | 'light' | 'transparent';
  borderButton: 'square' | 'pill';
};

const Button = ({children, onHref, size, colorBg, styleBg, borderButton}: ButtonProps) => {
   let sizeClass = '';
  if(size === 'normal'){
    sizeClass = 'w-[164px] h-[52px]';
  } else if(size === 'small'){
    sizeClass = 'w-[112px] h-[39px]';
  }

  let bgClass = '';
  if(colorBg === 'primary' && styleBg === 'solid'){
    bgClass = 'bg-primary/100 text-white';
  } else if(colorBg === 'primary' && styleBg === 'light'){
    bgClass = 'bg-primary/10 text-white';
  } else if(colorBg === 'primary' && styleBg === 'transparent'){
    bgClass = 'bg-transparent text-primary border border-primary';
  } else if(colorBg === 'white' && styleBg === 'solid'){
    bgClass = 'bg-white text-dark';
  } else if(colorBg === 'white' && styleBg === 'light'){
    bgClass = 'bg-white/10 text-white'
  } else if(colorBg === 'white' && styleBg === 'transparent'){
    bgClass = 'bg-transparent text-white border border-white'
  }

  let borderClass = '';
  if(borderButton === 'square'){
    borderClass = 'rounded-sm';
  } else if(borderButton === 'pill'){
    borderClass = 'rounded-full';
  }

  const buttonClass = `${sizeClass} ${bgClass} ${borderClass} inline-block flex items-center justify-center no-underline`;
  
  return(
    <>
      <Link href={onHref} className={buttonClass}>{children}</Link> 
    </>
  )
}

export default Button