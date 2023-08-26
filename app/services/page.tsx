import CardIcon from '../components/CardIcon'
import Image from 'next/image'

const Services = () => {
  return(
    <main className='container'>
      <section className="w-full min-h-[50vh] flex flex-col justify-center items-center mt-20">
        <div className="w-full sm:w-[450px]">
          <h3 className="green_heading">SERVICES</h3>
          <h2 className="heading_2">We are here to help solve your company's problems</h2>
        </div>
        
      </section>
      <div className="line"></div>
      <section className="section flex justify-between items-center flex-row-reverse flex-wrap">
        <div className="w-full sm:w-[520px] text-left">
          <h3 className="green_heading">UI DESIGN</h3>
          <h2 className="heading_2">Don't let your idea get caught by others, design a prototype for your idea</h2>
          <p className="paragraph">Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes.</p>
          <div className="flex gap-5 flex-wrap">
            <CardIcon img="/icons/layout.svg" title="Beautiful Design" description="Create a modern design for your idea." />
            <CardIcon img="/icons/pointer.svg" title="Prototype design" description="Create vivid prototypes for your designs." />
          </div>
          
          
        </div>

        <Image 
          src="/services/ui.svg" 
          width={510} 
          height={400} 
          style={{ maxWidth: '100%', height: 'auto'}} 
          alt='' />
      </section>
    </main>
  )
}

export default Services