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
                  <li>Resources</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-faq-section mb-120 style-2">
        <div className="container">
          <div className="row mb-35">
            <div className="nav-area style-2">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul className="nav nav-tabs3" id="myTab5" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="bidding-tab" data-bs-toggle="tab" data-bs-target="#bidding" type="button" role="tab" aria-controls="bidding" aria-selected="false" tabIndex={-1}>Bidding</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="sell-tab" data-bs-toggle="tab" data-bs-target="#sell" type="button" role="tab" aria-controls="sell" aria-selected="false" tabIndex={-1}>Sell</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="others-tab" data-bs-toggle="tab" data-bs-target="#others" type="button" role="tab" aria-controls="others" aria-selected="false" tabIndex={-1}>Others</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="myTabContent5">
                <div className="tab-pane fade show active" id="bidding" role="tabpanel">
                  <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                      <div className="faq-wrap">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <h2 className="accordion-header" id="headingOne">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is an art auction?
                              </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                An art auction is a public sale where artwork is sold to the
                                highest bidder.
                                Auctions can be held in person, online, or as a combination of
                                both.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <h2 className="accordion-header" id="headingTwo">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How do I participate in an art auction?
                              </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                To participate in an art auction, start by registering with the
                                auction house,
                                either online or in person. Review the auction catalog to
                                identify Bidding of
                                interest.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item wow animate fadeInDown" data-wow-delay="500ms" data-wow-duration="1500ms">
                            <h2 className="accordion-header" id="headingThree">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What is a reserve price?
                              </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                A reserve price is the minimum amount a seller is willing to
                                accept for an item
                                at auction. If bidding does not reach this price, the item will
                                not be sold.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <h2 className="accordion-header" id="headingFour">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What is a buyer’s premium?
                              </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                A buyer’s premium is an additional fee charged by auction houses
                                on top of the
                                winning bid price. It’s typically a percentage of the final bid
                                and is paid by
                                the buyer to cover the auction house's costs and services.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item wow animate fadeInDown" data-wow-delay="700ms" data-wow-duration="1500ms">
                            <h2 className="accordion-header" id="headingFive">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                How do I know if the artwork is authentic?
                              </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                To verify an artwork's authenticity, check for certificates of
                                authenticity from
                                the artist or gallery, provenance records detailing the
                                artwork's history, and
                                any signatures or markings by the artist.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <h2 className="accordion-header" id="headingSix">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                What happens if I win a bid at an art auction?
                              </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                If you win a bid at an art auction, you’ll be required to
                                complete the payment
                                within a specified period. Once payment is received, ownership
                                of the artwork is
                                transferred to you, and arrangements for shipping or pickup will
                                be made
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <h2 className="accordion-header" id="headingSeven">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                Can I return or exchange an artwork after purchasing it at an
                                auction?
                              </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                Yes, the return or exchange of artwork after purchasing at an
                                auction depends on
                                the auction house's specific policies.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <h2 className="accordion-header" id="headingEight">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                What types of payment methods are accepted at art auctions?
                              </button>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                At art auctions, a variety of payment methods are typically
                                accepted. Common
                                options include credit and debit cards, wire transfers, and
                                personal or
                                cashier’s checks.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <h2 className="accordion-header" id="headingNine">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                Can I inspect the artwork before the auction?
                              </button>
                            </h2>
                            <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                Yes, you are welcome to inspect the artwork before the auction.
                                We believe that
                                potential bidders should have the opportunity to closely examine
                                the pieces they
                                are interested in.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <h2 className="accordion-header" id="headingTen">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                How is artwork shipped after an online auction?
                              </button>
                            </h2>
                            <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                After winning an artwork in an online auction, the shipping
                                process typically
                                involves several steps to ensure safe delivery.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="sell" role="tabpanel">
                  <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                      <div className="faq-wrap">
                        <div className="accordion" id="accordionExample2">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="sellheadingOne">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#sellcollapseOne" aria-expanded="true" aria-controls="sellcollapseOne">
                                What is an art auction?
                              </button>
                            </h2>
                            <div id="sellcollapseOne" className="accordion-collapse collapse show" aria-labelledby="sellheadingOne" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                An art auction is a public sale where artwork is sold to the
                                highest bidder.
                                Auctions can be held in person, online, or as a combination of
                                both.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="sellheadingTwo">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sellcollapseTwo" aria-expanded="false" aria-controls="sellcollapseTwo">
                                How do I participate in an art auction?
                              </button>
                            </h2>
                            <div id="sellcollapseTwo" className="accordion-collapse collapse" aria-labelledby="sellheadingTwo" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                To participate in an art auction, start by registering with the auction house, either online or in person. Review the auction catalog to identify Bidding of interest.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="sellheadingThree">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sellcollapseThree" aria-expanded="false" aria-controls="sellcollapseThree">
                                What is a reserve price?
                              </button>
                            </h2>
                            <div id="sellcollapseThree" className="accordion-collapse collapse" aria-labelledby="sellheadingThree" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                A reserve price is the minimum amount a seller is willing to
                                accept for an item
                                at auction. If bidding does not reach this price, the item will
                                not be sold.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="sellheadingFour">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sellcollapseFour" aria-expanded="false" aria-controls="sellcollapseFour">
                                What is a buyer’s premium?
                              </button>
                            </h2>
                            <div id="sellcollapseFour" className="accordion-collapse collapse" aria-labelledby="sellheadingFour" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                A buyer’s premium is an additional fee charged by auction houses
                                on top of the
                                winning bid price. It’s typically a percentage of the final bid
                                and is paid by
                                the buyer to cover the auction house's costs and services.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="sellheadingFive">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sellcollapseFive" aria-expanded="false" aria-controls="sellcollapseFive">
                                How do I know if the artwork is authentic?
                              </button>
                            </h2>
                            <div id="sellcollapseFive" className="accordion-collapse collapse" aria-labelledby="sellheadingFive" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                To verify an artwork's authenticity, check for certificates of
                                authenticity from
                                the artist or gallery, provenance records detailing the
                                artwork's history, and
                                any signatures or markings by the artist.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="sellheadingSix">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sellcollapseSix" aria-expanded="false" aria-controls="sellcollapseSix">
                                What happens if I win a bid at an art auction?
                              </button>
                            </h2>
                            <div id="sellcollapseSix" className="accordion-collapse collapse" aria-labelledby="sellheadingSix" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                If you win a bid at an art auction, you’ll be required to
                                complete the payment
                                within a specified period. Once payment is received, ownership
                                of the artwork is
                                transferred to you, and arrangements for shipping or pickup will
                                be made
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="sellheadingSeven">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sellcollapseSeven" aria-expanded="false" aria-controls="sellcollapseSeven">
                                Can I return or exchange an artwork after purchasing it at an
                                auction?
                              </button>
                            </h2>
                            <div id="sellcollapseSeven" className="accordion-collapse collapse" aria-labelledby="sellheadingSeven" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                Yes, the return or exchange of artwork after purchasing at an
                                auction depends on
                                the auction house's specific policies.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="sellheadingEight">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sellcollapseEight" aria-expanded="false" aria-controls="sellcollapseEight">
                                What types of payment methods are accepted at art auctions?
                              </button>
                            </h2>
                            <div id="sellcollapseEight" className="accordion-collapse collapse" aria-labelledby="sellheadingEight" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                At art auctions, a variety of payment methods are typically
                                accepted. Common
                                options include credit and debit cards, wire transfers, and
                                personal or
                                cashier’s checks.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="sellheadingNine">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sellcollapseNine" aria-expanded="false" aria-controls="sellcollapseNine">
                                Can I inspect the artwork before the auction?
                              </button>
                            </h2>
                            <div id="sellcollapseNine" className="accordion-collapse collapse" aria-labelledby="sellheadingNine" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                Yes, you are welcome to inspect the artwork before the auction.
                                We believe that
                                potential bidders should have the opportunity to closely examine
                                the pieces they
                                are interested in.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="sellheadingTen">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sellcollapseTen" aria-expanded="false" aria-controls="sellcollapseTen">
                                How is artwork shipped after an online auction?
                              </button>
                            </h2>
                            <div id="sellcollapseTen" className="accordion-collapse collapse" aria-labelledby="sellheadingTen" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                After winning an artwork in an online auction, the shipping
                                process typically
                                involves several steps to ensure safe delivery.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="others" role="tabpanel">
                  <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                      <div className="faq-wrap">
                        <div className="accordion" id="accordionExample3">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="othersheadingOne">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#otherscollapseOne" aria-expanded="true" aria-controls="otherscollapseOne">
                                What is an art auction?
                              </button>
                            </h2>
                            <div id="otherscollapseOne" className="accordion-collapse collapse show" aria-labelledby="othersheadingOne" data-bs-parent="#accordionExample3">
                              <div className="accordion-body">
                                An art auction is a public sale where artwork is sold to the
                                highest bidder.
                                Auctions can be held in person, online, or as a combination of
                                both.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="othersheadingTwo">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#otherscollapseTwo" aria-expanded="false" aria-controls="otherscollapseTwo">
                                How do I participate in an art auction?
                              </button>
                            </h2>
                            <div id="otherscollapseTwo" className="accordion-collapse collapse" aria-labelledby="othersheadingTwo" data-bs-parent="#accordionExample3">
                              <div className="accordion-body">
                                To participate in an art auction, start by registering with the
                                auction house,
                                either online or in person. Review the auction catalog to
                                identify Bidding of
                                interest.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="othersheadingThree">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#otherscollapseThree" aria-expanded="false" aria-controls="otherscollapseThree">
                                What is a reserve price?
                              </button>
                            </h2>
                            <div id="otherscollapseThree" className="accordion-collapse collapse" aria-labelledby="othersheadingThree" data-bs-parent="#accordionExample3">
                              <div className="accordion-body">
                                A reserve price is the minimum amount a seller is willing to
                                accept for an item
                                at auction. If bidding does not reach this price, the item will
                                not be sold.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="othersheadingFour">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#otherscollapseFour" aria-expanded="false" aria-controls="otherscollapseFour">
                                What is a buyer’s premium?
                              </button>
                            </h2>
                            <div id="otherscollapseFour" className="accordion-collapse collapse" aria-labelledby="othersheadingFour" data-bs-parent="#accordionExample3">
                              <div className="accordion-body">
                                A buyer’s premium is an additional fee charged by auction houses
                                on top of the
                                winning bid price. It’s typically a percentage of the final bid
                                and is paid by
                                the buyer to cover the auction house's costs and services.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="othersheadingFive">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#otherscollapseFive" aria-expanded="false" aria-controls="otherscollapseFive">
                                How do I know if the artwork is authentic?
                              </button>
                            </h2>
                            <div id="otherscollapseFive" className="accordion-collapse collapse" aria-labelledby="othersheadingFive" data-bs-parent="#accordionExample3">
                              <div className="accordion-body">
                                To verify an artwork's authenticity, check for certificates of
                                authenticity from
                                the artist or gallery, provenance records detailing the
                                artwork's history, and
                                any signatures or markings by the artist.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="othersheadingSix">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#otherscollapseSix" aria-expanded="false" aria-controls="otherscollapseSix">
                                What happens if I win a bid at an art auction?
                              </button>
                            </h2>
                            <div id="otherscollapseSix" className="accordion-collapse collapse" aria-labelledby="othersheadingSix" data-bs-parent="#accordionExample3">
                              <div className="accordion-body">
                                If you win a bid at an art auction, you’ll be required to
                                complete the payment
                                within a specified period. Once payment is received, ownership
                                of the artwork is
                                transferred to you, and arrangements for shipping or pickup will
                                be made
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="othersheadingSeven">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#otherscollapseSeven" aria-expanded="false" aria-controls="otherscollapseSeven">
                                Can I return or exchange an artwork after purchasing it at an
                                auction?
                              </button>
                            </h2>
                            <div id="otherscollapseSeven" className="accordion-collapse collapse" aria-labelledby="othersheadingSeven" data-bs-parent="#accordionExample3">
                              <div className="accordion-body">
                                Yes, the return or exchange of artwork after purchasing at an
                                auction depends on
                                the auction house's specific policies.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="othersheadingEight">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#otherscollapseEight" aria-expanded="false" aria-controls="otherscollapseEight">
                                What types of payment methods are accepted at art auctions?
                              </button>
                            </h2>
                            <div id="otherscollapseEight" className="accordion-collapse collapse" aria-labelledby="othersheadingEight" data-bs-parent="#accordionExample3">
                              <div className="accordion-body">
                                At art auctions, a variety of payment methods are typically
                                accepted. Common
                                options include credit and debit cards, wire transfers, and
                                personal or
                                cashier’s checks.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="othersheadingNine">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#otherscollapseNine" aria-expanded="false" aria-controls="otherscollapseNine">
                                Can I inspect the artwork before the auction?
                              </button>
                            </h2>
                            <div id="otherscollapseNine" className="accordion-collapse collapse" aria-labelledby="othersheadingNine" data-bs-parent="#accordionExample3">
                              <div className="accordion-body">
                                Yes, you are welcome to inspect the artwork before the auction.
                                We believe that
                                potential bidders should have the opportunity to closely examine
                                the pieces they
                                are interested in.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="othersheadingTen">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#otherscollapseTen" aria-expanded="false" aria-controls="otherscollapseTen">
                                How is artwork shipped after an online auction?
                              </button>
                            </h2>
                            <div id="otherscollapseTen" className="accordion-collapse collapse" aria-labelledby="othersheadingTen" data-bs-parent="#accordionExample3">
                              <div className="accordion-body">
                                After winning an artwork in an online auction, the shipping
                                process typically
                                involves several steps to ensure safe delivery.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="enquery-section mb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 mb-20">
              <div className="enquery-form-wrapper">
                <form>
                  <div className="form-title mb-60">
                    <h2>Have Any Question? Ask us</h2>
                  </div>
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
                          <strong style={{ top: "50px", left: "200px" }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-10  d-flex justify-content-end">
              <div className="contact-area">
                <p>Or Call Us <a href="#">-212-497-9700</a></p>
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