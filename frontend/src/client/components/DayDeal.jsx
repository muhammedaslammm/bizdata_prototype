import daydeal from "../../data/daydeal.js";

const DayDeal = () => {
  return (
    <section className="w-[90%] mx-auto bg-white rounded-[2rem]">
      <div className="relative">
        <img
          src={daydeal.image}
          alt=""
          className="w-full h-[25rem] object-cover rounded-[2rem]"
        />
        <div className="absolute bottom-12 left-12 leading-[3.5rem]">
          <p className="text-[3.5rem] font-semibold capitalize text-black">
            {daydeal.title}
          </p>
          <p className="text-[2rem] text-black">{daydeal.offer}</p>
        </div>
      </div>
      <div className="flex gap-8">
        {daydeal.deals.map((deal) => (
          <div>
            <img src={deal.image} alt="" />
            <div>
              <p>{deal.title}</p>
              <p>{deal.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DayDeal;
