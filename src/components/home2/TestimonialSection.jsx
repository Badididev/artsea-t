"use client"
import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const settings = useMemo(() => {
    return {
      infinite: true,
		centerMode: false,
		arrows: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 2500,
		speed: 800,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1400,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}, {
			breakpoint: 576,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 1
			}
		}, {
			breakpoint: 350,
			settings: {
				arrows: false,
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 1
			}
		}]
    };
  }, []);
  return (
    <>
      <div className="home2-testimonial-section mb-120">
        <div className="container">
          <div className="row mb-50 align-items-center justify-content-between flex-wrap gap-3 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-12">
              <div className="section-title two">
                <h3>Client acknowledgment</h3>
                <div className="section-content">
                  <p>Join us for an exhilarating live auction experience where art meets excitement. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 d-sm-block d-none">
                <div className="testimonial-img">
                  <img src="assets/img/home2/home2-testimonial-img.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testimonial-slider-wrap">
                  <Slider {...settings} className="slider">
                    <div className="slider-item">
                      <div className="testimonial-card">
                        <h5>Great Auction Product!</h5>
                        <p>"I purchased a beautiful painting from this site, and the quality is
                          incredible. The buying process was seamless, and the delivery was prompt.
                          Highly recommend for anyone looking to buy unique art."</p>
                        <svg className="quote" width={54} height={49} viewBox="0 0 54 49" xmlns="http://www.w3.org/2000/svg">
                          <path d="M36.1221 48.6582C36.8815 48.4756 40.3092 46.6602 41.7647 45.6719C43.6526 44.3936 44.7178 43.5234 46.3104 41.9014C51.4678 36.6807 53.419 31.1914 53.8936 20.5781C53.9674 19.0527 53.9991 14.7881 53.978 10.1045C53.9463 2.76758 53.9358 2.17676 53.7565 1.82227C53.5034 1.31738 53.0076 0.801758 52.4803 0.511719L52.0479 0.275391L42.9248 0.275392C35.4682 0.275392 33.728 0.307619 33.3905 0.425783C32.8737 0.6084 32.2198 1.20996 31.9244 1.76856L31.6924 2.20899L31.6608 11.3828C31.6291 21.4697 31.6186 21.2441 32.2725 22.0498C32.4412 22.2647 32.8315 22.5654 33.1373 22.7158L33.6858 22.9951L38.0416 22.9951L42.3975 22.9951L42.3975 23.7793C42.3975 25.498 41.9862 27.915 41.3955 29.7197C40.0561 33.8018 37.7252 36.3799 33.3272 38.625C32.4729 39.0654 31.6397 39.5596 31.4498 39.7637C30.9647 40.2686 30.7643 40.8916 30.817 41.708C30.8592 42.3096 31.0069 42.6963 32.1143 45.0488C33.4116 47.8096 33.6541 48.1855 34.4241 48.5078C34.8987 48.7119 35.637 48.7764 36.1221 48.6582Z" />
                          <path d="M6.11524 48.3145C13.2133 45.1563 18.6238 39.7852 21.018 33.5225C21.7035 31.7393 22.3152 29.0215 22.6633 26.2178C23.1063 22.7051 23.1484 21.3838 23.1484 11.6084C23.1484 2.5957 23.1379 2.1875 22.948 1.80078C22.6949 1.27441 22.2414 0.8125 21.6824 0.511719L21.25 0.275391L12.0742 0.275392C2.97227 0.275392 2.89844 0.275392 2.42383 0.500978C1.8543 0.769533 1.43242 1.18848 1.11602 1.7793C0.894533 2.20899 0.894533 2.23047 0.862893 11.3828C0.831253 21.4697 0.820707 21.2441 1.47461 22.0498C1.64336 22.2647 2.0336 22.5654 2.33946 22.7158L2.88789 22.9951L7.29649 22.9951C11.5891 22.9951 11.7051 22.9951 11.7051 23.1992C11.7051 24.0049 11.4309 26.3789 11.2199 27.4531C10.893 29.1074 10.5449 30.1709 9.85938 31.6426C8.40391 34.7578 6.18907 36.8525 2.42383 38.7002C0.483207 39.6455 0.0613324 40.1504 0.0507868 41.5254C0.0507868 42.2666 0.0718802 42.3096 1.26368 44.834C1.92813 46.2305 2.61368 47.5625 2.78243 47.7773C3.53126 48.7012 4.78633 48.9053 6.11524 48.3145Z" />
                        </svg>
                        <div className="testimonial-bottom-area">
                          <div className="author-area">
                            <div className="author-img">
                              <img src="assets/img/home1/testimonial-author-img1.png" alt="" />
                            </div>
                            <div className="author-content">
                              <h5>Miss. Abelam</h5>
                              <span>Artist</span>
                            </div>
                          </div>
                          <div className="date-and-time-area">
                            <strong>Jan 20, 2024</strong>
                            <span>10.30 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slider-item">
                      <div className="testimonial-card">
                        <h5>Fantastic Bidding Item!</h5>
                        <p>"I purchased a beautiful painting from this site, and the quality is
                          incredible. The buying process was seamless, and the delivery was prompt.
                          Highly recommend for anyone looking to buy unique art."</p>
                        <svg className="quote" width={54} height={49} viewBox="0 0 54 49" xmlns="http://www.w3.org/2000/svg">
                          <path d="M36.1221 48.6582C36.8815 48.4756 40.3092 46.6602 41.7647 45.6719C43.6526 44.3936 44.7178 43.5234 46.3104 41.9014C51.4678 36.6807 53.419 31.1914 53.8936 20.5781C53.9674 19.0527 53.9991 14.7881 53.978 10.1045C53.9463 2.76758 53.9358 2.17676 53.7565 1.82227C53.5034 1.31738 53.0076 0.801758 52.4803 0.511719L52.0479 0.275391L42.9248 0.275392C35.4682 0.275392 33.728 0.307619 33.3905 0.425783C32.8737 0.6084 32.2198 1.20996 31.9244 1.76856L31.6924 2.20899L31.6608 11.3828C31.6291 21.4697 31.6186 21.2441 32.2725 22.0498C32.4412 22.2647 32.8315 22.5654 33.1373 22.7158L33.6858 22.9951L38.0416 22.9951L42.3975 22.9951L42.3975 23.7793C42.3975 25.498 41.9862 27.915 41.3955 29.7197C40.0561 33.8018 37.7252 36.3799 33.3272 38.625C32.4729 39.0654 31.6397 39.5596 31.4498 39.7637C30.9647 40.2686 30.7643 40.8916 30.817 41.708C30.8592 42.3096 31.0069 42.6963 32.1143 45.0488C33.4116 47.8096 33.6541 48.1855 34.4241 48.5078C34.8987 48.7119 35.637 48.7764 36.1221 48.6582Z" />
                          <path d="M6.11524 48.3145C13.2133 45.1563 18.6238 39.7852 21.018 33.5225C21.7035 31.7393 22.3152 29.0215 22.6633 26.2178C23.1063 22.7051 23.1484 21.3838 23.1484 11.6084C23.1484 2.5957 23.1379 2.1875 22.948 1.80078C22.6949 1.27441 22.2414 0.8125 21.6824 0.511719L21.25 0.275391L12.0742 0.275392C2.97227 0.275392 2.89844 0.275392 2.42383 0.500978C1.8543 0.769533 1.43242 1.18848 1.11602 1.7793C0.894533 2.20899 0.894533 2.23047 0.862893 11.3828C0.831253 21.4697 0.820707 21.2441 1.47461 22.0498C1.64336 22.2647 2.0336 22.5654 2.33946 22.7158L2.88789 22.9951L7.29649 22.9951C11.5891 22.9951 11.7051 22.9951 11.7051 23.1992C11.7051 24.0049 11.4309 26.3789 11.2199 27.4531C10.893 29.1074 10.5449 30.1709 9.85938 31.6426C8.40391 34.7578 6.18907 36.8525 2.42383 38.7002C0.483207 39.6455 0.0613324 40.1504 0.0507868 41.5254C0.0507868 42.2666 0.0718802 42.3096 1.26368 44.834C1.92813 46.2305 2.61368 47.5625 2.78243 47.7773C3.53126 48.7012 4.78633 48.9053 6.11524 48.3145Z" />
                        </svg>
                        <div className="testimonial-bottom-area">
                          <div className="author-area">
                            <div className="author-img">
                              <img src="assets/img/home1/testimonial-author-img2.png" alt="" />
                            </div>
                            <div className="author-content">
                              <h5>Mr. Harry</h5>
                              <span>Art Teacher </span>
                            </div>
                          </div>
                          <div className="date-and-time-area">
                            <strong>Jul 10, 2024</strong>
                            <span>12.25 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slider-item">
                      <div className="testimonial-card">
                        <h5>Excellent Auction Item!</h5>
                        <p>"I purchased a beautiful painting from this site, and the quality is
                          incredible. The buying process was seamless, and the delivery was prompt.
                          Highly recommend for anyone looking to buy unique art."</p>
                        <svg className="quote" width={54} height={49} viewBox="0 0 54 49" xmlns="http://www.w3.org/2000/svg">
                          <path d="M36.1221 48.6582C36.8815 48.4756 40.3092 46.6602 41.7647 45.6719C43.6526 44.3936 44.7178 43.5234 46.3104 41.9014C51.4678 36.6807 53.419 31.1914 53.8936 20.5781C53.9674 19.0527 53.9991 14.7881 53.978 10.1045C53.9463 2.76758 53.9358 2.17676 53.7565 1.82227C53.5034 1.31738 53.0076 0.801758 52.4803 0.511719L52.0479 0.275391L42.9248 0.275392C35.4682 0.275392 33.728 0.307619 33.3905 0.425783C32.8737 0.6084 32.2198 1.20996 31.9244 1.76856L31.6924 2.20899L31.6608 11.3828C31.6291 21.4697 31.6186 21.2441 32.2725 22.0498C32.4412 22.2647 32.8315 22.5654 33.1373 22.7158L33.6858 22.9951L38.0416 22.9951L42.3975 22.9951L42.3975 23.7793C42.3975 25.498 41.9862 27.915 41.3955 29.7197C40.0561 33.8018 37.7252 36.3799 33.3272 38.625C32.4729 39.0654 31.6397 39.5596 31.4498 39.7637C30.9647 40.2686 30.7643 40.8916 30.817 41.708C30.8592 42.3096 31.0069 42.6963 32.1143 45.0488C33.4116 47.8096 33.6541 48.1855 34.4241 48.5078C34.8987 48.7119 35.637 48.7764 36.1221 48.6582Z" />
                          <path d="M6.11524 48.3145C13.2133 45.1563 18.6238 39.7852 21.018 33.5225C21.7035 31.7393 22.3152 29.0215 22.6633 26.2178C23.1063 22.7051 23.1484 21.3838 23.1484 11.6084C23.1484 2.5957 23.1379 2.1875 22.948 1.80078C22.6949 1.27441 22.2414 0.8125 21.6824 0.511719L21.25 0.275391L12.0742 0.275392C2.97227 0.275392 2.89844 0.275392 2.42383 0.500978C1.8543 0.769533 1.43242 1.18848 1.11602 1.7793C0.894533 2.20899 0.894533 2.23047 0.862893 11.3828C0.831253 21.4697 0.820707 21.2441 1.47461 22.0498C1.64336 22.2647 2.0336 22.5654 2.33946 22.7158L2.88789 22.9951L7.29649 22.9951C11.5891 22.9951 11.7051 22.9951 11.7051 23.1992C11.7051 24.0049 11.4309 26.3789 11.2199 27.4531C10.893 29.1074 10.5449 30.1709 9.85938 31.6426C8.40391 34.7578 6.18907 36.8525 2.42383 38.7002C0.483207 39.6455 0.0613324 40.1504 0.0507868 41.5254C0.0507868 42.2666 0.0718802 42.3096 1.26368 44.834C1.92813 46.2305 2.61368 47.5625 2.78243 47.7773C3.53126 48.7012 4.78633 48.9053 6.11524 48.3145Z" />
                        </svg>
                        <div className="testimonial-bottom-area">
                          <div className="author-area">
                            <div className="author-img">
                              <img src="assets/img/home1/testimonial-author-img3.png" alt="" />
                            </div>
                            <div className="author-content">
                              <h5>Luke Jane</h5>
                              <span>Art Critic</span>
                            </div>
                          </div>
                          <div className="date-and-time-area">
                            <strong>Aug 23, 2024</strong>
                            <span>12.25 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slider-item">
                      <div className="testimonial-card">
                        <h5>Wonderful Bidding Deal</h5>
                        <p>"I purchased a beautiful painting from this site, and the quality is
                          incredible. The buying process was seamless, and the delivery was prompt.
                          Highly recommend for anyone looking to buy unique art."</p>
                        <svg className="quote" width={54} height={49} viewBox="0 0 54 49" xmlns="http://www.w3.org/2000/svg">
                          <path d="M36.1221 48.6582C36.8815 48.4756 40.3092 46.6602 41.7647 45.6719C43.6526 44.3936 44.7178 43.5234 46.3104 41.9014C51.4678 36.6807 53.419 31.1914 53.8936 20.5781C53.9674 19.0527 53.9991 14.7881 53.978 10.1045C53.9463 2.76758 53.9358 2.17676 53.7565 1.82227C53.5034 1.31738 53.0076 0.801758 52.4803 0.511719L52.0479 0.275391L42.9248 0.275392C35.4682 0.275392 33.728 0.307619 33.3905 0.425783C32.8737 0.6084 32.2198 1.20996 31.9244 1.76856L31.6924 2.20899L31.6608 11.3828C31.6291 21.4697 31.6186 21.2441 32.2725 22.0498C32.4412 22.2647 32.8315 22.5654 33.1373 22.7158L33.6858 22.9951L38.0416 22.9951L42.3975 22.9951L42.3975 23.7793C42.3975 25.498 41.9862 27.915 41.3955 29.7197C40.0561 33.8018 37.7252 36.3799 33.3272 38.625C32.4729 39.0654 31.6397 39.5596 31.4498 39.7637C30.9647 40.2686 30.7643 40.8916 30.817 41.708C30.8592 42.3096 31.0069 42.6963 32.1143 45.0488C33.4116 47.8096 33.6541 48.1855 34.4241 48.5078C34.8987 48.7119 35.637 48.7764 36.1221 48.6582Z" />
                          <path d="M6.11524 48.3145C13.2133 45.1563 18.6238 39.7852 21.018 33.5225C21.7035 31.7393 22.3152 29.0215 22.6633 26.2178C23.1063 22.7051 23.1484 21.3838 23.1484 11.6084C23.1484 2.5957 23.1379 2.1875 22.948 1.80078C22.6949 1.27441 22.2414 0.8125 21.6824 0.511719L21.25 0.275391L12.0742 0.275392C2.97227 0.275392 2.89844 0.275392 2.42383 0.500978C1.8543 0.769533 1.43242 1.18848 1.11602 1.7793C0.894533 2.20899 0.894533 2.23047 0.862893 11.3828C0.831253 21.4697 0.820707 21.2441 1.47461 22.0498C1.64336 22.2647 2.0336 22.5654 2.33946 22.7158L2.88789 22.9951L7.29649 22.9951C11.5891 22.9951 11.7051 22.9951 11.7051 23.1992C11.7051 24.0049 11.4309 26.3789 11.2199 27.4531C10.893 29.1074 10.5449 30.1709 9.85938 31.6426C8.40391 34.7578 6.18907 36.8525 2.42383 38.7002C0.483207 39.6455 0.0613324 40.1504 0.0507868 41.5254C0.0507868 42.2666 0.0718802 42.3096 1.26368 44.834C1.92813 46.2305 2.61368 47.5625 2.78243 47.7773C3.53126 48.7012 4.78633 48.9053 6.11524 48.3145Z" />
                        </svg>
                        <div className="testimonial-bottom-area">
                          <div className="author-area">
                            <div className="author-img">
                              <img src="assets/img/home1/testimonial-author-img4.png" alt="" />
                            </div>
                            <div className="author-content">
                              <h5>Miss. Abid</h5>
                              <span>Exhibition Manager</span>
                            </div>
                          </div>
                          <div className="date-and-time-area">
                            <strong>Jan 20, 2024</strong>
                            <span>10.30 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slider-item">
                      <div className="testimonial-card">
                        <h5>Excellent Item for Auctions!</h5>
                        <p>"I purchased a beautiful painting from this site, and the quality is
                          incredible. The buying process was seamless, and the delivery was prompt.
                          Highly recommend for anyone looking to buy unique art."</p>
                        <svg className="quote" width={54} height={49} viewBox="0 0 54 49" xmlns="http://www.w3.org/2000/svg">
                          <path d="M36.1221 48.6582C36.8815 48.4756 40.3092 46.6602 41.7647 45.6719C43.6526 44.3936 44.7178 43.5234 46.3104 41.9014C51.4678 36.6807 53.419 31.1914 53.8936 20.5781C53.9674 19.0527 53.9991 14.7881 53.978 10.1045C53.9463 2.76758 53.9358 2.17676 53.7565 1.82227C53.5034 1.31738 53.0076 0.801758 52.4803 0.511719L52.0479 0.275391L42.9248 0.275392C35.4682 0.275392 33.728 0.307619 33.3905 0.425783C32.8737 0.6084 32.2198 1.20996 31.9244 1.76856L31.6924 2.20899L31.6608 11.3828C31.6291 21.4697 31.6186 21.2441 32.2725 22.0498C32.4412 22.2647 32.8315 22.5654 33.1373 22.7158L33.6858 22.9951L38.0416 22.9951L42.3975 22.9951L42.3975 23.7793C42.3975 25.498 41.9862 27.915 41.3955 29.7197C40.0561 33.8018 37.7252 36.3799 33.3272 38.625C32.4729 39.0654 31.6397 39.5596 31.4498 39.7637C30.9647 40.2686 30.7643 40.8916 30.817 41.708C30.8592 42.3096 31.0069 42.6963 32.1143 45.0488C33.4116 47.8096 33.6541 48.1855 34.4241 48.5078C34.8987 48.7119 35.637 48.7764 36.1221 48.6582Z" />
                          <path d="M6.11524 48.3145C13.2133 45.1563 18.6238 39.7852 21.018 33.5225C21.7035 31.7393 22.3152 29.0215 22.6633 26.2178C23.1063 22.7051 23.1484 21.3838 23.1484 11.6084C23.1484 2.5957 23.1379 2.1875 22.948 1.80078C22.6949 1.27441 22.2414 0.8125 21.6824 0.511719L21.25 0.275391L12.0742 0.275392C2.97227 0.275392 2.89844 0.275392 2.42383 0.500978C1.8543 0.769533 1.43242 1.18848 1.11602 1.7793C0.894533 2.20899 0.894533 2.23047 0.862893 11.3828C0.831253 21.4697 0.820707 21.2441 1.47461 22.0498C1.64336 22.2647 2.0336 22.5654 2.33946 22.7158L2.88789 22.9951L7.29649 22.9951C11.5891 22.9951 11.7051 22.9951 11.7051 23.1992C11.7051 24.0049 11.4309 26.3789 11.2199 27.4531C10.893 29.1074 10.5449 30.1709 9.85938 31.6426C8.40391 34.7578 6.18907 36.8525 2.42383 38.7002C0.483207 39.6455 0.0613324 40.1504 0.0507868 41.5254C0.0507868 42.2666 0.0718802 42.3096 1.26368 44.834C1.92813 46.2305 2.61368 47.5625 2.78243 47.7773C3.53126 48.7012 4.78633 48.9053 6.11524 48.3145Z" />
                        </svg>
                        <div className="testimonial-bottom-area">
                          <div className="author-area">
                            <div className="author-img">
                              <img src="assets/img/home1/testimonial-author-img5.png" alt="" />
                            </div>
                            <div className="author-content">
                              <h5>Mrs. Lucas</h5>
                              <span>Art Teacher</span>
                            </div>
                          </div>
                          <div className="date-and-time-area">
                            <strong>Jul 10, 2024</strong>
                            <span>12.25 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialSection