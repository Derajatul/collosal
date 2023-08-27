import Image from 'next/image'

const About = () => {
  return(
    <main className="container">
      <section className="section flex items-center justify-center flex-row-reverse gap-10 flex-wrap">
        <div className="text-left w-full sm:w-[544px]">
          <h3 className="green_heading">ABOUT</h3>
          <h2 className="heading_2">We are creative, smart and hardworking people</h2>
          <p className="paragraph">Several creative people gather in the same place - that&apos;s Collosal. We collaborate to produce the best results, loved by clients and comfortable for users. Here we maintain togetherness even though with different backgrounds, all the people here are already experts in their respective fields.</p>
        </div>

        <Image src='/about/header.svg' width={362} height={479} style={{ maxWidth: '100%', height: 'auto'}} alt="" />
        
      </section>

      <div className="line"></div>
    </main>
    
  )
}
export default About