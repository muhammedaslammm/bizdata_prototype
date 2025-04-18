const Trust = () => {
  return (
    <div className="w-[90%] mx-auto py-[8rem] bg-neutral-300 text-neutral-500 flex justify-center items-center gap-[7rem] ">
      <div className="flex flex-col justify-center items-center gap-4">
        <i className="fa-solid fa-box-open text-[7rem]"></i>
        <p className="capitalize text-[3rem] font-semibold">
          authentic products
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <i className="fa-solid fa-rotate-left text-[7rem]"></i>
        <p className="capitalize text-[3rem] font-medium">easy return</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <i className="fa-solid fa-money-bill-1-wave text-[7rem]"></i>
        <p className="capitalize text-[3rem] font-semibold">easy payment</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <i className="fa-solid fa-truck-fast text-[7rem]"></i>
        <p className="capitalize text-[3rem] font-medium">fast delivery</p>
      </div>
    </div>
  );
};
export default Trust;
