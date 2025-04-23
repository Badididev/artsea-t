import Link from 'next/link'
import React from 'react'

const ArtistSection = () => {
  return (
    <>
     <div className="home2-artist-section mb-120">
        <div className="container">
          <div className="row mb-50 align-items-center justify-content-between flex-wrap gap-3 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-12">
              <div className="section-title two">
                <h3>Feature Artists</h3>
                <div className="section-content">
                  <p>Join us for an exhilarating live auction experience where art meets excitement. </p>
                  <Link href="/artists" className="view-all-btn">View All</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="artist-card style-2 style-2">
                <Link href="/artists/portfolio"><img src="assets/img/home1/artist-img1.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Frida Kahlo</Link></h6>
                  <span>1907-1954 (Mexico)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="artist-card style-2 style-2">
                <Link href="/artists/portfolio"><img src="assets/img/home1/artist-img2.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Pablo Picasso</Link></h6>
                  <span>1881-1973 (Spain)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="artist-card style-2">
                <Link href="/artists/portfolio"><img src="assets/img/home1/artist-img3.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Leonardo da Vinci</Link></h6>
                  <span>1452-1519 (Italy)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="700ms" data-wow-duration="1500ms">
              <div className="artist-card style-2">
                <Link href="/artists/portfolio"><img src="assets/img/home1/artist-img4.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Andy Warhol</Link></h6>
                  <span>1928-1987 (USA)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="artist-card style-2">
                <Link href="/artists/portfolio"><img src="assets/img/home1/artist-img6.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Henri Matisse</Link></h6>
                  <span>1869-1954 (France)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="700ms" data-wow-duration="1500ms">
              <div className="artist-card style-2">
                <Link href="/artists/portfolio"><img src="assets/img/home1/artist-img7.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Diego Rivera</Link></h6>
                  <span>1886-1957 (Mexico)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="artist-card style-2">
                <Link href="/artists/portfolio"><img src="assets/img/home1/artist-img8.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Joan Miró</Link></h6>
                  <span>1893-1983 (Spain)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="artist-card style-2">
                <Link href="/artists/portfolio"><img src="assets/img/home1/artist-img9.png" alt="" /></Link>
                <div className="artist-content">
                  <h6><Link href="/artists/portfolio">Yayoi Kusama</Link></h6>
                  <span>1929 (Japan)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default ArtistSection