import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section className="md:py-16 py-6 justify-center items-start flex flex-col lg:flex-row">
      <div className="mr-0 md:mr-10 w-full lg:w-auto flex justify-center sm:items-start flex-col xl:px-0 md:px-10 px-0">
        <div className="flex justify-center flex-row items-center px-4 py-[6px] bg-discount-gradient rounded-[10px]">
          <img src={discount} alt="discount" />
          <p className="text-gray-400 ml-3 leading-[30px] font-normal text-[18px]">
            20$ <span className="text-white">Discount For</span> 1 Manth{" "}
            <span className="text-white">Accaunt</span>
          </p>
        </div>
        <div className="flex items-center w-full justify-between">
          <h1 className="text-white text-[40px] sm:text-[50px] md:text-[70px] lg:text-7xl md:leading-[100px] font-semibold">
            The Next <br /> <span className="text-gradient">Generation</span> <br />
          </h1>
          <div className="hidden sm:flex">
            <GetStarted />
          </div>
        </div>
        <h1 className="text-white text-[40px] sm:text-[50px] md:text-[70px] lg:text-7xl md:leading-[100px] font-semibold">
          Payment Method.
        </h1>
        <p className="max-w-[470px] mt-10 text-white leading-[30px] font-normal text-[18px] ">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center relative">
        <img className="w-[100%] h-[100%] md:mt-0 mt-10" src={robot} alt="" />
       <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
