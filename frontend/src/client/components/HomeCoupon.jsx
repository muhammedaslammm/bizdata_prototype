import { useContext, useEffect, useState } from "react";
import { CouponContext } from "../../contexts";

const HomeCoupon = () => {
  const [coupon, setCoupon] = useState(null);
  const { load, getHomeCoupon } = useContext(CouponContext);
  useEffect(() => {
    if (load) {
      const response = getHomeCoupon();
      if (response.success) setCoupon(response.coupon);
      else console.log(response.message);
    }
  }, [load]);

  return coupon ? (
    <section className="w-[90%] mx-auto bg-white my-8 p-8 flex flex-col justify-center items-center rounded-[2rem]">
      <p className="text-[2.8rem] font-semibold capitalize">{coupon.title}</p>
      <div className="flex gap-4 mt-6 mb-8">
        <div className="left font-bold uppercase text-[5.2rem] p-[5rem] border border-neutral-400 rounded-[1.5rem]">
          {coupon.coupon_head}
        </div>
        <div className="right bg-black  p-[5rem] rounded-[1.5rem]">
          <div className="flex flex-col items-center  justify-center leading-10 font-medium border border-white text-white py-4 px-20 rounded-[1rem]">
            <p className="text-[1.5rem] uppercase">use code</p>
            <p className="text-[3rem]">{coupon.coupon_code}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 border-t border-neutral-400 py-8 w-full">
        <p className="text-[2rem] font-semibold text-white bg-black py-2 px-12 uppercase italic">
          {coupon.cashback ? coupon.cashback_note : ""}
        </p>
        <p className="text-[2.3rem] font-medium italic">{coupon.benefit}</p>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default HomeCoupon;
