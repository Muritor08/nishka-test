import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Card, CardDeck, CardGroup, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap"
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import SocialFollow from "../social/SocialFollow";
import ScrollToTop from "../../components/ScrollToTop";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./women.css";

const thingsToKnow = (
  <div>
    <h3>Things to know before you start investing </h3>
    <em>By Bhumika Khandelwal </em>
    <br />
    <br />
    <p>
      Investment has become an essential part of everyone’s financial health. We
      make investments in various assets class based on our research and
      analysis and also based on advice that we take from a friend, family
      member or a financial advisor.{" "}
    </p>
    <p>
      The investment can be made on any type of asset such as mutual fund,
      equity, gold, government bond, real estate, fixed deposit, insurance etc.
      It is important that an you know where you are putting our money, what is
      the process involved and what are the risks involved and how realistic are
      your return expectations from these investments.{" "}
    </p>
    <h5>What I need to do before making an investment? </h5>
    <div className="womenSpecialImg">
      <img
        src="thingsToKnow.jpg"
        alt="Things to know before you start investing"
      />
    </div>
    <p>
      There are a few things that you need to know or have before you make any
      kind of investment It can be either some documents or information.{" "}
    </p>
    <p>
      Starting with, you may need documents like Pan Card, Bank Account Details,
      Aadhaar Card, and address proof. Depending upon the type of investment
      that you are making you may also be asked to provide documents like bank
      statement, salary sips, investment and liabilities details, credit score
      etc. Keeping these documents ready will be really handy at the time of
      making the investment.{" "}
    </p>
    <p>
      Nowadays most of the investment that you make can be done online. So, you
      may be required to upload soft copies of documents in most of the cases.
      Keep them handy too! Also, make yourself aware about the online process
      fully so that you do not make any error while filling the details.{" "}
    </p>
    <h5>What can I invest in? </h5>
    <p>
      When you have money to make some investments you must know where you want
      to put that money. Let’s talk about the common types of investments here.{" "}
    </p>
    <h5>Equity </h5>
    <p>
      Equity, stocks or shares are issued by companies to raise money from the
      public through an IPO (Initial Public Offer). The shares of such companies
      are then traded in the secondary markets which are also called stock
      exchanges like Sensex and NSE. Investors can either buy shares through an
      IPO or by buying from stock exchanges. This is one of the most popular
      investment options due to possibilities of high returns. However, keep in
      mind that with high return comes high risk also.{" "}
    </p>
    <h5>Bonds </h5>
    <p>
      Bonds are highly secure debt instruments that enable an entity to raise
      funds and fulfil its capital requirements. It is a category of debt that
      borrower’s avail from individual investors for a specified tenure. <br />
      Organisations, including companies, governments, municipalities and other
      entities, issue bonds for investors in primary markets. The corpus thus
      collected is used to fund business operations and infrastructural
      development by companies and governments alike. Investors purchase bonds
      at face value or principal, which is returned at the end of a fixed
      tenure. Issuers extend a percentage of the principal amount as periodical
      interest at fixed or adjustable rates.
    </p>
    <h5>Real Estate </h5>
    <p>
      You could buy a house, a commercial property or a small piece of land.
      Investing in real estate is a one of the most preferred investment asset
      class in India. Although, it could take a good amount of time as
      investment in real estates are not possible to liquidate in a short
      period.
    </p>
    <h5>Fixed Deposit </h5>
    <p>
      A bank fixed deposit (FD) is also called a term or time deposit, as it is
      a deposit account with a bank for a fixed period of time. It entitles the
      investor to predetermined interest payments and return of the deposited
      sum on maturity.{" "}
    </p>
    <h5>Gold </h5>
    <p>
      Investment in gold has the potential to beat inflation over a long period.
      It is a safe haven when economic growth is slow and when traditional asset
      classes such as equity and debt are underperforming. As an investment, one
      can purchase it as coins including the Indian Gold Coins available at
      designated branches of MMTC, bars, jewellery, or through mutual funds
      known as gold ETFs (Exchange Traded Funds) or gold funds and the gold
      bonds and gold deposit scheme.{" "}
    </p>
    <h5>Public Provident Fund (PPF) </h5>
    <p>
      PPF is one of the safest investment options and provides among the highest
      returns in terms of interest as well as tax benefits and is therefore one
      of the most popular investment options particularly for risk averse
      investors. This option also provides the best benefit of compounding
      wherein the interest is given on the interest accrued on deposited your
      amount during the year{" "}
    </p>
    <h5>Things which can impact your financial health while you invest </h5>
    <p>
      Honestly, investments are a great way to earn money but along the gains
      comes risks. One should know about the risk which comes along with these
      types of investments at all times or they might end up in losses.{" "}
    </p>
    <p>
      One of the common reasons why many investors bear a heavy amount of risk
      is because they invest majority of their money in a single asset class
      like real estate or stocks. This not only lead to huge loss of capital it
      but severely dent investor confidence.{" "}
    </p>
    <p>
      So, what else you need apart from money when you are ready to invest. Yes,
      you need proper knowledge and analysis of the asset that you plan to
      invest. Many a times people get overconfident and too excited seeing a big
      gain in a particular investment opportunity. It is not a bad thing but it
      often leads them to invest based on their gut feeling and not based on
      facts and figures. Such actions can at times wipe entire capital of the
      investor.{" "}
    </p>
    <p>
      Not to forget, some people lose their patience when returns from their
      investment are not as per the expectations. Let me tell you this, if you
      have done good analysis of the asset you have invested, you need to be
      patient. Sometimes, things don’t work out the way you want them to be but
      eventually you will make money.{" "}
    </p>
    <h5>How to be confident while investing? </h5>
    <p>
      Start with investing time first. Spend a proper time learning about the
      type of investment you want to be connected to. Take up a course.
      Research. Learn to analyse the market.{" "}
    </p>
    <p>
      In case you have a busy schedule, contact a financial advisor. An expert
      who can advise you on what type of investments you should be making. It is
      always a great idea to talk to someone with experience.{" "}
    </p>
    <p>
      Build your network. Connect with your friends or family who have a
      financial background or deal with any type of investments. Ask about their
      experience. Talk about your research and knowledge so far.{" "}
    </p>
    <p>
      Gather information about more than one type of investment asset class.
      Diversification is great way to manage your risk and reward.{" "}
    </p>
    <p>
      Trust yourself. Trust your gut feeling. It is not easy putting your money
      out there knowing that there is always a risk. But with risk comes great
      success. Just know that among other risks, no self- belief is the biggest
      one.
    </p>
    <p>
      Finally, even after taking enough precautions the returns on the
      investment may not be in line with your expectations because a lot many
      factors are beyond our control in this globalised world. So, keep an eye
      on what happening around you and make suitable changes in your investment
      portfolio time to time.{" "}
    </p>
  </div>
);
const whyNeed = (
  <div>
    <h3>Why you need a financial plan for a better future? </h3>
    <em>By Bhumika Khandelwal </em>
    <br /><br />
    <div className="womenSpecialImg">
      <img
        src="whyNeed.jpg"
        alt="Why you need a financial plan for a better future?"
      />
    </div>
    <h5>
      Warren Buffett said, “Do not save what is left after spending; instead
      spend what is left after saving.”{" "}
    </h5>
    <p>
      Managing personal finance can be quite confusing. Having questions related
      to it is completely normal and one should be curious. Questions such as-{" "}
    </p>
    <ul>
      <li>What is the current status of your investments and liabilities? </li>
      <li>
        What to do with the cash you have in the bank? Spend it or invest it?{" "}
      </li>
      <li>
        How much to allocate your savings on buying an asset or spending on a
        requirement?{" "}
      </li>
      <li>
        How to make your money earn for you? This is the one answer most of you
        have been looking for, right?{" "}
      </li>
    </ul>
    <p>
      So, other than being formal and allocating numbers which represent your
      earnings overall, financial planning answers the questions above.{" "}
    </p>
    <p>
      Now, whether you are working part- time or sipping coffee as an employee
      of some multinational company, you my friend require a financial plan in
      order to be happy and wealthy with your ESI (expenses, savings and
      investments.){" "}
    </p>
    <h5>How exactly will a financial plan help? </h5>
    <p>
      Having a financial plan will simply help you understand and have control
      over your current earnings and expenses in order to keep you out of heavy
      debts, loans or overdraft or any unexpected financial difficulty in
      future.{" "}
    </p>
    <p>
      Financial planning is especially important for people living on their
      pay-checks. A proper financial plan helps you to save from the existing
      earnings, find ways to manage expenses and make some investments. These
      investments create a corpus which you need when you plan for a career
      break, marriage, starting a family, kids education, travelling to your
      dream destination, buying a house or for your retirement.{" "}
    </p>
    <p>
      But many might say that these things can just be done with some amount of
      savings and investments, so why should one must go and put their efforts
      into preparing some heavy plan about their financial situation!{" "}
    </p>
    <p>Well, let’s explore what happens if they do make the effort for it. </p>
    <h5>Better budget allocation </h5>
    <p>
      Many times, you end up with absolutely no money at the end of the month
      right before the salary is about to be credited. Presence of a financial
      plan will help you list and understand all your general expenses and
      investments.{" "}
    </p>
    <p>
      Once you know how much you are spending for a specific item, your monthly
      investment in SIPs, stocks etc and your monthly EMIs, you can work out
      ways to save some amount so as to avoid the situation you face at the end
      of every month and even might end up having more money to invest.{" "}
    </p>
    <h5>More savings than you expected </h5>
    <p>
      Now that your expenses are allocated properly and you have an appropriate
      amount of savings every month, you can invest more. Now, the thing about
      some of the investments in the market is they come with a lot of benefits
      and tax allowances. Good returns and less tax to be paid. Bingo!{" "}
    </p>
    <h5>Be there for your family </h5>
    <p>
      Nowadays, everything has a price and if you want something no matter what,
      you have no choice but to pay the price. It is difficult, isn’t it?
      Thinking about all the future expenses and not being prepared for it, well
      say no more. With the help of your own financial plan, you will be ready
      with good savings for your future.{" "}
    </p>
    <p>
      But are savings all which a good financial plan can help with? Well, no.
      Through the setup of good quality and number of liquid investments, you
      will be able to provide for your family whenever you require. This way you
      are never out of funds and earning good returns at the same time. But be
      cautious and research well about the investments you are choosing.{" "}
    </p>
    <h5>Approach your goals fearlessly </h5>
    <p>
      Your financial plan makes you independent and courageous to finally pursue
      the things you wanted to without worrying about money. Whether it’s
      pursuing another degree, starting a new business or setting yourself up
      with social services. Move ahead with no pressure. You go, girl!{" "}
    </p>
    <h5>No tension about your pension </h5>
    <p>
      Well, this basically refers to the time when you are old and want to relax
      by your poolside at all times. Generally, when people are in their 20s and
      30s they don’t think a lot about their ESI and always end up working or
      living off their pension money when they are in their 50s. But guess what?
      With a well- functioned financial plan we think you will be able to do
      much more than just chilling by your poolside
    </p>
    <p>
      We know how tiring all this process sounds but hey, don’t sweat it. Reach
      out to us and we will help you get everything you want. Through Nishkaera,
      you can reach out to some experienced financial advisors and experts and
      get yourself all arranged for the future. Whether it’s retirement or your
      kid’s college finance or the dream business that you want to start. Let us
      help you out to settle your earnings for all the expenses coming in your
      way.{" "}
    </p>
  </div>
);
const tipsToGetBack = (
  <div>
    <h3>Tips that you can use to get back to work after a career break </h3>
    <em>By Bhumika Khandelwal </em>
    <br />
    <br />
    <div className="womenSpecialImg">
      <img
        src="tipsToGetBack.jpg"
        alt="Tips that you can use to get back to work after a career break"
      />
    </div>
    <p>
      Getting up every day for years and going to work without much change does
      sound pretty tiring. In this situation, a break is a sort of temporary
      solution any woman will come with. Others look for a break when they start
      a family or taking care of their small kids becomes a priority. A few want
      to travel the whole world. So, if you too have taken a break from work,
      then let me tell you, you are not alone. Around 4 to 5% of women every
      year have to take a career break and it’s okay! The world doesn’t end here
      and you have a long way to go.{" "}
    </p>
    <p>
      But then you want to get back to work sooner or later and continue your
      professional journey. Though, in today’s competitive and demanding world
      getting back to work may not be that easy, taking care of a few things can
      really help. So, without further delay, let’s go over some tips to help
      you get started.{" "}
    </p>
    <h5>It’s never too late </h5>
    <p>
      Don’t worry about the duration you took or the things you left. You can
      always start fresh and you can always pick up where you left off. Take all
      the time you need before you start the process of getting back out there.
      Just remember that you are not alone in this and that it is really never
      too late to be who you really want to be.{" "}
    </p>
    <h5>Make up your mind </h5>
    <p>
      You took the break for a reason. So before you get back to work, ensure
      that you really want to and are ready for it. Sometimes, we tend to look
      for work because we have nothing to do or we simply want to do something
      different. If you just want to try something different, find a hobby.{" "}
    </p>
    <p>
      When a person misses her job or wants to get back to their normal life and
      is excited about it, that is when they are fully ready to go back to their
      work life. Importantly, understand if there is a skill gap for the job
      that you are looking for. If yes, it is better to acquire those skills
      before you start your job hunt. So be honest with yourself about this.{" "}
    </p>

    <h5>Keep your options open </h5>
    <p>
      There is too much which happens when you decide to start working again.
      There are job applications to fill, interviews to prepare, impressions to
      be good at and a lot. Now, since you are looking for another job, make
      sure to fill more than just one or two forms. It is important that you
      have a backup option or other opportunities when your application for your
      dream job gets rejected. Sometimes we don’t always get what we think is
      best for us.{" "}
    </p>
    <h5>Reach out to your connections </h5>
    <p>
      Working on your previous job must have helped you build a network. Use it.
      Connect with your friends, colleagues, mentors and ask them if they know
      any opening or possibility of job for you. In many cases, asking help from
      the known ones has been proved effective. Even try reaching out to your
      past employers if you had a good experience working with them. Joining a
      team or a company that you know can be quite helpful.{" "}
    </p>
    <h5>Don’t rush into anything </h5>
    <p>
      With sending out many applications, you will receive various offers. Wait
      for the right one. Don’t hop into the first job offer you receive. If you
      think that the job position is not something where you want to be at, then
      take your time. Wait for other companies to respond. There are a lot of
      options out there. Grabbing the very first opportunity just because it’s
      available immediately will again bring you back to the career break
      circle. This time, make it right!{" "}
    </p>
    <h5>Be ready for what’s coming </h5>
    <p>
      When called for an interview, don’t freak out. It is true that it’s been a
      long time since you had to interview but honestly it doesn’t have to be
      that much of a big deal. Go through the job profile that you have applied
      for and prepare accordingly. During the interview just address the answers
      confidently. Present yourself neatly and acknowledge everything you say.
      For better interview preparation you can do this too:{" "}
    </p>
    <ul>
      <li>Watch some helpful youtube videos </li>
      <li>Revise general questions which get asked </li>
      <li>Find out about yourself such as what you do in your free time </li>
      <li>Your work behaviour </li>
      <li>Your strengths </li>
      <li>Your weaknesses </li>
    </ul>
    <h5>Mention your career break as an advantage </h5>
    <p>
      Don’t be ashamed or worry about the break you took. You did it because it
      seemed necessary right? So, embrace it. Talk about what you did. Whether
      you conducted some research work or explored a certain skill. Talk about
      your work or understanding which you gained about the certain job position
      during your career break. Don’t worry about you getting hired, as I said
      before there will be plenty of opportunities, just make sure you are
      confident and happy about the break you took. After all, there is no wrong
      in having a little spare time and space for yourself, is there?{" "}
    </p>
    <h5>Enjoy that one last day before getting back to normal </h5>
    <p>
      You finally have the job you want and it is finally time to get back to
      work, but there is still one day left. Don’t use the whole day to prepare
      for the first day at your new job. Take a break for that one last day
      before that same routine starts again. Who knows when you will get such an
      opportunity again, right? It’s a known fact that life is a race and you
      have to be as fast as you can. This last day is your ticket to enjoy the
      slowness before you have to gear up again.{" "}
    </p>
    <p>
      When it comes to choosing your career path ahead, it involves a lot of
      decisions. Take your time and explore every opportunity you have. Then
      make your decision wisely. Make sure not to rush or panic about losing any
      position. We have faith in you. You are definitely going to make it.
    </p>
  </div>
);
export default function MoreWomenSpecial() {
  const [modalShow, setModalShow] = React.useState(false);
  const [showData, setShowData] = useState("");
  const mTop = {
    margin: "4% 0% 4%",
  };
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {showData === "thingsToKnow"
            ? thingsToKnow
            : showData === "tipsToGetBack"
              ? tipsToGetBack
              : whyNeed}
        </Modal.Body>
        <Modal.Footer>
          <Link to="/WomenSpecial">
            <Button onClick={props.onHide}>Go Back</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <div className="App">
      <div className="tw-text-center" style={{textAlign:"center"}}>

      <ScrollToTop />
      <Header />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Jumbotron className="container-fluid">
        <h1 style={mTop} className="contact-head">
          Women Special
        </h1>
        <CardGroup>
          <CardDeck>
            <Card className="p-3">
              <video
                src="Tips for joining after a career break.mp4"
                controls
                className="videoEl"
              />
              <Card.Body>
                <Button onClick={() => { setShowData("tipsToGetBack"); setModalShow(true) }}>
                  Tips that you can use to get back to work after a career break
                </Button>
              </Card.Body>
            </Card>
            <Card className="p-3">
              <video src="Financial plan.mp4" controls className="videoEl" />
              <Card.Body>
                <Button onClick={() => { setShowData("thingsToKnow"); setModalShow(true) }}>
                  Things to Know before you start investing
                </Button>
              </Card.Body>
            </Card>
            <Card className="p-3">
              <video
                src="Tips for joining after a career break.mp4"
                controls
                className="videoEl"
              />
              <Card.Body>
                <Button onClick={() => { setShowData("whyNeed"); setModalShow(true) }}>
                  Why is financial plan needed to lead to a better future
                </Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </CardGroup>
      </Jumbotron>
      <Footer />
      <SocialFollow />
      {/* <div className="h3">How we are achieving it?</div>
            <div className="p">We are achieving this by bringing our expertise in technology, financial services and customer focus to provide our customers with best-in-class and hassle-free financial platform to learn about various financial products and  buy them as per their choice.</div>
            <div className="h3">WomenSpecial: </div>
            <div className="p">Nishkaera also aspire to bridge the age old gap between women and investment by providing them specialised financial services with the aim to enable them to achieve their financial freedom through mix of learning, seasoned advice and providing a platform to buy women-oriented financial products.</div> */}
    </div>
    </div>
  );
}
