import React, { useState } from 'react';

// Imported from Headless UI
import { Disclosure } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'


export default function Accordian() {
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>

        <Disclosure as="div" className="tw-tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-items-center tw-bg-white tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-md md:tw-text-lg lg:tw-text-xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg tw-hover:bg-nishblue-100 tw-focus:outline-none tw-focus-visible:ring tw-focus-visible:ring-nishblue-200 tw-focus-visible:ring-opacity-75">
                        <span>What are the eligibility criteria for a personal loan?</span>
                        <FaChevronDown
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-md tw-text-left tw-text-gray-600">
                        To avail of a quick personal loan, you only need to meet some basic eligibility criteria.
                        <ol className='list-decimal'>
                            <li>You must be between 20 and 60 years of age</li>
                            <li>You must be a salaried individual employed with an MNC, public or private company</li>
                            <li>You must be a residing citizen of India</li>
                        </ol>
                        If you meet the salary requirement based on your city of residence, you can qualify for the loan.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-items-center tw-bg-white tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-md md:tw-text-lg lg:tw-text-xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg tw-hover:bg-nishblue-100 tw-focus:outline-none tw-focus-visible:ring tw-focus-visible:ring-nishblue-200 tw-focus-visible:ring-opacity-75">
                        <span>What is the minimum salary required to get a loan?</span>
                        <FaChevronDown
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-md tw-text-left tw-text-gray-600">
                        The minimum salary required to avail of a Bajaj Finserv Personal Loan depends on your city of residence. For instance, if you reside in Mumbai, Pune, Bangalore, or Delhi, you must have a minimum monthly salary of Rs. 36,000.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-items-center tw-bg-white tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-md md:tw-text-lg lg:tw-text-xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg tw-hover:bg-nishblue-100 tw-focus:outline-none tw-focus-visible:ring tw-focus-visible:ring-nishblue-200 tw-focus-visible:ring-opacity-75">
                        <span>How can I calculate my EMI?</span>
                        <FaChevronDown
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-md tw-text-left tw-text-gray-600">
                        You can use the handy personal loan EMI calculator to determine your monthly instalments.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-items-center tw-bg-white tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-md md:tw-text-lg lg:tw-text-xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg tw-hover:bg-nishblue-100 tw-focus:outline-none tw-focus-visible:ring tw-focus-visible:ring-nishblue-200 tw-focus-visible:ring-opacity-75">
                        <span>What is the CIBIL score required to get a loan?</span>
                        <FaChevronDown
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-md tw-text-left tw-text-gray-600">
                        The ideal CIBIL score to get instant paperless approval on Bajaj Finserv Personal Loans is 750 and above.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-items-center tw-bg-white tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-md md:tw-text-lg lg:tw-text-xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg tw-hover:bg-nishblue-100 tw-focus:outline-none tw-focus-visible:ring tw-focus-visible:ring-nishblue-200 tw-focus-visible:ring-opacity-75">
                        <span>What is the maximum loan that I can get?</span>
                        <FaChevronDown
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-md tw-text-left tw-text-gray-600">
                        You can borrow money up to Rs.25 lakh without pledging any collateral.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>


        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-items-center tw-bg-white tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-md md:tw-text-lg lg:tw-text-xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg tw-hover:bg-nishblue-100 tw-focus:outline-none tw-focus-visible:ring tw-focus-visible:ring-nishblue-200 tw-focus-visible:ring-opacity-75">
                        <span>Why should I choose a Bajaj Finserv Personal Loan?</span>
                        <FaChevronDown
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-md tw-text-left tw-text-gray-600">
                        Bajaj Finserv offers personal loans with a range of attractive benefits that include:
                        <ol className='list-decimal'>
                            <li>Flexi Personal Loan facility</li>
                            <li>Instant approval</li>
                            <li>Minimal documentation</li>
                            <li>Money in bank in 24 hours</li>
                            <li>Flexible tenors</li>
                            <li>Pre-approved offers</li>
                            <li>No hidden charges</li>
                            Complete the application form online and get your personal loan.
                        </ol>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-items-center tw-bg-white tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-md md:tw-text-lg lg:tw-text-xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg tw-hover:bg-nishblue-100 tw-focus:outline-none tw-focus-visible:ring tw-focus-visible:ring-nishblue-200 tw-focus-visible:ring-opacity-75">
                        <span>What is the difference between a term loan and a Flexi loan?</span>
                        <FaChevronDown
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-md tw-text-left tw-text-gray-600">
                        A standard term loan is a fixed loan amount that you borrow as a lump sum. It has a fixed rate of interest and must be repaid over a specific tenor.
                        On the other hand, a Flexi loan provides you with a pre-approved loan amount based on your credit score and eligibility. You can withdraw money from this approved amount as many times as you need without applying multiple times.
                        For greater flexibility and convenience, choose a Flexi loan by Bajaj Finserv and lower your EMIs by up to 45%*.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-items-center tw-bg-white tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-md md:tw-text-lg lg:tw-text-xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg tw-hover:bg-nishblue-100 tw-focus:outline-none tw-focus-visible:ring tw-focus-visible:ring-nishblue-200 tw-focus-visible:ring-opacity-75">
                        <span>How long does it take to get approved for a personal loan?</span>
                        <FaChevronDown
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-md tw-text-left tw-text-gray-600">
                        With Bajaj Finserv, you can expect approval on your loan application in less than 5 minutes.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-items-center tw-bg-white tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-md md:tw-text-lg lg:tw-text-xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg tw-hover:bg-nishblue-100 tw-focus:outline-none tw-focus-visible:ring tw-focus-visible:ring-nishblue-200 tw-focus-visible:ring-opacity-75">
                        <span>How to calculate personal loan EMI?</span>
                        <FaChevronDown
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-md tw-text-left tw-text-gray-600">
                        It is great to calculate your EMI before applying for a personal loan. While you can do so manually, using a personal loan calculator can help you determine the more accurate value. You can select the loan amount, tenure and interest rate to get the exact payable EMI amount with an interactive chart.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    </div>

    const linkName = readMore ? 'View Less' : 'View More'
    return (
        <div className="tw-w-full tw-px-4">
            <div className="tw-w-full tw-bg-white tw-rounded-2xl">
                {/* Element 1 Starts */}
                <Disclosure>
                    {({ open }) => (
                        <>
                            {/* Unopened Display Text */}
                            <Disclosure.Button className=" tw-h-22 tw-items-center tw-bg-white tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-md md:tw-text-lg lg:tw-text-xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg tw-hover:bg-nishblue-100 tw-focus:outline-none tw-focus-visible:ring tw-focus-visible:ring-nishblue-200 tw-focus-visible:ring-opacity-75">
                                <span>What is a Personal Loan?</span>
                                <FaChevronDown
                                    className={`${open ? 'tw-transform tw-rotate-180' : ''
                                        } tw-w-3 tw-h-3 tw-text-black`}
                                />
                            </Disclosure.Button>

                            {/* Opened Display Text */}
                            <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-md tw-text-left tw-text-gray-600">
                                A personal loan is an unsecured loan, which means you don't need to pledge any collateral to receive funds. Availing of one is easy - you can apply online and use the money to meet almost any expense.
                                Bajaj Finserv, one of the most diversified NBFCs in India, offers instant personal loans with paperless approval and quick disbursal.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                {/* Element 1 Ends */}

                {/* Element 2 Starts */}
                <Disclosure as="div" className="tw-mt-2">
                    {({ open }) => (
                        <>
                            {/* Unopened Display Text */}
                            <Disclosure.Button className="tw-h-22 tw-items-center tw-bg-white tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-md md:tw-text-lg lg:tw-text-xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg tw-hover:bg-nishblue-100 tw-focus:outline-none tw-focus-visible:ring tw-focus-visible:ring-nishblue-200 tw-focus-visible:ring-opacity-75">
                                <span>Where can a personal loan be used?</span>
                                <FaChevronDown
                                    className={`${open ? 'tw-transform tw-rotate-180' : ''
                                        } tw-w-3 tw-h-3 tw-text-black`}
                                />
                            </Disclosure.Button>

                            {/* Opened Display Text */}
                            <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-md tw-text-left tw-text-gray-600">
                                It can help you meet a wide range of financial requirements, such as:
                                <ul className='tw-list-disc'>
                                    <li>Medical emergencies</li>
                                    <li>Home renovation</li>
                                    <li>Higher education</li>
                                    <li>Debt consolidation</li>
                                    <li>Travel</li>
                                    <li>Weddings</li>
                                </ul>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                {/* Element 2 Ends */}

                {/* Element 3 Starts */}
                <Disclosure as="div" className="tw-mt-2">
                    {({ open }) => (
                        <>
                            {/* Unopened Display Text */}
                            <Disclosure.Button className="tw-h-22 tw-items-center tw-bg-white tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-md md:tw-text-lg lg:tw-text-xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg tw-hover:bg-nishblue-100 tw-focus:outline-none tw-focus-visible:ring tw-focus-visible:ring-nishblue-200 tw-focus-visible:ring-opacity-75">
                                <span>What are the documents required for a personal loan?</span>
                                <FaChevronDown
                                    className={`${open ? 'tw-transform tw-rotate-180' : ''
                                        } tw-w-3 tw-h-3 tw-text-black`}
                                />
                            </Disclosure.Button>

                            {/* Opened Display Text */}
                            <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-md tw-text-left tw-text-gray-600">
                                To avail of a loan, you will need to submit the following documents:
                                <ol className='tw-list-decimal'>
                                    <li>KYC documents</li>
                                    <li>Employee ID card</li>
                                    <li>Salary slips of the previous 2 months</li>
                                    <li>Last 3 bank statements of your salary account</li>
                                </ol>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                {readMore && extraContent}
                {/* Element 3 Ends */}
                <div className='tw-w-full tw-mt-4 tw-text-center'>
                    <button className='tw-w-max tw-bg-white tw-text-justify tw-text-md tw-h-10 tw-border-2 tw-px-4 tw-rounded-lg tw-font-semibold tw-border-nishblue-400' onClick={() => { setReadMore(!readMore) }}>{linkName}</button>
                </div>


            </div>
        </div>
    )

}

// Function Ends