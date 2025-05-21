// import banners from "../../data/banners.js";
// import bannerlinks from "../../data/bannerlinks.js";
// import { useEffect, useState } from "react";

// const Banner = () => {
//   const [banner, setBanner] = useState(null);
//   useEffect(() => {
//     const homeBanner = banners.find((ban) => ban.name === "home-banner");
//     setBanner(homeBanner);
//   }, []);

//   return banner ? (
//     <div className="banner w-[90%] mx-auto flex gap-[2rem] z-0">
//       <div className="first w-[80%] h-[47rem] relative">
//         <img
//           src={banner.image}
//           alt=""
//           className="w-full h-full object-cover rounded-[.5rem] z-0"
//         />
//         <div className="heads  absolute bottom-[9rem] left-[2.8rem] leading-[3.7rem]">
//           <h1 className="text-gray-200 text-[4rem] font-bold capitalize">
//             {banner.heading}
//           </h1>
//           <p className="text-gray-400 text-[2rem]">{banner.banner_note}</p>
//           <button className="text-[1.35rem] capitalize px-[1rem] text-gray-300 border border-gray-500 rounded-[.4rem] mt-[1rem] cursor-pointer transition-all duration-300 hover:text-white hover:bg-gray-950 hover:border-gray-400">
//             shop latest arrivals
//           </button>
//         </div>
//       </div>
//       {bannerlinks.length ? (
//         <div className="w-[20%] bg-white flex flex-col border border-neutral-300 rounded-[.5rem]">
//           {bannerlinks.map((link) => {
//             if (link.active) {
//               return (
//                 <div className="flex flex-col grow-[1] items-center py-[1.5rem] border-b border-gray-200 last:border-0 ">
//                   <div className="image w-[9.5rem] h-[9.5rem]">
//                     <img src={link.image} alt="" className="w-full h-full" />
//                   </div>
//                   <p className="text-[1.8rem] font-medium capitalize">
//                     {link.title}
//                   </p>
//                 </div>
//               );
//             }
//           })}
//         </div>
//       ) : (
//         <></>
//       )}
//     </div>
//   ) : (
//     <></>
//   );
// };

// export default Banner;

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
    <div className="banner w-[95%] mx-auto flex flex-col lg:flex-row gap-6 z-0">
      {/* Left Main Banner */}
      <div className="first w-full lg:w-[80%] h-[30rem] lg:h-[47rem] relative">
        <img
          src={banner.image}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="heads absolute bottom-[2rem] left-[1.5rem] md:bottom-[4rem] md:left-[2.5rem] lg:bottom-[9rem] lg:left-[2.8rem] leading-[2.5rem] md:leading-[3.5rem]">
          <h1 className="text-white text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold capitalize">
            {banner.heading}
          </h1>
          <p className="text-gray-300 text-[1.2rem] md:text-[1.5rem] lg:text-[2rem]">
            {banner.banner_note}
          </p>
          <button className="text-[1rem] md:text-[1.2rem] lg:text-[1.35rem] mt-3 px-4 py-1 border border-gray-500 text-gray-300 rounded-md hover:text-white hover:bg-gray-950 hover:border-gray-400 transition-all">
            shop latest arrivals
          </button>
        </div>
      </div>

      {/* Right Links Box */}
      {bannerlinks.length ? (
        <div className="w-full lg:w-[20%] grid grid-cols-3 gap-4 lg:gap-4 lg:flex lg:flex-col border border-neutral-300 rounded-lg">
          {bannerlinks.map((link, index) => {
            if (link.active) {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center py-4 px-3 min-w-[8rem] bg-white lg:min-w-0 border-b border-gray-200 lg:border-b lg:border-b-gray-200 last:border-0"
                >
                  <div className="image w-[8rem] h-[8rem] lg:w-[9.5rem] lg:h-[9.5rem]">
                    <img src={link.image} alt="" className="w-full h-full" />
                  </div>
                  <p className="text-[1rem] md:text-[1.4rem] lg:text-[1.8rem] font-medium capitalize text-center mt-2">
                    {link.title}
                  </p>
                </div>
              );
            }
          })}
        </div>
      ) : null}
    </div>
  ) : null;
};

export default Banner;
