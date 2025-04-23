import Link from 'next/link'
import React from 'react'

const CategorySection = () => {
  return (
    <>
      <div className="home2-category-section mb-120">
        <div className="container">
          <div className="row mb-50 align-items-center justify-content-between flex-wrap gap-3 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-12">
              <div className="section-title two">
                <h3>Artwork Category</h3>
                <div className="section-content">
                  <p>Join us for an exhilarating live auction experience where art meets excitement. </p>
                  <Link href="/general-art-grid" className="view-all-btn">View All</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-xxl-3 g-lg-2 g-3 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-6">
              <div className="row g-xxl-3 g-lg-2 g-md-3 g-sm-2 g-3">
                <div className="col-sm-6">
                  <div className="row g-xxl-3 g-lg-2 g-md-3 g-sm-2 g-3">
                    <div className="col-lg-12">
                      <div className="category-card">
                        <img src="assets/img/home2/category-img1.jpg" alt="" />
                        <div className="category-content">
                          <h4><Link href="/general-art-grid">Natura</Link></h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="category-card">
                        <img src="assets/img/home2/category-img2.jpg" alt="" />
                        <div className="category-content">
                          <h4><Link href="/general-art-grid">Streets Art</Link></h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="category-card">
                    <img src="assets/img/home2/category-img3.jpg" alt="" />
                    <div className="category-content">
                      <h4><Link href="/general-art-grid">Oil Painting</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-xxl-3 g-lg-2 g-md-3 g-sm-2 g-3">
                <div className="col-sm-8">
                  <div className="category-card">
                    <img src="assets/img/home2/category-img4.jpg" alt="" />
                    <div className="category-content">
                      <h4><Link href="/general-art-grid">Sculptures</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="category-card">
                    <img src="assets/img/home2/category-img5.jpg" alt="" />
                    <div className="category-content">
                      <h4><Link href="/general-art-grid">Print</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="category-card">
                    <img src="assets/img/home2/category-img6.jpg" alt="" />
                    <div className="category-content">
                      <h4><Link href="/general-art-grid">Abstract Art</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="category-card">
                    <img src="assets/img/home2/category-img7.jpg" alt="" />
                    <div className="category-content">
                      <h4><Link href="/general-art-grid">Modern Art</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default CategorySection