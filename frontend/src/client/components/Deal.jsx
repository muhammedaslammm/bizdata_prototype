import ProductCard from "./ProductCard";

const Deal = ({ products, title }) => {
    return products.length ? (
        <div className="deal w-[90%] flex flex-col gap-[1rem] mx-auto my-[3rem]">
            <div className="head text-[1.9rem] capitalize font-medium">{title}</div>
            <div className="projectors grid grid-cols-6 gap-[1rem]">
                {products.map((deal) => <ProductCard key={deal.id} product={deal} />)}
            </div>
        </div>
    ) : <></>
}

export default Deal;