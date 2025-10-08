import { feedback } from "../constants"
import { quotes } from "../assets"
const Testimonials = () => {
  return (
    <section className=" md:py-16 py-6 flex justify-center  items-center">
      <div className="flex flex-wrap justify-between">
        {
          feedback.map((feedbackCard) => (
            <div key={feedbackCard.id} className="px-12 max-w-[370px] flex-1 py-11 ml-5 rounded-2xl feedback-card">
              <img className="h-[25px] mb-10" src={quotes} alt="" />
              <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{feedbackCard.content}</p>
              <div className="flex">
                <img className="w-[48px] h-[48px] rounded-full" src={feedbackCard.img} alt="" />
                <div className="flex flex-col ml-4">
                  <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{feedbackCard.name}</h4>
                  <p className="font-poppins font-normal text-[16px] leading-[24px] text-gray-300">{feedbackCard.title}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials