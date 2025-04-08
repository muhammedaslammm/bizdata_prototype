const ProductCard = ({ product }) => {
    return (
        <div className="border border-neutral-100 p-[1.5rem] bg-white rounded-[.5rem] cursor-pointer hover:shadow-[0_0_.4rem_rgb(210,210,210)]">
            <div className="image h-[11rem] flex justify-center">
                <img src={product.image} alt="product image" className="w-[10rem] h-full object-contain" />
            </div>
            <div className="details flex flex-col gap-[.6rem] mt-[2rem]">
                <div className="title truncate text-[1.5rem] text-gray-700">{product.title}</div>
                <div className="price flex gap-[.8rem] text-[1.3rem] items-baseline">
                    <div className="offer text-[1.7rem]">Rs {product.offer_price}</div>
                    <div className="line-through text-gray-300"> Rs{product.price}</div>
                </div>
            </div>
        </div>
     );
};

export default ProductCard;
