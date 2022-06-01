import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

// import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resources.css";



const initialLoanInfo = (
  <div>
    <p>
      Radhika could not believe that the bank did not agree to sanction the personal amount applied by her. On enquiring about the reasons with her bank, she was told that her credit score was not good enough even though her income reflects good loan paying capacity. You may also lend into such an issue when you go for a personal loan.<br /><br />

      Your credit score is a very important parameter for any lender, whether a bank, NBFC or any lending agency, to decide whether they can lend your loan or not. Also, your credit score also has a bearing on the interest rates, tenor and other flexibility offered by a lending company. Therefore, it is important to know your credit score from a reliable score and monitor it regularly. We might not have a very good credit score at times due to our pass payment records. Here are some easy ways through which you can improve your credit score.<br /><br />

      <h5>1.	Do not go for too many loans together</h5>
      You may be earning handsomely but that does not mean you just go extravagant with your spending and start taking loans for everything together. If you take too many loans at once, it will show that you are in an unforgiving cycle where you have insufficient funds. This is badly affecting your credit score.  So, take one loan and repay it before you go for another. Successful payment of loan rather increases your credit score which is turn improve your loan eligibility.<br /><br />

      <h5>2.	Opt for longer tenor</h5>
      Generally, people are in a hurry to pay the loan and keep their EMI very high risking the chance of payment default or skipping the payment due to fund shortage. Such payment defaults or skipping the EMIs can impact your credit score very badly. To avoid this, keep your EMIs low and at a level that you can easily pay them in different financial situation. Also, a lower EMI on one loan allows you to have enough paying capacity for another loan.<br /><br />

      <h5>3.	Customise your credit limit</h5>
      Your credit utilisation ratio has a major impact on your credit score. The more you are able to restrict your credit usage as per the allotted limit, the better it is for your credit score. Reaching the limit of your credit negatively impact your credit score.  You can manage this situation by customising your credit limit with your lender based on your expenses.<br /><br />

      <h5>4.	Maintain your old credit cards</h5>
      You should try and continue to maintain your old credit cards as long as you can pay your bills in full and on time. Doing this help you build a lengthy and strong credit history, which will help you in increase and maintain a good credit score.<br /><br />

      <h5>5.	Pay your existing debt and credit cards bill on time</h5>
      Always ensure that you pay all your existing loan EMIs and credit cards bills on time. If you are fail to do so you will not only pay huge penalties especially in case of credit cards, you will also make your credit score go down. If you are not paying just because you forgot the payment dates then it is advisable to set reminders for all your debt payments.<br /><br />

      <h5>6.	Check your credit score for mistakes</h5>
      Your credit score or your CIBIL report may have some mistakes. This can be incorrect information or delay in uploading the recording the payment details. If there is any such mistake you can get it corrected by filling the CIBIL dispute resolution form online. You need to check your CIBIL report from time to time and see if its in order and go for correction of errors if any and maintain a good credit score always.<br /><br />

    </p>
  </div>
);

const typesOfBuisnessLoans = (
  <div>
    <h3>Types of Business Loans </h3>
    <p>
      Various types of business loans are provided by banks and NBFCs to meet
      different types of business requirement. Some of them are as under:{" "}
    </p>
    <h5>1. Term Loan </h5>
    <p>
      Term loan is offered under various types, such as short-term loan,
      long-term loan and other small business loans. The loan amount offered
      under term loan depends on the applicant’s profile and business
      requirements that can be repaid in 12 months to 5 years, in the form of
      EMIs. Term loans are divided into two parts, unsecured business loans and
      secured business loans. Secured loans require collateral to be submitted
      with the banks, which is not in the case with unsecured business loans.{" "}
    </p>
    <h5>2. Working Capital Loan </h5>
    <p>
      Working capital loans are availed to meet the day-to-day business
      requirements or to manage business cash flow. The working capital loan can
      be availed for various other purposes, such as business expansion, buying
      equipment or machinery, purchasing raw material or goods, paying-off
      salaries or rent, enhancing inventory and much more.{" "}
    </p>
    <h5>3. Overdraft Loan </h5>
    <p>
      An overdraft means overdrawing money from ones’ current/savings account
      even if the account balance is zero. An agreed rate of interest will be
      charged, if the overdrawn amount is within the limits of a preceding
      agreement. The interest rate is charged only on the utilized amount of the
      total withdrawal limit.{" "}
    </p>
    <h5>4. Letter of Credit </h5>
    <p>
      Letter of credit is a payment instrument used mainly in international
      trade in which the bank provides monetary guarantee to enterprises which
      deal in import and export of goods. Enterprises doing businesses overseas
      have to deal with unknown suppliers and they require assurance of payment
      before performing any transaction. Therefore, a letter of credit is
      important to provide payment assurance to the suppliers or exporters.{" "}
    </p>
    <h5>5. Bill (Invoice) Discounting </h5>
    <p>
      Invoice discounting is a financial instrument offered by banks and
      NBFCs. Bill discounting is a source of working capital finance for the
      seller of goods on credit. It is a discount which a financial institution
      takes from a seller’s customer. Through the payment being made by letter
      of credit, the buyer has the option of buying goods from the seller. Bills
      that come under bill discounting are termed as ‘bills of exchange’.{" "}
    </p>
    <h5>6. Point of Sale (POS) Loan </h5>
    <p>
      Point of Sale Loan is a type of funding wherein merchants offer their
      customers some financial assistance at point of their purchase. Business
      owners, enterprises, MSMEs, entrepreneurs, retailers can avail Loan
      against POS machines to start a new business or to manage their existing
      businesses. POS Loan is also termed as Merchant Cash Advance in which the
      loan amount depends on business volume generated via POS terminals.{" "}
    </p>
  </div>
);
const specialWomenLoans = (
  <div id="womensloan">
    <h3>Special business loan schemes for Women Entrepreneurs </h3>
    <p>
      To promote entrepreneurship among women in India banks are
      giving attractive schemes to women entrepreneurs. <br />
      These business financing schemes are exclusively for women and it gives
      them relief in terms of interest rates and collateral. <br />
      Some of the banks also have special departments for women entrepreneurs
      where they provide them business consulting, training and counselling
      along with avenues for marketing and showcasing of their products. <br />
      However, women entrepreneurs whose ownership is less than 50% in the
      company are not eligible to avail the benefits of the women’s special
      schemes. <br />
      Some of the popular loan schemes for women entrepreneurs are as follows:{" "}
    </p>
    <ul>
      <li>Mahila Udyam Nidhi Scheme </li>
      <li>Mahila Samridhi Yojana </li>

      <li>Cent Kalyani from Central Bank of India </li>

      <li>Stree Shakti Package from State Bank of India </li>

      <li>Shringaar and Annapurna from Bhartiya Mahila Bank </li>

      <li>Dena Shakti Scheme from Dena Bank </li>

      <li>Udyogini Scheme </li>
    </ul>
    <h5>Mahila Udyam Nidhi (MUN) Scheme </h5>
    <p>
      Mahila Udyam Nidhi (MUN) Scheme is a scheme offered under Small Industrial
      Development Bank of India (SIDBI) to encourage and empower women
      entrepreneurs and promote women Entrepreneurship by providing financial
      assistance at concessional interest rates. The scheme is offered by many
      banks.
      <br />
      Under Mahila Udyam Nidhi Scheme, women entrepreneurs can avail loan sump
      to Rs. 10 lakh to start their own business or small scale enterprise.
      These loan does not have collateral requirements but the business should
      have minimum investment of Rs 5 lakh. <br />
      The interest rates offered under this scheme may vary from bank to bank.
      The funding support can also be used to upgrade or expand existing
      projects. <br />
      The maximum loan repayment period offered under this scheme is up to 10
      years with the moratorium period up to 5 years. <br />
      The business activities for which loan can be availed include farm and
      farm equipment service, beauty parlour, canteen and restaurant, day care
      centre, mobile repairing, photocopying, tailoring, typing centre, training
      institute etc. <br />
      The key objective of this scheme is to promote women entrepreneurs,
      increase business opportunities in tiny and small sectors by feeling gap
      in equity, expansion and modernisation of existing units.{" "}
    </p>
    <h5>Mahila Samridhi Yojana </h5>
    <p>
      This scheme, initiated by the Central Government, focusses on providing
      microfinance to women entrepreneurs hailing from marginalized sections of
      the society. Keeping women empowerment in mind, the flagship scheme is
      being implemented by a wide range of channel partners nationwide. Women
      beneficiaries are identified and loan is provided to them directly or in
      the form of Self-Help Groups (SHGs). <br />
      The amount of loan sanction under the scheme is limited to Rs 1,40,000
      with a repayment tenure of 3 years and 6 months and 3 months of
      moratorium.{" "}
    </p>
    <h5>Udyogini Scheme (Yojana) </h5>
    <p>
      Government of India has initiated this scheme for the welfare and
      development of Indian Women Entrepreneurs. Udyogini Yojana has been
      implemented by Women Development Corporation. This scheme promotes and
      motivates women entrepreneurship among the poor by providing financial
      support for doing business. <br />
      This scheme majorly supports and helps illiterate women living in the
      rural and backward areas. Udyogini Schemes helps in the enhancement of
      income of an individual and families and contributes in the overall growth
      of the country. The limit of loan under the scheme if Rs 3 lakh and given
      to people having family income of Rs 1.5 lakh or less. However, there is
      no income limit for widow or disabled woman. Various banks and NBFCs offer
      loans under this scheme with different interest rates. <br />
      Various business activities are covered under this scheme including
      pottery, sari and embroidery making, shops and establishment, silk
      weaving, tailoring, tea stall, tutoring, canteen and catering, agarbati
      manufacturing, jute carpet manufacturing, beauty parlour etc.{" "}
    </p>
    <h5>Cent Kalyani from Central Bank of India </h5>
    <p>
      Loans for business and start-up are provided to women entrepreneurs who
      are looking to open a new business or want to expand or alter the current
      one by Central bank of India. Females who are into rural and cottage
      industries, MSMEs, entrepreneurs, and women working in farming, retailing
      and government-backed firms can avail this loan. <br />
      The purpose of the loan is to meet day-to-day requirements, such as
      purchase of plant & machinery/equipment, etc. and working capital
      expenditure. There are no processing charges applicable on the loan
      amount. The upper limit of the loan amount that you can avail under this
      scheme is up to Rs. 100 Lakh.{" "}
    </p>
    <h5>Stree Shakti Package from SBI </h5>
    <p>
      State Bank of India provide business loan to women-owned businesses with
      no security required. Additionally, the loan is offered at competitive
      interest rates with 50% for accessories. <br />
      Key features of the loan under the scheme:{" "}
    </p>
    <ul>
      <li>Interest Rate: 11.20% onwards (p.a.) </li>
      <li>Mortgage Free: No Collateral Required </li>
      <li>
        Repayment Tenure: Max. up to 36 months, including 1 month moratorium
        period{" "}
      </li>
    </ul>
    <h5>Shringaar and Annapurna scheme from Bhartiya Mahila Bank </h5>
    <p>
      Bhartiya Mahila Bank offers women entrepreneurs a wide range loans to help
      them set up new or expand their existing businesses. Two of the more
      popular options in this category include Shringaar and Annapurna. The
      Shringaar loan targets women interested in setting up beauty parlours and
      the Annapurna loan scheme provides financial support to women interested
      in establishing a food catering business for selling lunch packs.{" "}
    </p>
  </div>
);




export default function Blog3() {
  const history = useHistory();



  // const closeModal = (e) => {
  //   e.stopPropagation();
  //   history.goBack();
  // };
  const [show, setShow] = useState(true);
  const [showLoanData, setShowLoanData] = useState(true);
  const [showBuisness, setShowBuisness] = useState(false);


  const handleClose = () => {
    setShow(false);

    history.goBack("/Blogs")
  };
  const handleBuisnessClick = () => {
    setShowLoanData(false);
    setShowBuisness(true);

    let elementToView = document.getElementById("modal1")
    elementToView.scrollIntoView()

  };
  const handleWomenLoanClick = () => {


    setShowLoanData(false);
    setShowBuisness(false);

    let elementToView = document.getElementById("modal1")
    elementToView.scrollIntoView()





  };


  // const handleShow = () => setShow(true);
  return (

    <div className="Loans" style={{ height: "300vh" }}  >


      {/* <Button variant="primary" onClick={handleShow}>
                Loans
            </Button> */}

      <Modal id="modal1"
        className="modalBackdrop"



        show={show}
        onHide={handleClose}
        // onExiting={'./Learn'}
        animation={true}
        // onClick={closeModal}
        size="lg"
      >

        <Modal.Header closeButton>
          <Modal.Title>
            <h2 >Six ways to improve your credit score</h2>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {showLoanData
            ? initialLoanInfo
            : showBuisness
              ? typesOfBuisnessLoans
              : specialWomenLoans}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {showLoanData ? (
            <>
              <div
                className="loans-footer"
                style={{ display: "flex" }}
              >
                <h5>Read More: &nbsp;</h5>
                <p style={{ textDecoration: "none" }} className="underline" onClick={() => handleBuisnessClick()}>
                  Types of Business Loans
                </p>
                <span>|</span>
                <p style={{ textDecoration: "none" }} onClick={() => {
                  handleWomenLoanClick()


                }} className="underline">
                  Special Loans for Women
                </p>




              </div>
            </>
          ) : (
            <Button variant="primary" onClick={handleClose}>
              Go Back
            </Button>
          )}
        </Modal.Footer>



      </Modal>



    </div>



  );
}

