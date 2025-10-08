import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section className="flex items-center flex-col-reverse md:flex-row">
        <div className="flex-1 md:mt-0 mt-10">
            <img className="h-[100%] w-[100%]" src={bill} alt="" />
        </div>
        <div className="">
            <h2 className="text-white text-[40px] md:text-[50px] font-semibold leading-[70px] md:leading-[80px]">Easy control your <br /> Billing & invoicing.</h2>
            <p className="max-w-[470px] mt-5 text-white">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className="flex mt-10 gap-3">
                <img src={apple} alt="" />
                <img src={google} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Billing