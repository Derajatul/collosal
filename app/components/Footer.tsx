import Button from './Button'

const Footer = () => {
  return(
    <footer>
      <div className="line mb-[46px]"></div>
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="heading_2 sm:w-[589px] w-full">We've prepared everything, it's time for you to tell the problem</h2>
        <div className="flex gap-5 flex-wrap items-center justify-center">
          <Button
            onHref="/quote"
            style="solid"
            color="primary"
            border="square"
            size="normal"
            >Send Quote
          </Button>
          <Button 
            onHref="https://example.com/"
            style="light"
            color="white"
            border="square"
            size="normal"
            >Ask Us
          </Button>
        </div>
      </div>
      
      <div className="line mt-[46px] mb-[104px]"></div>

      <div className="w-full mb-[67px] flex justify-between flex-wrap">
        <div>
          <div className="flex items-center gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M23.75 13.75H6.25M23.75 13.75C24.413 13.75 25.0489 14.0134 25.5178 14.4822C25.9866 14.9511 26.25 15.587 26.25 16.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V16.25C3.75 15.587 4.01339 14.9511 4.48223 14.4822C4.95107 14.0134 5.58696 13.75 6.25 13.75M23.75 13.75V11.25C23.75 10.587 23.4866 9.95107 23.0178 9.48223C22.5489 9.01339 21.913 8.75 21.25 8.75M23.75 13.75L21.25 8.75M6.25 13.75V11.25C6.25 10.587 6.51339 9.95107 6.98223 9.48223C7.45107 9.01339 8.08696 8.75 8.75 8.75M6.25 13.75L8.75 8.75M21.25 8.75V6.25C21.25 5.58696 20.9866 4.95107 20.5178 4.48223C20.0489 4.01339 19.413 3.75 18.75 3.75H11.25C10.587 3.75 9.95107 4.01339 9.48223 4.48223C9.01339 4.95107 8.75 5.58696 8.75 6.25V8.75M21.25 8.75H8.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          <h3 className="text-white text-2xl font-bold">Collosal.</h3>
        </div>
        
        <p className="paragraph">Copyright © 2021 </p>
        <p className="paragraph">Design By Collosal LLC</p>
        </div>

        <div>
          <h5 className="paragraph !text-white">SERVICES</h5>
          <p className="paragraph">Web Development</p>
          <p className="paragraph">App Development</p>
          <p className="paragraph">UI Design</p>
          <p className="paragraph">Consultation</p>
          <p className="paragraph">Maintenance</p>
        </div>

        <div>
          <h5 className="paragraph !text-white">COMPANY</h5>
          <p className="paragraph">About</p>
          <p className="paragraph">Contact</p>
          <p className="paragraph">Send Quote</p>
          <p className="paragraph">Privacy Policy</p>
          <p className="paragraph">Term of Service</p>
          <p className="paragraph">Jobs</p>
        </div>

        <div>
          <h5 className="paragraph !text-white">RESOURCES</h5>
          <p className="paragraph">Support</p>
          <p className="paragraph">Documentation</p>
          <p className="paragraph">License</p>
          <p className="paragraph">Sitemap</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer