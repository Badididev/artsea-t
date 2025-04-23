import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div>
            <div className="home2-about-section mb-120">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="row g-4">
                            <div className="col-xxl-5 col-lg-6">
                                <div className="about-img">
                                    <img src="assets/img/home2/home2-about-img.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-xxl-7 col-lg-6">
                                <div className="about-content">
                                    <h3>Discover Our Essence</h3>
                                    <p>At Artmart, we are passionate art enthusiasts dedicated to connecting artists and
                                        collectors through dynamic and exciting auctions. Our platform celebrates the creativity
                                        and diversity of artists from around the world, providing a space where their works can
                                        be appreciated and acquired by</p>
                                    <div className="feature-list-and-btn-area">
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
                                        <Link href="/about" className="learn-btn">
                                            <svg width={104} height={104} viewBox="0 0 104 104" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M59.0718 6.7112L60.4661 12.8837C61.7977 18.7789 68.5628 21.5811 73.673 18.3542L79.0235 14.9754C85.5566 10.8499 93.1501 18.4434 89.0246 24.9765L85.6458 30.327C82.4189 35.4372 85.2211 42.2023 91.1163 43.5339L97.2888 44.9282C104.826 46.6306 104.826 57.3694 97.2888 59.0718L91.1163 60.4661C85.2211 61.7977 82.4189 68.5628 85.6458 73.673L89.0246 79.0235C93.1501 85.5566 85.5566 93.1501 79.0235 89.0246L73.673 85.6458C68.5628 82.4189 61.7977 85.2211 60.4661 91.1163L59.0718 97.2888C57.3694 104.826 46.6306 104.826 44.9282 97.2888L43.5339 91.1163C42.2023 85.2211 35.4372 82.4189 30.327 85.6458L24.9765 89.0246C18.4434 93.1501 10.8499 85.5566 14.9754 79.0235L18.3542 73.673C21.5811 68.5628 18.7789 61.7977 12.8837 60.4661L6.71121 59.0718C-0.825571 57.3694 -0.825575 46.6306 6.7112 44.9282L12.8837 43.5339C18.7789 42.2023 21.5811 35.4372 18.3542 30.327L14.9754 24.9765C10.8499 18.4434 18.4434 10.8499 24.9765 14.9754L30.327 18.3542C35.4372 21.5811 42.2023 18.7789 43.5339 12.8837L44.9282 6.71121C46.6306 -0.825571 57.3694 -0.825575 59.0718 6.7112Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>Learn <br /> More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
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
    )
}

export default About