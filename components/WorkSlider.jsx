"use client";

import { useSwiper } from "swiper/react";

import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";

const WorkSlider = ({containerStyle, btnStyles, iconsStyle}) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyle}>
            <button className={btnStyles}>
                <PiCaretLeftBold className={iconsStyle} onClick={() => swiper.slidePrev()}/>
            </button>
            <button className={btnStyles}>
                <PiCaretRightBold className={iconsStyle}onClick={() => swiper.slideNext()} />
            </button>
        </div>
    );
};

export default WorkSlider;