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
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="terms-and-conditions-page mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-50">
            <div className="terms-and-conditions two">
              <h2>Welcome to Artmart Privacy Policy</h2>
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
            </div>
          </div>
          <div className="col-lg-12 mb-50">
            <div className="terms-and-conditions two">
              <h2>How we collect personal information</h2>
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
            </div>
          </div>
          <div className="col-lg-12">
            <div className="terms-and-conditions two">
              <h2>Collect personal information</h2>
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