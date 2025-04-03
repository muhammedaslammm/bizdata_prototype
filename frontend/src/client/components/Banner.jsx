import banners from '../../data/banners.js'
const Banner = () => {
    return (
        <div className="banner w-[90%] mx-auto">
            <div className="first w-[70%]">
                <img src={banners[0].image} alt="" className='w-full'/>
            </div>
            <div className="second w-[30%]"></div>
        </div>
    )
}

export default Banner;