import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`gap-4 ${index !== features.length - 1 ? 'mb-15' : 'mb-0'} py-5 px-4 rounded-2xl flex feature-card items-center justify-center`}>
    <div className="bg-blue-400 p-4 rounded-[10px]">
        <img src={icon} alt="" />
    </div>
    <div className="">
    <h1 className="text-white">{title}</h1>
    <p className="text-gray-400 lg:max-w-[450px]">{content}</p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className="md:py-16 py-6 flex justify-center flex-col lg:flex-row">
        <div className="flex-1">
            <h2 className="text-white text-[40px] md:text-[50px] font-semibold leading-[70px] md:leading-[80px]">You do the business, <br /> we’ll handle the money.</h2>
            <p className="leading-7 text-[18px] text-gray-400 mt-5 max-w-[470px] ">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <Button style={`mt-10`} />
        </div>
        <div className="mt-10">
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} />
            ))}
        </div>
    </section>
  )
}

export default Business
{/* <div className="">
            <img src={icon} alt="" />
        </div>
        <div className="">
            <h4 className="text-white">{title}</h4>
            <p className="text-white">{content}</p>
        </div> */}