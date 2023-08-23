import Image from 'next/image'

type FeatureCard = {
  icon: string,
  title: string,
  description: string
}

const FeatureCard = ({icon, title, description}: FeatureCard) => {
  return(
    <div className="w-full my-5 sm:w-[328px] h-[276px] bg-[#FFFFFF0D] p-10 text-left rounded">
      <div className="h-[50px] w-[50px] bg-[#FFFFFF08] flex justify-center items-center">
        <Image width={24} height={24} src={icon} alt='' />
      </div>
      <h4 className="text-white">{title}</h4>
      <p className="text-muted">{description}</p>
    </div>
  )
}

export default FeatureCard