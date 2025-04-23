"use client"
import Footer from '@/components/common/Footer'
import Header1 from '@/components/common/Header1'
import SelectComponent from '@/components/common/SelectComponent'
import { useCountdownTimer } from '@/customHooks/useCountdownTimer'
import Link from 'next/link'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React, { useState } from 'react'

const AuctionPage = () => {
  const [value, setValue] = useState([20, 37]);

    function valuetext(value) {
      return `${value}`;
    }
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  const endTime = "2025-10-23";
  const { days, hours, minutes, seconds } = useCountdownTimer(endTime)
  const [activeColumn, setActiveColumn] = useState('column-3'); // Initialize activeColumn to 'column-1'
  const handleColumnClick = (column) => {
    setActiveColumn(column);
  };
  return (
    <div>
      <Header1 />
      <div className="breadcrumb-section2" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28)), url(/assets/img/inner-page/breadcrumb-image2.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex">
              <div className="top-content style-2">
                <ul>
                  <li>
                    <Link href="/">
                      <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.125 5.99955L5.602 1.52205C5.822 1.30255 6.178 1.30255 6.3975 1.52205L10.875 5.99955M2.25 4.87455V9.93705C2.25 10.2475 2.502 10.4995 2.8125 10.4995H4.875V8.06205C4.875 7.75155 5.127 7.49955 5.4375 7.49955H6.5625C6.873 7.49955 7.125 7.75155 7.125 8.06205V10.4995H9.1875C9.498 10.4995 9.75 10.2475 9.75 9.93705V4.87455M4.125 10.4995H8.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </li>
                  <li>Art Catalog</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h1>Art Catalog</h1>
                <p>An art catalog is a curated assembly of artworks gathered by an individual, institution, or
                  group, often reflecting the collector's interests, tastes, or a specific theme.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auction-card-sidebar-section pt-120 mb-120">
        <div className="container">
          <div className="row gy-5">
            <div className="col-xl-3 order-xl-1 order-2">
              <div className="sidebar-area">
                <div className="single-widgets widget_search mb-50">
                  <form>
                    <div className="wp-block-search__inside-wrapper ">
                      <input type="search" id="wp-block-search__input-1" className="wp-block-search__input" name="s" placeholder="Search Artist" required />
                      <button type="submit" className="wp-block-search__button">
                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.7425 10.3418C12.7107 9.0205 13.1444 7.38236 12.9567 5.75508C12.769 4.1278 11.9739 2.63139 10.7303 1.56522C9.48666 0.49905 7.88635 -0.0582469 6.2495 0.0048239C4.61265 0.0678947 3.05997 0.746681 1.90209 1.90538C0.744221 3.06409 0.0665459 4.61725 0.00464636 6.25415C-0.0572531 7.89104 0.501188 9.49095 1.56825 10.7338C2.63531 11.9766 4.13229 12.7707 5.7597 12.9572C7.38711 13.1438 9.02494 12.7089 10.3455 11.7397H10.3445C10.3745 11.7797 10.4065 11.8177 10.4425 11.8547L14.2924 15.7046C14.4799 15.8922 14.7342 15.9977 14.9995 15.9977C15.2647 15.9978 15.5192 15.8926 15.7068 15.7051C15.8944 15.5176 15.9999 15.2632 16 14.9979C16.0001 14.7327 15.8948 14.4782 15.7073 14.2906L11.8575 10.4408C11.8217 10.4046 11.7833 10.3711 11.7425 10.3408V10.3418ZM12.0004 6.4979C12.0004 7.22015 11.8582 7.93532 11.5818 8.60258C11.3054 9.26985 10.9003 9.87614 10.3896 10.3868C9.87889 10.8975 9.2726 11.3027 8.60533 11.5791C7.93807 11.8554 7.2229 11.9977 6.50065 11.9977C5.77841 11.9977 5.06324 11.8554 4.39597 11.5791C3.72871 11.3027 3.12242 10.8975 2.61171 10.3868C2.10101 9.87614 1.6959 9.26985 1.41951 8.60258C1.14312 7.93532 1.00086 7.22015 1.00086 6.4979C1.00086 5.03927 1.5803 3.64037 2.61171 2.60896C3.64312 1.57755 5.04202 0.99811 6.50065 0.99811C7.95929 0.99811 9.35818 1.57755 10.3896 2.60896C11.421 3.64037 12.0004 5.03927 12.0004 6.4979Z" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="single-widgets mb-50">
                  <div className="widget-title">
                    <h5>Shop Catalog</h5>
                  </div>
                  <div className="checkbox-container">
                    <ul>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Auction Art</span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>General Art</span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Upcoming Auction Art</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-widgets mb-50">
                  <div className="widget-title">
                    <h5>Artist Name</h5>
                  </div>
                  <div className="checkbox-container">
                    <ul>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Frida Kahlo </span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Pablo Picasso </span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Leonardo da Vinci</span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Gustav Klimt</span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Yayoi Kusama</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="button-area">
                    <a href="#">See More</a>
                  </div>
                </div>
                <div className="single-widgets mb-50">
                  <div className="widget-title">
                    <h5>Category</h5>
                  </div>
                  <div className="checkbox-container">
                    <ul>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Painting </span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Sculpture </span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Print</span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Natura</span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Street Art</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="button-area">
                    <a href="#">See More</a>
                  </div>
                </div>
                <div className="single-widgets mb-50">
                  <div className="widget-title">
                    <h5>Department</h5>
                  </div>
                  <div className="checkbox-container">
                    <ul>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Post War </span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Contemporary Art </span>
                        </label>
                      </li>
                      <li>
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span>Print and Multiples</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="button-area">
                    <a href="#">See More</a>
                  </div>
                </div>
                <div className="single-widgets mb-30">
                  <div className="widget-title">
                    <h5>Price Filter</h5>
                  </div>
                  <Box sx={{ xs: '100%', sm: '50%', md: '33.33%', lg: '25%', xl: '20%', }}>
                    <Slider
                      getAriaLabel={() => 'Temperature range'}
                      value={value}
                      sx={{
                        color: '#222222', // Change the color here
                      }}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                    />
                    <div className="range-wrap">
                      <div className="slider-labels">
                        <div className="caption">
                          <span id="slider-range-value1" >${value[0]}</span>
                        </div>
                        <div className="caption">
                          <span id="slider-range-value2" >${value[1]}</span>
                        </div>
                      </div>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
            <div className="col-xl-9 order-xl-2 order-1">
              <div className="row">
                <div className="col-lg-12 mb-30">
                  <div className="auction-card-top-area">
                    <div className="left-content">
                      <h6>Showing <span>09</span> of <span>12</span> results</h6>
                    </div>
                    <div className="right-content">
                      <div className="category-area d-lg-flex d-none active">
                        <SelectComponent options={["latest", "Best selling", "Price Low to high", "Price high to low"]} placeholder={"sorting"} />

                      </div>
                      <ul className="size-icon grid-view d-lg-flex d-none">
                        <li className={activeColumn === 'column-2' ? 'active' : ''} onClick={() => handleColumnClick('column-2')}>
                          <svg width={7} height={14} viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.75 13.1875L0.749999 0.8125M5.8125 13.1875L5.8125 0.8125" stroke="#A0A0A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </li>
                        <li className={activeColumn === 'column-3' ? 'active' : ''} onClick={() => handleColumnClick('column-3')}>
                          <svg width={10} height={14} viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.0625 13.1875L1.0625 0.8125M5 13.1875L5 0.8125M8.9375 13.1875L8.9375 0.8125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`list-grid-product-wrap ${activeColumn === "column-2" ? "column-2-wrapper" : "column-3-wrapper"}`}>
                <div className="row gy-4">
                  <div className={`col-lg-4 col-md-6 item wow animate fadeInDown`} data-wow-delay="200ms" data-wow-duration="1500ms">
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
                        <h6><Link href="/auction/details">Frida Kahlo Cat love’s</Link></h6>
                        <ul>
                          <li><span>Artist : </span>Frida Kahlo</li>
                          <li><span>Current Bidding : </span>$200.00</li>
                        </ul>
                        <Link href="/article/details" className="bid-btn btn-hover">
                          <span>Bidding Start</span>
                          <strong style={{top: '48px', left: '69.5px'}} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={`col-lg-4 col-md-6 item wow animate fadeInDown`} data-wow-delay="400ms" data-wow-duration="1500ms">
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
                        <h6><Link href="/auction/details">A masterpiece that invites you to dream</Link>
                        </h6>
                        <ul>
                          <li><span>Artist : </span>Frida Kahlo</li>
                          <li><span>Current Bidding : </span>$200.00</li>
                        </ul>
                        <Link href="/article/details" className="bid-btn btn-hover">
                          <span>Bidding Start</span>
                          <strong style={{top: '48px', left: '69.5px'}} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={`col-lg-4 col-md-6 item wow animate fadeInDown`} data-wow-delay="600ms" data-wow-duration="1500ms">
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
                        <h6><Link href="/auction/details">More than just art—it's a feeling</Link></h6>
                        <ul>
                          <li><span>Artist : </span>Frida Kahlo</li>
                          <li><span>Current Bidding : </span>$200.00</li>
                        </ul>
                        <Link href="/article/details" className="bid-btn btn-hover">
                          <span>Bidding Start</span>
                          <strong style={{top: '48px', left: '69.5px'}} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={`col-lg-4 col-md-6 item wow animate fadeInDown`} data-wow-delay="800ms" data-wow-duration="1500ms">
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
                        <h6><Link href="/auction/details">The Last Light Echoes of My Youth </Link></h6>
                        <ul>
                          <li><span>Artist : </span>Andy Warhol</li>
                          <li><span>Current Bidding : </span>$200.00</li>
                        </ul>
                        <Link href="/article/details" className="bid-btn btn-hover">
                          <span>Bidding Start</span>
                          <strong style={{top: '48px', left: '69.5px'}} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={`col-lg-4 col-md-6 item wow animate fadeInDown`} data-wow-delay="800ms" data-wow-duration="1500ms">
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
                        <h6><Link href="/auction/details">Whispers of Solitude of a Forgotten City</Link>
                        </h6>
                        <ul>
                          <li><span>Artist : </span>Andy Warhol</li>
                          <li><span>Current Bidding : </span>$200.00</li>
                        </ul>
                        <Link href="/article/details" className="bid-btn btn-hover">
                          <span>Bidding Start</span>
                          <strong style={{top: '48px', left: '69.5px'}} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={`col-lg-4 col-md-6 item wow animate fadeInDown`} data-wow-delay="600ms" data-wow-duration="1500ms">
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
                        <h6><Link href="/auction/details">A brushstroke of serenity in a chaotic
                          world</Link>
                        </h6>
                        <ul>
                          <li><span>Artist : </span>Andy Warhol</li>
                          <li><span>Current Bidding : </span>$200.00</li>
                        </ul>
                        <Link href="/article/details" className="bid-btn btn-hover">
                          <span>Bidding Start</span>
                          <strong style={{top: '48px', left: '69.5px'}} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={`col-lg-4 col-md-6 item wow animate fadeInDown`} data-wow-delay="400ms" data-wow-duration="1500ms">
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
                        <h6><Link href="/auction/details">Dancing Colors on a Summer Breeze</Link></h6>
                        <ul>
                          <li><span>Artist : </span>Joan Miró</li>
                          <li><span>Current Bidding : </span>$200.00</li>
                        </ul>
                        <Link href="/article/details" className="bid-btn btn-hover">
                          <span>Bidding Start</span>
                          <strong style={{top: '48px', left: '69.5px'}} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={`col-lg-4 col-md-6 item wow animate fadeInDown`} data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="auction-card">
                      <div className="auction-card-img-wrap">
                        <Link href="/auction/details" className="card-img">
                          <img src="assets/img/inner-page/auction-img8.jpg" alt="" />
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
                        <h6><Link href="/auction/details">An invitation to explore the unseen</Link></h6>
                        <ul>
                          <li><span>Artist : </span>Andy Warhol</li>
                          <li><span>Current Bidding : </span>$200.00</li>
                        </ul>
                        <Link href="/article/details" className="bid-btn btn-hover">
                          <span>Bidding Start</span>
                          <strong style={{top: '48px', left: '69.5px'}} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={`col-lg-4 col-md-6 item wow animate fadeInDown`} data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="auction-card">
                      <div className="auction-card-img-wrap">
                        <Link href="/auction/details" className="card-img">
                          <img src="assets/img/inner-page/auction-img9.jpg" alt="" />
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
                        <h6><Link href="/auction/details">Where imagination meets the canvas</Link></h6>
                        <ul>
                          <li><span>Artist : </span>Frida Kahlo</li>
                          <li><span>Current Bidding : </span>$200.00</li>
                        </ul>
                        <Link href="/article/details" className="bid-btn btn-hover">
                          <span>Bidding Start</span>
                          <strong style={{top: '48px', left: '69.5px'}} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="col-lg-12">
                  <div className="page-navigation-area d-flex flex-wrap align-items-center justify-content-between">
                    <div className="prev-next-btn">
                      <a href="#">
                        <svg width={7} height={14} viewBox="0 0 7 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                        </svg>
                        prev
                      </a>
                    </div>
                    <ul className="pagination">
                      <li className="active"><a href="#">01</a></li>
                      <li><a href="#">02</a></li>
                      <li><a href="#">03</a></li>
                    </ul>
                    <div className="prev-next-btn">
                      <a href="#">
                        next
                        <svg width={7} height={14} viewBox="0 0 7 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default AuctionPage