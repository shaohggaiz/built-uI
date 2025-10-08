import { clients } from "../constants"

const Clients = () => {
  return (
    <section className='md:py-16 py-6'>
        <div className=" flex justify-between items-center flex-wrap">
            {clients.map((client ) => (
                <img key={client.id} className=" w-[100px] md:w-[200px] md:mb-0 mt-5" src={client.logo} alt="" />
            ))}
        </div>
    </section>
  )
}

export default Clients