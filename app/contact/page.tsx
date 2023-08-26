import IconList from '../components/IconList'
import Button from '../components/Button'

const Contact = () => {
  return(
    <main className='container'>
      <section className="section flex flex-wrap justify-between items-center gap-5 mt-20">
        <div className="w-full sm:w-[502px] text-left">
          <h3 className="green_heading">CONTACT</h3>
          <h2 className="heading_2">We love receiving messages from you, we are waiting for it.</h2>
          <div className="flex flex-col items-start gap-5">
            <IconList 
              keyValue="Phone" 
              value="+62 1234 8921" 
              img="/icons/phone.svg" 
            />
            <IconList 
              keyValue="Email" 
              value="support@collosal.tld" 
              img="/icons/mail.svg" 
            />
          </div>
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

          <div className="flex flex-col w-full sm:w-[341px]">
            <label htmlFor="subject" className="paragraph text-left">Subject</label>
            <input id="subject" className="inputText !w-full" />
          </div>


          <div className="flex flex-col">
            <label htmlFor="message" className="paragraph text-left">Message</label>
            <textarea id="message" className="w-full sm:w-[341px] h-[130px] rounded border-[#FFFFFF1A] border-solid bg-transparent text-base text-white focus:border-[#FFFFFF1A] focus:border-solid" />
          </div>

          <Button 
            style="solid"
            size="full"
            color="primary"
            onHref="https://example.com/"
            border="square"
            >Send Message
          </Button>
          
          
        </form>
      </section>
    </main>
  )
}
export default Contact