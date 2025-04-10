import banners from '../../data/banners.js'
import bannerlinks from '../../data/bannerlinks.js';
const Banner = () => {
    return (
        <div className="banner w-[90%] mx-auto flex gap-[2rem]">
            <div className="first w-[80%] h-[45rem]">
                <img src={banners[0].image} alt="" className='w-full h-full object-cover' />
            </div>
            {bannerlinks.length ? <div className='w-[20%] bg-white flex flex-col border border-neutral-300'>
                {bannerlinks.map((link) => {
                    if (link.active) {
                        return (
                            <div className='flex flex-col grow-[1] items-center py-[1.5rem] border-b border-gray-200 last:border-0 '>
                                <div className="image w-[9.5rem] h-[9.5rem]"><img src={link.image} alt="" className='w-full h-full' /></div>
                                <p className='text-[1.3rem] font-medium capitalize'>{link.title}</p>
                            </div>
                        )
                    }
                })}
            </div> : <></>}
        </div>
    )
}

export default Banner;