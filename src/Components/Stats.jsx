import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="flex flex-row flex-wrap pb-16">
      {stats.map(stat => (
        <div key={stat.id} className="flex justify-start sm:justify-center sm:mb-0 mb-5 items-center gap-3 flex-1">
        <h3 className="text-white text-3xl sm:text-4xl font-semibold">{stat.value}</h3>
        <p className="text-white uppercase text-[19px] text-gradient">{stat.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats