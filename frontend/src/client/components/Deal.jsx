import projectors from "../../data/projectors";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Deal = () => {
  const [deals, setDeals] = useState([]);
  useEffect(() => {
    let count = 0;
    const dealProducts = projectors.filter((projector) => {
      if (count < 5 && projector.offer_price < 40000) {
        count += 1;
        return projector;
      }
    });
    setDeals(dealProducts);
  }, []);
  return deals.length ? (
    <div className="deal w-[90%] flex flex-col gap-[1rem] mx-auto my-12">
      <div className="head text-[1.9rem] capitalize">projector deals</div>
      <div className="projectors grid grid-cols-5 gap-4">
        {deals.map((deal) => (
          <ProductCard key={deal.id} product={deal} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Deal;
