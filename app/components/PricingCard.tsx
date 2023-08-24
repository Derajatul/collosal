import Button from './Button'

type PricingCardProps = {
  name: string;
  price: string;
  features: string[];
  background: string;
};

const PricingCard = ({ name,price,features,background }: PricingCardProps): JSX.Element => {
  return(
    <div className={`w-full sm:w-[328px] h-[474px] rounded-[10px] px-5 sm:px-[47px] pt-[58px] pb-[29px] flex justify-center items-center flex-col ${background}`}>
      <div className="flex justify-center sm:justify-between items-start flex-wrap">
        <h4 className="heading_4 p-0 m-0">{name}</h4>
        <div>
          <p className="paragraph p-0 m-0">Starting from</p>
          <p className="heading_1 p-0 m-0">{price}</p>
        </div>
      </div>

      <div className="mt-[75px] mb-[50px]">
        {features.map(feature => (
          <p className="heading_5" key={feature}>{feature}</p>
        ))}
      </div>

      <Button
        onHref="https://example.com" 
        color="white" 
        style="solid" 
        size="full"
        border="square">
          Detail
      </Button>
    </div>
  )
}
export default PricingCard