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
        <div className="col-lg-12 d-flex mb-70">
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
  <div className="details-page-wrapper mb-120 pb-120">
    <div className="container-lg container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="post-author-meta">
            <div className="author-and-date">
              <div className="author-area">
                <div className="author-img">
                  <img src="/assets/img/inner-page/articel-author-image.png" alt="" />
                </div>
                <div className="author-name-desig">
                  <span>Author</span>
                  <h6><a href="#">Mrs. harry</a></h6>
                </div>
              </div>
              <div className="date">
                <span>Published Date</span>
                <h6>02 Dec, 2023</h6>
              </div>
            </div>
            <div className="social-area d-sm-flex d-none">
              <h6>Share:</h6>
              <ul className="social-link">
                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://x.com/"><i className="bi bi-twitter-x" /></a></li>
                <li><a href="https://www.pinterest.com/"><i className="bx bxl-linkedin" /></a>
                </li>
                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a>
                </li>
              </ul>
            </div>
          </div>
          <span className="line-break" />
          <span className="line-break" />
          <div className="post-thumb">
            <img src="/assets/img/inner-page/articel-details-image.jpg" alt="" />
          </div>
          <span className="line-break" />
          <span className="line-break" />
          <div className="details-page-content style-2 mb-120">
            <h3>Major Milestone in Service Innovation</h3>
            <span className="line-break" />
            <p>Art reflects and influences modern culture by acting as a mirror and a catalyst for societal
              change. It captures the spirit of the times, expressing contemporary issues like identity,
              politics, and social justice. Artists use their work to comment on and challenge cultural
              norms, often sparking discussions and inspiring new perspectives. In turn, culture shapes
              art by providing context and meaning. This dynamic relationship between art and culture
              fosters a continuous dialogue that drives evolution in both realms.</p>
            <span className="line-break" />
            <p>Capturing the essence of societal values, trends, and challenges. Through various mediums,
              artists explore issues like identity, technology, and politics, offering commentary and
              provoking thought. Contemporary art often mirrors the complexities of modern life, from
              social justice movements to environmental concerns. By engaging with current events and
              cultural shifts, art serves as a visual narrative of our collective experiences and evolving
              worldviews.</p>
            <span className="line-break" />
            <span className="line-break" />
            <div className="key-area">
              <div className="row g-lg-4 gy-5 align-items-center">
                <div className="col-lg-6">
                  <img src="/assets/img/inner-page/articel-details-image2.jpg" alt="" />
                </div>
                <div className="col-lg-6">
                  <h4>Key Characteristics :</h4>
                  <ul>
                    <li>
                      <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                          <path d="M10.9684 4.96979C10.9613 4.9767 10.9546 4.98404 10.9484 4.99179L7.47539 9.41679L5.38239 7.32279C5.24021 7.19031 5.05216 7.11819 4.85786 7.12162C4.66356 7.12505 4.47818 7.20376 4.34076 7.34117C4.20335 7.47858 4.12464 7.66397 4.12121 7.85827C4.11778 8.05257 4.18991 8.24062 4.32239 8.38279L6.96839 11.0298C7.03967 11.1009 7.12455 11.157 7.21797 11.1946C7.31139 11.2323 7.41143 11.2507 7.51213 11.2488C7.61283 11.247 7.71212 11.2249 7.80408 11.1838C7.89604 11.1427 7.97879 11.0835 8.04739 11.0098L12.0394 6.01979C12.1753 5.87712 12.2496 5.68669 12.2463 5.48966C12.2429 5.29263 12.1622 5.10484 12.0214 4.96689C11.8807 4.82893 11.6914 4.7519 11.4943 4.75244C11.2973 4.75299 11.1083 4.83106 10.9684 4.96979Z" />
                        </g>
                      </svg>
                      <span>The Art of Storytelling: How Artists Convey Narratives Through Their
                        Work</span>
                    </li>
                    <li>
                      <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                          <path d="M10.9684 4.96979C10.9613 4.9767 10.9546 4.98404 10.9484 4.99179L7.47539 9.41679L5.38239 7.32279C5.24021 7.19031 5.05216 7.11819 4.85786 7.12162C4.66356 7.12505 4.47818 7.20376 4.34076 7.34117C4.20335 7.47858 4.12464 7.66397 4.12121 7.85827C4.11778 8.05257 4.18991 8.24062 4.32239 8.38279L6.96839 11.0298C7.03967 11.1009 7.12455 11.157 7.21797 11.1946C7.31139 11.2323 7.41143 11.2507 7.51213 11.2488C7.61283 11.247 7.71212 11.2249 7.80408 11.1838C7.89604 11.1427 7.97879 11.0835 8.04739 11.0098L12.0394 6.01979C12.1753 5.87712 12.2496 5.68669 12.2463 5.48966C12.2429 5.29263 12.1622 5.10484 12.0214 4.96689C11.8807 4.82893 11.6914 4.7519 11.4943 4.75244C11.2973 4.75299 11.1083 4.83106 10.9684 4.96979Z" />
                        </g>
                      </svg>
                      <span>Exploring the World of Contemporary Art: Trends and Insights How Art
                        Reflects Society</span>
                    </li>
                    <li>
                      <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                          <path d="M10.9684 4.96979C10.9613 4.9767 10.9546 4.98404 10.9484 4.99179L7.47539 9.41679L5.38239 7.32279C5.24021 7.19031 5.05216 7.11819 4.85786 7.12162C4.66356 7.12505 4.47818 7.20376 4.34076 7.34117C4.20335 7.47858 4.12464 7.66397 4.12121 7.85827C4.11778 8.05257 4.18991 8.24062 4.32239 8.38279L6.96839 11.0298C7.03967 11.1009 7.12455 11.157 7.21797 11.1946C7.31139 11.2323 7.41143 11.2507 7.51213 11.2488C7.61283 11.247 7.71212 11.2249 7.80408 11.1838C7.89604 11.1427 7.97879 11.0835 8.04739 11.0098L12.0394 6.01979C12.1753 5.87712 12.2496 5.68669 12.2463 5.48966C12.2429 5.29263 12.1622 5.10484 12.0214 4.96689C11.8807 4.82893 11.6914 4.7519 11.4943 4.75244C11.2973 4.75299 11.1083 4.83106 10.9684 4.96979Z" />
                        </g>
                      </svg>
                      <span>Masterpieces Under the Hammer: A Guide to Upcoming Art Auctions</span>
                    </li>
                    <li>
                      <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                          <path d="M10.9684 4.96979C10.9613 4.9767 10.9546 4.98404 10.9484 4.99179L7.47539 9.41679L5.38239 7.32279C5.24021 7.19031 5.05216 7.11819 4.85786 7.12162C4.66356 7.12505 4.47818 7.20376 4.34076 7.34117C4.20335 7.47858 4.12464 7.66397 4.12121 7.85827C4.11778 8.05257 4.18991 8.24062 4.32239 8.38279L6.96839 11.0298C7.03967 11.1009 7.12455 11.157 7.21797 11.1946C7.31139 11.2323 7.41143 11.2507 7.51213 11.2488C7.61283 11.247 7.71212 11.2249 7.80408 11.1838C7.89604 11.1427 7.97879 11.0835 8.04739 11.0098L12.0394 6.01979C12.1753 5.87712 12.2496 5.68669 12.2463 5.48966C12.2429 5.29263 12.1622 5.10484 12.0214 4.96689C11.8807 4.82893 11.6914 4.7519 11.4943 4.75244C11.2973 4.75299 11.1083 4.83106 10.9684 4.96979Z" />
                        </g>
                      </svg>
                      <span>The Role of Art in Mental Well-Being: Creativity as Therapy How
                        Artists Convey Narratives Through Their Work</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                          <path d="M10.9684 4.96979C10.9613 4.9767 10.9546 4.98404 10.9484 4.99179L7.47539 9.41679L5.38239 7.32279C5.24021 7.19031 5.05216 7.11819 4.85786 7.12162C4.66356 7.12505 4.47818 7.20376 4.34076 7.34117C4.20335 7.47858 4.12464 7.66397 4.12121 7.85827C4.11778 8.05257 4.18991 8.24062 4.32239 8.38279L6.96839 11.0298C7.03967 11.1009 7.12455 11.157 7.21797 11.1946C7.31139 11.2323 7.41143 11.2507 7.51213 11.2488C7.61283 11.247 7.71212 11.2249 7.80408 11.1838C7.89604 11.1427 7.97879 11.0835 8.04739 11.0098L12.0394 6.01979C12.1753 5.87712 12.2496 5.68669 12.2463 5.48966C12.2429 5.29263 12.1622 5.10484 12.0214 4.96689C11.8807 4.82893 11.6914 4.7519 11.4943 4.75244C11.2973 4.75299 11.1083 4.83106 10.9684 4.96979Z" />
                        </g>
                      </svg>
                      <span>The Art of Storytelling: How Artists Convey Narratives Through Their
                        Work</span>
                    </li>
                    <li>
                      <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                          <path d="M10.9684 4.96979C10.9613 4.9767 10.9546 4.98404 10.9484 4.99179L7.47539 9.41679L5.38239 7.32279C5.24021 7.19031 5.05216 7.11819 4.85786 7.12162C4.66356 7.12505 4.47818 7.20376 4.34076 7.34117C4.20335 7.47858 4.12464 7.66397 4.12121 7.85827C4.11778 8.05257 4.18991 8.24062 4.32239 8.38279L6.96839 11.0298C7.03967 11.1009 7.12455 11.157 7.21797 11.1946C7.31139 11.2323 7.41143 11.2507 7.51213 11.2488C7.61283 11.247 7.71212 11.2249 7.80408 11.1838C7.89604 11.1427 7.97879 11.0835 8.04739 11.0098L12.0394 6.01979C12.1753 5.87712 12.2496 5.68669 12.2463 5.48966C12.2429 5.29263 12.1622 5.10484 12.0214 4.96689C11.8807 4.82893 11.6914 4.7519 11.4943 4.75244C11.2973 4.75299 11.1083 4.83106 10.9684 4.96979Z" />
                        </g>
                      </svg>
                      <span>Exploring the World of Contemporary Art: Trends and Insights How Art
                        Reflects Society</span>
                    </li>
                    <li>
                      <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                          <path d="M10.9684 4.96979C10.9613 4.9767 10.9546 4.98404 10.9484 4.99179L7.47539 9.41679L5.38239 7.32279C5.24021 7.19031 5.05216 7.11819 4.85786 7.12162C4.66356 7.12505 4.47818 7.20376 4.34076 7.34117C4.20335 7.47858 4.12464 7.66397 4.12121 7.85827C4.11778 8.05257 4.18991 8.24062 4.32239 8.38279L6.96839 11.0298C7.03967 11.1009 7.12455 11.157 7.21797 11.1946C7.31139 11.2323 7.41143 11.2507 7.51213 11.2488C7.61283 11.247 7.71212 11.2249 7.80408 11.1838C7.89604 11.1427 7.97879 11.0835 8.04739 11.0098L12.0394 6.01979C12.1753 5.87712 12.2496 5.68669 12.2463 5.48966C12.2429 5.29263 12.1622 5.10484 12.0214 4.96689C11.8807 4.82893 11.6914 4.7519 11.4943 4.75244C11.2973 4.75299 11.1083 4.83106 10.9684 4.96979Z" />
                        </g>
                      </svg>
                      <span>Masterpieces Under the Hammer: A Guide to Upcoming Art Auctions</span>
                    </li>
                    <li>
                      <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                          <path d="M10.9684 4.96979C10.9613 4.9767 10.9546 4.98404 10.9484 4.99179L7.47539 9.41679L5.38239 7.32279C5.24021 7.19031 5.05216 7.11819 4.85786 7.12162C4.66356 7.12505 4.47818 7.20376 4.34076 7.34117C4.20335 7.47858 4.12464 7.66397 4.12121 7.85827C4.11778 8.05257 4.18991 8.24062 4.32239 8.38279L6.96839 11.0298C7.03967 11.1009 7.12455 11.157 7.21797 11.1946C7.31139 11.2323 7.41143 11.2507 7.51213 11.2488C7.61283 11.247 7.71212 11.2249 7.80408 11.1838C7.89604 11.1427 7.97879 11.0835 8.04739 11.0098L12.0394 6.01979C12.1753 5.87712 12.2496 5.68669 12.2463 5.48966C12.2429 5.29263 12.1622 5.10484 12.0214 4.96689C11.8807 4.82893 11.6914 4.7519 11.4943 4.75244C11.2973 4.75299 11.1083 4.83106 10.9684 4.96979Z" />
                        </g>
                      </svg>
                      <span>The Role of Art in Mental Well-Being: Creativity as Therapy How
                        Artists Convey Narratives Through Their Work</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <img src="/assets/img/inner-page/articel-details-image3.jpg" alt="" />
                </div>
              </div>
            </div>
            <span className="line-break" />
            <p>As we reflect on this moment, we express our deepest gratitude to our clients, partners, and
              everyone who has been a part of this incredible journey. Your trust and collaboration have
              been instrumental in our success, and we look forward to continuing to exceed. Digital
              agencies play a vital role in helping businesses navigate the digital landscape, providing
              expertise in online marketing, technology, and creative solutions to achieve digital
              success.</p>
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <div className="row">
              <div className="col-lg-12">
                <div className="details-navigation">
                  <div className="single-navigation">
                    <a className="arrow" href="#">
                      <svg width={7} height={14} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                      </svg>
                      Prev
                    </a>
                    <div className="content">
                      <h6><a className="style-2" href="#">The Last Light of a Forgotten City Breaking
                        </a></h6>
                    </div>
                  </div>
                  <div className="single-navigation two text-end">
                    <div className="content">
                      <h6><a className="style-2" href="#">Art as Therapy: Creativity for Mental
                          Wellness</a></h6>
                    </div>
                    <a className="arrow" href="#">
                      Next
                      <svg width={7} height={14} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="comment-and-form-area style-2">
                <div className="comment-area mb-70">
                  <div className="comment-title">
                    <h4>Comments (02)</h4>
                  </div>
                  <ul className="comment">
                    <li>
                      <div className="single-comment-area">
                        <div className="author-img">
                          <img src="/assets/img/inner-page/comment-author-image.png" alt="" />
                        </div>
                        <div className="comment-content">
                          <div className="author-name-deg">
                            <h6>mr. sumon Halder.</h6>
                            <span>31 July, 2024</span>
                          </div>
                          <p>Art reflects and influences modern culture by acting as a mirror
                            and a catalyst for societal change. </p>
                          <div className="replay-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                              <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z">
                              </path>
                            </svg>
                            Reply (01)
                          </div>
                        </div>
                      </div>
                      <ul className="comment-replay">
                        <li>
                          <div className="single-comment-area">
                            <div className="author-img">
                              <img src="/assets/img/inner-page/comment-author-image2.png" alt="" />
                            </div>
                            <div className="comment-content">
                              <div className="author-name-deg">
                                <h6>Mrs. Harry.</h6>
                                <span>31 July, 2024</span>
                              </div>
                              <p>Art reflects and influences modern culture by acting as a
                                mirror and a catalyst for societal change. </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="inquiry-form">
                  <div className="title">
                    <h4>Leave Your Comment:</h4>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-inner mb-25">
                          <label>Your Name* :</label>
                          <input type="text" placeholder="Jackson Mile" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-25">
                          <label>Your Email* :</label>
                          <input type="email" placeholder="example@gamil.com" />
                        </div>
                      </div>
                      <div className="col-md-12 mb-25">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="contactCheck" />
                          <label className="form-check-label" htmlFor="contactCheck">
                            Please save <span> my name, email address</span> for the next
                            time I
                            comment.
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner mb-50">
                          <label>Your Message :</label>
                          <textarea placeholder="Write Something..." defaultValue={""} />
                        </div>
                      </div>
                    </div>
                    <div className="form-inner">
                      <Link href="/auction" className="primary-btn1 btn-hover">
                        <span>Post Comment</span>
                        <strong style={{top: '48px', left: '69.5px'}} />
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
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