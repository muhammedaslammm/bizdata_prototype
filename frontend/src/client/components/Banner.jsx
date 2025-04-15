import banners from "../../data/banners.js";
import bannerlinks from "../../data/bannerlinks.js";
import { useEffect, useState } from "react";

const Banner = () => {
  const [banner, setBanner] = useState(null);
  useEffect(() => {
    const homeBanner = banners.find((ban) => ban.name === "home-banner");
    setBanner(homeBanner);
  }, []);
  return banner ? (
    <div className="banner w-[90%] mx-auto flex gap-[2rem] z-0">
      <div className="first w-[80%] h-[45rem] relative">
        <img
          src={banner.image}
          alt=""
          className="w-full h-full object-cover rounded-[.5rem] z-0"
        />
        <div className="heads  absolute bottom-[9rem] left-[2.8rem] leading-[3.5rem]">
          <h1 className="text-gray-200 text-[3.5rem] font-medium capitalize">
            {banner.heading}
          </h1>
          <p className="text-gray-400 text-[2rem]">{banner.banner_note}</p>
          <button className="text-[1.35rem] capitalize px-[1rem] text-gray-300 border border-gray-500 rounded-[.4rem] mt-[1rem] cursor-pointer transition-all duration-300 hover:text-white hover:bg-gray-950 hover:border-gray-400">
            shop latest arrivals
          </button>
        </div>
      </div>
      {bannerlinks.length ? (
        <div className="w-[20%] bg-white flex flex-col border border-neutral-300 rounded-[.5rem]">
          {bannerlinks.map((link) => {
            if (link.active) {
              return (
                <div className="flex flex-col grow-[1] items-center py-[1.5rem] border-b border-gray-200 last:border-0 ">
                  <div className="image w-[9.5rem] h-[9.5rem]">
                    <img src={link.image} alt="" className="w-full h-full" />
                  </div>
                  <p className="text-[1.3rem] font-medium capitalize">
                    {link.title}
                  </p>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  ) : (
    <></>
  );
};

export default Banner;
