import Footer from '@/components/common/Footer'
import Header1 from '@/components/common/Header1'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
  <Header1/>
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
              <li>Resources</li>
              <li>Article</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="article-standard-section mb-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="row gy-5">
            <div className="col-lg-12">
              <div className="article-stndard-card">
                <div className="article-standard-image">
                  <a href="#"> <img src="/assets/img/inner-page/article-card-image.jpg" alt="" /></a>
                  <div className="date">
                    <span><a href="#">31 July, 2024</a></span>
                  </div>
                </div>
                <div className="article-standard-content">
                  <h6>Fashion Trends</h6>
                  <h3><a href="#">How Art Reflects and Influences Modern Culture</a></h3>
                  <p>Art mirrors modern culture by capturing societal values, trends, and emotions,
                    while also shaping public perception and discourse. It serves as both a
                    reflection and a catalyst, influencing thought, challenging norms, and inspiring
                    change across various cultural landscapes. </p>
                  <Link href="/article/details" className="primary-btn1 btn-hover">
                    <span>Read Article</span>
                  <strong style={{top: '48px', left: '69.5px'}} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="article-stndard-card">
                <div className="article-standard-image">
                  <a href="#"> <img src="/assets/img/inner-page/article-card-image2.jpg" alt="" /></a>
                  <div className="date">
                    <span><a href="#">31 July, 2024</a></span>
                  </div>
                </div>
                <div className="article-standard-content">
                  <h6>Fashion Trends</h6>
                  <h3><a href="#">Eco-Friendly Art Practices for a Sustainable Future</a></h3>
                  <p>Art mirrors modern culture by capturing societal values, trends, and emotions,
                    while also shaping public perception and discourse. It serves as both a
                    reflection and a catalyst, influencing thought, challenging norms, and inspiring
                    change across various cultural landscapes. </p>
                  <Link href="/article/details" className="primary-btn1 btn-hover">
                    <span>Read Article</span>
                  <strong style={{top: '48px', left: '69.5px'}} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="article-stndard-card">
                <div className="article-standard-image">
                  <a href="#"> <img src="/assets/img/inner-page/article-card-image3.jpg" alt="" /></a>
                  <div className="date">
                    <span><a href="#">31 July, 2024</a></span>
                  </div>
                </div>
                <div className="article-standard-content">
                  <h6>Fashion Trends</h6>
                  <h3><a href="#">Insights into the Creative Process of Artists</a></h3>
                  <p>Art mirrors modern culture by capturing societal values, trends, and emotions,
                    while also shaping public perception and discourse. It serves as both a
                    reflection and a catalyst, influencing thought, challenging norms, and inspiring
                    change across various cultural landscapes. </p>
                  <Link href="/article/details" className="primary-btn1 btn-hover">
                    <span>Read Article</span>
                  <strong style={{top: '48px', left: '69.5px'}} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
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
  <Footer/>
</div>

  )
}

export default page