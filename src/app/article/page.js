import Footer from '@/components/common/Footer'
import Header1 from '@/components/common/Header1'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
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
                    <li>Resources</li>
                    <li>Article</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="articel-section mb-120 style-2">
          <div className="container">
            <div className="row justify-content-center gy-5">
              <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="article-card">
                  <Link href="/article/details" className="article-img">
                    <img src="/assets/img/home1/article-img1.jpg" alt="" />
                  </Link>
                  <div className="article-content-wrap">
                    <div className="article-content">
                      <div className="blog-meta">
                        <Link href="/article" className="blog-date">31 July, 2025</Link>
                        <div className="blog-comment">
                          <span>2 Comments</span>
                        </div>
                      </div>
                      <h6><Link href="/article/details">The Last Light of a Forgotten City
                        Breaking</Link></h6>
                      <Link href="/article/details" className="read-btn">Read Article</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                <div className="article-card">
                  <Link href="/article/details" className="article-img">
                    <img src="/assets/img/home1/article-img3.jpg" alt="" />
                  </Link>
                  <div className="article-content-wrap">
                    <div className="article-content">
                      <div className="blog-meta">
                        <Link href="/article" className="blog-date">18 July, 2025</Link>
                        <div className="blog-comment">
                          <span>3 Comments</span>
                        </div>
                      </div>
                      <h6><Link href="/article/details">How Art Reflects and Influences
                        Modern Culture</Link></h6>
                      <Link href="/article/details" className="read-btn">Read Article</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="article-card">
                  <Link href="/article/details" className="article-img">
                    <img src="/assets/img/home1/article-img2.jpg" alt="" />
                  </Link>
                  <div className="article-content-wrap">
                    <div className="article-content">
                      <div className="blog-meta">
                        <Link href="/article" className="blog-date">25 July, 2025</Link>
                        <div className="blog-comment">
                          <span>6 Comments</span>
                        </div>
                      </div>
                      <h6><Link href="/article/details">Art as Therapy: Creativity for Mental
                        Wellness</Link></h6>
                      <Link href="/article/details" className="read-btn">Read Article</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                <div className="article-card">
                  <Link href="/article/details" className="article-img">
                    <img src="/assets/img/home1/article-img5.jpg" alt="" />
                  </Link>
                  <div className="article-content-wrap">
                    <div className="article-content">
                      <div className="blog-meta">
                        <Link href="/article" className="blog-date">12 July, 2025</Link>
                        <div className="blog-comment">
                          <span>4 Comments</span>
                        </div>
                      </div>
                      <h6><Link href="/article/details">Spotlighting Emerging Artists Making
                        Their Mark</Link></h6>
                      <Link href="/article/details" className="read-btn">Read Article</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                <div className="article-card">
                  <Link href="/article/details" className="article-img">
                    <img src="/assets/img/home1/article-img6.jpg" alt="" />
                  </Link>
                  <div className="article-content-wrap">
                    <div className="article-content">
                      <div className="blog-meta">
                        <Link href="/article" className="blog-date">22 July, 2025</Link>
                        <div className="blog-comment">
                          <span>2 Comments</span>
                        </div>
                      </div>
                      <h6><Link href="/article/details">Understanding Color Psychology in
                        Artistic</Link></h6>
                      <Link href="/article/details" className="read-btn">Read Article</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="article-card">
                  <Link href="/article/details" className="article-img">
                    <img src="/assets/img/home1/article-img7.jpg" alt="" />
                  </Link>
                  <div className="article-content-wrap">
                    <div className="article-content">
                      <div className="blog-meta">
                        <Link href="/article" className="blog-date">24 July, 2025</Link>
                        <div className="blog-comment">
                          <span>5 Comments</span>
                        </div>
                      </div>
                      <h6><Link href="/article/details">The Impact of Technology on Today’s
                        Art</Link></h6>
                      <Link href="/article/details" className="read-btn">Read Article</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                <div className="article-card">
                  <Link href="/article/details" className="article-img">
                    <img src="/assets/img/inner-page/article-img8.jpg" alt="" />
                  </Link>
                  <div className="article-content-wrap">
                    <div className="article-content">
                      <div className="blog-meta">
                        <Link href="/article" className="blog-date">15 July, 2025</Link>
                        <div className="blog-comment">
                          <span>3 Comments</span>
                        </div>
                      </div>
                      <h6><Link href="/article/details">Eco-Friendly Art Practices for a Sustainable
                        Future</Link></h6>
                      <Link href="/article/details" className="read-btn">Read Article</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="article-card">
                  <Link href="/article/details" className="article-img">
                    <img src="/assets/img/inner-page/article-img9.jpg" alt="" />
                  </Link>
                  <div className="article-content-wrap">
                    <div className="article-content">
                      <div className="blog-meta">
                        <Link href="/article" className="blog-date">15 July, 2025</Link>
                        <div className="blog-comment">
                          <span>3 Comments</span>
                        </div>
                      </div>
                      <h6><Link href="/article/details">How Artists Tell Stories Through Their Work</Link></h6>
                      <Link href="/article/details" className="read-btn">Read Article</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="article-card">
                  <Link href="/article/details" className="article-img">
                    <img src="/assets/img/home1/article-img4.jpg" alt="" />
                  </Link>
                  <div className="article-content-wrap">
                    <div className="article-content">
                      <div className="blog-meta">
                        <Link href="/article" className="blog-date">15 July, 2025</Link>
                        <div className="blog-comment">
                          <span>3 Comments</span>
                        </div>
                      </div>
                      <h6><Link href="/article/details">Insights into the Creative Process of
                        Artists</Link></h6>
                      <Link href="/article/details" className="read-btn">Read Article</Link>
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
        <Footer />
      </div>

    </>
  )
}

export default page