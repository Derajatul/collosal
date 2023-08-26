import Button from '../components/Button'

const Quote = () => {
  return (
    <main className='container'>
      <section className="section flex flex-wrap items-center justify-between w-full gap-10 mt-20">
        <div className="w-[504px] text-left">
          <h3 className="green_heading">SEND QUOTE</h3>
          <h2 className="heading_2">Tell us about your problem and how we can help</h2>
          <p className="paragraph">We are happy to help you, tell us what is the problem with your company, and we are ready to answer these problems. It usually takes a few minutes for us to respond.</p>
          <Button
            onHref="https://example.com/"
            style="light"
            color="white"
            border="square"
            size="normal"
            >Ask Us
          </Button>
        </div>

        <form className="w-full sm:w-[425px] h-auto bg-[#FFFFFF0d] flex flex-wrap p-[35px] gap-5">
          <div className="flex flex-col">
            <label htmlFor="name" className="paragraph text-left">Name</label>
            <input id="name" className="inputText" />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="email" className="paragraph text-left">Email</label>
            <input id="email" className="inputText" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="company" className="paragraph text-left">Company</label>
            <input id="company" className="inputText" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="size" className="paragraph text-left">Company Size</label>
            <select id="size" className="inputText">
              <option className="bg-transparent text-black" value="-">-</option>
              <option className="bg-transparent text-black" value="big">Big</option>
              <option className="bg-transparent text-black" value="medium">Medium</option>
              <option className="!bg-transparent !text-black" value="small">Small</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="problem" className="paragraph text-left">Tell Us Your Problem</label>
            <textarea id="problem" className="w-full sm:w-[341px] h-[130px] rounded border-[#FFFFFF1A] border-solid bg-transparent text-base text-white focus:border-[#FFFFFF1A] focus:border-solid" />
          </div>

          <Button 
            style="solid"
            size="full"
            color="primary"
            onHref="https://example.com/"
            border="square"
            >Send Quote
          </Button>
          
          
        </form>
      </section>
    </main>
  )
}
export default Quote