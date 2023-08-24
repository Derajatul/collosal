import Button from './Button'

type ProjectCard = {
  title: "string",
  description: "string",
  type: "string"
}

const ProjectCard = ({title, description,type}:ProjectCard): JSX.Element => {
  let width = ''
  if(type === 'mobile'){
    width = "w-[194px]"
  } else if(type === 'desktop'){
    width = "w-[300px]"
  } else if(type === 'full'){
    width = "w-full"
  }
  return (
    <div className="w-full sm:w-[502px] h-[636px] flex flex-col justify-center items-center my-10 sm:my-0">
      <div className="w-full h-[441px] rounded border border-[#FFFFFF1A] bg-cardDark flex flex-col items-center justify-center border-solid px-20 overflow-hidden">
        <div className="w-[154px] h-[26px] rounded-[100px] bg-[#212136] mt-[53px]"></div>
        <div className="w-[96px] h-[26px] rounded-[100px] bg-[#212136] mt-[14px]"></div>
        <div className={`${width} h-[256px] rounded-t-[20px] mt-[65px] bg-[#212136] `}></div>
      </div>
      <h4 className="heading_4">{title}</h4>
      <p className="paragraph mb-[30px]">{description}</p>
      <Button 
        onHref="https://example.com/"
        color="white" 
        style="transparent" 
        size="small"
        border="pill"
      >
        Detail
      </Button>
    </div>
  )
}
export default ProjectCard