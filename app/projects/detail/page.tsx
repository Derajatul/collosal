import ProjectCard from '../../components/ProjectCard'

const Detail = () => {
  return(
    <main className='flex items-center justify-center text-center flex-col'>
      <section className="w-full min-h-[50vh] flex items-center justify-center">
        <div className="w-full sm:w-[501px] ">
          <h3 className="green_heading">PROJECT DETAIL</h3>
          <h2 className="heading_2">The Desktop App Landing Page</h2>
        </div>
      </section>
      <div className="line"></div>
      
      <section className="w-full flex flex-wrap justify-center gap-10 pt-[66.5px] pb-[133.7px]">
        <div className="w-full sm:w-[502px] h-[441px] rounded border border-[#FFFFFF1A] bg-cardDark flex flex-col items-center justify-center border-solid px-20 overflow-hidden">
          <div className="w-[154px] h-[26px] rounded-[100px] bg-[#212136] mt-[53px]"></div>
          <div className="w-[96px] h-[26px] rounded-[100px] bg-[#212136] mt-[14px]"></div>
          <div className="w-[300px] h-[256px] rounded-t-[20px] mt-[65px] bg-[#212136] "></div>
        </div>

        <div className="w-[502px] text-left">
          <p className="paragraph">Something has always existed. According to physics, there can never be true physical nothingness—though there can be times when existence resembles nothing.</p>
     
            <div>
              <h4 className="heading_4 !text-muted m-0">CATEGORY</h4>
              <h4 className="heading_4">Development</h4>
            </div>

            <div>
              <h4 className="heading_4 !text-muted m-0">CLIENT</h4>
              <h4 className="heading_4">Acme, Inc</h4>
            </div>

            <div>
              <h4 className="heading_4 !text-muted m-0">TECHNOLOGY</h4>
              <h4 className="heading_4">Javascript, HTML, CSS</h4>
            </div>

        </div>
      </section>

      <div className="line"></div>

      <section className="section">
        <div className="mt-[120px] mb-[50px]">
          <h3 className="green_heading">Projects</h3>
          <h2 className="heading_2">Other Amazing Projects</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mb-[138px]">
          <ProjectCard title="The Mobile App Landing Page" description="A landing page for mobile app" type="mobile" />
          <ProjectCard title="The Desktop App Landing Page" description="A landing page for desktop app" type="desktop" />
        </div>
        
        
      </section>
    </main>
  )
}

export default Detail