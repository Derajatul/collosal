import Image from 'next/image'

type CardIcon = {
  title: string,
  description: string,
  img: string
}

const CardIcon = ({title,description,img}: CardIcon):JSX.Element => {
  return(
    <div className="w-[241px] h-[141px] p-[22px] bg-[#FFFFFF0D] border-solid border-[#FFFFFF1A]">
      <div className="flex items-center gap-5 h-[35px]">
        <Image src={img} width={30} height={30} alt="" />
        <p className="text-white font-bold">{title}</p>
      </div>
      <p className="paragraph text-left m-0">{description}</p>
    </div>
  )
}

export default CardIcon