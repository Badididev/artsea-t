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

const Home1ArticleSection = () => {
        const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".article-slider-next",
			prevEl: ".article-slider-prev",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4,
			},
		},
        };
    }, []);
  return (
    <div className="home1-article-section mb-120">
    <div className="container">
      <div className="row mb-50 align-items-center justify-content-between flex-wrap gap-3 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="col-lg-8 col-md-9">
          <div className="section-title">
            <h3>Latest Article</h3>
            <p>Our Article is your go-to resource for all things related to art, auctions, and the vibrant
              community of artists and collectors.</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 d-flex justify-content-md-end">
          <Link href="/article" className="view-all-btn">View All</Link>
        </div>
      </div>
      <div className="article-slider-wrap wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...settings} className="swiper home1-article-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="article-card">
                    <Link href="/article/details" className="article-img">
                      <img src="assets/img/home1/article-img1.jpg" alt="" />
                    </Link>
                    <div className="article-content-wrap">
                      <div className="article-content">
                        <div className="blog-meta">
                          <Link href="/article" className="blog-date">31 July, 2024</Link>
                          <div className="blog-comment">
                            <span>2 Comments</span>
                          </div>
                        </div>
                        <h6><Link href="/auction/details">The Last Light of a Forgotten City
                          Breaking</Link></h6>
                        <Link href="/article/details" className="read-btn">Read Article</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="article-card">
                    <Link href="/article/details" className="article-img">
                      <img src="assets/img/home1/article-img2.jpg" alt="" />
                    </Link>
                    <div className="article-content-wrap">
                      <div className="article-content">
                        <div className="blog-meta">
                          <Link href="/article" className="blog-date">25 July, 2024</Link>
                          <div className="blog-comment">
                            <span>6 Comments</span>
                          </div>
                        </div>
                        <h6><Link href="/auction/details">Art as Therapy: Creativity for Mental
                          Wellness</Link></h6>
                        <Link href="/article/details" className="read-btn">Read Article</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="article-card">
                    <Link href="/article/details" className="article-img">
                      <img src="assets/img/home1/article-img3.jpg" alt="" />
                    </Link>
                    <div className="article-content-wrap">
                      <div className="article-content">
                        <div className="blog-meta">
                          <Link href="/article" className="blog-date">18 July, 2024</Link>
                          <div className="blog-comment">
                            <span>3 Comments</span>
                          </div>
                        </div>
                        <h6><Link href="/auction/details">How Art Reflects and Influences
                          Modern Culture</Link></h6>
                        <Link href="/article/details" className="read-btn">Read Article</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="article-card">
                    <Link href="/article/details" className="article-img">
                      <img src="assets/img/home1/article-img4.jpg" alt="" />
                    </Link>
                    <div className="article-content-wrap">
                      <div className="article-content">
                        <div className="blog-meta">
                          <Link href="/article" className="blog-date">15 July, 2024</Link>
                          <div className="blog-comment">
                            <span>3 Comments</span>
                          </div>
                        </div>
                        <h6><Link href="/auction/details">Insights into the Creative Process of
                          Artists</Link></h6>
                        <Link href="/article/details" className="read-btn">Read Article</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="article-card">
                    <Link href="/article/details" className="article-img">
                      <img src="assets/img/home1/article-img5.jpg" alt="" />
                    </Link>
                    <div className="article-content-wrap">
                      <div className="article-content">
                        <div className="blog-meta">
                          <Link href="/article" className="blog-date">12 July, 2024</Link>
                          <div className="blog-comment">
                            <span>4 Comments</span>
                          </div>
                        </div>
                        <h6><Link href="/auction/details">Spotlighting Emerging Artists Making
                          Their Mark</Link></h6>
                        <Link href="/article/details" className="read-btn">Read Article</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="article-card">
                    <Link href="/article/details" className="article-img">
                      <img src="assets/img/home1/article-img6.jpg" alt="" />
                    </Link>
                    <div className="article-content-wrap">
                      <div className="article-content">
                        <div className="blog-meta">
                          <Link href="/article" className="blog-date">22 July, 2024</Link>
                          <div className="blog-comment">
                            <span>2 Comments</span>
                          </div>
                        </div>
                        <h6><Link href="/auction/details">Understanding Color Psychology in
                          Artistic</Link></h6>
                        <Link href="/article/details" className="read-btn">Read Article</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="article-card">
                    <Link href="/article/details" className="article-img">
                      <img src="assets/img/home1/article-img7.jpg" alt="" />
                    </Link>
                    <div className="article-content-wrap">
                      <div className="article-content">
                        <div className="blog-meta">
                          <Link href="/article" className="blog-date">24 July, 2024</Link>
                          <div className="blog-comment">
                            <span>5 Comments</span>
                          </div>
                        </div>
                        <h6><Link href="/auction/details">The Impact of Technology on Today’s
                          Art</Link></h6>
                        <Link href="/article/details" className="read-btn">Read Article</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="slider-btn-grp">
          <div className="slider-btn article-slider-prev">
            <svg width={10} height={16} viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.735295 8.27932L10 16L4.10428 8.27932L10 0.558823L0.735295 8.27932Z" />
            </svg>
          </div>
          <div className="slider-btn article-slider-next">
            <svg width={10} height={16} viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.26471 7.72068L0 0L5.89572 7.72068L0 15.4412L9.26471 7.72068Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home1ArticleSection