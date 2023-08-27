import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return(
    <main className='container'>
      <section className="min-h-[50vh] flex justify-between w-full items-center flex-wrap">
        <div className="w-[507px] text-left">
          <h3 className="green_heading">PROJECTS</h3>
          <h2 className="heading_2">We have completed many amazing projects that you will not believe</h2>
        </div>

        <select id="size" className="inputText block">
          <option className="bg-transparent text-black" value="technology">Technology</option>
          <option className="bg-transparent text-black" value="technology">Technology</option>  
        </select>
      </section>
      <div className="line"></div>
      <section className="section mt-[90px] mb-[203px] gap-5 flex flex-wrap justify-center">
        <ProjectCard title="The Mobile App Landing Page" description="A landing page for mobile app" type="mobile" />
        <ProjectCard title="The Mobile App Landing Page" description="A landing page for desktop app" type="desktop" />
        <ProjectCard title="The Mobile App Landing Page" description="A landing page for desktop app" type="desktop" />
        <ProjectCard title="The Mobile App Landing Page" description="A landing page for mobile app" type="mobile" />
      </section>
    </main>
  )
}
export default Projects