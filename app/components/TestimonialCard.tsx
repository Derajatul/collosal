import Image from 'next/image'

type TestimonialCard = {
  avatar: string,
  name: string,
  company: string,
  testimonial: string
}

const TestimonialCard = ({avatar,name,company,testimonial}: TestimonialCard): JSX.Element => {
  return(
    <div className="w-full sm:w-[328px] h-auto sm:h-[500px] bg-[#FFFFFF0D] flex items-center flex-col px-[47px] hover:border-primary hover:border-solid ">
      <div className="w-[90px] h-[90px] mt-[61px] relative">
        <Image src={`${avatar}`} width={90} height={90}  alt='' />
        <div className="absolute end-0 -bottom-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" >
          <circle cx="14" cy="14" r="13" transform="matrix(1 0 0 -1 0 28)" fill="#6016FC" stroke="#161629" stroke-width="2"/>
            <path d="M10.9565 13.4842C11.4348 13.5264 11.8261 13.7059 12.1304 14.0226C12.4348 14.3394 12.587 14.7406 12.587 15.2262C12.587 15.7541 12.4239 16.187 12.0978 16.5249C11.7717 16.8416 11.3587 17 10.8587 17C10.2935 17 9.83696 16.7994 9.48913 16.3982C9.16304 15.997 9 15.3741 9 14.5294C9 12.9035 9.55435 11.4992 10.663 10.3167C10.8804 10.1056 11.1304 10 11.413 10C11.6522 10 11.8587 10.0845 12.0326 10.2534C12.2065 10.4012 12.2935 10.5807 12.2935 10.7919C12.2935 11.0241 12.2065 11.2247 12.0326 11.3937C11.4674 11.9638 11.1087 12.6606 10.9565 13.4842ZM16.3696 13.4842C16.8478 13.5264 17.2391 13.7059 17.5435 14.0226C17.8478 14.3394 18 14.7406 18 15.2262C18 15.7541 17.837 16.187 17.5109 16.5249C17.1848 16.8416 16.7717 17 16.2717 17C15.7065 17 15.25 16.7994 14.9022 16.3982C14.5761 15.997 14.413 15.3741 14.413 14.5294C14.413 12.9035 14.9674 11.4992 16.0761 10.3167C16.2935 10.1056 16.5435 10 16.8261 10C17.0652 10 17.2717 10.0845 17.4457 10.2534C17.6196 10.4012 17.7065 10.5807 17.7065 10.7919C17.7065 11.0241 17.6196 11.2247 17.4457 11.3937C16.8804 11.9638 16.5217 12.6606 16.3696 13.4842Z" fill="white"/>
                  </svg>
                </div>      
              </div>
            <h4 className="heading_4 mb-1">{name}</h4>  
            <p className="paragraph m-0">{company}</p>
            <p className="paragraph mt-[32px] hover:!text-white">“{testimonial}”</p> 
          </div>
  )
}

export default TestimonialCard