import Link from 'next/link'
import React from 'react'

const Home1AboutSection = () => {
    return (
        <>
            <div className="home1-about-section mb-120">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-xl-8 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="about-content-wrap">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="about-img">
                                            <img src="assets/img/home1/about-img1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="about-content">
                                            <h3>Discover Our Essence</h3>
                                            <p>At Artmart, we are passionate art enthusiasts dedicated to connecting artists and
                                                collectors through dynamic and exciting auctions. Our platform celebrates the
                                                creativity and diversity of artists from around the world, providing a space
                                                where their works can be appreciated and acquired by</p>
                                            <ul>
                                                <li>
                                                    <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 6.5L5 10.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Integrity
                                                </li>
                                                <li>
                                                    <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 6.5L5 10.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Diversity
                                                </li>
                                                <li>
                                                    <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 6.5L5 10.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Accessibility
                                                </li>
                                                <li>
                                                    <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 6.5L5 10.5L11 1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Support
                                                </li>
                                            </ul>
                                            <Link href="/about" className="learn-btn d-xl-none d-flex">Learn <br /> More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-9 col-lg-8">
                                        <div className="countdown-wrap">
                                            <ul className="countdown-list">
                                                <li className="single-countdown">
                                                    <div className="number">
                                                        <h3 className="counter">65</h3>
                                                        <strong>k</strong>
                                                    </div>
                                                    <span>Customers</span>
                                                </li>
                                                <li className="single-countdown">
                                                    <div className="number">
                                                        <h3 className="counter">1.5</h3>
                                                        <strong>k</strong>
                                                    </div>
                                                    <span>Collections</span>
                                                </li>
                                                <li className="single-countdown">
                                                    <div className="number">
                                                        <h3 className="counter">800</h3>
                                                    </div>
                                                    <span>Auctions</span>
                                                </li>
                                                <li className="single-countdown">
                                                    <div className="number">
                                                        <h3 className="counter">1</h3>
                                                        <strong>k</strong>
                                                    </div>
                                                    <span>Bidders</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4  wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="about-img-wrap d-xl-block d-none">
                                <img src="assets/img/home1/about-img2.jpg" alt="" />
                                <Link href="/about" className="learn-btn">Learn <br /> More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home1AboutSection