import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-menu-wrap">
                    <div className="row gy-5">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="footer-content-area">
                                <Link href="" className="footer-logo">
                                    <img src="/assets/img/footer-logo.svg" alt="" />
                                </Link>
                                <p>An Art Action Company typically operates in the space of live art, performance, and social practice, often combining elements of activism and community engagement.</p>
                                <ul className="social-list">
                                    <li>
                                        <a href="https://www.facebook.com/">
                                            <i className="bi bi-facebook" />
                                            <span>Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/">
                                            <i className="bi bi-instagram" />
                                            <span>Instagram</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/">
                                            <i className="bi bi-linkedin" />
                                            <span>LinkedIn</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/">
                                            <i className="bi bi-twitter-x" />
                                            <span>Twitter</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-end">
                            <div className="footer-widget">
                                <div className="widget-title">
                                    <h5>Menu</h5>
                                </div>
                                <ul className="widget-list">
                                    <li><Link href="/artists/portfolio">Artists Portfolio</Link></li>
                                    <li><a href="/general-art-details">Art Catalog</a></li>
                                    <li><a href="#">Departments</a></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-5 d-flex justify-content-md-end">
                            <div className="footer-widget">
                                <div className="widget-title">
                                    <h5>Resources</h5>
                                </div>
                                <ul className="widget-list">
                                    <li><Link href="/auction">Blog</Link></li>
                                    <li><Link href="/about">About us</Link></li>
                                    <li><Link href="/how-to-bid">How to bid</Link></li>
                                    <li><Link href="/how-to-sell">How to sell</Link></li>
                                    <li><Link href="/faq">F.A.Q</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-7 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-end">
                            <div className="newsletter-and-payment-area">
                                <h4>For Exclusive Art Updates Join Our Newsletter!</h4>
                                <form>
                                    <div className="form-inner">
                                        <input type="email" placeholder="Email Address" />
                                        <button type="submit"><i className="bi bi-arrow-right" /></button>
                                    </div>
                                </form>
                                <div className="payment-area">
                                    <h6>Secured Payment Gateways</h6>
                                    <ul className="payment-options">
                                        <li><img src="/assets/img/home1/icon/visa.svg" alt="" /></li>
                                        <li><img src="/assets/img/home1/icon/master-card.svg" alt="" /></li>
                                        <li><img src="/assets/img/home1/icon/american-express.svg" alt="" /></li>
                                        <li><img src="/assets/img/home1/icon/maestro.svg" alt="" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="copyright-area">
                        <p>©Copyright 2025 <Link href="/">Artmart</Link> | Design By <a href="https://www.egenslab.com/">Egens Lab</a></p>
                    </div>
                    <div className="footer-bottom-right">
                        <ul>
                            <li><a href="#">Support Center</a></li>
                            <li><Link href="/terms-condition">Terms &amp; Conditions</Link></li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer