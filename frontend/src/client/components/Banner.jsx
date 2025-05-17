import bannerimage from "../assets/samsung1.jpg";

const Banner = () => {
  return (
    <div className="relative banner w-full h-[500px] flex z-0 ">
      <img src={bannerimage} alt="" className="w-full object-cover" />
      <div className="timer absolute text-white flex flex-col">
        <span className="uppercase text-[1.5rem] font-medium">
          offer ends in
        </span>
        <span className="text-[3rem]">05 : 48 : 59</span>
      </div>

      <div className="top__left absolute top-[5%] left-[2.5%] text-white text-[1.9rem] uppercase ">
        prototype
      </div>
      <div className="absolute bottom-[15%] left-[2.5%]">
        <h1 className="w-[55rem] text-[5.5rem] text-white font-medium uppercase leading-[5.5rem]">
          grab the all new samsung
        </h1>
      </div>

      <div className="absolute right__bottom"></div>
    </div>
  );
};

export default Banner;
