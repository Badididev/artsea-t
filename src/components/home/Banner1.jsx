"use client";
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Banner1 = () => {
    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            effect: 'fade',
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination1",
                clickable: true,
            },
        };
    }, []);
    return (
        <>
            <div className="home1-banner-section mb-120">
                <Swiper {...settings} className="swiper home1-banner-slider">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="banner-bg" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0.46) 100%), url(assets/img/home1/home1-banner-bg1.jpg)' }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="banner-bg" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0.46) 100%), url(assets/img/home1/home1-banner-bg2.jpg)' }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="banner-bg" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0.46) 100%), url(assets/img/home1/home1-banner-bg3.jpg)' }}>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
                <div className="banner-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-7 col-lg-8">
                                <div className="banner-content">
                                    <h1>Art That Speaks To Your Soul </h1>
                                    <p>Unlock a world of imagination with our curated collection of original artworks. From bold
                                        abstracts to serene landscapes, discover pieces that inspire, captivate.</p>
                                    <Link href="/auction" className="primary-btn1 btn-hover">
                                        <span>Explore Now</span>
                                        <strong style={{top: '48px', left: '69.5px'}} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination-area">
                    <div className="swiper-pagination1" />
                </div>
            </div>
        </>
    )
}

export default Banner1