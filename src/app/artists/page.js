import Footer from '@/components/common/Footer'
import Header1 from '@/components/common/Header1'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header1 />
      <div className="breadcrumb-section2" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28)), url(/assets/img/inner-page/breadcrumb-image3.jpg)' }}>
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
                  <li>Artists Portfolio</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h1>Feature Artists</h1>
                <p>An art catalog is a curated assembly of artworks gathered by an individual, institution, or
                  group, often reflecting the collector's interests, tastes, or a specific theme.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="artist-grid-section pt-120 mb-120">
        <div className="container">
          <div className="row g-3 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
            <div className="col wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="artist-card">
                <Link href="/artists/portfolio"><img src="/assets/img/home1/artist-img1.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Frida Kahlo</Link></h6>
                  <span>1907-1954 (Mexico)</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="artist-card">
                <Link href="/artists/portfolio"><img src="/assets/img/home1/artist-img2.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Pablo Picasso</Link></h6>
                  <span>1881-1973 (Spain)</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="artist-card">
                <Link href="/artists/portfolio"><img src="/assets/img/home1/artist-img3.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Leonardo da Vinci</Link></h6>
                  <span>1452-1519 (Italy)</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="700ms" data-wow-duration="1500ms">
              <div className="artist-card">
                <Link href="/artists/portfolio"><img src="/assets/img/home1/artist-img4.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Andy Warhol</Link></h6>
                  <span>1928-1987 (USA)</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="artist-card">
                <Link href="/artists/portfolio"><img src="/assets/img/home1/artist-img5.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Gustav Klimt</Link></h6>
                  <span>1862-1918 (Austria)</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="artist-card">
                <Link href="/artists/portfolio"><img src="/assets/img/home1/artist-img6.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Henri Matisse</Link></h6>
                  <span>1869-1954 (France)</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="700ms" data-wow-duration="1500ms">
              <div className="artist-card">
                <Link href="/artists/portfolio"><img src="/assets/img/home1/artist-img7.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Diego Rivera</Link></h6>
                  <span>1886-1957 (Mexico)</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="artist-card">
                <Link href="/artists/portfolio"><img src="/assets/img/home1/artist-img8.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Joan Miró</Link></h6>
                  <span>1893-1983 (Spain)</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="artist-card">
                <Link href="/artists/portfolio"><img src="/assets/img/home1/artist-img9.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Yayoi Kusama</Link></h6>
                  <span>1929 (Japan)</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="artist-card">
                <Link href="/artists/portfolio"><img src="/assets/img/home1/artist-img10.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Mark Jon</Link></h6>
                  <span>1907-1954 (Mexico)</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="artist-card">
                <Link href="/artists/portfolio"><img src="/assets/img/inner-page/artist-img11.jpg" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Salvador Dalí</Link></h6>
                  <span>1904- 1989 (Spain)</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="artist-card">
                <Link href="/artists/portfolio"><img src="/assets/img/inner-page/artist-img12.jpg" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Edvard Munch</Link></h6>
                  <span>1863-1944 (Norway)</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="artist-card">
                <Link href="/artists/portfolio"><img src="/assets/img/inner-page/artist-img13.jpg" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Claude Monet</Link></h6>
                  <span>1840-1926 (France)</span>
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

export default page