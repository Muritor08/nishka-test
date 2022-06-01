import React, { useState } from 'react';

// Imported from Headless UI
import { Disclosure } from '@headlessui/react'
import { FaChevronUp } from 'react-icons/fa'

import { FD_Rates } from "../FD_rates";

export default function Accordian() {
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>

        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-bg-white tw-items-center tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-xl md:tw-text-2xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg hover:tw-bg-nishblue-100 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-nishblue-200 focus-visible:tw-ring-opacity-75">
                        <span>Is there a minimum deposit amount or tenor for fixed deposit?</span>
                        <FaChevronUp
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-left tw-text-md tw-text-gray-500">
                        The minimum amount for a fixed deposit is Rs. {FD_Rates.min_amount}, while it's Rs. 5000 per month for Systematic Deposit Plan. The tenor can range from 12 months to 60 months.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-bg-white tw-items-center tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-xl md:tw-text-2xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg hover:tw-bg-nishblue-100 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-nishblue-200 focus-visible:tw-ring-opacity-75">
                        <span>What interest rates does Bajaj Finance offer on fixed deposit?</span>
                        <FaChevronUp
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-left tw-text-md tw-text-gray-500">
                        Bajaj Finance offers attractive interest rates up to {FD_Rates.nonSenior}% for non-senior citizens. Senior citizens can get interest rates up to 7.45% on their deposits.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-bg-white tw-items-center tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-xl md:tw-text-2xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg hover:tw-bg-nishblue-100 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-nishblue-200 focus-visible:tw-ring-opacity-75">
                        <span>Can I withdraw this Fixed deposit before the tenor expiry? If, yes what is the impact on interest?</span>
                        <FaChevronUp
                            className={`${open ? 'tw-tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-left tw-text-md tw-text-gray-500">
                        The lock-in period for any Fixed Deposit is three months, before which the Fixed Deposit cannot be withdrawn. For premature withdrawal there are penalty slabs as under:
                        <li>0-3 months: Fixed Deposit cannot be withdrawn (not applicable in death cases)</li>
                        <li>3-6 months: No interest is payable on the deposit. Only the principal is payable</li>
                        <li>6 months: Interest payable is 2% lower than the interest rate applicable for the period for which the deposit has run for. In case of no interest specified for the period run, interest payable will be 3% lower than the lowest rate at which Bajaj Finance accepts deposits.</li>

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-bg-white tw-items-center tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-xl md:tw-text-2xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg hover:tw-bg-nishblue-100 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-nishblue-200 focus-visible:tw-ring-opacity-75">
                        <span>When will TDS certificate be provided to the depositor?</span>
                        <FaChevronUp
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-left tw-text-md tw-text-gray-500">
                        The TDS certificate will be emailed to the depositor every quarter.

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-bg-white tw-items-center tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-xl md:tw-text-2xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg hover:tw-bg-nishblue-100 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-nishblue-200 focus-visible:tw-ring-opacity-75">
                        <span>How soon will I recieve my fixed deposit receipt?</span>
                        <FaChevronUp
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-left tw-text-md tw-text-gray-500">
                        The depositor will receive the fixed deposit receipt by courier maximum within 3 weeks of creation of his/her deposit account
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>


        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-bg-white tw-items-center tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-xl md:tw-text-2xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg hover:tw-bg-nishblue-100 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-nishblue-200 focus-visible:tw-ring-opacity-75">
                        <span>I am unable to track my fixed deposit receipt. Please assist. </span>
                        <FaChevronUp
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-left tw-text-md tw-text-gray-500">
                        Fixed Deposit Receipt (FDR) tracking system will be made available shortly on our website. In the meanwhile, a virtual copy of the Fixed Deposit certificate is available online on our Customer Portal - Experia, hence the same can be viewed online.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-bg-white tw-items-center tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-xl md:tw-text-2xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg hover:tw-bg-nishblue-100 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-nishblue-200 focus-visible:tw-ring-opacity-75">
                        <span>What is the interest amount that will be credited to my account?</span>
                        <FaChevronUp
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-left tw-text-md tw-text-gray-500">
                        Basis the scheme availed by the customer; the interest amount will be credited to the customer's bank account registered with us. After the interest is credit to a customer's account, communication for the same will be sent to the customer via SMS/email. Refer to your Statement of Account for the details on the interest scheme availed and interest payable details.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-bg-white tw-items-center tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-xl md:tw-text-2xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg hover:tw-bg-nishblue-100 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-nishblue-200 focus-visible:tw-ring-opacity-75">
                        <span>How will the maturity amount be transferred?</span>
                        <FaChevronUp
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-left tw-text-md tw-text-gray-500">
                        Basis the scheme availed by the customer; the interest amount will be credited to the customer's bank account registered with us. After the interest is credit to a customer's account, communication for the same will be sent to the customer via SMS/email. Refer to your Statement of Account for the details on the interest scheme availed and interest payable details.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
        <Disclosure as="div" className="tw-mt-2">
            {({ open }) => (
                <>
                    {/* Unopened Display Text */}
                    <Disclosure.Button className="tw-h-22 tw-bg-white tw-items-center tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-xl md:tw-text-2xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg hover:tw-bg-nishblue-100 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-nishblue-200 focus-visible:tw-ring-opacity-75">
                        <span>How can I change my bank account details?</span>
                        <FaChevronUp
                            className={`${open ? 'tw-transform tw-rotate-180' : ''
                                } tw-w-3 tw-h-3 tw-text-black`}
                        />
                    </Disclosure.Button>

                    {/* Opened Display Text */}
                    <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-left tw-text-md tw-text-gray-500">
                        To change your bank account details, download change of bank details form from https://www.bajajfinserv.in/forms-centre and submit it along with a copy of Fixed Dupost Receipt and cancelled cheque to your RM/broker.
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    </div>

    const linkName = readMore ? 'View Less' : 'View More'
    return (
        <div className="w-full px-4">
            <div className="w-full bg-white rounded-2xl">
                {/* Element 1 Starts */}
                <Disclosure>
                    {({ open }) => (
                        <>
                            {/* Unopened Display Text */}
                            <Disclosure.Button className=" tw-h-22 tw-bg-white tw-items-center tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-xl md:tw-text-2xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg hover:tw-bg-nishblue-100 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-nishblue-200 focus-visible:tw-ring-opacity-75">
                                <span>What is FD?</span>
                                <FaChevronUp
                                    className={`${open ? 'tw-transform tw-rotate-180' : ''
                                        } tw-w-3 tw-h-3 tw-text-black`}
                                />
                            </Disclosure.Button>

                            {/* Opened Display Text */}
                            <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-left tw-text-md tw-text-gray-500">
                                A fixed deposit is a savings option which helps you earn interest in savings parked with a financier of your choice.
                                You can choose to get returns on a periodic basis, or at maturity.
                                The rates of interest are typicaly higher than money kept in savings accounts because the money is locked in for a
                                specific period and cannot be withdrawn at will of the depositor,
                                except in certain scenarios in which customer is ready to bear the penality for premature withdrawal.
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
                            <Disclosure.Button className="tw-h-22 tw-bg-white tw-items-center tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-xl md:tw-text-2xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg hover:tw-bg-nishblue-100 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-nishblue-200 focus-visible:tw-ring-opacity-75">
                                <span>How to open a fixed deposit account?</span>
                                <FaChevronUp
                                    className={`${open ? 'tw-transform tw-rotate-180' : ''
                                        } tw-w-3 tw-h-3 tw-text-black`}
                                />
                            </Disclosure.Button>

                            {/* Opened Display Text */}
                            <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-left tw-text-md tw-text-gray-500">
                                A fixed deposit is created by opening an Fixed Deposit account with the bank which in turn issues an FD receipt.
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
                            <Disclosure.Button className="tw-h-22 tw-bg-white tw-items-center tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-xl md:tw-text-2xl tw-font-medium tw-text-left tw-text-black tw-font-semibold tw-rounded-lg hover:tw-bg-nishblue-100 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-nishblue-200 focus-visible:tw-ring-opacity-75">
                                <span>How interest is paid on the FD account?</span>
                                <FaChevronUp
                                    className={`${open ? 'tw-transform tw-rotate-180' : ''
                                        } tw-w-3 tw-h-3 tw-text-black`}
                                />
                            </Disclosure.Button>

                            {/* Opened Display Text */}
                            <Disclosure.Panel className="tw-px-4 tw-pt-4 tw-pb-2 tw-text-left tw-text-md tw-text-gray-500">
                                Interest on an Fixed Deposit can be paid into the depositor’s savings bank account at a predefined frequency, or accumulated and paid at the end of the term. On maturity, the lump sum deposit amount is returned to the investor.Investors can also choose to renew the deposit on the maturity date.The minimum deposit amount varies across banks. Banks also offer special rates to senior citizens, defined as those who are over 60 years of age.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                {/* Element 3 Ends */}
                <div className='tw-w-full tw-text-center'>
                    {readMore && extraContent}
                    <button className='tw-bg-white tw-w-max tw-text-justify tw-mt-4 tw-text-lg tw-h-10 tw-border-2 tw-px-4 tw-rounded-lg tw-font-semibold tw-border-nishblue-400' onClick={() => { setReadMore(!readMore) }}>{linkName}</button>
                </div>


            </div>
        </div>
    )

}
