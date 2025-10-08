
import { card } from "../assets"
import Button from "./Button"
const CardDeal = () => {
  return (
    <section className="flex flex-col md:flex-row  py-20">
        <div className="flex-1 flex flex-col justify-center items-start">
            <h2 className="text-white text-[40px] md:text-[50px] font-semibold leading-[70px] md:leading-[80px]">Find a better card dealin  few easy steps.</h2>
            <p className="max-w-[470px] mt-5 text-white">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <Button style={`mt-10`} />
        </div>
        <div className="flex-1 flex flex-col justify-center md:ml-10 ml-0 md:mt-0 mt-10 ">
            <img className=" object-contain flex-1 flex justify-center items-center  h-[100%] w-[100%]" src={card} alt="" />
        </div>
    </section>
  )
}

export default CardDeal