import Button from './components/Button'
import Image from 'next/image'
import FeatureCard from './components/FeatureCard'
import Eclipse from './components/Eclipse'

export default function Home() {
  return (
    <>
      <main className='flex items-center justify-center text-center flex-col'>
        {/* Hero section */}
        <section className="min-h-screen flex justify-center items-center flex-col my-10 sm:my-0">
          <div className='max-w-[601px]'>
            <h3 className="text-green text-base">CLIENT-DEVELOPMENT DRIVEN</h3>
            <h1 className="text-white text-4xl font-bold leading-[54px]">We Design, We Develop. We Ship. In The Same Day.</h1>
            <p className="text-muted font-medium leading-8">We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work.</p>
          </div>
  
          <div className="mt-5 sm:flex sm:gap-5">
            <Button onHref="https://example.com" colorBg="primary" styleBg="solid" size="normal" borderButton="square">Send Quote</Button>
            <Button onHref="https://example.com" colorBg="white" styleBg="light" size="normal" borderButton="square">Learn More</Button>
          </div>
        </section>
  
        {/* Service section */}
        {/* <section className="min-h-screen w-full flex justify-center items-center flex-col">
          <div>
            <FeatureCard icon="/featureCard/figma.svg" title="Design" description="The project interface will be designed first, our favorite tool is Figma." />
            <FeatureCard icon="/featureCard/code.svg" title="Develop" description="Transform design and write business logic here. Choose the technology you want." />
            <FeatureCard icon="/featureCard/box.svg" title="Ship" description="After the work is complete, we will send the project and all its assets to you." />
          </div>
          <div className="w-full h-px bg-[#FFFFFF1A] mt-14 mb-5"></div>
          <div className="flex gap-10 justify-center items-center flex-wrap">
            <Image src='/company/github.svg' width={119} height={33} alt='' />
            <Image src='/company/forbes.svg'  width={119} height={32} alt=''/>
            <Image src='/company/google.svg'  width={119} height={39} alt=''/>
            <Image src='/company/microsoft.svg'  width={119} height={25} alt=''/>
            <Image src='/company/facebook.svg'  width={119} height={23} alt=''/>
          </div>
          <div className="w-full h-px bg-[#FFFFFF1A] mt-5"></div>
          
        </section> */}
      </main>
    </>
  )
}