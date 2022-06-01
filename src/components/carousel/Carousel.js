import { Component } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//images
import FDMain from "./assets/FixedDepositMain.png";
import PLMain from "./assets/PersonalLoanMain.png";
import Resources_Main from "./assets/ResourcesMain.png";
import IPOMain from "./assets/IPOMain.png";

import fd_mini from "./assets/fd_mini.png";
import pl_mini from "./assets/pl_mini.png";
import resources_mini from "./assets/resources_mini.png";
import ipo_mini from "./assets/ipo_mini.png";

const carouselsData = [
  {
    main_img: FDMain,
    heading: "Fixed Deposit",
    content:
      "One of the most preferred investment instrument in India having potential to offer recurring return with capital protection and flexibility.",
    link: "/FixedDeposits",
    img1: pl_mini,
    img2: resources_mini,
    text1: "Personal Loan",
    text2: "Resources",
  },
  {
    main_img: PLMain,
    heading: "Personal Loan",
    content:
      "Get instant collateral free loan to meet your both planned and unplanned expenditure without restriction on the end use.",
    link: "/PersonalLoan",
    img1: resources_mini,
    img2: ipo_mini,
    text1: "Resources",
    text2: "IPO Watch",
  },
  {
    main_img: Resources_Main,
    heading: "Resources",
    content:
      "Your gateway to the trending and latest business news, financial know-how, comprehensive market analysis and much more.",
    link: "",
    img1: ipo_mini,
    img2: fd_mini,
    text1: "IPO Watch",
    text2: "Fixed Deposit",
  },
  {
    main_img: IPOMain,
    heading: "IPO Watch",
    content:
      "Comprehensive and un-biased analysis of IPOs to enable you to take informed investment decision.",
    link: "",
    img1: fd_mini,
    img2: pl_mini,
    text1: "Fixed Deposit",
    text2: "Personal Loan",
  },
];

class Carousels extends Component {
  renderCarousels = () => {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      dots: true,
      arrows: false,
      speed: 2000,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      swipeToSlide: true,
      pauseOnHover: false,
      // adaptiveHeight: true,
      // slidesPerRow: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Slider {...settings}>
        {carouselsData.map((each) => (
          <>
            <div className="tw-flex tw-relative tw-w-full">
              <div className="tw-absolute tw-z-10 lg:tw-mt-40 xl:tw-mt-16 xl:tw-w-auto lg:tw-w-96 lg:tw-h-80 xl:tw-h-auto tw-hidden lg:tw-block lg:tw-ml-6 xl:tw-ml-6">
                <img
                  src={each.main_img}
                  alt="women"
                  className="tw-w-full tw-h-full "
                />
              </div>

              <div className="tw-flex tw-flex-col tw-w-full">
                <div className="tw-flex tw-flex-row-reverse tw-items-center lg:tw-p-3">
                  <div className="tw-flex tw-flex-col lg:tw-w-1/2 lg:tw-ml-14 lg:tw-mr-14 xl:tw-mr-16 tw-pl-3 tw-pb-4">
                    <div className="xl:tw-text-7xl md:tw-text-6xl tw-text-navgreen-800 tw-text-4xl tw-font-black tw-p-3 tw-pt-3 md:tw-pt-4">
                      {each.heading}
                    </div>
                    <div className="tw-text-2xl tw-p-3 tw-pt-6 md:tw-pt-8 lg:tw-pt-5 xl:tw-pt-10 tw-h-36">
                      {each.content}
                    </div>
                    <a
                      href={each.link}
                      className="tw-text-2xl tw-p-5 tw-pt-20 md:tw-pt-5 tw-pb-32 md:tw-pb-36 lg:tw-pb-24 xl:tw-pb-24"
                    >
                      <button className="tw-bg-navgreen-300 tw-border tw-border-navgreen-300 tw-text-white tw-font-semibold tw-py-1 tw-px-5">
                        Learn More
                      </button>
                    </a>
                  </div>
                </div>

                <div className="tw-flex tw-flex-row-reverse tw-items-center md:tw-p-3 tw-bg-nishblue-100 tw-h-40 tw-gap-3">
                  <div className="tw-flex tw-flex-col  xl:tw-mr-24 tw--mt-20 tw-mb-20 tw-mx-auto lg:tw-mx-0 md:tw-w-auto tw-items-center">
                    <div className="xl:tw-w-auto xl:tw-h-48 lg:tw-h-44 lg:tw-w-auto md:tw-w-auto md:tw-h-64 tw-w-40 tw-h-40 xl:tw-mr-0 lg:tw-mr-8 xl:tw-ml-10">
                      <img
                        src={each.img2}
                        alt="women1"
                        className="tw-h-full tw-w-full"
                      />
                    </div>
                    <div className="tw-text-xl md:tw-text-3xl tw-font-bold tw-text-navgreen-600 tw-pt-2">
                      {each.text2}
                    </div>
                  </div>
                  <div className="tw-flex tw-flex-col  lg:tw-mr-10 tw--mt-20 tw-mb-20 tw-mx-auto lg:tw-mx-0 md:tw-w-auto tw-items-center">
                    <div className="xl:tw-w-auto xl:tw-h-48 lg:tw-h-44 lg:tw-w-auto md:tw-w-auto md:tw-h-64 tw-w-40 tw-h-40 xl:tw-mr-0 lg:tw-mr-0  xl:tw-ml-10">
                      <img
                        src={each.img1}
                        alt="women1"
                        className="tw-h-full tw-w-full"
                      />
                    </div>
                    <div className="tw-text-xl md:tw-text-3xl tw-font-bold tw-text-navgreen-600 tw-pt-2">
                      {each.text1}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </Slider>
    );
  };

  render() {
    return this.renderCarousels();
  }
}

export default Carousels;