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
import { useCountdownTimer } from "@/customHooks/useCountdownTimer";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const HomeAcutonSilder = () => {
  const endTime = "2025-10-23";
  const { days, hours, minutes, seconds } = useCountdownTimer(endTime)
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
  return (
    <>
      <div className="home1-auction-slider-section mb-120">
        <div className="container">
          <div className="row mb-50 align-items-center justify-content-between flex-wrap gap-3 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-12">
              <div className="section-title two">
                <h3>Streaming Auctions</h3>
                <div className="section-content">
                  <p>Join us for an exhilarating live auction experience where art meets excitement. </p>
                  <Link href="/auction" className="view-all-btn">View All</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="auction-slider-wrap wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="row">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper home1-auction-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="auction-card">
                        <div className="auction-card-img-wrap">
                          <Link href="/auction/details" className="card-img">
                            <img src="assets/img/home1/auction-img1.jpg" alt="" />
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
                            <img src="assets/img/home1/auction-img2.jpg" alt="" />
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
                            <ul data-countdown="2025-09-18 12:00:00">
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
                            <img src="assets/img/home1/auction-img3.jpg" alt="" />
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
                            <ul data-countdown="2025-09-25 12:00:00">
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
                            <img src="assets/img/home1/auction-img4.jpg" alt="" />
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
                            <ul data-countdown="2025-10-25 12:00:00">
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
                            <img src="assets/img/home1/auction-img5.jpg" alt="" />
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
                            <ul data-countdown="2025-10-12 12:00:00">
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
                            <strong style={{top: '48px', left: '69.5px'}} />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="auction-card">
                        <div className="auction-card-img-wrap">
                          <Link href="/auction/details" className="card-img">
                            <img src="assets/img/home1/auction-img6.jpg" alt="" />
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
                            <ul data-countdown="2025-10-05 12:00:00">
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
                          <h6><Link href="/auction/details">A brushstroke of serenity in a chaotic
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
                            <img src="assets/img/home1/auction-img7.jpg" alt="" />
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
                            <ul data-countdown="2025-09-18 12:00:00">
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
    </>
  )
}

export default HomeAcutonSilder