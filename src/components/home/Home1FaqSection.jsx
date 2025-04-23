import React from 'react'

const Home1FaqSection = () => {
  return (
    <div className="home1-faq-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                <h3>Frequently Asked Questions</h3>
                <p>It refers to a list of common questions and their corresponding answers that are typically
                  provided on websites</p>
              </div>
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
                        An art auction is a public sale where artwork is sold to the highest bidder.
                        Auctions can be held in person, online, or as a combination of both.
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
                        To participate in an art auction, start by registering with the auction house,
                        either online or in person. Review the auction catalog to identify artworks of
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
                        A reserve price is the minimum amount a seller is willing to accept for an item
                        at auction. If bidding does not reach this price, the item will not be sold.
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
                        A buyer’s premium is an additional fee charged by auction houses on top of the
                        winning bid price. It’s typically a percentage of the final bid and is paid by
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
                        To verify an artwork's authenticity, check for certificates of authenticity from
                        the artist or gallery, provenance records detailing the artwork's history, and
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
                        If you win a bid at an art auction, you’ll be required to complete the payment
                        within a specified period. Once payment is received, ownership of the artwork is
                        transferred to you, and arrangements for shipping or pickup will be made
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        Can I return or exchange an artwork after purchasing it at an auction?
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Yes, the return or exchange of artwork after purchasing at an auction depends on
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
                        At art auctions, a variety of payment methods are typically accepted. Common
                        options include credit and debit cards, wire transfers, and personal or
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
                        Yes, you are welcome to inspect the artwork before the auction. We believe that
                        potential bidders should have the opportunity to closely examine the pieces they
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
                        After winning an artwork in an online auction, the shipping process typically
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
  )
}

export default Home1FaqSection