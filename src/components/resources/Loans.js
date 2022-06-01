import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

// import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resources.css";



const initialLoanInfo = (
  <div>
    <h3> What is a loan?</h3>
    <p>
      A loan is essentially money borrowed with a promise to return within a
      specific time period. The lender of the loan decides a rate of interest
      that the borrower must pay on the money borrowed along with the principal
      amount borrowed. A person can avail loans of various types to meet the
      funding gaps of his or her requirement. However, it is very important to
      know what types of loans are available for meeting a particular
      requirement in order to maximise the benefits and minimise the impact in
      terms of interest pay-out and meeting other loan requirements.
    </p>
    <h4>Types of Loans</h4>
    <p>
      Various types of loans are available in India. However, they can be
      broadly classified into following types:
    </p>
    <ul>
      <li>Loans based on purpose</li>
      <li>Secured or unsecured loans</li>
    </ul>
    <h5>
      <strong>Loans based on purpose</strong>
    </h5>
    <h5>Education loans</h5>
    <p>
      Demand for education loan demand has emerged from the growing aspiration
      for higher education among Indian students from premium institute in India
      and abroad. Education loans taken by students for various types of courses
      including professional degree courses, full time and part time degree
      courses and vocational courses. The loan covers the basic fees of the
      course along with other expenses like accommodation, travel exam fee. In
      general, student is the main applicant and his parent, siblings or spouse
      is the co-applicant as the case may be. The loan is to be repaid by the
      students after completion of the study / course. However, such education
      loan generally has a feature of moratorium period where student has the
      option of paying the EMI after completion of 12 months of course or 6
      months after the student start working whichever is earlier.
    </p>
    <h5>Vehicle loan</h5>
    <p>
      A vehicle loan is given to the borrower to buy a two-wheeler, four-wheeler
      or a LCV, HCV. Loans are given to buy a new vehicle or a used vehicle as
      well. The loan tenure and interest rates depend upon the credit history of
      the borrower and the loan amount. In general, these loans have tenure of 5
      to 7 years.
    </p>
    <h5>
      <strong>Secured loans</strong>
    </h5>
    <p>
      Loans against which a collateral is required are called secured loans.
      Various types of secured loans are as under:
    </p>
    <h5>Home loans</h5>
    <p>
      A home loan simply means a sum of money borrowed from a financial
      institution or bank to purchase a house. Home loans consist of an
      adjustable or fixed interest rate and payment terms. The buyer has to pay
      10-25% of the total property value and loan amount disbursed depends on
      your credit history, current income and its stability and liabilities.
      Home loans can be taken by a single person or jointly by two or more
      persons. People generally take a home loan for either buying a house/flat
      or a plot of land for construction of a house, or renovation, extension
      and repairs to the existing house. The property is mortgaged to the lender
      as a security till the repayment of the loan. The bank or financial
      institution will hold the title or deed to the property till the loan has
      been paid back with the interest due for it. The interest rates for home
      loans can be fixed or floating, or partly fixed and or partly floating,
      suiting the needs of the borrower. The foremost benefit of a home loan is
      the income tax deduction you can claim on the interest and principal
      repayments. You can claim up to Rs.1.5 lakh on principal repayments under
      section 80C, up to Rs.2 lakh on interest repayments under section 24B of
      the Income Tax Act. You can always prepay your home loan to shed the
      financial burden before time. More importantly, you do not have to pay a
      penalty on pre-payment after the Reserve Bank of India in 2013 directed
      banks to waive charges for loans taken on floating rate of interest.
      However, banks still charge a penalty on transfer if you have taken a home
      loan at a fixed rate of interest. Once you have your home or a piece of
      land you can take following loans for your existing home.
    </p>
    <h5>Home Construction Loan</h5>
    <p>
      This is the right home loan type if you already have a plot of land and
      you need financing to construct a house in that land.
    </p>
    <h5>Home Extension Loan</h5>
    <p>
      This loan is taken when you want to extend the house with another room or
      another floor to accommodate the growing family. Home extension loan
      provides financing for this purpose.
    </p>
    <h5>Home Improvement Loan</h5>
    <p>
      A home improvement loan provides financing for renovating or repairing the
      house if there’s any fault in the existing system, such as painting the
      house’s interior or exterior, plumbing, upgrading the electrical system,
      waterproofing the ceiling, and more.
    </p>
    <h5>Home Loan Balance Transfer</h5>
    <p>
      The current home loan interest rate may be overwhelming, or you may not be
      happy with your current lender’s service; you can transfer the home loan’s
      outstanding balance to a different lender who offers a lower interest rate
      and better service. Upon transfer, you can even check out the
      possibilities of a top-up loan on your existing one.
    </p>
    <h5>Composite Home Loan</h5>
    <p>
      This type of home loan provides financing for purchasing the plot of land
      where you would like to construct a house and for the construction, both
      within a single loan.
    </p>
    <h5>Loans against property</h5>
    <p>
      Loan against property is a loan which you avail by keeping your commercial
      or residential property as a collateral to the lender. The security in
      this kind of loan is the property owned by the person applying for the
      loan. The value of your property decides the amount of potential loan you
      will be sanctioned.
    </p>
    <p>You can avail this loan against following types of property:</p>
    <ul>
      <li>Self-owned piece of land</li>
      <li>Self-owned commercial property</li>
      <li>Self-owned but rented commercial property</li>
      <li>Self-owned residential property</li>
      <li>Self-owned and self-occupied residential property</li>
      <li>Self - owned but rented residential property</li>
    </ul>
    <p>
      One can avail loan against a property for numerous reasons.It could be
      anything from education of your children, foreign trip, wedding, business
      expansion or working capital requirement, purchasing a new property,
      renovating existing property, loan consolidation etc. Value of your
      property is not the only criteria for banks to decide whether you are
      eligible for a loan.They would also look into your current income,
      savings, employment status, liabilities and other aspects before coming to
      disbursement. It must be noted that as a standard practice, lending
      institutions generally sanction loans of around 65% of the value of your
      property.The tenure offered in such loan is 15 years subject to age norms.
      The rate of interest in this loan is lower than personal loans making it
      one of the cheapest and pocket-friendly loans coming second only to home
      loans.The loan tenure of 15 years makes the EMI more comfortable and there
      is also the option of liquidating your money in the case of any big
      expense.The only drawback with such a loan is that the bank may take
      possession of your property if you fail to repay the loan amount, however,
      a careful and planned approach should you see through quite smoothly.
    </p>
    <h5>Loan against insurance policy</h5>
    <p>
      Loan against insurance policy is becoming popular these days since the
      interest rates offered are lower than the personal loan and the value of
      the policy does not change with the market as in the case of loans against
      gold or securities. Loans are provided considering the surrender value of
      permanent or whole life insurance and not against term insurance as it
      does not have any cash value on expiry.In general, if you have paid three
      premiums for at least three years and on time for a non-term insurance you
      are eligible to avail such a loan.Since you are borrowing from yourself in
      this case you generally don’t undergo an intense scrutiny or stringent
      approval process though some lenders may check your creditworthiness. Such
      loans are provided by life insurance companies like LIC as well as banks.
      The interest rate charged for such loans depends upon the value of premium
      and number of premiums that have been paid by the borrower.The higher the
      premium value and more is the premium paid the lower would be the interest
      rates.In general interest rates applied by insurance companies is slightly
      lower than those by banks. The loan is to be paid within the terms of the
      policy.The borrower has the option of paying both principal and interest
      or only interest then the principal amount due will be deducted from the
      claim amount at the time of settlement. Person taking loan against the
      insurance policy should keep in mind that taking huge loan against the
      insurance policy may deprive the nominees of the benefit of the insurance
      policy.In case of death of the policyholder before loan is repaid the
      nominees would get balance claim amount after the unpaid loan due are
      deducted from the claim amount.
    </p>
    <h5>Loan against Securities (shares, mutual funds, bonds)</h5>
    <p>
      You may need instant liquidity to meet personal exigency or to seize an
      attractive business opportunity.One of the ways to do this is by taking a
      Loan against Securities by which you can surely meet your immediate
      funding needs without having to sell your investments. This loan offers an
      opportunity to monetise your investments (listed equity shares, mutual
      fund units, structured notes, bonds, debentures and more) to raise capital
      for your personal /business financing needs.You don’t have to provide any
      additional security or collateral except the securities you are pledging.
      The best part is that you can acquire funds while still maintaining your
      carefully built investment portfolio.
    </p>
    <h5>Loan against fixed deposits</h5>
    <p>
      Loan against Fixed Deposit (FD) is a type of secured loan where customers
      can pledge their fixed deposit as security and get a loan in return.The
      amount of loan depends on the FD deposit amount.This can go up to 90% –
      95% of the deposit amount.
    </p>
    <h5>Who can Apply for Loan against FD?</h5>
    <ul>
      <li>
        All the fixed deposit holders, be it individual holder or those with
        joint accounts, are eligible to avail Loan against FD.However, FD in the
        name of a minor does not qualify for this facility.
      </li>
      <li>
        Investors of a 5-year tax-saving FD cannot apply for this type of loan
      </li>
      <li>
        Loan against FD is given by banks as an overdraft facility to customers.
      </li>
      <li>
        Loan against FD offers several benefits over other types of loans:{" "}
      </li>
      <li>
        Offers lower interest rates (0.5% – 2% above the applicable FD rate)
        compared to other types of loans like personal loan.
      </li>
      <li>
        Person availing loan don’t have to break the FD and go for premature
        withdrawal thus suffering a loss of interest on FD.
      </li>
      <li> No processing fees charged</li>
      <li> Can be availed against domestic as well as NRI FDs</li>
      <li>
        {" "}
        Can be repaid as a lump sum or in instalment (not later than FD tenure)
      </li>
    </ul>
    <p>
      The lending bank keep customer’s FD as the collateral which makes the loan
      thus raised secured.Since it’s a secured loan, interest charged for the
      same is cut short.In case the loanee is not able to repay the loan amount,
      the bank can easily procure it from the FD amount.Usually, this amount is
      settled at the time of maturity. Fixed deposits, apart from offering
      assured returns, flexible tenure options, liquidity, income tax savings
      and loan options, provide another benefit to investors, viz.Credit Card
      against FD. Many banks are now offering credit card against fixed deposit
      which is issued against your fixed deposit with a credit limit generally
      ranging from 75% to 85% of the FD amount.These type of credit cards
      require you to open an FD of at least Rs.25,000 with the lending bank. SBI
      Unnati and Kotak Aqua Gold are such credit cards offered against FD by SBI
      and Kotak.
    </p>
    <h5>Gold Loan</h5>
    <p>
      You can take the loan against gold ornaments and get relieved of the
      immediate requirements.While the gold stays safe with the lender, you can
      go ahead and take advantage of every opportunity.Gold loans are also very
      popular especially among business community. To provide gold loan lenders
      may ask for various documents apart from the gold which include income or
      salary proofs, identity proof, employment status etc.The loan amount is
      dependent on the value of the gold and is guided by the regulations of
      Reserve Bank of India.Your gold is insured and is generally stored by
      lenders in fire and burglary proof vaults.
    </p>
    <h5>
      <strong>Unsecured loans</strong>
    </h5>
    <p>
      Unsecured loans are loans against which lender does not ask for a
      collateral from the borrower.
    </p>
    <h5>Personal loan</h5>
    <p>
      A personal loan as the name suggests is provided to individuals and not
      businesses.Most banks and NBFCs (Non-Banking Financial Companies) offer
      personal loans to both salaried and self-employed
      individuals/professionals.The eligibility criteria for a personal loan
      vary slightly depending on the type of applicant. Personal loan is among
      the most popular type of loans taken by individuals generally to meet
      their short term to medium term requirement. Personal loans are unsecured
      loans that is it does not require borrower to keep any collateral against
      the loan taken from a lender.This makes it easy for the customers to avail
      loans who do not have any collateral with them or assets which can be made
      as collateral are already mortgaged against other loans taken by them.
      However, since these are unsecured loans, the lenders charged higher
      interest rates than any other secured loan.However, rate of interest
      varies with the credit rating of the borrower.The better is your credit
      rating the lower is the interest rate you can bargain for. People can take
      personal loans to meet various requirement like:
    </p>
    <ul>
      <li>Wedding</li>
      <li> Child or self-education</li>
      <li> International vacation / travel</li>
      <li>Home renovation</li>
      <li>Loan consolidation</li>
      <li>Unplanned expenses like medical expense</li>
    </ul>
    <p>
      The tenure of personal loans generally varies from 12 months to 60
      months.Depending upon client income stability credit history and loan
      requirement personal loan amount varies from just Rs 10,000 to Rs 40 lakh.
      The key feature of personal loan is that it requires minimal
      documentation, like identify and address proof, salary slips, and quick
      disbursal which allow customer to get money instantly and meet his or her
      emergency requirement.
    </p>
    <h5>Short term business loans</h5>
    <p>
      Business loan is a funding support offered by financial institutions to
      meet the day-to-day business requirements.Business loan can be availed by
      individuals, MSMEs and many other entities.Applicants who own any kind of
      residential or commercial property like house, shop, office and godown
      have more chances of loan approval, as banks consider them more reliable
      in repaying loans in time.Most of the banks do not require collateral or
      security to be submitted to avail unsecured business loan. The minimum
      loan amount offered starts from Rs.30,000 and is usually offered by
      Non-Banking Financial Companies (NBFCs), Small Finance Banks (SFBs) or
      Micro Finance Institutions (MFIs), whereas applicants can avail
      collateral-free business loans maximum up to Rs.1 crore.Small business
      loans are also available for MSMEs and startups. Interest rates on
      business loans generally are upward of 15% p.a. For individuals seeking
      business loan, a high credit score increase the chance loan approval as
      well as amount he or she can borrow. For existing companies or
      enterprises, the minimum annual turnover requirement is Rs.10 lakh.
    </p>
    <h5>Flexi loans</h5>
    <p>
      Under the flexi loans scheme, you can avail funds from your approved limit
      by the lender as and when fund is required by you.You have to pay interest
      only on the amount used by you and not on the approved loan. You have the
      flexibility to withdraw funds as many times as you want and even prepay
      the loan when you have extra cash without paying anything extra.Such loans
      generally offer a lot of freedom to manage your liabilities than normal
      term loans.Some lenders offer option to pay only interest as EMI and
      principal to be paid at the time of end of loan term.
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




export default function Loans() {
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
   
    history.goBack("/Learn")
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

    <div className="Loans" style={{height:"300vh"}}  >
    
      
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
      
        <Modal.Header  closeButton>
          <Modal.Title>
            <h2 >Loans</h2>
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
              style={{ display: "flex"}}
            >
              <h5>Read More: &nbsp;</h5>
              <p style={{textDecoration:"none"}} className="underline" onClick={() => handleBuisnessClick()}>
                Types of Business Loans
              </p>
              <span>|</span>
              <p style={{textDecoration:"none"}} onClick={() => {
                handleWomenLoanClick()
              
           
              }}  className="underline">
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

