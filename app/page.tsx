import Button from './components/Button'
import Image from 'next/image'
import FeatureCard from './components/FeatureCard'
import ProjectCard from './components/ProjectCard'
import PricingCard from './components/PricingCard'
import TestimonialCard from './components/TestimonialCard'

export default function Home() {
  return (
    <>
      
      <main className="container">
        
        {/* Hero section */}
        <section className="section flex justify-center items-center flex-col">
          <div className='max-w-[601px]'>
            <h3 className="green_heading">CLIENT-DEVELOPMENT DRIVEN</h3>
            <h1 className="heading_1">We Design, We Develop. We Ship. In The Same Day.</h1>
            <p className="paragraph">We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work.</p>
          </div>
  
          <div className="flex flex-wrap mt-8 gap-5 items-center justify-center mb-20">
            <Button 
              onHref="/quote" 
              color="primary"
              style="solid" 
              size="normal" 
              border="square">
                Send Quote
            </Button>
            
            <Button 
              onHref="/services" 
              color="white" 
              style="light" 
              size="normal" 
              border="square">
                Learn More
            </Button>
          </div>
        </section>
  
        {/* Service section */}
        <section className="section flex justify-center items-center flex-col">
          <div className="sm:flex sm:flex-wrap sm:gap-5 sm:items-center sm:justify-center">
            <FeatureCard icon="/featureCard/figma.svg" title="Design" description="The project interface will be designed first, our favorite tool is Figma." />
            <FeatureCard icon="/featureCard/code.svg" title="Develop" description="Transform design and write business logic here. Choose the technology you want." />
            <FeatureCard icon="/featureCard/box.svg" title="Ship" description="After the work is complete, we will send the project and all its assets to you." />
          </div>
          
          <div className="line mt-[60px] mb-8"></div>
          <div className="flex gap-10 justify-center items-center flex-wrap">
            <Image src='/company/github.svg' width={119} height={33} alt='' />
            <Image src='/company/forbes.svg'  width={119} height={32} alt=''/>
            <Image src='/company/google.svg'  width={119} height={39} alt=''/>
            <Image src='/company/microsoft.svg'  width={119} height={25} alt=''/>
            <Image src='/company/facebook.svg'  width={119} height={23} alt=''/>
          </div>
          <div className="line mb-[60px] mt-8"></div>
          
        </section>

        {/* How we work section */}
        <section className="section flex flex-wrap items-center justify-center flex-row-reverse">
          <div className="w-[502px] text-left">
            <h3 className="green_heading">HOW WE WORK?</h3>
            <h2 className="heading_2">Everything is well planned, well designed and developed wholeheartedly</h2>
            <p className="paragraph">Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped.</p>
          </div>
          <Image 
            src="/howWeWork/illustration.svg" 
            width={550} 
            height={500} 
            style={{ maxWidth: '100%', height: 'auto'}} 
            alt=''
          />
        </section>

        {/*Team section  */}
        <section className="section flex items-center justify-center flex-wrap gap-5">
          <div className="text-left w-[415px]">
            <h3 className="green_heading">OUR TEAM</h3>
            <h2 className="heading_2">We&apos;re a team of designers, engineers and analysts</h2>
            <p className="paragraph">Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results.</p>
            <Button 
              onHref="https://example.com" 
              color="white" 
              style="light" 
              size="normal" 
              border="square"> 
                See Our Teams
            </Button>
          </div>
          <Image 
            src="/team/illustration.svg" 
            width={605} 
            height={549} 
            style={{ maxWidth: "100%", height: "auto" }}
            alt="" 
          />
        </section>

        {/* Projects section */}
        <section className="section flex items-center justify-center flex-col">
          <div className="line mb-[118px]"></div>
          <div className="w-full sm:w-[500px]">
            <h3 className="green_heading">PROJECTS</h3>
            <h2 className="heading_2">We have completed many amazing projects that you will not believe</h2>
          </div>
          <div className="w-full sm:flex sm:flex-wrap sm:gap-5 sm:items-center sm:justify-center mt-[65px] mb-[110px]">
            <ProjectCard 
            title="The Mobile App Landing Page" 
            description="A landing page for mobile app" 
            type="mobile" />
            <ProjectCard 
            title="The Desktop App Landing Page"  
            description="A landing page for desktop app" 
            type="desktop" />
          </div>
        </section>

        {/* Pricing section */}
        <section className="section ">
          <div className="w-full flex justify-center items-center bg-highlight px-5 sm:px-[20px] pt-[87px] pb-[145px]  rounded-[30px] flex-col">
            <div className = "w-full sm:w-[507px]">
              <h3 className="green_heading">GET STARTED</h3>     
              <h2 className="heading_2 ">What do you need? Choose a service that can help you</h2>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-5 ">
              <PricingCard 
                name="UI Design" 
                price="1200$" 
                features={["10 design pages","Well-documented","4 revision","100$/additional page"]} 
                background="bg-[#3f2379]" />
              <PricingCard 
                name="Development" 
                price="5000$" 
                features={["Web & Mobile","Well-documented","8 revision","1000$/additional page"]} 
                background="bg-[#233679]" />
              <PricingCard 
                name="Maintenance" 
                price="3000$" 
                features={["Daily backup","3 hours of maintenance","Including fixing","100$/additional page"]}
                background="bg-[#792366]" />
            </div>
          </div>
        </section>

        {/* Testimonial section */}
        <section className="section flex justify-center items-center flex-col">
          <div className="w-full sm:w-[507px] mt-[122px]">
            <h3 className="green_heading">TESTIMONIAL</h3>
            <h2 className="heading_2">What do our clients say that we never let down?</h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-5 pb-[189px] pt-[100px]">
            <TestimonialCard avatar='/avatar/1.svg' name="Courtney Henry" company="Biffco Enterprises Ltd." testimonial="Very easy to use. I made back the purchase price in just 48 hours! It&apos;s great. It&apos;s is both attractive and highly adaptable." />
            <TestimonialCard avatar='/avatar/2.svg' name="Esther Howard" company="Abstergo Ltd." testimonial="Your company is truly upstanding and is behind its product 100%. It&apos;s the perfect solution for our business. It has really helped our business." />
            <TestimonialCard avatar='/avatar/3.svg' name="Ronald Richards" company="Barone LLC." testimonial="I am really satisfied with it. I&apos;m good to go. It really saves me time and effort. It&apos;s is exactly what our business has been lacking." />
          </div>
        </section>

      </main>
    </>
  )
}