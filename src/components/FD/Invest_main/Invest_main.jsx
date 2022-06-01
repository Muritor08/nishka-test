import React from "react";
import guarantee from "../assets/GuaranteedReturns.png"
import compunding from "../assets/ThePowerOfCompunding.png"
import flexible from "../assets/FlexibilityOfUSerInvestedMoney.png"
import higher from "../assets/higherReturnsForSeniorCitizens.png"
const Invest_main = () => {

    return (
        <>
            <div className=" tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
                <div className="tw-border-nishblue-100  md:tw-p-8">
                    <div className="tw-h-auto  tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
                        <h1 className="tw-text-2xl tw-text-left md:tw-text-4xl tw-text-black tw-font-semibold tw-py-4 tw-px-6 lg:tw-px-4">Why invest in Fixed Deposit</h1>
                        <div className=" md:tw-mb-6 tw-flex tw-flex-col md:tw-flex-row md:tw-flex-wrap lg:tw-flex-row tw-justify-center tw-items-center tw-gap-6 md:tw-gap-2 lg:tw-gap-4 tw-py-4">
                            <div className="tw-w-64 md:tw-w-80 tw-shadow-md tw-rounded-xl tw-h-56">
                                <div className=" tw-flex tw-flex-row tw-justify-between tw-gap-6 tw-w-1/4 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                                    <div style={{ background: `url(${guarantee})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className=" tw-mt-8 tw-h-16 tw-w-16 tw-rounded-full">

                                    </div>
                                    <div className="tw-mt-2 tw-text-right tw-text-lg md:tw-text-xl tw-text-white tw-font-bold">
                                        <p>Guaranteed <br/> Returns</p>
                                    </div>
                                </div>
                                <div className="tw-py-2 tw-items-center tw-text-md tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white tw-w-full">
                                    <div className="tw-ml-4 tw--mt-2 md:tw-mt-2">
                                        <p className="tw-m-4 tw-text-justify tw-text-xs">Fixed deposit offers guaranteed returns to the investor. Investor is fully aware of the returns he/she will fetch by investing in a fixed deposit at the time of investment itself. Investor can be rest assured of steady income and can plan its future with confidence.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tw-w-64 md:tw-w-80  tw-shadow-md tw-rounded-xl tw-h-56">
                                <div className=" tw-flex tw-flex-row tw-justify-between tw-gap-6 tw-w-1/4 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                                    <div style={{ background: `url(${compunding})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} className=" tw-mt-8 tw-h-16 tw-w-16 tw-rounded-full">

                                    </div>
                                    <div className="tw-mt-2 tw-text-right tw-text-lg md:tw-text-xl tw-text-white tw-font-bold">
                                        <p>The Power of <br/> Compounding</p>
                                    </div>
                                </div>
                                <div className="tw-py-2 tw-items-center tw-text-justify tw-text-md tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white tw-w-full">
                                    <div className="tw-ml-4 tw--mt-2 md:tw-mt-2">
                                        <p className="tw-m-4 tw-text-xs">Fixed Deposit offers its investors the Power of Compounding; which an investor cannot get from any market-linked product. With known maturity amount investor has the ease of planning its financial goals and be assured of achieving them too.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tw-w-64 md:tw-w-80 tw-shadow-md tw-rounded-xl tw-h-56">
                                <div className=" tw-flex tw-flex-row tw-justify-between tw-gap-6 tw-w-1/4 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                                    <div style={{background: `url(${flexible})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} className=" tw-mt-8 tw-bg-black tw-h-16 tw-w-16 tw-rounded-full">

                                    </div>
                                    <div className="md:tw-mt-2 tw-text-right tw-text-lg md:tw-text-xl tw-text-white tw-font-bold">
                                        <p>Flexiblity of User <br/>Invested Money</p>
                                    </div>
                                </div>
                                <div className="tw-py-2 tw-items-center tw-text-justify tw-text-md tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white tw-w-full">
                                    <div className="tw-ml-4 tw--mt-2 md:tw-mt-2">
                                        <p className="tw-m-4 tw-text-xs">Fixed Deposit fetches better returns than saving accounts. Fixed deposit can be withdrawn at the time of emergency before the agreed maturity date subject to provisions of fixed deposit. Thus fixed deposit is great tool for parking your emergency fund.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tw-w-64 md:tw-w-80 tw-shadow-md tw-rounded-xl tw-h-56">
                                <div className=" tw-flex tw-flex-row tw-justify-between tw-gap-6 tw-w-1/4 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                                    <div style={{background: `url(${higher})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} className=" tw-mt-8 tw-bg-black tw-h-16 tw-w-16 tw-rounded-full">

                                    </div>
                                    <div className="md:tw-mt-2 tw-text-right tw-text-lg md:tw-text-xl tw-text-white tw-font-bold">
                                        <p>Higher Returns<br/>For Senior Citizens</p>
                                    </div>
                                </div>
                                <div className="tw-py-2 tw-items-center tw-text-justify tw-text-md tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white tw-w-full">
                                    <div className="tw-ml-4 tw--mt-2 md:tw-mt-2">
                                        <p className="tw-m-4 tw-text-xs">Senior citizens are generally offered higher rate of interest on fixed deposits. This assures them that they will have steady income and also help them in avoiding investing in riskier financial products.

                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="mx-auto m-3 border-black shadow-3xl rounded-2xl ">
                <div className="border-nishblue-100 p-8">
                    <div className="h-auto  border-4 rounded-2xl border-nishblue-100 p-10">
                        <h1 className="text-2xl md:text-4xl text-black font-semibold py-4 px-6 lg:px-4 md:pt-0">Why invest in Fixed Deposit</h1>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-4 py-4">

                            <div className="w-80 md:w-96 shadow-md rounded-xl h-60">
                                <div className=" flex flex-row justify-start gap-4 w-1/4 px-4 py-2 rounded-t-xl h-2/6 bg-nishblue-400 w-full">
                                    <div className=" mt-8 bg-black h-16 w-16 rounded-full">

                                    </div>
                                    <div className="leading-8 text-2xl text-white font-bold">
                                        <p>Guaranteed</p>
                                        <p>Returns</p>
                                    </div>
                                </div>
                                <div className="py-4 items-center text-left text-md text-black rounded-b-xl h-3/5 bg-white w-full">
                                    <div className="ml-4 mt-2">
                                        <p className="m-4 text-xs">Fixed deposit offers guaranteed returns to the investor. Investor is fully aware of the returns he/she will fetch by investing in a fixed deposit at the time of investment itself. Investor can be rest assured of steady income and can plan its future with confidence.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-80 md:w-96 shadow-md rounded-xl h-60">
                                <div className=" flex flex-row justify-start gap-4 w-1/4 px-4 py-2 rounded-t-xl h-2/6 bg-nishblue-400 w-full">
                                    <div className=" mt-8 bg-black h-16 w-16 rounded-full">

                                    </div>
                                    <div className="leading-8 text-2xl text-white font-bold">
                                        <p>The Power of</p>
                                        <p>Compounding</p>
                                    </div>
                                </div>
                                <div className="py-4 items-center text-left text-md text-black rounded-b-xl h-3/5 bg-white w-full">
                                    <div className="ml-4 mt-2">
                                        <p className="m-4 text-xs">Fixed Deposit offers its investors the Power of Compounding; which an investor cannot get from any market-linked product. With known maturity amount investor has the ease of planning its financial goals and be assured of achieving them too.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-80 md:w-96 shadow-md rounded-xl h-60">
                                <div className=" flex flex-row justify-start gap-4 w-1/4 px-4 py-2 rounded-t-xl h-2/6 bg-nishblue-400 w-full">
                                    <div className=" mt-8 bg-black h-16 w-16 rounded-full">

                                    </div>
                                    <div className="leading-8 text-2xl text-white font-bold">
                                        <p>Flexiblity of user </p>
                                        <p>Invested Money</p>
                                    </div>
                                </div>
                                <div className="py-4 items-center text-left text-md text-black rounded-b-xl h-3/5 bg-white w-full">
                                    <div className="ml-4 mt-2">
                                        <p className="m-4 text-xs">Fixed Deposit fetches better returns than saving accounts. Fixed deposit can be withdrawn at the time of emergency before the agreed maturity date subject to provisions of fixed deposit. Thus fixed deposit is great tool for parking your emergency fund.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-80 md:w-96 shadow-md rounded-xl h-60">
                                <div className=" flex flex-row justify-start gap-4 w-1/4 px-4 py-2 rounded-t-xl h-2/6 bg-nishblue-400 w-full">
                                    <div className=" mt-8 bg-black h-16 w-16 rounded-full">

                                    </div>
                                    <div className="leading-8 text-2xl text-white font-bold">
                                        <p>Higher Returns For</p>
                                        <p>Senior Citizens</p>
                                    </div>
                                </div>
                                <div className="py-4 items-center text-left text-md text-black rounded-b-xl h-3/5 bg-white w-full">
                                    <div className="ml-4 mt-2">
                                        <p className="m-4 text-xs">Senior citizens are generally offered higher rate of interest on fixed deposits. This assures them that they will have steady income and also help them in avoiding investing in riskier financial products.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};


export default Invest_main;