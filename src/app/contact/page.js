import Footer from '@/components/common/Footer'
import Header1 from '@/components/common/Header1'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <div>
            <Header1 />
            <div className="top-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex mb-120">
                            <div className="top-content">
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.125 5.99955L5.602 1.52205C5.822 1.30255 6.178 1.30255 6.3975 1.52205L10.875 5.99955M2.25 4.87455V9.93705C2.25 10.2475 2.502 10.4995 2.8125 10.4995H4.875V8.06205C4.875 7.75155 5.127 7.49955 5.4375 7.49955H6.5625C6.873 7.49955 7.125 7.75155 7.125 8.06205V10.4995H9.1875C9.498 10.4995 9.75 10.2475 9.75 9.93705V4.87455M4.125 10.4995H8.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-page mb-120">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-5">
                            <div className="map-area">
                                <h3>Contact Us by Phone</h3>
                                <div className="single-content">
                                    <ul>
                                        <li>US :&nbsp;<a href="tel:123456789">+1 23456789</a></li>
                                        <li>FR :&nbsp;<a href="tel:123456789">+1 23456789</a></li>
                                        <li>UK :&nbsp;<a href="tel:123456789">+1 23456789</a></li>
                                    </ul>
                                    <ul className="opening-time">
                                        <li>at - <span>9:30 am - 6:30 pm</span></li>
                                        <li>from - <span>Monday to Friday</span></li>
                                    </ul>
                                </div>
                                <div className="contact-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564763185785!2d90.36311167608078!3d23.834071185557615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1685535738307!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="enquery-section style-2 ">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 mb-25">
                                            <div className="enquery-section-title">
                                                <h3>Contact Us by Email</h3>
                                                <p>Join us for an exhilarating live auction experience where art meets
                                                    excitement. </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-20">
                                            <div className="enquery-form-wrapper">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-30">
                                                            <div className="form-inner3">
                                                                <label>first name *</label>
                                                                <input type="text" placeholder="Mr. Harry" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-30">
                                                            <div className="form-inner3">
                                                                <label>email address *</label>
                                                                <input type="email" placeholder="info@example.com" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-40">
                                                            <div className="form-inner3">
                                                                <label>message</label>
                                                                <textarea placeholder="Write your message" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 ">
                                                            <div className="form-inner3">
                                                                <button className="primary-btn1 btn-hover">
                                                                    <span>Submit Here</span>
                                                                    <strong style={{top: '48px', left: '69.5px'}} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
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

export default Contact