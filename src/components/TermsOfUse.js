import React from 'react';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import { Card, CardDeck, Jumbotron } from 'react-bootstrap';
import SocialFollow from './social/SocialFollow';
import ScrollToTop from '../components/ScrollToTop';

export default function TermsOfUse() {
    return (
        <div  >
            <ScrollToTop />
            <Header />
            <Jumbotron className="container-fluid" >
                <h1 className="sectionHeading" > Nishkaera Terms of Use</h1>
                <p className="sectionParagraph h6 tw-text-justify">
                    Acceptance of Terms - PLEASE READ THE TERMS OF USE THOROUGHLY AND CAREFULLY. The terms and conditions (T&C) set forth below ("Terms of Use") and the Privacy Policy (as defined below) constitute a legally-binding agreement between Nishkaera Finance Advisory and Wealth Management Private Limited, hereafter referred to as "NISHKAERA", and you. These Terms of Use contain provisions that define your limits, legal rights and obligations with respect to your use of and participation in
                </p>
                <br></br>
                <p className="sectionParagraph h6 tw-text-justify">The NISHKAERA website including the classified advertisements, forums, various email functions and Internet links, and all content and NISHKAERA services available through the domain and sub-domains of NISHKAERA located at www.nishkaera.com (collectively referred to herein as the "Platform"), and
                    the online transactions between users of the website who are offering services each referred as "Service Provider" and users of the website who are obtaining services each referred as "User" through the Platform (such services, collectively, the "Services"). The Terms of Use described below apply to all users of the Platform, including users who are also contributors of video content, information, private and public messages, advertisements, and other materials or Services on the Website. The term "User" for the purposes of this Terms of Use shall mean You, in the capacity of an individual, a guest user, browser and/ or representative of an entity, who visits, accesses, uses, downloads, deals with, avails Products & Services and/ or transacts through NISHKAERA Platform. For the purpose of this Policy, wherever the context so requires "You" or "Your" shall mean User and the term "We", "Us", "Our" shall mean the Company.<br /><br />
                    The Company provides the NISHKAERA Platform to its Partner Companies to distributes its respective product/services. It is upto the User to decide whether to use such product/services. If you decide to use such product/services you will be governed by the respective products T&D, in addition to this Terms of Use and Privacy policy. The Company shall not in no way responsible or liable for such product/services offered by its Partner Companies.<br /><br />
                    The Website is currently owned and operated by Nishkaera Finance Advisory and Wealth Management Private Limited, You acknowledge that by using, visiting, registering for, and/or otherwise participating in this Website, including the Services presented, promoted, and displayed on the Website, and by clicking on "I have read and agree to the terms of use," you hereby certify that: (1) you are a User, (2) you have the authority to enter into these Terms of Use, (3) you authorize the transfer of payment for Services requested through the use of the Website, and (4) you agree to be bound by all T&C of these Terms of Use and any other documents incorporated by reference herein. If you do not agree to the foregoing, you should not click to affirm your acceptance thereof, in which case you are prohibited from accessing or using the Website. If you do not agree to any of the provisions set forth in the Terms of Use, kindly discontinue viewing or participating in this Website immediately.<br /><br />
                    The Terms of Use, Privacy Policy and product related T&C shall be modified, at any time, at the sole discretion of the NISHKAERA without any prior intimation to the User. The revised/modified version of the same shall be posted on the NISHKAERA. It is the User's responsibility to review the same on a regular basis. By accessing and continuing to use NISHKAERA, it is deemed that the User has understood and agreed to the revised version.<br /><br />
                    In the event of any inconsistency between the Terms of Use and the Privacy Policy, the provisions under the Terms of Use shall supersede the terms of the Privacy Policy.<br /><br />
                    In case the User notices any inaccuracies or errors, the User is encouraged to please inform the Company in writing at contact@nishkaera.com so that necessary corrections can be done.<br /><br />
                </p>
                {/* <CardDeck >
                    <Card >
                    <Card.Body>
                    <Card.Title>How do we use information ? </Card.Title>
                    <Card.Text>
                    We use the information that you provide to us when you register on a page on this site, fill out a survey, provide information for using a financial tool provided on website, or otherwise voluntarily tell us about yourself or your activities, for our own use to improve our products and services and the content of this site.In addition, we may use the information you provide us to send you marketing information about Nishkaera Financial Advisory and Wealth Management Private Limited’s products / services.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </CardDeck> */}
                <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Title>Agreement</Card.Title>
                            <Card.Text className="tw-text-justify">
                                These Terms of Use, Privacy Policy and respective Product specific T&C read together of the NISHKAERA shall constitute to a legally binding agreement between User and the Company regarding availing the product and /or services through the NISHKAERA platform.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body >
                            <Card.Title>Definitions</Card.Title>
                            <Card.Text className="tw-text-justify">
                                <ul className='tw-list-decimal tw-text-justify'>
                                    <li>"Website" means the website hosted as 'www.nishkaera.com'</li>
                                    <li>"User" means any person who avails any of services, products or facilities offered through the Website.</li>
                                    <li>"Laws" means all laws, ordinance, statutes, rules, orders, decrees, injunctions, licences, permits, approvals, authorisations, consents, waivers, privileges, agreements and regulations of any Governmental authority having jurisdiction over the relevant matter as such which are in effect as of the date hereof or as may be amended, modified, enacted or revoked from time-to-time hereafter.</li>
                                    <li>"Privacy Policy" means the privacy policy published on the Platform.</li>
                                    <li>"Terms of Use" shall mean these T&C set out herein regarding the use of the Platform by the User.</li>
                                    <li>"Terms and Conditions" shall mean the product specific which are set out in the relevant product section.</li>
                                    <li>“Platform” means NISHKAERA website www.nishkaera.com.</li>
                                </ul>
                                By downloading the app and/or registering on the app/website and/or accessing the platform and/or by submitting details on the platform and/or using any product/services/facilities offered on the platform, the User agrees and accept the following Terms of Use:<br /><br />
                                <ul className='tw-text-justify'>
                                    <li>to provide all the necessary information to the Company and/or third party/vendors and/or to fulfil the regulatory requirements:(i) at the time of registration;(ii) as and when required by applicable Law; and (iii) whenever there is any change in earlier provided information by the User.</li>
                                    <li>understands and agrees that the Company may appoint third party/vendors/service providers to carry out its obligations under these Terms of Use.</li>
                                    <li>understands and agrees that the Company may engage with third parties to promote the NISHKAERA or products and services.</li>
                                    <li>understands and agrees that Company may sub-contract or employ agents to carry out any functions or services relating to the NISHKAERA or any of its obligations under the Terms of Use</li>
                                    <li>Any use/access of the NISHKAERA by any person, who is not resident of India, shall be at his/her sole responsibility including determining whether such use / access of the NISHKAERA constitute any breach under any applicable laws of India and his / her country of residence. Such User will be solely and absolutely liable for any liability incurred by the Company in this regard and keep the Company and/ or its Group Companies indemnified against any such liability.</li>
                                    <li>agrees that the Company may collect Personal Information of the User (as defined under Information Technology Act, 2000  read with Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ) and the Company may use such information for providing appropriate services/products to the Users</li>
                                    <li>understands and agrees that the Company may share User's information (personal, transactional and behavioural) with its associates/ vendors / Service Providers/ business partners for promoting/offering its and/or their products and services or for analytics purpose.</li>
                                    <li>Understands and agrees that the Company and/or/ associates/ vendors/ business partners to record conversations with him/ her for any purpose but not limited to quality control, record retention. The Company will keep such records confidential</li>
                                    <li>User understands that accessing, using and sharing User data obtained will be governed by our Privacy Policy.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br></br>
                <br></br>
                <CardDeck className="tw-text-justify">
                    <Card>
                        <Card.Body>
                            <Card.Title>Disclaimer by the Company</Card.Title>
                            <Card.Text>
                                <ul className='tw-text-justify'>
                                    <li>the product related T&C are given in the respective product page.</li>
                                    <li>all disputes/grievances with respect to the distribution activity, would have access to respective grievances redressal mechanism or arbitration mechanism.</li>
                                    <li>Any warranty that is provided in connection with any of the third-party products or services described on the NISHKAERA are provided solely by the owner, service provider or supplier of that product or service, and not by the Company.</li>
                                    <li>NISHKAERA shall not be liable to User or to any other third party for any direct, indirect, incidental, special, exemplary, punitive, consequential or other damages (including without limitation loss of profits, loss or corruption of data, loss of goodwill, work stoppage, computer failure, Data Breach  or malfunction, or interruption/delay of business or due to any technology related interruption ) under any contract, negligence, strict liability or other Law or theory arising out of or in connection with the use or availing of such third party products or services or any contract or transaction entered into or executed in pursuance thereof (however arising, including negligence).</li>
                                    <li>The company shall not be held liable for any loss or damage, directly or indirectly arising out of the use of or inability to use, access or avail of any service or product or out of any breach of any warranty.</li>
                                    <li>The Company shall not be liable for any damage or injury caused by failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of record, whether for breach of contract, tortuous behaviour, negligence, or under any other cause of action.</li>
                                    <li>The NISHKAERA may provide referrals to third party content or links of third-party websites/apps, including companies that have a relationship with the Company. Our decision to provide referral information to a third party or to pass on an offer made by a third party or to provide a link from NISHKAERA to a third-party website or app shall be for promotional, informational or educational purpose or as a convenience to the User. By clicking those Links, provided on the NISHKAERA, the User may be taken to other websites or apps without any prior intimation or indication of doing or having done so. These third-party links may not necessarily be screened or reviewed by the Company and hence, the Company do not, in any way, sponsor, certify or warrant the performance, operation, content or availability of such third-party links. User will use third-party content at User own risk. We cannot be held responsible for any third party, their products or services their website or app, or any content that is made available through such third-party sites, nor do we make any warranties or representations, express or implied, regarding third party content on any third-party sites, and shall have no liability in relation to any of the aforesaid. User shall indemnify and keep indemnified the Company, and associate companies and its employees, directors, representatives and keep them harmless from any dispute(s) that may arise due to a violation/breach(s) of the Terms of Use of such hyper link(s) by User. User will be solely responsible for maintaining the confidentiality of the account that User create on NISHKAERA Platform.</li>
                                    <li>The information and views provided on NISHKAERA Platform are based on information available and believed to be correct to the best of our knowledge. Although due care has been exercised to verify the accuracy of the information, the Company assume no responsibility for the accuracy or for any loss arising out of any information contained therein.</li>
                                    <li>The information and the contents on the NISHKAERA are provided, unless otherwise specified, without any representation or warranty/guarantee of any kind, either express or implied, including without limitation, any representation or warranty for accuracy, continuity, uninterrupted access, timeliness, sequence, quality, performance, fitness for any particular purpose or completeness. Specifically, the Company does not provide any warranties or guarantees including, but not limited to the following:</li>
                                    <ol>
                                        <li>availability, accuracy, correctness, usefulness, currency or completeness of information, products or services available on the NISHKAERA;</li>
                                        <li>title, non-infringement, freedom from computer virus, warranties of merchantability or fitness for a particular purpose, other than those warranties which are incapable of exclusion, restriction or modification under the Laws applicable to the Terms of Use.</li>
                                        <li>The NISHKAERA systems are secured from hacking or unauthorised access even though the Company and its associate Companies adopt security measures, which it considers appropriate. The Company shall not be responsible or liable for any loss or damage caused, directly or indirectly, as a result of hacking or unauthorised access.</li>
                                    </ol>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body >
                            <Card.Title>User Declaration</Card.Title>
                            <Card.Text>
                                <ul className='tw-text-justify'>
                                    <li>User has read, understood and agrees to the Terms of Use, Privacy Policy and other T&C including any amendments thereof from time to time.</li>
                                    <li>User is eligible and competent to enter in to such an agreement with the Company</li>
                                    <li>User confirms that he/she has requisite knowledge and experience to understand the risks involved in transacting any product or service offered through the NISHKAERA.</li>
                                    <li>The detail provided by User, on NISHKAERA, are true and correct. *User shall produce any document/undertaking, as may be required by the Company, for verification</li>
                                    <li>Update any personal details already provided to the company as soon as possible</li>
                                    <li>Keep log-in credentials safe and secured</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br /><br />
                <CardDeck className="tw-text-justify">
                    <Card>
                        <Card.Body>
                            <Card.Title>Proprietary and Intellectual Property Rights</Card.Title>
                            <Card.Text>
                                The Company is the licensed owner and authorized user of any trademark, registered trademark and/or service mark appearing on the NISHKAERA. The respective entities (who is offering the concerned product./services) is the copyright owner or licensee of contents and/or information pertaining to such products on the NISHKAERA including but not limited to any text, images, illustrations, audio clips, video clips and screens appearing on the NISHKAERA. All rights on the NISHKAERA are reserved and User may not download and/or save a copy of the NISHKAERA or any part thereof including any of the screens or part thereof and/or reproduce, store it in a retrieval system or transmit it in any form or by any means - electronic, electrostatic, magnetic tape, mechanical printing, photocopying, recording or otherwise including the right of translation in any language without the express permission of the Company (except as otherwise provided on the NISHKAERA or in the Terms of Use for any purpose) or use it in any manner that is likely to cause confusion or deception among persons or in any manner which discredits the Company or its partners. However, User may print a copy of the information on the Website for User's personal use or records. The NISHKAERA is for User's personal use. If User makes other use of the NISHKAERA, except as otherwise provided above, User may violate copyright and other Laws of India and other countries and may be subject to penalties. The Company do not grant any license or other authorization to the User of its trademarks, registered trademarks, service marks, or other copyrightable material or other intellectual property by placing them on the NISHKAERA.                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>User Communications</Card.Title>
                            <Card.Text>
                                By downloading/accessing the NISHKAERA, providing the relevant details, and accepting these Terms of Use, implies that User has provided express consent to be contacted by the Company/ associates/ vendors / business partners (even though User may be in "National Do Not Call Registry") at the contact number, or electronic address provided by User while registering on the NISHKAERA or applying for any Product / Service through the App/Website. User further agrees to being contacted in any manner, including without limitation, SMS (including text messages), calls using pre-recorded messages or artificial voice, calls and messages delivered using auto telephone dialling system or an automatic texting system, and notifications sent via the NISHKAERA. Automated messages may be left on the answering machine or voice mail. NISHKAERA may use our registered customer's email address and other personally identifiable information to send product updates and marketing communications. To opt-out from such messages, click on Unsubscribe link on any such email you receive from us. We may continue to use your email address to notify you of any critical administrative or operational updates.                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br /><br />
                <CardDeck className="tw-text-justify">
                    <Card>
                        <Card.Body>
                            <Card.Title>Prohibited Activities</Card.Title>
                            <Card.Text>
                                Users Shall Not -<br /><br />
                                <ul className='tw-text-justify'>
                                    <li>Use NISHKAERA Platform, it’s publication, logo, educational videos or any other property of NISHKAERA for any purpose that is unlawful in any jurisdiction or not permitted by the Terms of Use; except as permitted by the copyright owner or other right holder thereof;</li>
                                    <li>post, transmit and receive any unlawful, fraudulent, libellous, defamatory, obscene, threatening, abusive, hateful, offensive, or otherwise objectionable information or statement of any kind including, without limitation, any information or statement constituting or encouraging conduct that would constitute sedition, a criminal offence, give rise to civil liability, or otherwise violate any local, state, national, foreign or other Law;</li>
                                    <li>post or transmit any advertisements, solicitations, chain letters, pyramid schemes, investment opportunities or schemes or other unsolicited commercial communication (except as otherwise expressly permitted by the Company) or engage in spamming or flooding;</li>
                                    <li>post transmit any spam mails, information or software which contains a virus, Trojanhorse, worm or other harmful component;</li>
                                    <li>post, publish, transmit, reproduce, distribute or in any way exploit any information, software or other material obtained from or through the NISHKAERA for commercial purposes (other than as expressly permitted by the provider of such information, software or other material);</li>
                                    <li>upload, post, publish, transmit, reproduce or distribute in any way, information, software or other material obtained on or through the NISHKAERA which is protected by copyright or other proprietary right, or derivative works with respect thereto, except as permitted by the copyright owner or other right holder thereof;</li>
                                    <li>attempt to decompile or reverse engineer any of the software available on the NISHKAERA. User will not make any attempt to hack into the NISHKAERA or otherwise attempt to subvert any firewall or other security measure of the NISHKAERA and if User becomes aware of any shortcoming in the security on the NISHKAERA User shall forthwith inform the Company and / or its Group Companies of the same in writing.</li>
                                    <li>User shall use any software provided on, by or through the NISHKAERA only for the purposes for which it has been provided to User and for no other purpose.</li>
                                </ul>

                                User shall not host, display, upload, modify, publish, transmit, update or share any information on the NISHKAERA, that:<br /><br />
                                <ul className='tw-text-justify'>
                                    <li>harm minors in any way;</li>
                                    <li>infringes any patent, trademark, copyright or other proprietary rights;</li>
                                    <li>violates any Law for the time being in force;</li>
                                    <li>deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;</li>
                                    <li>impersonates another person;</li>
                                    <li>contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource;</li>
                                    <li>belongs to another person and to which User do not have any right to;</li>
                                    <li>is grossly harmful, harassing, paedophilic, libellous, invasive of another's privacy, hateful, defamatory, obscene, pornographic, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever;</li>
                                    <li>threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting any other nation. Any content and or comment uploaded by User, shall be subject to relevant Indian Laws and may be disabled, or and may be subject to investigation under appropriate Laws. Furthermore, if User is found to be in non-compliance with the Laws and regulations, these terms, or the Privacy Policy of the NISHKAERA, the Company shall have the right to immediately terminate/block User's access and usage of the NISHKAERA and the Company and / or its Group Companies shall have the right to immediately remove any non-compliant content and/or comment, uploaded by User and shall further have the right to take recourse to such remedies as would be available to the Company under the applicable Laws.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Confidentiality</Card.Title>
                            <Card.Text>
                                The Company shall maintain the confidentiality of the User's Personal Information as per the Privacy Policy. The Company recognize and acknowledge the value and importance of the protection of the User's information. The Company shall exercise the same standard of care to protect the information from the User's that it exercises in protecting its own information. Further, the Company will ensure that any third party, with whom the information is being shared, are under contractual obligations to protect the confidentiality of information of the Users of the NISHKAERA, and to use it only to provide the services to the extent as required under the agreement with the Company.The Company shall maintain the confidentiality of the User's Personal Information as per the Privacy Policy. The Company recognize and acknowledge the value and importance of the protection of the User's information. The Company shall exercise the same standard of care to protect the information from the User's that it exercises in protecting its own information. Further, the Company will ensure that any third party, with whom the information is being shared, are under contractual obligations to protect the confidentiality of information of the Users of the NISHKAERA, and to use it only to provide the services to the extent as required under the agreement with the Company.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br /><br />
                <CardDeck className="tw-text-justify">
                    <Card>
                        <Card.Body>
                            <Card.Title>Authority</Card.Title>
                            <Card.Text>
                                User irrevocably and unconditionally authorise the company to access all information relating to User, available on the NISHKAERA, including<br /><br />
                                <ul className='tw-text-justify'>
                                    <li>personal Information</li>
                                    <li>information relating to access and use of the NISHKAERA by the User</li>
                                    <li>transactions entered by the User</li>
                                    <li>user behaviour.</li>
                                </ul>

                                Subject to the Privacy Policy, all information submitted on or via the NISHKAERA Platform shall be deemed to be and remain the property of the Company; and either the Company shall be free to use the same in any manner (including, but not limited to, usage of the data for prefill of the required information) amongst each other in order to provide service/products to the User,
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Indemnity</Card.Title>
                            <Card.Text>
                                User agrees and undertakes to indemnify and hold the Company, and its affiliates, officers, agents, partners, and employees, harmless from any claim or demand, including attorneys’ fees, made by any third party due to or arising out of (i) your violation of these Terms; (ii) your violation of any rights of other users of the Platform; (iii) your use or misuse of the Platform or the Services; (iv) your violation of applicable laws.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <br /><br />
                <CardDeck className="tw-text-justify">
                    <Card>
                        <Card.Body>
                            <Card.Title>Termination</Card.Title>
                            <Card.Text>
                                User acknowledges and agrees that the Company may, at its sole discretion, without notice, suspend or terminate User ID, password or account or deny User access to all or part of the NISHKAERA, if:<br /><br />
                                <ul className='tw-text-justify'>
                                    <li>if it learns of User's death, bankruptcy or lack of legal capacity or of circumstances which impact User's credit worthiness and/or</li>
                                    <li>directions from regulatory/government bodies</li>
                                    <li>for any other reason which it thinks fit and proper.</li>
                                    <li>User engages in any conduct or activities that the Company and/ or its Group Companies, believes in its sole discretion, violates any of the Terms of Use, rights of the Company or is otherwise inappropriate for continued access to the Platform, and/or</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Governing Law & Jurisdiction</Card.Title>
                            <Card.Text>
                                All transactions entered on or through NISHKAERA and the relationship between User and the Company shall be governed by and construed in accordance with the Laws of India and no other nation. Without regard to the Laws relating to conflicts of Law. User and the Company and / its Group Companies agree that all claims, differences and disputes arising under or in connection with or pursuant to the Platform, the Terms of Use, any transactions entered into on or through the NISHKAERA or the relationship between User and the Company and / its Group Companies shall be subject to the exclusive jurisdiction of the competent courts located in the city of Mumbai, India and User hereby accedes to and accept the jurisdiction of such courts. Provided that, notwithstanding what is stated above, if the Company so thinks fit, it may institute proceedings against User in any other court or tribunal having jurisdiction.<br /><br />
                                The Company accepts no liability whatsoever, direct or indirect for non-compliance with the Laws of any country other than that of India. The mere fact that the Website or the App can be accessed or used, or any facility can be availed of in a country other than India would not mean that the Laws of such country would be applicable, and the Company shall not comply with the same.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <br /><br />
                <CardDeck className="tw-text-justify">
                    <Card>
                        <Card.Body>
                            <Card.Title>Notices</Card.Title>
                            <Card.Text>
                                The Company may give notice to the User by e-mail/letter/telephone or any other means as deemed fit, to the address available in the Company's Records. If the document/communication is sent by email, the Company shall be deemed to have duly communicated and delivered any communication or document to User if such communication or document is delivered to the User. In addition, the Company may (but shall not be bound to) also publish notices of general nature, which are applicable to all Users, in a newspaper circulating in India or on its Platform. Such notices will have the same effect as a notice served individually to each User.<br /><br />
                                The User may give notice to the Company, in writing/delivering by hand/post/fax unless until directed otherwise at the address mentioned on the NISHKAERA. <br /><br />
                                Documents which may be sent by electronic communication may be in the form of an electronic mail, an electronic mail attachment, or in the form of an available download from the Platform.<br /><br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Arbitration</Card.Title>
                            <Card.Text>
                                If any dispute arises between the User and the Company (individually a "Party" and collectively "Parties"), in connection with validity, interpretation, implementation or alleged material breach of the Terms of Use, the Parties shall endeavour to settle such dispute amicably. In case of failure of the Parties to settle such disputes within 15 days, either Party shall be entitled to refer the dispute to arbitration. The arbitration shall be conducted by a sole arbitrator. The arbitrator shall be appointed by the Company. The arbitration proceedings shall be conducted in Mumbai, India and the same shall be governed by the provisions of the Indian Arbitration & Conciliation Act, 1996, or any statutory modification as may be then in force. The language of arbitration shall be English.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <br /><br />
                <CardDeck className="tw-text-justify">
                    <Card>
                        <Card.Body>
                            <Card.Title>No Waiver</Card.Title>
                            <Card.Text>
                                The failure or delay of the Company to exercise or enforce any right or provision of the Terms of Use shall not constitute a waiver of such right or provision. No waiver on the part of the Company shall be valid unless it is in writing signed by it or on its behalf. A waiver of any right or provision by the Company and / or its Group Companies on a particular occasion shall not prevent the Company from enforcing such right or provision on a subsequent occasion.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Severability</Card.Title>
                            <Card.Text>
                                If any provision of the Terms of Use shall be held to be invalid or unenforceable by reason of any Law or any rule, order, judgment, decree, award or decision of any court, tribunal or regulatory or self-regulatory agency or body, such invalidity or unenforceability shall attach only to such provision or condition, and User, the Company, the court, tribunal or regulatory or self-regulatory agency or body should endeavour to give effect to the parties' intentions as reflected in the provision to the extent possible. The validity of the remaining provisions and conditions shall not be affected thereby, and these Terms of Use shall be carried out as if any such invalid or unenforceable provision or condition was not contained herein.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <br /><br />
                
                <CardDeck className="tw-text-justify">
                    <Card>
                        <Card.Body>
                            <Card.Title>Limitation</Card.Title>
                            <Card.Text>
                                Notwithstanding any statute or Law to the contrary, but to the extent permitted by Law, any claim or cause of action arising out of or related to access or use of the NISHKAERA or the Terms of use must be filed within 3 months from such claim or cause of action arose failing which it shall be forever barred.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Force Majeure</Card.Title>
                            <Card.Text>
                                The Company shall not be responsible for delay or default in the performance of their obligations due to any natural calamities, contingencies, Pandemic beyond their control including war, civil disorder, arson, unavailability of any communication system, virus in the processes, computer hacking (security breach), computer crashes, server overload, technical error or acts of government /regulatory authorities.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <br /><br />
                <CardDeck className="tw-text-justify">
                    <Card>
                        <Card.Body>
                            <Card.Title>No Agency</Card.Title>
                            <Card.Text>
                                The Terms of Use, Privacy Policy and T&C and use of or access to the NISHKAERA are not intended to create an agency, partnership, joint-venture or employer-employee relationship between User and the NISHKAERA, the Company, business partners, vendors and third parties except where otherwise specifically agreed or appointed.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Miscellaneous</Card.Title>
                            <Card.Text>
                                <ul className='tw-text-justify'>
                                    <li>The clause headings in the Terms of Use are only for convenience and do not affect the meaning of any provision and shall not be taken into account in interpreting or limiting the scope of the provisions of the Terms of Use.</li>
                                    <li>User must at his/her own cost:</li>
                                    <ol style={{ listStyleType: "lower-alpha" }}>
                                        <li>provides for own access to the worldwide web and pay any service fees, telephone charges and online service usage associated with such access; and </li>
                                        <li>provides all equipment necessary for User to make such connection to the world wideweb, including a computer and modem.</li>
                                    </ol>
                                    <li>The content presented at the Website may vary depending upon User's browser version/limitations.</li>
                                    <li>The Company shall ensure functioning of the NISHKAERA on a best effort basis. However, User acknowledges and agrees that the Company has the right to monitor the functioning of the NISHKAERA electronically or otherwise from time to time.</li>
                                    <li>The Company reserve the right to refuse to post or to remove any information or materials, in whole or in part, that, in its sole discretion, are unacceptable, undesirable, inappropriate or in violation of the Terms of Use.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <br /><br />
                <CardDeck className="tw-text-justify">
                <Card>
                        <Card.Body>
                            <Card.Title>Cancellation and Refund Policy</Card.Title>
                            <Card.Text>
                                As of now, Company is not collecting any cash from it's customer from the services provided, so, there is no cancellation and refund.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Grievance Redressal</Card.Title>
                            <Card.Text>
                                Any complaints or concerns with regards to the content on the platform and/or comment and/or breach of these terms and/or to report any abuse of law, shall be immediately informed, with all the relevant details, to the designated Grievance Officer as mentioned below via in writing or through email to:<br /><br />
                                <a href="mailto:grievance@nishkaera.com">grievance@nishkaera.com</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

            </Jumbotron>
            <Footer />
        </div>
    );
}