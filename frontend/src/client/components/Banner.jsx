import bannerimage from "../assets/home_banners/singlebanner.jpg";

const Banner = () => {
  return (
    <div className="relative banner w-full h-[450px] flex z-0 ">
      <img src={bannerimage} alt="" className="w-full object-cover" />
      <p className="absolute top-[2rem] left-[3rem] text-[2rem] text-white">
        prototype
      </p>
      <div className="absolute left-[3rem] bottom-[5rem] text-neutral-200 leading-[2.5rem]">
        <p className="text-[1.5rem] uppercase">may month deal</p>
        <p className="text-[2.3rem] font-medium">10% off for all iphones</p>
        <p className="text-[1.5rem] mt-4">15th May - 25th May</p>
      </div>
      <div className="absolute top-[8rem] left-[3rem] w-[60rem] flex flex-col gap-8">
        <h1 className="text-[4.5rem] text-white font-medium leading-[5rem]">
          Experience the innovation with iphone
        </h1>
      </div>
    </div>
  );
};

export default Banner;
