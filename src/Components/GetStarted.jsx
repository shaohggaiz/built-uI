import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className="flex p-[2px] h-[150px] w-[150px] rounded-full bg-blue-gradient">
      <div className="flex flex-col justify-center items-center h-[100%] w-[100%] rounded-full bg-[#00040f]">
        <p className="text-gradient font-semibold text-[18px]">
          <span className="flex gap-1.5">Get <img src={arrowUp} alt="" /></span>
        </p>
        <p className="text-gradient font-semibold text-[18px] leading-5">
            <span>Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
