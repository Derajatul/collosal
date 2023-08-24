import { ReactNode } from 'react';
import Link from 'next/link'

type ButtonProps = {
  children: ReactNode;
  onHref: string;
  size: 'normal' | 'small' | 'full';
  color: 'primary' | 'white';
  style: 'solid' | 'light' | 'transparent';
  border: 'square' | 'pill';
};

const Button = ({children, onHref, size, color, style, border }: ButtonProps): JSX.Element => {
   let sizeClass = '';
  if(size === 'normal'){
    sizeClass = 'w-[164px] h-[52px]';
  } else if(size === 'small'){
    sizeClass = 'w-[112px] h-[39px]';
  } else if(size === 'full'){
    sizeClass = 'w-full h-[52px]'
  }

  let bgClass = '';
  if(color === 'primary' && style === 'solid'){
    bgClass = 'bg-primary/100 text-white';
  } else if(color === 'primary' && style === 'light'){
    bgClass = 'bg-primary/10 text-white';
  } else if(color === 'primary' && style === 'transparent'){
    bgClass = 'bg-transparent text-primary border border-primary border-solid';
  } else if(color === 'white' && style === 'solid'){
    bgClass = 'bg-white text-dark';
  } else if(color === 'white' && style === 'light'){
    bgClass = 'bg-white/10 text-white'
  } else if(color === 'white' && style === 'transparent'){
    bgClass = 'bg-transparent text-white border border-white border-solid'
  }

  let borderClass = '';
  if(border === 'square'){
    borderClass = 'rounded-sm';
  } else if(border === 'pill'){
    borderClass = 'rounded-full';
  }

  const buttonClass = `${sizeClass} ${bgClass} ${borderClass} inline-block flex items-center justify-center no-underline hover:opacity-75`;
  
  return(
    <>
      <Link href={onHref} className={buttonClass}>{children}</Link> 
    </>
  )
}

export default Button