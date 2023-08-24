import Button from './Button'

const Footer = () => {
  return(
    <>
      <div className="line mb-[46px]"></div>
      <div className="flex justify-between items-center">
        <h2 className="heading_2 sm:w-[589px] w-full">We've prepared everything, it's time for you to tell the problem</h2>
        <div className="flex gap-5">
          <Button
            onHref="https://example.com/"
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
      
      <div className="line mt-[46px]"></div>
    </>
  )
}

export default Footer