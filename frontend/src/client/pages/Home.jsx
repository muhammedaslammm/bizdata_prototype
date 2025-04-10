import Banner from "../components/Banner";
import Deal from "../components/Deal";
import projectors from "../../data/projectors";
import laptops from "../../data/laptops";
import { useEffect, useState } from "react";


const Home = () => {
  const [dealProjectors, setDealProjectors] = useState([]);
  const [dealLaptops, setDealLaptops] = useState([]);

  // the products are filtered and stored in the above state variables.
  // these variable products are send to various components representing various sections.
  
  useEffect(() => {
    const filteredProjectors = projectors
      .filter((projector) => projector.offer_price < 30000)
      .slice(0, 6);
    const filteredLaps = laptops
      .filter((laptop) => laptop.offer_price < 50000)
      .slice(0, 6);

    setDealLaptops(filteredLaps);
    setDealProjectors(filteredProjectors);
  }, []);

  return (
    <div className="home my-[1.5rem]">
      <Banner /> {/*banner section */}
      <Deal products={dealProjectors} title={"projector deals"} />
      <Deal products={dealLaptops} title={"laptop deals"} />
      <Deal products={dealProjectors} title={"projector deals"} />
      <Deal products={dealLaptops} title={"laptop deals"} />
    </div>
  );
};

export default Home;
