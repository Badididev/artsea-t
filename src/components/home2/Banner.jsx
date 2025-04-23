"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

const Banner = () => {

  return (
    <>
        <div className="home2-search-bar-section">
        <div className="container">
          <div className="search-bar-wrap">
            <div className="search-area">
              <form>
                <div className="form-inner">
                  <input type="text" placeholder="Search your product here" />
                  <button type="submit">
                    <svg width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.20349 0.448242C5.41514 0.45124 3.70089 1.16299 2.43633 2.42755C1.17178 3.6921 0.460029 5.40635 0.457031 7.1947C0.458526 8.98456 1.16943 10.7008 2.43399 11.9675C3.69855 13.2342 5.41364 13.948 7.20349 13.9525C8.79089 13.9525 10.2536 13.3941 11.4101 12.47L15.0578 16.1179C15.2002 16.2503 15.3882 16.3223 15.5825 16.3189C15.7768 16.3155 15.9622 16.2369 16.0998 16.0997C16.2374 15.9625 16.3165 15.7773 16.3204 15.583C16.3243 15.3887 16.2528 15.2005 16.1208 15.0578L12.4731 11.407C13.4325 10.2138 13.9556 8.72863 13.9556 7.19753C13.9556 3.47848 10.9225 0.448242 7.20349 0.448242ZM7.20349 1.9506C10.1118 1.9506 12.4533 4.28919 12.4533 7.1947C12.4533 10.1002 10.1118 12.453 7.20349 12.453C4.29514 12.453 1.95656 10.1087 1.95656 7.20037C1.95656 4.29202 4.29514 1.9506 7.20349 1.9506Z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <Link href="/contact">
              <span>Need Help?</span>
              <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.9568 0.865399C11.2329 2.58933 8.28031 2.77911 6.76201 1.26081L6.13976 0.638559L4.72555 2.05277L5.3478 2.67503C6.45168 3.77891 8.03724 4.26421 9.66101 4.16122L0.93602 12.8862L2.18053 14.1307L10.9055 5.40573C10.8025 7.0295 11.2878 8.61506 12.3917 9.71894L13.014 10.3412L14.4282 8.92698L13.8059 8.30473C12.2883 6.78705 12.4774 3.83383 14.2013 2.10991L14.9084 1.4028L13.6639 0.158292L12.9568 0.865399Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>  
      <div className="home2-banner-section mb-120">
        <div className="container">
          <div className="banner-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="banner-content">
                  <span>Explore Exclusive Collections</span>
                  <h1>Discover, Bid, and Collect Art from Around the World</h1>
                  <p>Unlock a world of imagination with our curated collection of original artworks.</p>
                  <Link href="/auction" className="primary-btn1 btn-hover">
                    <span>Explore Auctions</span>
                    <strong style={{top: '48px', left: '69.5px'}} />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-img">
                  <img src="assets/img/home2/home2-banner-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default Banner