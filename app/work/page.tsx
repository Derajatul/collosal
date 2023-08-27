import Image from 'next/image'

const Work = () => {
  return(
    <main className="container">
      <section className="w-full h-[50vh] flex items-center justify-center text-center">
        <div className="w-full sm:w-[507px]">
          <h3 className="green_heading">HOW WE WORK</h3>
          <h2 className="heading_2">We have a workflow that allows the job to be delivered well</h2>
        </div>
      </section>
      <div className="line"></div>
      <section className="section flex justify-center items-center flex-row-reverse flex-wrap gap-10">
        <div className="w-full sm:w-[502px] text-left">
          <h3 className="green_heading">STEP 01</h3>
          <h2 className="heading_2">Let&apos;s talk about your company&apos;s problems first</h2>
          <p className="paragraph">After submitting the quote form, we will review the data, then we will contact you. You can discuss with our team regarding your problem and find a solution to that problem. In this step, you will discuss what application to build.</p>
        </div>
        <Image src="/howWeWork/discuss.svg" width={411} height={408} style={{ maxWidth: '100%', height: 'auto'}} alt="" />
      </section>

      <section className="section flex justify-center items-center flex-wrap gap-10">
        <div className="w-full sm:w-[502px] text-left">
          <h3 className="green_heading">STEP 02</h3>
          <h2 className="heading_2">Doing planning, design and development until everything is finished</h2>
          <p className="paragraph">When everything is agreed upon, our team will make plans related to the application that will be created. Starting from analysis, design, to development. In this step, the application is 100% complete.</p>
        </div>

        <Image src="/howWeWork/development.svg" width={444} height={377} style={{ maxWidth: '100%', height: 'auto'}} alt="" />
      </section>

      <section className="section flex justify-center items-center flex-row-reverse flex-wrap gap-10">
        <div className="w-full sm:w-[502px] text-left">
          <h3 className="green_heading">STEP 03</h3>
          <h2 className="heading_2">The project is complete and we ship all the project assets, and access to the server</h2>
          <p className="paragraph">We will be responsible for delivering all the project assets to you, don&apos;t worry. These assets include, design files, source code, server access, and so on. In this step, everything is done and the contract ends.</p>
        </div>
        <Image src="/howWeWork/project.svg" width={559} height={401} style={{ maxWidth: '100%', height: 'auto'}} alt="" />
      </section>
    </main>

    
  )
}
export default Work