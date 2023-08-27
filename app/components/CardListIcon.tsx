import Image from 'next/image'

type CardListIcon = {
  img: string,
  title: string
}

const CardListIcon = ({img,title}:CardListIcon):JSX.Element => {
  return(
    <div className="w-full sm:w-[500px] h-[60px] bg-[#FFFFFF0D] border-solid border-[#FFFFFF1A] px-[22px] flex gap-5 items-center">
      <Image src={img} width={30} height={30} alt='' />
      <p className="text-white font-semibold">{title}</p>
    </div>
  )
}

export default CardListIcon