import Footer from '@/components/common/Footer'
import Header1 from '@/components/common/Header1'
import Link from 'next/link'
import React from 'react'

const page = () => {
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
                  <li>Wishlist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wishlist-section mb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="dashboard-order-content">
                <div className="dashboard-order-table">
                  <table className="mb-0">
                    <thead>
                      <tr>
                        <th>Artwork ID</th>
                        <th>Image</th>
                        <th>Bid Amount</th>
                        <th>Place A Bid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Bidding ID"><span className="table-text">Nft_HvO253gT</span></td>
                        <td data-label="Image"><img src="assets/img/inner-page/order-image.png" alt="" />
                        </td>
                        <td data-label="Bid Amount"><span className="table-text">$2000.00</span></td>
                        <td data-label="Place A Bid">
                          <a href="#" className="primary-btn1 btn-hover">
                            <span>Bidding Start</span>
                            <strong style={{ top: "50px", left: "200px" }} />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Bidding ID"><span className="table-text">Nft_HvO253gT</span></td>
                        <td data-label="Image"><img src="assets/img/inner-page/order-image2.png" alt="" />
                        </td>
                        <td data-label="Bid Amount"><span className="table-text">$3000.00</span></td>
                        <td data-label="Place A Bid">
                          <a href="#" className="primary-btn1 btn-hover">
                            <span>Bidding Start</span>
                            <strong style={{ top: "50px", left: "200px" }} />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Bidding ID"><span className="table-text">Nft_HvO253gT</span></td>
                        <td data-label="Image"><img src="assets/img/inner-page/order-image3.png" alt="" />
                        </td>
                        <td data-label="Bid Amount"><span className="table-text">$4000.00</span></td>
                        <td data-label="Place A Bid">
                          <a href="#" className="primary-btn1 btn-hover">
                            <span>Bidding Start</span>
                            <strong style={{ top: "50px", left: "200px" }} />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Bidding ID"><span className="table-text">Nft_HvO253gT</span></td>
                        <td data-label="Image"><img src="assets/img/inner-page/order-image4.png" alt="" />
                        </td>
                        <td data-label="Bid Amount"><span className="table-text">$5000.00</span></td>
                        <td data-label="Place A Bid">
                          <a href="#" className="primary-btn1 btn-hover">
                            <span>Bidding Start</span>
                            <strong style={{ top: "50px", left: "200px" }} />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Bidding ID"><span className="table-text">Nft_HvO253gT</span></td>
                        <td data-label="Image"><img src="assets/img/inner-page/order-image5.png" alt="" />
                        </td>
                        <td data-label="Bid Amount"><span className="table-text">$8000.00</span></td>
                        <td data-label="Place A Bid">
                          <a href="#" className="primary-btn1 btn-hover">
                            <span>Bidding Start</span>
                            <strong style={{ top: "50px", left: "200px" }} />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Bidding ID"><span className="table-text">Nft_HvO253gT</span></td>
                        <td data-label="Image"><img src="assets/img/inner-page/order-image6.png" alt="" />
                        </td>
                        <td data-label="Bid Amount"><span className="table-text">$7000.00</span></td>
                        <td data-label="Place A Bid">
                          <a href="#" className="primary-btn1 btn-hover">
                            <span>Bidding Start</span>
                            <strong style={{ top: "50px", left: "200px" }} />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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