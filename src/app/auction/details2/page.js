"use client";
import Footer from '@/components/common/Footer'
import Header1 from '@/components/common/Header1'
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import { useCountdownTimer } from '@/customHooks/useCountdownTimer';
import QuantityCounter from '@/utils/QuantityCounter';
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const DetailsPage = () => {
  const endTime = "2025-10-23";
  const { days, hours, minutes, seconds } = useCountdownTimer(endTime)
  const auctionSliderSettings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".auction-slider-next",
        prevEl: ".auction-slider-prev",
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
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 10,
      loop: true,
      autoplay: false,
      effect: 'fade',
      navigation: {
        nextEl: ".auction-details-slider-next2",
        prevEl: ".auction-details-slider-prev2",
      },
    };
  }, []);
  const settings2 = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 15,
      grabCursor: true,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".category-slider-next",
        prevEl: ".category-slider-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 2,
        },
        350: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 35,
        },
      },
    };
  }, []);
  return (
    <>
      <Header1 />
      <div className="top-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex mb-120">
              <div className="top-content style-3">
                <ul>
                  <li>
                    <Link href="/">
                      <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.125 5.99955L5.602 1.52205C5.822 1.30255 6.178 1.30255 6.3975 1.52205L10.875 5.99955M2.25 4.87455V9.93705C2.25 10.2475 2.502 10.4995 2.8125 10.4995H4.875V8.06205C4.875 7.75155 5.127 7.49955 5.4375 7.49955H6.5625C6.873 7.49955 7.125 7.75155 7.125 8.06205V10.4995H9.1875C9.498 10.4995 9.75 10.2475 9.75 9.93705V4.87455M4.125 10.4995H8.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </li>
                  <li><Link href="/auction">Art Catalog</Link></li>
                  <li><Link href="/auction">Auction Art</Link></li>
                  <li>Frida Kahlo Tropical Print</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auction-details-section mb-120">
        <div className="container">
          <div className="row gy-5">
          <div className="col-lg-7">
              <div className="auction-details-img">
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-img1" role="tabpanel">
                    <div className="auction-details-tab-img">
                      <Swiper {...settings} className="swiper auction-details-tab-swiper">
                        <div className="swiper-wrapper">
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img7.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img8.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                        </div>
                      </Swiper>
                      <div className="slider-btn-grp">
                        <div className="slider-btn auction-details-slider-prev2">
                          <svg width={10} height={16} viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.735295 8.27932L10 16L4.10428 8.27932L10 0.558823L0.735295 8.27932Z" />
                          </svg>
                        </div>
                        <div className="slider-btn auction-details-slider-next2">
                          <svg width={10} height={16} viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.26471 7.72068L0 0L5.89572 7.72068L0 15.4412L9.26471 7.72068Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-img2" role="tabpanel">
                    <div className="auction-details-tab-img">
                      <Swiper {...settings} className="swiper auction-details-tab-swiper">
                        <div className="swiper-wrapper">
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img11.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img7.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img8.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                        </div>
                      </Swiper>
                      <div className="slider-btn-grp">
                        <div className="slider-btn auction-details-slider-prev2">
                          <svg width={10} height={16} viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.735295 8.27932L10 16L4.10428 8.27932L10 0.558823L0.735295 8.27932Z" />
                          </svg>
                        </div>
                        <div className="slider-btn auction-details-slider-next2">
                          <svg width={10} height={16} viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.26471 7.72068L0 0L5.89572 7.72068L0 15.4412L9.26471 7.72068Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-img3" role="tabpanel" aria-labelledby="v-pills-img3-tab">
                    <div className="auction-details-tab-img">
                      <Swiper {...settings} className="swiper auction-details-tab-swiper">
                        <div className="swiper-wrapper">
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img7.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img7.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img8.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                        </div>
                      </Swiper>
                      <div className="slider-btn-grp">
                        <div className="slider-btn auction-details-slider-prev2">
                          <svg width={10} height={16} viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.735295 8.27932L10 16L4.10428 8.27932L10 0.558823L0.735295 8.27932Z" />
                          </svg>
                        </div>
                        <div className="slider-btn auction-details-slider-next2">
                          <svg width={10} height={16} viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.26471 7.72068L0 0L5.89572 7.72068L0 15.4412L9.26471 7.72068Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-img4" role="tabpanel" aria-labelledby="v-pills-img4-tab">
                    <div className="auction-details-tab-img">
                      <Swiper {...settings} className="swiper auction-details-tab-swiper">
                        <div className="swiper-wrapper">
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img8.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img7.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img8.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                        </div>
                      </Swiper>
                      <div className="slider-btn-grp">
                        <div className="slider-btn auction-details-slider-prev2">
                          <svg width={10} height={16} viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.735295 8.27932L10 16L4.10428 8.27932L10 0.558823L0.735295 8.27932Z" />
                          </svg>
                        </div>
                        <div className="slider-btn auction-details-slider-next2">
                          <svg width={10} height={16} viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.26471 7.72068L0 0L5.89572 7.72068L0 15.4412L9.26471 7.72068Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-img5" role="tabpanel" aria-labelledby="v-pills-img5-tab">
                    <div className="auction-details-tab-img">
                      <Swiper {...settings} className="swiper auction-details-tab-swiper">
                        <div className="swiper-wrapper">
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img9.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img7.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide">
                            <div className="tab-image">
                              <img src="/assets/img/inner-page/auction-details-img8.jpg" alt="" />
                            </div>
                          </SwiperSlide>
                        </div>
                      </Swiper>
                      <div className="slider-btn-grp">
                        <div className="slider-btn auction-details-slider-prev2">
                          <svg width={10} height={16} viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.735295 8.27932L10 16L4.10428 8.27932L10 0.558823L0.735295 8.27932Z" />
                          </svg>
                        </div>
                        <div className="slider-btn auction-details-slider-next2">
                          <svg width={10} height={16} viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.26471 7.72068L0 0L5.89572 7.72068L0 15.4412L9.26471 7.72068Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <Swiper {...settings2} className="swiper auction-details-nav-slider">
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div className="nav-item" role="presentation">
                          <button className="nav-link active" id="v-pills-img1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-img1" type="button" role="tab" aria-controls="v-pills-img1" aria-selected="true">
                            <img src="/assets/img/inner-page/auction-details-img2.jpg" alt="" />
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="nav-item" role="presentation">
                          <button className="nav-link" id="v-pills-img2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-img2" type="button" role="tab" aria-controls="v-pills-img2" aria-selected="false">
                            <img src="/assets/img/inner-page/auction-details-img3.jpg" alt="" />
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="nav-item" role="presentation">
                          <button className="nav-link" id="v-pills-img3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-img3" type="button" role="tab" aria-controls="v-pills-img3" aria-selected="false">
                            <img src="/assets/img/inner-page/auction-details-img4.jpg" alt="" />
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="nav-item" role="presentation">
                          <button className="nav-link" id="v-pills-img4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-img4" type="button" role="tab" aria-controls="v-pills-img4" aria-selected="false">
                            <img src="/assets/img/inner-page/auction-details-img5.jpg" alt="" />
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="nav-item" role="presentation">
                          <button className="nav-link" id="v-pills-img5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-img5" type="button" role="tab" aria-controls="v-pills-img5" aria-selected="false">
                            <img src="/assets/img/inner-page/auction-details-img6.jpg" alt="" />
                          </button>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="auction-details-content">
                <div className="batch">
                  <h6>ID<span>#58302</span></h6>
                </div>
                <h3>Frida Kahlo cat Love’s</h3>
                <ul className="artist-info">
                  <li><span>Artist :</span> Frida Kahlo</li>
                  <li><span>Current Bid :</span> $950.00</li>
                </ul>
                <div className="quantity-area">
                  <h6>Bidding Start</h6>
                  <div className="quantity-counter-and-btn-area">
                    <QuantityCounter/>
                   
                    <Link href="/auction" className="primary-btn1 btn-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <span>Notify Me</span>
                      <strong style={{top: '48px', left: '69.5px'}} />
                    </Link>
                  </div>
                </div>
                <div className="auction-details-btn">
                  <Link href="/auction" className="auction-grid-btn btn-hover">
                    <span>Add To Wishlist</span>
                    <strong style={{top: '48px', left: '69.5px'}} />
                  </Link>
                </div>
                <div className="countdown-area">
                  <h6>Auction will Be End</h6>
                  <div className="countdown-timer">
                    <ul data-countdown="2025-10-23 12:00:00">
                      <li className="times" data-days={0}>{days}D</li>
                      <li className="colon">
                        :
                      </li>
                      <li className="times" data-hours={0}>{hours}H</li>
                      <li className="colon">
                        :
                      </li>
                      <li className="times" data-minutes={0}>{minutes}M</li>
                      <li className="colon">
                        :
                      </li>
                      <li className="times" data-seconds={0}>{seconds}Sec</li>
                    </ul>
                  </div>
                  <span className="ending-time">Ending : <strong>August 21 at 2:26 p.m.</strong></span>
                </div>
                <div className="payment-method">
                  <ul className="payment-list">
                    <li>
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.375 9.5625L7.875 14.0625L14.625 3.9375" stroke="#1D972B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Shipping : Less than one week
                    </li>
                    <li>
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.375 9.5625L7.875 14.0625L14.625 3.9375" stroke="#1D972B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Secure delivery : United States&nbsp;+ $162
                    </li>
                    <li>
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.375 9.5625L7.875 14.0625L14.625 3.9375" stroke="#1D972B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Free returns within Two Weekes
                    </li>
                    <li>
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.375 9.5625L7.875 14.0625L14.625 3.9375" stroke="#1D972B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Authenticity Certificate
                    </li>
                    <li>
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.375 9.5625L7.875 14.0625L14.625 3.9375" stroke="#1D972B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Secured Payment Gateways
                    </li>
                  </ul>
                  <ul className="payment-card">
                    <li>
                      <img src="/assets/img/inner-page/payment-image.svg" alt="" />
                    </li>
                    <li>
                      <img src="/assets/img/inner-page/payment-image2.svg" alt="" />
                    </li>
                    <li>
                      <img src="/assets/img/inner-page/payment-image3.svg" alt="" />
                    </li>
                    <li>
                      <img src="/assets/img/inner-page/payment-image4.svg" alt="" />
                    </li>
                  </ul>
                </div>
                <span className="ask-question">Have any question? <Link href="/contact">Ask Us</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal notify-modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">you will be notified by email</h5>
              <button type="button" className="modal-close" data-bs-dismiss="modal" aria-label="Close">
                <i className="bi bi-x-lg" />
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-inner">
                  <input type="email" placeholder="Your Email address" />
                  <button type="submit" className="primary-btn1 btn-hover">
                    Submit Here
                    <strong style={{top: '48px', left: '69.5px'}} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="product-description mb-120">
        <div className="container">
          <div className="row justify-content-center gy-4">
            <div className="col-xxl-3 col-lg-6">
              <div className="artist-overview">
                <h5>Artist Overview</h5>
                <ul>
                  <li>
                    <h6>Date of Birth and death</h6>
                    <p>Born on July 6, 1907, and passed away on July 13, 1954</p>
                  </li>
                  <li>
                    <h6>Nationality</h6>
                    <p>Mexican</p>
                  </li>
                  <li>
                    <h6>Style</h6>
                    <p>She Known for her surrealist and symbolic style</p>
                  </li>
                  <li>
                    <h6>Notable work</h6>
                    <p>"The Two Fridas" (1939), "Self-Portrait with Thorn Necklace and Hummingbird" (1940),
                      and "The Broken Column" (1944)</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-5 col-lg-6">
              <div className="exploring-artwork">
                <h5>Exploring the Artwork</h5>
                <ul>
                  <li>
                    <h6>Category :</h6>
                    <p>Oil Painting</p>
                  </li>
                  <li>
                    <h6>Size :</h6>
                    <p>29.7 x 28 inch x 8 inch&nbsp;(Height x Width x Depth)</p>
                  </li>
                  <li>
                    <h6>Framing :</h6>
                    <p>Not Frame</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h6>Theme :</h6>
                    <p>Nature and Animals</p>
                  </li>
                  <li>
                    <h6>Signature :</h6>
                    <p>Signed by Artist</p>
                  </li>
                  <li>
                    <h6>Authenticity : </h6>
                    <p>Includes Certificate of Authenticity for auction.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div className="narrative-guidelines">
                <h5>Art Inner narrative &amp; guidelines</h5>
                <ul>
                  <li>
                    <h6>Inner Narrative Of This Artwork</h6>
                    <p>This Artworks often delve into personal and emotional experiences, so these terms
                      capture the depth and complexity of the themes the artist explores.</p>
                  </li>
                </ul>
                <div className="guidelines">
                  <h6>Guidelines for The Art work :</h6>
                  <ul className="guidelines-list">
                    <li>Framing the artwork/painting</li>
                    <li>Keep the painting away from direct sunlight</li>
                    <li>Dust the surface gently with a soft dry brush or cloth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-auction-slider-section mb-120">
        <div className="container">
          <div className="row mb-50 align-items-center justify-content-between flex-wrap gap-3 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>Similar Auctions</h3>
              </div>
            </div>
          </div>
          <div className="auction-slider-wrap wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="row">
              <div className="col-lg-12">
                <Swiper {...auctionSliderSettings} className="swiper home1-auction-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="auction-card">
                        <div className="auction-card-img-wrap">
                          <Link href="/auction/details" className="card-img">
                            <img src="/assets/img/home1/auction-img1.jpg" alt="" />
                          </Link>
                          <div className="batch">
                            <span className="upcoming">UpComing</span>
                          </div>
                          <a href="#" className="wishlist">
                            <svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                            </svg>
                          </a>

                          <div className="countdown-timer">

                            <ul data-countdown="2025-10-23 12:00:00">
                              <li className="times" data-days={0}>{days}D</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-hours={0}>{hours}H</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-minutes={0}>{minutes}M</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-seconds={0}>{seconds}Sec</li>
                            </ul>
                          </div>
                        </div>
                        <div className="auction-card-content">
                          <h6><Link href="/auction/details">More than just art—it's a feeling</Link>
                          </h6>
                          <ul>
                            <li><span>Artist : </span>Frida Kahlo</li>
                            <li><span>Current Bidding : </span>$200.00</li>
                          </ul>
                          <Link href="/auction/details" className="bid-btn btn-hover">
                            <span>Bidding Start</span>
                            <strong style={{top: '48px', left: '69.5px'}} />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="auction-card">
                        <div className="auction-card-img-wrap">
                          <Link href="/auction/details" className="card-img">
                            <img src="/assets/img/home1/auction-img2.jpg" alt="" />
                          </Link>
                          <div className="batch">
                            <span>Live</span>
                          </div>
                          <a href="#" className="wishlist">
                            <svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                            </svg>
                          </a>
                          <div className="countdown-timer">
                            <ul data-countdown="2025-10-23 12:00:00">
                              <li className="times" data-days={0}>{days}D</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-hours={0}>{hours}H</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-minutes={0}>{minutes}M</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-seconds={0}>{seconds}Sec</li>
                            </ul>
                          </div>
                        </div>
                        <div className="auction-card-content">
                          <h6><Link href="/auction/details">A masterpiece that invites you to
                            dream</Link></h6>
                          <ul>
                            <li><span>Artist : </span>Pablo Picasso</li>
                            <li><span>Current Bidding : </span>$218.00</li>
                          </ul>
                          <Link href="/auction/details" className="bid-btn btn-hover">
                            <span>Bidding Start</span>
                            <strong style={{top: '48px', left: '69.5px'}} />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="auction-card">
                        <div className="auction-card-img-wrap">
                          <Link href="/auction/details" className="card-img">
                            <img src="/assets/img/home1/auction-img3.jpg" alt="" />
                          </Link>
                          <div className="batch">
                            <span className="upcoming">UpComing</span>
                          </div>
                          <a href="#" className="wishlist">
                            <svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                            </svg>
                          </a>
                          <div className="countdown-timer">
                            <ul data-countdown="2025-10-23 12:00:00">
                              <li className="times" data-days={0}>{days}D</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-hours={0}>{hours}H</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-minutes={0}>{minutes}M</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-seconds={0}>{seconds}Sec</li>
                            </ul>
                          </div>
                        </div>
                        <div className="auction-card-content">
                          <h6><Link href="/auction/details">A work of art that sparks your
                            imagination</Link></h6>
                          <ul>
                            <li><span>Artist : </span>Yayoi Kusama</li>
                            <li><span>Current Bidding : </span>$358.00</li>
                          </ul>
                          <Link href="/auction/details" className="bid-btn btn-hover">
                            <span>Bidding Start</span>
                            <strong style={{top: '48px', left: '69.5px'}} />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="auction-card">
                        <div className="auction-card-img-wrap">
                          <Link href="/auction/details" className="card-img">
                            <img src="/assets/img/home1/auction-img4.jpg" alt="" />
                          </Link>
                          <div className="batch">
                            <span>Live</span>
                          </div>
                          <a href="#" className="wishlist">
                            <svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                            </svg>
                          </a>
                          <div className="countdown-timer">
                            <ul data-countdown="2025-10-23 12:00:00">
                              <li className="times" data-days={0}>{days}D</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-hours={0}>{hours}H</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-minutes={0}>{minutes}M</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-seconds={0}>{seconds}Sec</li>
                            </ul>
                          </div>
                        </div>
                        <div className="auction-card-content">
                          <h6><Link href="/auction/details">Whispers of Solitude of a Forgotten
                            City</Link></h6>
                          <ul>
                            <li><span>Artist : </span>Andy Warhol</li>
                            <li><span>Current Bidding : </span>$310.00</li>
                          </ul>
                          <Link href="/auction/details" className="bid-btn btn-hover">
                            <span>Bidding Start</span>
                            <strong style={{top: '48px', left: '69.5px'}} />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="auction-card">
                        <div className="auction-card-img-wrap">
                          <Link href="/auction/details" className="card-img">
                            <img src="/assets/img/home1/auction-img5.jpg" alt="" />
                          </Link>
                          <div className="batch">
                            <span className="upcoming">UpComing</span>
                          </div>
                          <a href="#" className="wishlist">
                            <svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                            </svg>
                          </a>
                          <div className="countdown-timer">
                            <ul data-countdown="2025-10-23 12:00:00">
                              <li className="times" data-days={0}>{days}D</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-hours={0}>{hours}H</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-minutes={0}>{minutes}M</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-seconds={0}>{seconds}Sec</li>
                            </ul>
                          </div>
                        </div>
                        <div className="auction-card-content">
                          <h6><Link href="/auction/details">The Last Light Echoes of My Youth</Link>
                          </h6>
                          <ul>
                            <li><span>Artist : </span>Gustav Klimt</li>
                            <li><span>Current Bidding : </span>$284.00</li>
                          </ul>
                          <Link href="/auction/details" className="bid-btn btn-hover">
                            <span>Bidding Start</span>
                            <strong style={{ top: "391.875px", left: " 373.5px" }} />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="auction-card">
                        <div className="auction-card-img-wrap">
                          <Link href="/auction/details" className="card-img">
                            <img src="/assets/img/home1/auction-img6.jpg" alt="" />
                          </Link>
                          <div className="batch">
                            <span>Live</span>
                          </div>
                          <a href="#" className="wishlist">
                            <svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                            </svg>
                          </a>
                          <div className="countdown-timer">
                            <ul data-countdown="2025-10-23 12:00:00">
                              <li className="times" data-days={0}>{days}D</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-hours={0}>{hours}H</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-minutes={0}>{minutes}M</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-seconds={0}>{seconds}Sec</li>
                            </ul>
                          </div>
                        </div>
                        <div className="auction-card-content">
                          <h6><Link href="/auction/details">A brushstroke of serenity in a
                            chaotic
                            world</Link></h6>
                          <ul>
                            <li><span>Artist : </span>Henri Matisse</li>
                            <li><span>Current Bidding : </span>$284.00</li>
                          </ul>
                          <Link href="/auction/details" className="bid-btn btn-hover">
                            <span>Bidding Start</span>
                            <strong style={{top: '48px', left: '69.5px'}} />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="auction-card">
                        <div className="auction-card-img-wrap">
                          <Link href="/auction/details" className="card-img">
                            <img src="/assets/img/home1/auction-img7.jpg" alt="" />
                          </Link>
                          <div className="batch">
                            <span className="upcoming">UpComing</span>
                          </div>
                          <a href="#" className="wishlist">
                            <svg width={16} height={15} viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.00013 3.32629L7.32792 2.63535C5.75006 1.01348 2.85685 1.57317 1.81244 3.61222C1.32211 4.57128 1.21149 5.95597 2.10683 7.72315C2.96935 9.42471 4.76378 11.4628 8.00013 13.6828C11.2365 11.4628 13.03 9.42471 13.8934 7.72315C14.7888 5.95503 14.6791 4.57128 14.1878 3.61222C13.1434 1.57317 10.2502 1.01254 8.67234 2.63441L8.00013 3.32629ZM8.00013 14.8125C-6.375 5.31378 3.57406 -2.09995 7.83512 1.8216C7.89138 1.87317 7.94669 1.9266 8.00013 1.98192C8.05303 1.92665 8.10807 1.87349 8.16513 1.82254C12.4253 -2.10182 22.3753 5.31284 8.00013 14.8125Z" />
                            </svg>
                          </a>
                          <div className="countdown-timer">
                            <ul data-countdown="2025-10-23 12:00:00">
                              <li className="times" data-days={0}>{days}D</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-hours={0}>{hours}H</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-minutes={0}>{minutes}M</li>
                              <li className="colon">
                                :
                              </li>
                              <li className="times" data-seconds={0}>{seconds}Sec</li>
                            </ul>
                          </div>
                        </div>
                        <div className="auction-card-content">
                          <h6><Link href="/auction/details">Dancing Colors on a Summer Breeze</Link>
                          </h6>
                          <ul>
                            <li><span>Artist : </span>Joan Miró</li>
                            <li><span>Current Bidding : </span>$256.00</li>
                          </ul>
                          <Link href="/auction/details" className="bid-btn btn-hover">
                            <span>Bidding Start</span>
                            <strong style={{top: '48px', left: '69.5px'}} />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="slider-btn-grp">
              <div className="slider-btn auction-slider-prev">
                <svg width={10} height={16} viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.735295 8.27932L10 16L4.10428 8.27932L10 0.558823L0.735295 8.27932Z" />
                </svg>
              </div>
              <div className="slider-btn auction-slider-next">
                <svg width={10} height={16} viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.26471 7.72068L0 0L5.89572 7.72068L0 15.4412L9.26471 7.72068Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default DetailsPage