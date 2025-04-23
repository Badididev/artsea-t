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
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="terms-and-conditions-page mb-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="update-date mb-40">
            <h6><i className="bi bi-caret-right-fill" /> Last Updated</h6>
            <p>02 February, 2023</p>
          </div>
        </div>
        <div className="col-lg-12 mb-70">
          <div className="terms-and-conditions">
            <h3>Bidding Terms &amp; Condition of Artmart</h3>
            <p>Urna Aenean onewaryzo eleifend vitae tellus a facilisis. Nunc posuere at augue eget porta.
              Inei odion goat tellus, dignissim fermentumara purus nec, consequat dapibus metus.Vivamus
              urna worlda mauris, goat te faucibus at egestas quis, fermentum egetonav neque. Duis
              pharetra lectus nec risusonl pellentesque, opi vitae aliquet nisi dapibus. Sed volutpat mi
              velit, ateng maximus est eleifend accui Fusce porttitor ex arcu. Phasellus viverra lorem a
              nibh placerat tincidunt.bolgotai Aliquam andit rutrum elementum urna, velgeria fringilla
              tellus varius ut. Morbi non velit odio.</p>
            <ul>
              <li><strong>1) Fees and Payment: </strong> Clearly state your pricing structure,
                payment terms, and any additional charges. Specify when and how invoices will be
                issued, as well as your accepted payment methods.</li>
              <li><strong>2) Termination and Cancellation:</strong> Outline the process for
                terminating the consulting agreement and any associated fees or penalties.
                Include a notice period required for termination.</li>
              <li><strong>3) Liability and Indemnification:</strong> Describe your liability
                limits and the circumstances under which you will be held accountable for
                damages or losses. Include clauses regarding indemnification, which can protect
                you from client claims.</li>
              <li><strong>4) Governing Law and Jurisdiction:</strong> Define the governing law
                that will apply to the contract and the jurisdiction where any disputes will be
                resolved. This can simplify legal matters if disagreements arise.</li>
            </ul>
            <p>It's important to have your terms and conditions reviewed by legal counsel to ensure
              they comply with applicable laws and regulations and to protect your interests.
              Customize the terms to fit the specific requirements of your Bidding.</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="terms-and-conditions">
            <h3>Buying Auction Terms &amp; Condition of Artmart</h3>
            <p>Urna Aenean onewaryzo eleifend vitae tellus a facilisis. Nunc posuere at augue eget porta.
              Inei odion goat tellus, dignissim fermentumara purus nec, consequat dapibus metus.Vivamus
              urna worlda mauris, goat te faucibus at egestas quis, fermentum egetonav neque. Duis
              pharetra lectus nec risusonl pellentesque, opi vitae aliquet nisi dapibus. Sed volutpat mi
              velit, ateng maximus est eleifend accui Fusce porttitor ex arcu. Phasellus viverra lorem a
              nibh placerat tincidunt.bolgotai Aliquam andit rutrum elementum urna, velgeria fringilla
              tellus varius ut. Morbi non velit odio.</p>
            <p>It's important to have your terms and conditions reviewed by legal counsel to ensure
              they comply with applicable laws and regulations and to protect your interests.
              Customize the terms to fit the specific requirements of your consulting business and
              industry. Once finalized, provide a copy to clients before beginning any consulting
              work.</p>
            <p>While a career comes with many benefits, it also involves
              challenges, such as dealing with client expectations, tight deadlines, and
              continuous adaptation to new industries and technologies. Overall, the consulting
              field can be highly rewarding for those who enjoy a fast-paced, dynamic.</p>
            <div className="btn-area">
              <button type="submit" className="primary-btn1 btn-hover accept-btn">
                Accept
                <strong style={{ top: '48px', left: '69.5px' }} />
              </button>
              <button type="submit" className="primary-btn1 btn-hover decline-btn">
                Decline
                <strong style={{ top: '48px', left: '69.5px' }} />
              </button>
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