"use client";
import Header1 from "@/components/common/Header1";
import Link from "next/link";
import React from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const { user, logout } = usePrivy();
  const { setUser } = useAuthStore();

  // Set user in auth store (no auth/artist check needed)
  React.useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user, setUser]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <>
      <Header1 />
      <div className="top-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex mb-120">
              <div className="top-content">
                <ul>
                  <li>
                    <Link href="/">
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.125 5.99955L5.602 1.52205C5.822 1.30255 6.178 1.30255 6.3975 1.52205L10.875 5.99955M2.25 4.87455V9.93705C2.25 10.2475 2.502 10.4995 2.8125 10.4995H4.875V8.06205C4.875 7.75155 5.127 7.49955 5.4375 7.49955H6.5625C6.873 7.49955 7.125 7.75155 7.125 8.06205V10.4995H9.1875C9.498 10.4995 9.75 10.2475 9.75 9.93705V4.87455M4.125 10.4995H8.25"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>My Account</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-section mb-120">
        <div className="container">
          <div className="dashboard-wrapper">
            <div className="dashboard-sidebar-menu">
              <ul>
                <li className="active">
                  <Link href="/dashboard">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG paths unchanged */}
                    </svg>
                    <h5>Dashboard</h5>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/profile">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG paths unchanged */}
                    </svg>
                    <h5>Profile</h5>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/dashboard-bidding">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG paths unchanged */}
                    </svg>
                    <h5>Bidding Items</h5>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/dashboard-order">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG paths unchanged */}
                    </svg>
                    <h5>Order</h5>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/dashboard-wishlist">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG paths unchanged */}
                    </svg>
                    <h5>Wishlist</h5>
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG paths unchanged */}
                    </svg>
                    <h5>Logout</h5>
                  </button>
                </li>
              </ul>
            </div>
            <div className="dashboard-content-wrap">
              <div className="portfolio-info-wrap">
                <div className="portfolio-content">
                  <h4>
                    Hello, Welcome, {user?.email?.address}!
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG paths unchanged */}
                    </svg>
                  </h4>
                  <p>Welcome Back On Your Dashboard</p>
                </div>
                <div className="row">
                  <div className="col-md-6 pt-30">
                    <div className="single-content text-center">
                      <h6>Order Pending</h6>
                      <h2>01</h2>
                    </div>
                  </div>
                  <div className="col-md-6 pt-30">
                    <div className="single-content text-center">
                      <h6>Order Processing</h6>
                      <h2>00</h2>
                    </div>
                  </div>
                  <div className="col-md-6 pt-30">
                    <div className="single-content text-center">
                      <h6>Order Picked</h6>
                      <h2>02</h2>
                    </div>
                  </div>
                  <div className="col-md-6 pt-30">
                    <div className="single-content text-center">
                      <h6>Order Completed</h6>
                      <h2>02</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-section">
        {/* Footer JSX unchanged */}
      </footer>
    </>
  );
};

export default Dashboard;