import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { AppContext } from "../../context/AppContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./dropdown.css";

//image
import NishkaLogo from "./assets/NishkaEra_Logo.png";

export default function Header1() {
  const [isOpen, setIsOpen] = useState(false);

  const { user, dispatch } = useContext(AppContext);
  const [loginuser, setLoginuser] = useState(null);
  const history = useHistory();
  const pathname = window.location.pathname;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };
  useEffect(() => {
    setLoginuser(user);
  }, [user]);

  // const [products, setProducts] = useState(false);
  // const openProducts = (
  //   <div className="tw-bg-white-500 tw-flex tw-flex-col tw--mt-7 tw-text-nishblue-400 tw-ml-20 tw-py-3 tw-px-2 tw-items-center">
  //     <div className="tw-py-2 tw-px-2">Fixed Deposit</div>
  //     <div className="tw-py-2 tw-px-2">Personal Loan</div>
  //     <div className="tw-py-2 tw-px-2">Buisness Loans</div>
  //   </div>
  // );
  // const linkName = products ? "Products ×" : "Products +";

  return (
    <>
      <div className="tw-bg-white tw-h-full tw-flex tw-py-4 tw-items-center tw-px-5 tw-gap-2 tw-justify-between">
        <div className="tw-hidden md:tw-block tw-w-1/2 md:tw-w-1/5">
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <img className="tw-w-full" src={NishkaLogo} />
          </Link>
        </div>

        <div className="tw-hidden md:tw-block">
          <div className="tw-flex md:tw-gap-0 lg:tw-gap-8 xl:tw-gap-12 tw-text-sm md:tw-text-md lg:tw-text-lg xl:tw-text-xl tw-font-semibold tw-text-navgreen-700">
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <div className="tw-px-2 tw-font-bold tw-text-navgreen-700 tw-cursor-pointer">
                Home
              </div>
            </Link>
            <div className="group inline-block">
              <div className="tw-outline-none focus:tw-outline-none tw-px-3 tw-bg-white tw-rounded-sm tw-flex tw-items-center min-w-32">
                <span className="tw-pr-1 tw-font-bold tw-cursor-pointer tw-flex-1">
                  Products
                </span>
                <span>
                  <svg
                    className="tw-fill-current tw-h-4 tw-w-4 tw-transform group-hover:-rotate-180
                    tw-transition tw-duration-150 tw-ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </div>
              <ul
                className="tw-bg-navgreen-600 tw-border tw--ml-4 tw-pr-2 tw-list-none tw-z-10 tw-rounded-b-xl tw-text-center tw-shadow-3xl tw-transform tw-scale-0 group-hover:scale-100 tw-absolute 
                tw-transition tw-duration-150 tw-ease-in-out tw-origin-top min-w-32 "
              >
                <Link style={{ textDecoration: "none" }} to={"/FixedDeposits"}>
                  <li className="tw-rounded-sm tw-px-1 tw-no-underline tw-text-white tw--ml-6 tw-text-left tw-font-normal tw-py-1 ">
                    Fixed Deposit
                  </li>
                </Link>
                <hr className="tw-text-nishblue-100 tw-p-0 tw-m-0 tw--ml-6" />
                <Link style={{ textDecoration: "none" }} to={"/PersonalLoan"}>
                  <li className="tw-rounded-sm tw-px-1 tw-no-underline tw-text-white tw--ml-6 tw-text-left tw-font-normal tw-py-1 ">
                    Personal Loans{" "}
                  </li>
                </Link>
                <hr className="tw-text-nishblue-100 tw-p-0 tw-m-0 tw--ml-6" />
                <Link style={{ textDecoration: "none" }} to={"/BL"}>
                  <li className="tw-rounded-sm tw-px-1 tw-text-white disabled tw--ml-6 tw-text-left tw-font-normal tw-py-1 ">
                    Business Loans{" "}
                  </li>
                </Link>
                <hr className="tw-text-nishblue-100 tw-p-0 tw-m-0 tw--ml-6" />
                <li className="tw-rounded-sm tw-relative tw--ml-6 tw-px-3 tw-py-1 ">
                  <div className="tw-w-full tw-text-left tw-text-white tw-font-normal tw-items-center tw-outline-none focus:tw-outline-none">
                    <Link style={{ textDecoration: "none" }} to={""}>
                      <span className="tw-rounded-sm tw-px-1 tw-text-white disabled tw--ml-3 tw-text-left tw-font-normal tw-py-1">
                        More Products
                      </span>
                    </Link>
                    <span className="tw-mr-auto">
                      <svg
                        className="tw-fill-current tw-h-4 tw-w-4
                        tw-transition tw-duration-150 tw-ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </div>
                  <ul className="tw-bg-navgreen-100 tw-border tw-list-none tw--ml-9 tw-shadow-3xl tw-text-nishblue-900 tw-font-normal tw-absolute tw-top-0 tw-right-0 
                    tw-transition tw-duration-150 tw-ease-in-out tw-origin-top-left min-w-32 ">
                    <li className="tw-rounded-sm tw-relative tw--ml-6 tw-px-3 tw-py-1 ">
                      <div className="tw-w-full tw-text-left tw-text-nishblue-900 tw-font-normal tw-flex tw-items-center tw-outline-none focus:tw-outline-none">
                        <Link style={{ textDecoration: "none" }} to={""}>
                          <span className="tw-pr-1 tw-text-nishblue-900 tw-cursor-pointer tw-flex-1 tw--ml-3">
                            Insurance
                          </span>
                        </Link>
                        <span className="tw-mr-auto">
                          <svg
                            className="tw-fill-current tw-h-4 tw-w-4
                        tw-transition tw-duration-150 tw-ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </span>
                      </div>
                      <ul
                        className="tw-bg-navgreen-100 tw-w-max tw-border tw-list-none tw--ml-9 tw-shadow-3xl tw-text-nishblue-900 tw-font-normal tw-absolute tw-top-0 tw-right-0 
                                    tw-transition tw-duration-150 tw-ease-in-out tw-origin-top-left min-w-32 "
                      >
                        <li className="tw-px-3 tw-py-1 tw--ml-9 tw-text-left">
                          Term Insurance
                        </li>
                        <hr className="tw-text-nishblue-300 tw-p-0 tw-m-0 tw--ml-8" />
                        <Link style={{ textDecoration: "none" }} to={""}>
                          <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1 tw-text-left">
                            Health Insurance
                          </li>
                        </Link>
                        <hr className="tw-text-nishblue-300 tw-p-0 tw-m-0 tw--ml-8" />
                        <Link style={{ textDecoration: "none" }} to={""}>
                          <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1 tw-text-left">
                            Motor Insurance
                          </li>
                        </Link>
                      </ul>
                    </li>
                    <hr className="tw-text-nishblue-300 tw-p-0 tw-m-0 tw--ml-8" />
                    <Link style={{ textDecoration: "none" }} to={""}>
                      <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1 tw-text-left">
                        Bonds
                      </li>
                    </Link>
                    <hr className="tw-text-nishblue-300 tw-p-0 tw-m-0 tw--ml-8" />
                    <Link style={{ textDecoration: "none" }} to={""}>
                      <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1 tw-text-left">
                        NCD
                      </li>
                    </Link>
                    <hr className="tw-text-nishblue-300 tw-p-0 tw-m-0 tw--ml-8" />
                    <Link style={{ textDecoration: "none" }} to={""}>
                      <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1 tw-text-left">
                        PMS
                      </li>
                    </Link>
                    <hr className="tw-text-nishblue-300 tw-p-0 tw-m-0 tw--ml-8" />
                    <Link style={{ textDecoration: "none" }} to={""}>
                      <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1 tw-text-left">
                        Home Loans
                      </li>
                    </Link>
                    <hr className="tw-text-nishblue-300 tw-p-0 tw-m-0 tw--ml-8" />
                    <Link style={{ textDecoration: "none" }} to={""}>
                      <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1 tw-text-left">
                        Mutual Funds
                      </li>
                    </Link>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="group inline-block">
              <div className="tw-outline-none focus:tw-outline-none tw-px-3 tw-bg-white tw-rounded-sm tw-flex tw-items-center min-w-32">
                <span className="tw-pr-1 tw-font-bold tw-cursor-pointer tw-flex-1">
                  Services
                </span>
                <span>
                  <svg
                    className="tw-fill-current tw-h-4 tw-w-4 tw-transform group-hover:-rotate-180
                    tw-transition tw-duration-150 tw-ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </div>
              <ul
                className="tw-bg-navgreen-600 tw-border tw--ml-20 tw-list-none tw-z-10 tw-rounded-b-xl tw-text-center tw-shadow-3xl tw-transform tw-scale-0 group-hover:scale-100 tw-absolute 
                tw-transition tw-duration-150 tw-ease-in-out tw-origin-top min-w-32  "
              >
                <li className="tw-rounded-sm tw-relative tw--ml-6 tw-px-3 tw-py-1 ">
                  <div className="tw-w-full tw-text-left tw-text-white tw-font-normal tw-flex tw-items-center tw-outline-none focus:tw-outline-none">
                    <Link style={{ textDecoration: "none" }} to={"/Learn"}>
                      <span className="tw-pr-1 tw-text-white tw-cursor-pointer tw-flex-1">
                        Financial Educational Services
                      </span>
                    </Link>
                    <span className="tw-mr-auto">
                      <svg
                        className="tw-fill-current tw-h-4 tw-w-4
                        tw-transition tw-duration-150 tw-ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </div>
                  <ul
                    className="tw-bg-navgreen-100 tw-border tw-list-none tw--ml-9 tw-shadow-3xl tw-text-nishblue-900 tw-font-normal tw-absolute tw-top-0 tw-right-0 
                    tw-transition tw-duration-150 tw-ease-in-out tw-origin-top-left min-w-32 "
                  >
                    <li className="tw-px-3 tw-py-1 tw--ml-9 ">
                      The A to Z about Financial Products
                    </li>
                    <hr className="tw-text-nishblue-300 tw-p-0 tw-m-0 tw--ml-8" />
                    <Link style={{ textDecoration: "none" }} to={"/Score"}>
                      <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1 ">
                        Financial Pulse
                      </li>
                    </Link>
                    <hr className="tw-text-nishblue-300 tw-p-0 tw-m-0 tw--ml-8" />
                    <Link style={{ textDecoration: "none" }} to={"/Webinar"}>
                      <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1 ">
                        Webinar
                      </li>
                    </Link>
                  </ul>
                </li>

                <hr className="tw-text-nishblue-100 tw-p-0 tw-m-0 tw--ml-8" />

                <li className="tw-rounded-sm tw-relative tw-px-3 tw--ml-6 tw-py-1 ">
                  <div className="tw-w-full tw-text-left tw-text-white tw-font-normal tw-flex tw-items-center tw-outline-none focus:tw-outline-none">
                    <span className="tw-pr-1 tw-cursor-pointer tw-flex-1">
                      Financial Analysis Services
                    </span>
                    <span className="tw-mr-auto">
                      <svg
                        className="tw-fill-current tw-h-4 tw-w-4
                        tw-transition tw-duration-150 tw-ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </div>
                  <ul
                    className="tw-bg-nishblue-100 tw-border tw-list-none tw-shadow-3xl tw-text-nishblue-900 tw-font-normal tw-absolute tw-top-0 tw-right-0 
                    tw-transition tw-duration-150 tw-ease-in-out tw-origin-top-left min-w-32 "
                  >
                    <Link style={{ textDecoration: "none" }} to={"/IPOWatch"}>
                      <li className=" tw-text-nishblue-900 tw-px-3 tw-py-1 tw--ml-9 ">
                        IPO Analysis
                      </li>
                    </Link>
                    <hr className="tw-text-nishblue-300 tw-p-0 tw-m-0 tw--ml-8" />
                    <li className="tw-px-3 tw-py-1 tw--ml-9 ">
                      Financial Result Analysis <br />
                      <span className="tw-font-light tw-text-sm">
                        Coming Soon
                      </span>
                    </li>
                    <hr className="tw-text-nishblue-300 tw-p-0 tw-m-0 tw--ml-8" />
                    <li className="tw-px-3 tw-py-1 tw--ml-9 ">
                      Daily Digest <br />
                      <span className="tw-font-light tw-text-sm">
                        Coming Soon
                      </span>
                    </li>
                  </ul>
                </li>
                <hr className="tw-text-nishblue-100 tw-p-0 tw-m-0 tw--ml-8" />
                <li className="tw-rounded-sm tw-relative tw-px-3 tw--ml-6 tw-py-1 ">
                  <div className="tw-w-full tw-text-white tw-font-normal tw-text-left tw-flex tw-items-center tw-outline-none focus:tw-outline-none">
                    <span className="tw-pr-1 tw-flex-1 tw-cursor-pointer">
                      Investment Advisory Services
                    </span>
                    <span className="tw-mr-auto">
                      <svg
                        className="tw-fill-current tw-h-4 tw-w-4
                        tw-transition tw-duration-150 tw-ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </div>
                  <ul
                    className="tw-bg-nishblue-100 tw-border tw-list-none tw-shadow-3xl tw-text-nishblue-900 tw-font-normal tw-absolute tw-top-0 tw-right-0 
                    tw-transition tw-duration-150 tw-ease-in-out tw-origin-top-left min-w-32 "
                  >
                    <li className="tw-px-3 tw-py-1 tw--ml-9 ">
                      <span className="tw-font-light tw-text-sm">
                        Coming Soon
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <Link style={{ textDecoration: "none" }} to={"/Blogs"}>
              <div className="tw-px-2 tw-cursor-pointer tw-text-navgreen-700 tw-font-bold">
                Blog
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/OurStory"}>
              <div className="tw-px-2 tw-text-navgreen-700 tw-cursor-pointer tw-font-bold">
                About Us
              </div>
            </Link>
          </div>
        </div>

        <div className="tw-hidden md:tw-block tw-rounded-sm tw-text-sm md:tw-text-md lg:tw-text-lg xl:tw-text-xl">
          <div className="tw-text-navgreen-700 tw-font-semibold tw-inline-block tw-rounded-lg tw-shadow-0 tw-border-none">
            {loginuser ? (
              <>
                <div className="tw-py-1">
                  <div className="">
                    <h5 className="tw-text-sm">Welcome {loginuser.name}</h5>
                  </div>
                  <div
                    className="tw-bg-nishblue-600 tw-text-white tw-py-1 tw-rounded-xl tw-text-sm tw-cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </div>
              </>
            ) : (
              <>
                <NavLink
                  style={{ textDecoration: "none" }}
                  className="tw-bg-navgreen-700 tw-text-white hover:tw-text-white tw-font-semibold tw-px-5 tw-py-1 tw-rounded-lg tw-shadow-0 tw-border-none"
                  to="/login"
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="md:tw-hidden tw-text-left tw-ml-3 tw--mt-4">
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <img
            className="tw-w-30 tw-h-10 lg:tw-w-56 lg:tw-h-12"
            src={NishkaLogo}
            alt="Logo"
          />
        </Link>
      </div>

      <div className="tw--mt-9 tw-mb-4 tw-pr-4 tw-text-right tw-items-center md:tw-hidden">
        <div
          onClick={() => setIsOpen(!isOpen)}
          type="div"
          className="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-md hover:tw-text-navgreen-700 hover:tw-bg-white tw-text-navgreen-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-gray-800 focus:tw-ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="tw-sr-only">Open main menu</span>
          {!isOpen ? <GiHamburgerMenu /> : <MdClose />}
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="tw-transition tw-ease-out tw-duration-100 tw-transform"
        enterFrom="tw-opacity-0 tw-scale-95"
        enterTo="tw-opacity-100 tw-scale-100"
        leave="tw-transition tw-ease-in tw-duration-75 tw-transform"
        leaveFrom="tw-opacity-100 tw-scale-100"
        leaveTo="tw-opacity-0 tw-scale-95"
      >
        {(ref) => (
          <div className="md:tw-hidden tw-text-center " id="mobile-menu">
            <div
              ref={ref}
              className="tw-px-2 tw-pt-2 tw-pb-3 tw-space-y-1 sm:tw-px-3"
            >
              <a
                href="/"
                style={{ textDecoration: "none" }}
                className="hover:tw-bg-white hover:tw-text-navgreen-800 tw-text-navgreen-700 tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium"
              >
                Home
              </a>

              <div className="group inline-block tw-ml-4">
                <div className="tw-outline-none focus:tw-outline-none tw-text-navgreen-700 tw-px-3 tw-mx-auto tw-bg-white tw-text-base tw-font-medium tw-rounded-sm tw-flex tw-items-center tw-w-max">
                  <span className="tw-pr-1 tw-flex-1">Products</span>
                  <span>
                    <svg
                      className="tw-fill-current tw-h-4 tw-w-4 tw-transform group-hover:-rotate-180
                    tw-transition tw-duration-150 tw-ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </div>
                <ul
                  className="tw-bg-navgreen-600 tw-border tw-ml-16 tw-pr-2 tw-list-none tw-z-10 tw-rounded-b-xl tw-text-center tw-shadow-3xl tw-transform tw-scale-0 group-hover:scale-100 tw-absolute 
                tw-transition tw-duration-150 tw-ease-in-out tw-origin-top min-w-32"
                >
                  <a style={{ textDecoration: "none" }} href="/FixedDeposits">
                    <li className="tw-rounded-sm tw-px-1 tw-no-underline tw-text-white tw--ml-6 tw-text-left tw-font-normal tw-py-1 ">
                      Fixed Deposit
                    </li>
                  </a>
                  <a style={{ textDecoration: "none" }} href="/PersonalLoan">
                    <li className="tw-rounded-sm tw-px-1 tw-no-underline tw-text-white tw--ml-6 tw-text-left tw-font-normal tw-py-1">
                      Personal Loan{" "}
                    </li>
                  </a>
                  <a style={{ textDecoration: "none" }} href="/BL">
                  <li className="tw-rounded-sm tw-px-1 tw-no-underline tw-text-white tw--ml-6 tw-text-left tw-font-normal tw-py-1 ">
                    Business Loans{" "}
                  </li>
                  </a>
                  <li className="tw-rounded-sm tw-px-1 tw-no-underline tw-text-white tw--ml-6 tw-text-left tw-font-normal tw-py-1">
                    <div className="tw-w-full tw-text-left tw-text-white tw-font-normal tw-flex tw-gap-0 tw-items-center tw-w-1/4 tw-outline-none focus:tw-outline-none">
                      <span className="tw-pr-1 tw-flex-1">More Products</span>
                      <span className="tw-mr-auto">
                        <svg
                          className="tw-fill-current tw-h-4 tw-w-4
                        tw-transition tw-duration-150 tw-ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </div>
                    <ul
                      className="tw-bg-navgreen-100 tw-border tw-list-none tw--ml-9 tw-z-10 tw-shadow-3xl tw-text-nishblue-900 tw-font-normal tw-absolute tw-top-0 tw-right-0 
                    tw-transition tw-duration-150 tw-ease-in-out tw-origin-top-left min-w-32 "
                    >
                      <li className="tw-rounded-sm tw-relative tw--ml-9 tw-px-3 tw-py-1 ">
                        <div className="tw-w-full tw-text-left tw-text-nishblue-90o tw-font-normal tw-flex tw-gap-0 tw-items-center tw-w-1/4 tw-outline-none focus:tw-outline-none">
                          <span className="tw-pr-1 tw-flex-1">Insurance</span>
                          <span className="tw-mr-auto">
                            <svg
                              className="tw-fill-current tw-h-4 tw-w-4
                        tw-transition tw-duration-150 tw-ease-in-out"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </span>
                        </div>
                        <ul
                          className="tw-bg-navgreen-50 tw-border tw-list-none tw--ml-9 tw-z-10 tw-shadow-3xl tw-text-nishblue-900 tw-font-normal tw-absolute tw-top-0 tw-right-0 
                    tw-transition tw-duration-150 tw-ease-in-out tw-origin-top-left min-w-32 "
                        >
                          <li className="tw-px-3 tw-py-1 tw--ml-9">
                            Term Insurance
                          </li>
                          <hr className="tw-text-nishblue-300 tw-p-0 tw-m-0" />
                          <a style={{ textDecoration: "none" }} href="">
                            <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1">
                              Health Insurance
                            </li>
                          </a>
                          <hr className="tw-text-nishblue-300 tw-p-0 tw-m-0" />
                          <a style={{ textDecoration: "none" }} href="">
                            <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1">
                              Motor Insurance
                            </li>
                          </a>
                        </ul>
                      </li>
                      <hr className="tw-text-nishblue-100 tw-p-0 tw-m-0" />
                      <a style={{ textDecoration: "none" }} href="">
                        <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1">
                          Bonds
                        </li>
                      </a>
                      <hr className="tw-text-nishblue-100 tw-p-0 tw-m-0" />
                      <a style={{ textDecoration: "none" }} href="">
                        <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1">
                          NCD
                        </li>
                      </a>
                      <hr className="tw-text-nishblue-100 tw-p-0 tw-m-0" />
                      <a style={{ textDecoration: "none" }} href="">
                        <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1">
                          PMS
                        </li>
                      </a>
                      <hr className="tw-text-nishblue-100 tw-p-0 tw-m-0" />
                      <a style={{ textDecoration: "none" }} href="">
                        <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1">
                          Home Loans
                        </li>
                      </a>
                      <hr className="tw-text-nishblue-100 tw-p-0 tw-m-0" />
                      <a style={{ textDecoration: "none" }} href="">
                        <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1">
                          Mutual Funds
                        </li>
                      </a>
                    </ul>
                  </li>
                </ul>
              </div>
              <br />

              <div className="group inline-block tw-mb-0 tw-ml-4">
                <div className="tw-outline-none hover:tw-bg-white tw-mx-auto hover:tw-text-navgreen-800 tw-text-navgreen-700 focus:tw-outline-none tw-px-3 tw-mb-0 tw-bg-white tw-rounded-sm tw-flex tw-items-center tw--mt-4 tw-w-max">
                  <span className="tw-pr-1 tw-font-medium tw-flex-1">
                    Services
                  </span>
                  <span>
                    <svg
                      className="tw-fill-current tw-h-4 tw-w-4 tw-transform group-hover:-rotate-180
                    tw-transition tw-duration-150 tw-ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </div>
                <ul
                  className="tw-bg-navgreen-600 tw-border tw-list-none tw-ml-10 tw-z-10 tw-rounded-b-xl tw-text-center tw-shadow-3xl tw-transform tw-scale-0 group-hover:scale-100 tw-absolute 
                tw-transition tw-duration-150 tw-ease-in-out tw-origin-top min-w-32"
                >
                  <li className="tw-rounded-sm tw-relative tw--ml-6 tw-px-3 tw-py-1 ">
                    <div className="tw-w-full tw-text-left tw-text-white tw-font-normal tw-flex tw-gap-0 tw-items-center tw-w-1/4 tw-outline-none focus:tw-outline-none">
                      <span className="tw-pr-1 tw-flex-1">
                        Financial Educational Services
                      </span>
                      <span className="tw-mr-auto">
                        <svg
                          className="tw-fill-current tw-h-4 tw-w-4
                        tw-transition tw-duration-150 tw-ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </div>
                    <ul
                      className="tw-bg-navgreen-100 tw-border tw-list-none tw--ml-9 tw-z-10 tw-shadow-3xl tw-text-nishblue-900 tw-font-normal tw-absolute tw-top-0 tw-right-0 
                    tw-transition tw-duration-150 tw-ease-in-out tw-origin-top-left min-w-32 "
                    >
                      <li className="tw-px-3 tw-py-1  tw--ml-9">
                        The A to Z about Financial Products
                      </li>
                      <hr className="tw-text-nishblue-100 tw-p-0 tw-m-0" />
                      <a style={{ textDecoration: "none" }} href="/Score">
                        <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1">
                          Financial Pulse
                        </li>
                      </a>
                      <hr className="tw-text-nishblue-100 tw-p-0 tw-m-0" />
                      <a style={{ textDecoration: "none" }} href="/Webinar">
                        <li className="tw--ml-9 tw-text-nishblue-900 tw-px-3 tw-py-1">
                          Webinar
                        </li>
                      </a>
                    </ul>
                  </li>

                  <li className="tw-rounded-sm tw-relative tw--ml-6 tw-px-3 tw-py-1 ">
                    <div className="tw-w-full tw-text-left tw-text-white tw-font-normal tw-flex tw-items-center tw-outline-none focus:tw-outline-none">
                      <span className="tw-pr-1 tw-flex-1">
                        Financial Analysis Services
                      </span>
                      <span className="tw-mr-auto">
                        <svg
                          className="tw-fill-current tw-h-4 tw-w-4
                        tw-transition tw-duration-150 tw-ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </div>
                    <ul
                      className="tw-bg-navgreen-100 tw-border tw-list-none tw--ml-9 tw-z-10 tw-shadow-3xl tw-text-nishblue-900 tw-font-normal tw-absolute tw-top-0 tw-right-0 
                    tw-transition tw-duration-150 tw-ease-in-out tw-origin-top-left min-w-32"
                    >
                      <a style={{ textDecoration: "none" }} href="/IPOWatch">
                        <li className=" tw-text-nishblue-900 tw-px-3 tw-py-1 tw--ml-9 ">
                          IPO Analysis
                        </li>
                      </a>
                      <hr className="tw-text-nishblue-100 tw-p-0 tw-m-0" />
                      <li className="tw-px-3 tw-py-1 tw--ml-9 ">
                        Financial Result Analysis{" "}
                        <span className="tw-font-light tw-text-sm">
                          Coming Soon
                        </span>
                      </li>
                    </ul>
                  </li>

                  <li className="tw-rounded-sm tw-relative tw--ml-6 tw-px-3 tw-py-1 ">
                    <div className="tw-w-full tw-text-white tw-font-normal tw-text-left tw-flex tw-items-center tw-outline-none focus:tw-outline-none">
                      <span className="tw-pr-1 tw-flex-1">
                        Investment Advisory Services
                      </span>
                      <span className="tw-mr-auto">
                        <svg
                          className="tw-fill-current tw-h-4 tw-w-4
                        tw-transition tw-duration-150 tw-ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </div>
                    <ul
                      className="tw-bg-nishblue-100 tw-border tw-list-none tw-shadow-3xl tw-text-nishblue-900 tw-font-normal tw-absolute tw-top-0 tw-right-0 
                    tw-transition tw-duration-150 tw-ease-in-out tw-origin-top-left min-w-32 "
                    >
                      <li className="tw-px-3 tw-py-1 tw--ml-9 ">
                        <span className="tw-font-light tw-text-sm">
                          Coming Soon
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <a
                href="/Blogs"
                className="hover:tw-bg-white hover:tw-text-navgreen-800 tw-text-navgreen-700 tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium"
              >
                Blog
              </a>

              <a
                style={{ textDecoration: "none" }}
                href="/OurStory"
                className="hover:tw-bg-white hover:tw-text-navgreen-800 tw-text-navgreen-700 tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium"
              >
                About Us
              </a>

              <div className="tw-bg-navgreen-700 tw-text-white tw-font-semibold tw-px-5 tw-py-1 tw-rounded-lg tw-shadow-0 tw-border-none hover:tw-text-white">
                {loginuser ? (
                  <>
                    <div className="tw-py-1">
                      <div className="">
                        <h6>Welcome {loginuser.name}</h6>
                      </div>
                      <div
                        className="tw-bg-nishblue-600 tw-cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <NavLink
                      className="tw-bg-navgreen-700 tw-text-white tw-font-semibold tw-px-5 tw-py-1 tw-rounded-lg tw-shadow-0 tw-border-none hover:tw-text-white"
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}