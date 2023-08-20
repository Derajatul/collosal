import Button from './components/Button'

export default function Home() {
  return (
    <main className='flex items-center justify-center text-center px-[10%]'>
      {/* Hero section */}
      <section className="h-screen flex justify-center items-center flex-col">
        <div className='w-[601px] h'>
          <h3 className="text-green text-base leading-8">CLIENT-DEVELOPMENT DRIVEN</h3>
          <h1 className="text-white text-4xl font-bold leading-[54px]">We Design, We Develop. We Ship. In The Same Day.</h1>
          <p className="text-muted font-medium leading-8">We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work.</p>
        </div>

        <div className="flex gap-2.5 mt-10">
          <Button onHref="https://example.com" colorBg="primary" styleBg="solid" size="normal" borderButton="square">Send Quote</Button>
          <Button onHref="https://example.com" colorBg="white" styleBg="light" size="normal" borderButton="square">Learn More</Button>
        </div>

      </section>
     
      
    </main>
  )
}