import CardIcon from '../components/CardIcon'
import Image from 'next/image'
import CardListIcon from '../components/CardListIcon'
import IconList from '../components/IconList'

const Services = () => {
  return(
    <main className='container'>
      <section className="w-full min-h-[50vh] flex flex-col justify-center items-center">
        <div className="w-full sm:w-[450px]">
          <h3 className="green_heading">SERVICES</h3>
          <h2 className="heading_2">We are here to help solve your company&apos;s problems</h2>
        </div>
        
      </section>
      <div className="line"></div>
      <section className="section flex justify-center items-center flex-row-reverse flex-wrap gap-10">
        <div className="w-full sm:w-[520px] text-left">
          <h3 className="green_heading">UI DESIGN</h3>
          <h2 className="heading_2">Don&apos;t let your idea get caught by others, design a prototype for your idea</h2>
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

      <section className="section flex flex-wrap items-center justify-center gap-10">
        <div className="w-full sm:w-[500px] text-left">
          <h3 className="green_heading">DEVELOPMENT</h3>
          <h2 className="heading_2">Create solutions to repetitive problems, design applications and access anywhere!</h2>
          <p className="paragraph">Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution.</p>
          <div className="flex flex-col gap-5">
            <CardListIcon img="/icons/smartphone.svg" title="Mobile App Development" />
          <CardListIcon img="/icons/monitor.svg" title="Desktop App Development" />
          <CardListIcon img="/icons/globe.svg" title="Web Development" />
          </div>
          
        </div>

        <Image src="/services/development.svg" width={401} height={430} style={{ maxWidth: '100%', height: 'auto'}}  alt="" />
      </section>

      <section className="section flex justify-center items-center flex-row-reverse flex-wrap gap-10">
        <div className="w-full sm:w-[502px] text-left">
          <h3 className="green_heading">MAINTENANCE</h3>
          <h2 className="heading_2">Think of your server as your own child, taking care of it every day</h2>
          <p className="paragraph">We will back up your servers every day, clean them every week, upgrade them when there is an update.</p>
          <div className="flex flex-wrap flex-col gap-5 h-auto sm:h-[200px]">
            <IconList img="/icons/download.svg" value="Back up every day" />
            <IconList img="/icons/refresh-ccw.svg" value="Cleaning every week" />
            <IconList img="/icons/arrow-up.svg" value="Upgrade" />
            <IconList img="/icons/check-circle.svg" value="Fixing Error" />
          </div>
         
          
        </div>

        <Image src="/services/maintenance.svg" width={559} height={543} style={{ maxWidth: '100%', height: 'auto'}}  alt="" />
      </section>
    </main>
  )
}

export default Services