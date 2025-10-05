"use client";

import { useSwiper } from "swiper/react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const WorkSliderButton = () => {
    const swiper = useSwiper();
  return (
    <div className="flex gap-2 absolute bottom-[calc(50%_-_22px)] right-0 z-20 lg:bottom-0 w-full justify-between lg:w-max lg:justify-none">
        <button onClick={() => swiper.slidePrev()} className="hover:bg-teal-400 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all lg:bg-teal-400 lg:hover:bg-teal-600" >
            <BiLeftArrow />
        </button>
        <button onClick={() => swiper.slideNext()} className="hover:bg-teal-400 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all lg:bg-teal-400 " >
            <BiRightArrow />
        </button>
    </div>
  )
}

export default WorkSliderButton