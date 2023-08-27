import Image from 'next/image'
type IconList ={
  keyValue?: string,
  value: string,
  img: string
}

const IconList = ({keyValue,value,img}: IconList):JSX.Element => {
  return(
    <div className="flex items-center justify-start flex-wrap gap-5">
      <div className="w-[70px] h-[70px] bg-[#FFFFFF0D] flex items-center justify-center">
        <Image src={img} width={30} height={30} alt='' />
      </div>
      <div className="text-left">
        {keyValue && <p className="paragraph m-0">{keyValue}</p>}
        <p className="paragraph !font-bold !text-white m-0">{value}</p>
      </div>
    </div>
  )
}

export default IconList