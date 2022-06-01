import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
// import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const initialMutualFundData = (
  <div>
    <h3> What is mutual fund ? </h3>
    <p>
      A mutual fund is a trust that pools the savings of a number of investors
      who share a common financial goal and investments may be in shares, debt
      securities, money - market securities or a combination of these.
    </p>
    <p>
      Those securities are professionally managed by a fund manager on behalf of
      the unit holders and each investor holds a pro - rata share of the
      portfolio, that is, entitled to profits as well as losses. Income earned
      through these investments and the capital appreciation realized is shared
      by its unit holders in proportion to the number of units owned by them.
    </p>
    <p>
      A mutual fund is the most suitable investment scope for common people as
      it offers an opportunity to invest in a diversified, professionally
      managed basket of securities at a relatively lower cost. Investors who may
      not want to invest directly in financial markets may instead get exposure
      to the same securities through a mutual fund. Similarly, investors can
      diversify their portfolio holdings even with small amounts, by investing
      in gold and real estate through mutual funds. An investor may choose to
      invest through a mutual fund to be able to use the services of the fund
      manager who will make the investment decisions relating to selection of
      securities, timing of investments, reviewing and rebalancing the portfolio
      periodically and executing the operational decisions related to the
      portfolio.These services are provided to the investor by charging a fee.
    </p>
    <h5>Units of mutual fund</h5>
    <p>
      Just as an investor’s investments in equity of a company is represented in
      number of shares, or investments in debt is represented in number of bonds
      or debentures, each investor’s holding in a mutual fund is represented in
      terms of units that is derived from the amount invested.Each unit
      represents one share of the fund. The units are first offered to the
      investors at the time the scheme is launched through a new fund
      offer(NFO).Subsequently, depending upon the structure of the scheme, the
      fund may or may not issue fresh units to investors.
    </p>
    <h5>Net Assets</h5>
    <p>
      The assets of a mutual fund scheme are the current value of the portfolio
      of securities held by it.There may be some current assets such as cash and
      receivables.Together they form the total assets of the scheme. From this,
      the fees and expenses related to managing the fund such as fund manager’s
      fees, charges paid to constituents, regulatory expenses on advertisements
      and such are deducted to arrive at the net assets of the scheme. This
      belongs to the investors in the fund who have been allotted units and no
      other entity has a claim to it. The Net assets of a scheme will go up
      whenever investors buy additional units in the scheme and bring in funds,
      or when the value of the investments held in the portfolio goes up, or
      when the securities held in the portfolio earns income such as dividends
      from shares or interest on bonds held. Similarly, the net assets of the
      scheme will go down if investors take out their investments from the
      scheme by redeeming their units or if the securities held in the portfolio
      fall in value or when expenses related to the scheme are accounted for.
      The net assets of the scheme are therefore not a fixed value but keep
      changing with a change in any of the above factor.
    </p>
    <h5>Net Asset Value(NAV)</h5>
    <p>
      The net asset per unit of a scheme is calculated as Net assets / Number of
      outstanding units of the scheme.This is the Net asset value(NAV).The NAV
      of the scheme will change with every change in the Net Assets of the
      scheme.All investor transactions are conducted at the current NAV of the
      scheme. The value of a mutual fund investor’s investment is calculated
      using the NAV.If an investor has invested 100 units in the scheme at
      Rs.100, the value of the investment is Rs.10000.When the NAV goes up to
      Rs.120, the value of the investment also goes up to Rs.12000 and when the
      NAV goes down to Rs.111 the value of the investment comes down to Rs.1110
    </p>
    <h5>Mark to Market</h5>
    <p>
      The current value of the portfolio forms the base of the net assets of the
      scheme and therefore the NAV.It means that if the portfolio was to be
      liquidated, then this would be the value that would be realised and
      distributed to the investors.Therefore, the portfolio has to reflect the
      current market price of the securities held.This process of valuing the
      portfolio on a daily basis at current value is called marking to
      market.The price is taken from the market where the security is traded.If
      the security is not traded or the price available is stale, then SEBI has
      laid down the method for valuing such securities.
    </p>
  </div>
);
const structureOfMF = (
  <div>
    <h3>Structure of typical Mutual fund: </h3>
    <h5>Sponsor </h5>
    <p>
      Sponsor is the person who either alone or in association with another
      corporate body, establishes a mutual fund. The sponsor must contribute at
      least 40% of the net worth of the investment managed and meet the
      eligibility criteria prescribed under the Securities and Exchange Board of
      India (Mutual Funds) Regulations, 1996.{" "}
    </p>
    <h5>Trust</h5>
    <p>
      The mutual fund is constituted as a trust in accordance with the
      provisions of the Indian Trusts Act, 1882 by the sponsor. The trust deed
      is registered under the Indian Registration Act, 1908.{" "}
    </p>
    <h5>Trustee</h5>
    <p>
      Trustee is usually a company (corporate body) or a Board of Trustees (body
      of individuals). The main responsibility of the trustee is to safeguard
      the interest of the unit holders and inter alias ensure that the AMC
      functions in the interest of investors and in accordance with the
      Securities and Exchange Board of India (Mutual Funds) Regulations, 1996,
      the provisions of the trust deed and the offer documents of the respective
      schemes.{" "}
    </p>
    <h5>Asset Management Company (AMC) </h5>
    <p>
      The trustee, as the investment manager of the mutual fund, appoints the
      AMC. The AMC is required to be approved by the Securities and Exchange
      Board of India (SEBI) to act as an asset management company of the Mutual
      fund. At least 50% of the directors of the AMC are independent directors
      who are not associated with the sponsor in any manner. The AMC must have a
      net worth of at least Rs. 10 crore at all times. <br />
      AMC manage the activities related to launching a scheme, marketing it,
      collecting funds, investing the funds according to the scheme’s investment
      objectives and enabling investor transactions. In this, they are assisted
      by other entities such as banks, registrars to an issue and transfer
      agents, investor service centres (ISC), brokers or members of stock
      exchanges, custodians, among others.{" "}
    </p>
    <h5>Custodian</h5>
    <p>
      A trust company, bank or similar financial institution, registered with
      SEBI is responsible for holding and safeguarding the securities owned
      within a mutual fund. A mutual fund’s custodian may also act as its
      transfer agent.{" "}
    </p>
    <h5>Registrar and Transfer Agent </h5>
    <p>
      The AMC, if so authorized by the trust deed, appoints the registrar and
      transfer agent to the mutual fund. The registrar processes the application
      form, redemption requests and dispatches account statements to the unit
      holders. The registrar and transfer agent also handles communication with
      investors and updates investor records.{" "}
    </p>
  </div>
);
const typesOfMF = (
  <div>
    <h3>Let us learn about various types of Mutual Funds </h3>
    <p>
      There exist various mutual fund schemes to cater to the needs such as
      financial position, risk tolerance and return expectations etc. The
      content below gives an overview of the existing types of mutual fund
      schemes in the industry. Mutual fund schemes can be structured as
      open-ended or closed-end schemes.{" "}
    </p>
    <h5>Open-Ended Schemes </h5>
    <p>
      Open-ended schemes are mutual funds that can issue and redeem their shares
      at any time. An open-ended scheme allows investors to invest in additional
      units and redeem investment continuously at current NAV{" "}
    </p>
    <p>
      Open-ended funds do not have restriction on the amount of shares the fund
      will issue. They offer units for sale without specifying any duration for
      redemption.{" "}
    </p>
    <p>
      If demand is high enough, the fund will continue to issue shares, no
      matter how many investors are there.{" "}
    </p>
    <p>Open-ended funds also buy back shares when investors wish to sell. </p>
    <p>
      One of the key features of open-end schemes is the liquidity that these
      funds offer to investors.{" "}
    </p>
    <h5>Closed-End Schemes </h5>
    <p>
      A closed-end scheme is for a fixed period or tenor. It offers units to
      investors only during the new fund offer (NFO). The scheme is closed for
      transactions with investors after this.
    </p>
    <p>
      The units allotted are redeemed by the fund at the prevalent NAV when the
      term is over and the fund ceases to exist after this. In the interim, if
      investors want to exit their investment, they can do so by selling the
      units to other investors on a stock exchange where they are mandatorily
      listed.{" "}
    </p>
    <p>
      The unit capital of a closed end fund does not change over the life of the
      scheme since transactions between investors on the stock exchange does not
      affect the fund{" "}
    </p>
    <p>
      The fund is then structured, listed and traded like a stock, on a stock
      exchange. The price per share is determined by the market and is usually
      different from the underlying value or net asset value (NAV) per share of
      the investments held by the fund.{" "}
    </p>
    <p>
      The price is said to be at a discount or premium to the NAV when it is
      below or above the NAV, respectively. A premium might be due to the
      market's confidence in the investment manager’s ability to produce
      above-market returns. 
    </p>
    <p>
      A discount might reflect the charges to be deducted from the fund in
      future by the fund managers. Some close-ended funds give an option of
      selling back the units to the mutual fund through periodic repurchase at
      NAV related prices.{" "}
    </p>
    <p>
      SEBI regulations stipulate that at least one of the two exit routes is
      provided to the investor, that is, either repurchase facility or through
      listing on stock exchanges. These mutual funds schemes disclose NAV
      generally on weekly basis.{" "}
    </p>
    <h5>Interval Schemes </h5>
    <p>
      Interval funds are a variant of closed end funds which become open-ended
      during specified periods.{" "}
    </p>
    <p>
      During this period investors can purchase and redeem units like in an
      open-ended fund.{" "}
    </p>
    <p>
      The specified transaction periods are for a minimum period of two days and
      there must be a minimum gap of 15 days between two transaction periods.
      Like closed-ended funds, these funds have to be listed on a stock
      exchange.{" "}
    </p>
    <h5>Types of open-ended mutual funds </h5>
    <p>
      SEBI has defined the process of categorizing open-end mutual fund products
      broadly as equity schemes, debt schemes, hybrid schemes, solution-oriented
      schemes and other schemes.{" "}
    </p>
    <h5>1. Growth or Equity-Oriented Schemes </h5>
    <p>
      The aim of growth funds is to provide capital appreciation over medium to
      long- term. These schemes normally invest a major part of their portfolio
      in equities and have comparatively high risks.{" "}
    </p>
    <p>
      They provide different options to the investors like dividend option,
      capital appreciation, etc. and investors may choose one depending on their
      preferences. The mutual funds also allow the investors to change the
      options at a later date.{" "}
    </p>
    <p>
      Growth schemes are good for investors having a long-term outlook seeking
      appreciation over a period of time. It can be further classified into
      following depending upon objective:{" "}
    </p>
    <ul style={{ listStyleType: "square" }}>
      <li>
        {" "}
        Based on Market capitalisation:
        <ul style={{ listStyleType: "circle" }}>
          <li>
            Large-Cap Funds: These funds invest in companies from different
            sectors. Large cap funds invest in stocks of large, liquid blue-chip
            companies with stable performance and returns. Large-cap companies
            are those ranked 1 to 100th in terms of full market capitalization
            in the list of stocks prepared by AMFI. To be classified as a large
            cap fund, at least 80% of the total assets should be invested in
            such large cap companies
          </li>
          <li>
            Mid-Cap Funds: Mid-cap funds invest in mid-cap companies that have
            the potential for faster growth and higher returns. Funds that
            invest in such companies have a higher risk of the companies
            selected not being able to withstand the slowdown in revenues and
            profits. Mid-cap companies are those ranked 101st to 250th in terms
            of full market capitalization in the list of stocks prepared by
            AMFI. To be classified as a mid-cap fund, at least 65% of the total
            assets should be invested in such companies.{" "}
          </li>
          <li>
            Small-Cap funds: Small-cap funds invest in companies with small
            market capitalisation with intent of benefitting from the higher
            gains in the price of stocks. The risks are also higher. Companies
            ranked from 251 onwards in terms of total market capitalization in
            the list of stocks prepared by AMFI are defined as small-cap
            companies. To be classified as a small cap fund, at least 65% of the
            total assets should be invested in such companies{" "}
          </li>
        </ul>
      </li>
      <li>
        Based on Sectors and industries: <br />
        <p>
          These are schemes that invest in a particular sector, for example, IT.
          The risk is higher because of lesser diversification since such funds
          are concentrated in a particular sector.{" "}
        </p>
        <p>
          Sector performances tend to be cyclical and the return from investing
          in a sector is never the same across time.
        </p>
        <p>
          Investment in sector funds should be made when the fund manager
          expects the related sectors, to do well.
        </p>
      </li>
      <li>
        Theme based (Thematic) funds: <br />
        <p>
          Theme-based funds invest in multiple sectors and stocks that form part
          of a theme. For example, if the theme is infrastructure, then
          companies in the infrastructure sector, construction, cement, banking
          and logistics will all form part of the theme and be eligible for
          inclusion in the portfolio.{" "}
        </p>
        <p>
          They are more diversified than sector funds but still have a high
          concentration risks. An open-end thematic fund should invest at least
          80% of the total assets in the equity and equity-related instruments
          of the identified sector.{" "}
        </p>
      </li>
      <li>
        Based on Investment Style: <br />
        <p>
          The open-end equity funds (based on strategies and styles for
          selection of securities) are classified by SEBI as follows:{" "}
        </p>
        <ul style={{ listStyleType: "circle" }}>
          <li>
            Value Funds: Value Funds seek to identify companies that are trading
            at prices below their inherent value with the expectation of
            benefiting from an increase in price as the market recognizes the
            true value. Such funds have lower risk.{" "}
          </li>
          <li>
            Contra Funds: Such funds adopt a contrarian investment strategy.
            They seek to identify under-valued stocks and stocks that are
            under-performing due to transitory factors. The fund invests in such
            stocks at valuations that are seen as cheap relative to their
            long-term fundamental values.{" "}
          </li>
          <li>
            Dividend yield funds: These funds invest in stocks that have a high
            dividend yield. These stocks pay a large portion of their profits as
            dividend and these appeals to investors looking for income from
            their equity investments. The companies typically have high level of
            stable earnings but do not have much potential for growth or
            expansion. They therefore pay high dividends while the stock prices
            remain stable. The stocks are bought for their dividend payout
            rather than for the potential for capital appreciation.{" "}
          </li>
        </ul>
      </li>
      <li>
        Diversified Equity Funds: <br />
        <p>
          All non-theme and non-sector funds can be classified as equity
          diversified funds.{" "}
        </p>
      </li>
      <li>
        Tax Savings Funds (ELSS): <br />
        <p>
          ELSS is a special type of open-end equity fund scheme which provides
          the investor with the tax deduction benefits under section 80C of the
          Income Tax Act up to a limit of Rs.1,50,000 per year.{" "}
        </p>
        <p>
          An ELSS must hold at least 80% of the portfolio in equity securities.
          The investment made by the investor is locked-in for a period of three
          years during which it cannot be redeemed, transferred or pledged.{" "}
        </p>
      </li>
    </ul>
    <h5>2. Debt Funds </h5>
    <p>
      The aim of income funds is to provide regular and steady income to
      investors. These schemes generally invest in fixed-income securities such
      as bonds, corporate debentures, Government Securities and money-market
      instruments and are less risky compared to equity schemes.{" "}
    </p>

    <p>
      However, opportunities of capital appreciation are limited in such funds.
      The NAVs of such funds are impacted because of change in interest rates in
      the economy.{" "}
    </p>
    <p>
      If the interest rates fall, NAVs of such funds are likely to increase in
      the short run and vice versa. However, long-term investors do not bother
      about these fluctuations.{" "}
    </p>
    <ul style={{ listStyleType: "square" }}>
      ■ Short Term Debt Funds <br />
      <p>
        These funds aim to provide superior liquidity and safety of the
        principal amount in the investments. It does this by keeping interest
        rate and credit risk low by investing in very liquid, short maturity
        fixed income securities of highest credit quality. There is no mark to
        market for securities less than 60 days to maturity and this reduces the
        volatility in these funds. The primary source of return is interest
        income. The objective is to generate a steady return, mostly coming from
        accrual of interest income, with minimal NAV volatility. The open-end
        debt schemes (investing in securities with maturity ranging from one day
        to one year) are classified by SEBI as follows{" "}
      </p>
      <ul style={{ listStyleType: "circle" }}>
        <li>
          Overnight Funds: These funds invest in securities with a maturity of
          one day.{" "}
        </li>

        <li>
          Liquid Funds: These funds invest in debt securities with less than 91
          days to maturity.{" "}
        </li>

        <li>
          Ultra-Short Duration Funds: These funds invest in debt and money
          market instruments such that the Macaulay duration of the portfolio is
          between 3 months and 6 months.{" "}
        </li>

        <li>
          Low Duration Fund: These funds invest in debt and money markets
          instruments such that the Macaulay duration of the fund is between 6
          months to 12 months.{" "}
        </li>

        <li>
          Money Market Fund: These funds invest in money market instruments
          having maturity up to one year.{" "}
        </li>
      </ul>
    </ul>
    <ul style={{ listStyleType: "square" }}>
      {" "}
      ■ Long Term Debt Funds <br />
      <p>
        Long term debt funds are structured to generate total returns made up of
        both interest income and capital appreciation from the securities held.
        Since the price of securities may go up or down resulting in gains or
        losses, the total returns tend to be more volatile than short term debt
        funds that focus primarily on earning coupon income.{" "}
      </p>
      <p>
        Open-end long term debt schemes investing in the above stated manner are
        categorised by SEBI in the following manner{" "}
      </p>
      <ul style={{ listStyleType: "circle" }}>
        <li>
          Long Duration fund invests in debt and money market securities such
          that the Macaulay duration of the portfolio is greater than 7 years.{" "}
        </li>

        <li>
          Corporate bond fund invests at least 80% of total assets in corporate
          debt instruments with rating of AA+ and above.{" "}
        </li>

        <li>
          Credit Risk Funds invest a minimum of 65% of total assets in corporate
          debt instruments rated AA and below.{" "}
        </li>

        <li>
          Banking and PSU fund invests a minimum of 80% of total assets in debt
          instruments of banks, Public Financial Institutions and Public Sector
          Undertakings and municipal bonds.{" "}
        </li>
        <li>
          Open-end gilt funds invest at least 80% of the total assets in
          government securities across maturities. There is no risk of default
          and liquidity is considerably higher in case of government securities.
          However, prices of government securities are very sensitive to
          interest rate changes. Long term gilt funds have a longer maturity and
          therefore, higher interest rate risk as compared to short term gilt
          funds. Gilt funds are popular with investors mandated to invest in
          G-secs such as provident funds or PF trusts.{" "}
        </li>

        <li>
          Gilt fund with 10-year constant duration invest a minimum of 80% of
          total assets in government securities such that the Macaulay duration
          of the portfolio is equal to 10 years.{" "}
        </li>

        <li>
          Dynamic bond funds seek flexible and dynamic management of interest
          rate risk and credit risk. That is, these funds have no restrictions
          with respect to security types or maturity profiles that they invest
          in.{" "}
        </li>
      </ul>
    </ul>
    <h5>3. Hybrid funds </h5>
    <ul style={{ listStyleType: "square" }}>
      <li>
        Balanced funds: The aim of the balanced funds is to provide both growth
        and regular income as such schemes invest both in equities and fixed
        income instruments in the proportion indicated in their offer documents.{" "}
      </li>

      <li>
        These are appropriate for investors looking for moderate growth. They
        generally invest between 65% and 75% in equity and the rest in debt
        instruments. They are impacted because of fluctuation in stock markets
        but NAVs of such funds are less volatile compared to pure equity funds.{" "}
      </li>

      <li>
        Conservative hybrid funds: These funds invest minimum of 75% to 90% in a
        debt portfolio and 10% to 25% of total assets in equity and
        equity-related instruments.{" "}
      </li>

      <li>
        Aggressive hybrid funds: These funds are predominantly equity-oriented
        funds investing between 65% and 80% in the equity market, and invest
        between 20% up to 35% in debt, so that some income is also generated and
        there is stability to the returns from the fund.{" "}
      </li>

      <li>
        Dynamic Asset Allocation or Balanced Advantage fund: These funds
        dynamically manage investment in equity and debt instruments.{" "}
      </li>
    </ul>
    <h5>Solution-Oriented Schemes:</h5>
    <p>
      SEBI has categorised the open-end solution-oriented schemes as follows:{" "}
    </p>
    <ul style={{ listStyleType: "square" }}>
      <li>
        Retirement Fund are schemes oriented towards saving for retirement.
        Schemes will have a lock-in for at least 5 years or till retirement age
        whichever is earlier.{" "}
      </li>

      <li>
        Children’s Fund are schemes oriented towards saving for children’s
        needs. Schemes will have a lock-in of 5 years or till the age of
        majority whichever is earlier.{" "}
      </li>
    </ul>
    <h5>5. Other Funds </h5>
    <ul style={{ listStyleType: "square" }}>
      <li>
        Fund of Funds (FoF): <br />
        FoF is a mutual fund that invests in other mutual funds. It does not
        hold securities in its portfolio, but other funds that have been chosen
        to match its investment objective. These funds can be either debt or
        equity, depending on the objective of the FoF. 95% of the total assets
        should be invested in the underlying fund. A FoF either invests in other
        mutual funds belonging to the same fund house or belonging to other fund
        houses. FoFs belonging to various mutual fund houses are called
        multi-manager FoFs, because the AMCs that manage the funds are
        different.{" "}
      </li>
      <li>
        Exchange Traded Funds (ETFs) <br />
        ETFs hold a portfolio of securities that replicates an index and are
        listed and traded on the stock exchange. At least 95% of the total
        assets should be in securities represented in the index being tracked.
        The return and risk on ETF is directly related to the underlying index
        or asset. The expense ratio of an ETF is similar to that of an index
        fund.{" "}
      </li>
      <li>
        Gold ETFs <br />
        Gold ETFs have gold as the underlying asset so as to provide investment
        returns that, closely track the performance of domestic prices of gold.
        Each ETF unit typically NISM-Series-X-A: Investment Adviser (Level 1)
        Certification Examination 75 represents one gram of gold. For every unit
        of ETF issued, the fund holds gold in the form of physical gold of 99.5
        % purity or gold receipts. They are also allowed to invest in the gold
        deposit schemes of banks to a limit of 20% of the net assets of the
        scheme. The custodian of the fund is responsible for the safe keeping of
        the assets.
      </li>
      <li>
        Real Estate Mutual Funds <br />
        <li>
          These funds invest in real estate either in the form of physical
          property or in the form of securities of companies engaged in the real
          estate business. SEBI’s regulations require that at least 35% of the
          portfolio should be held in physical assets. Securities that these
          funds can invest in include mortgage-backed securities and debt
          issuances of companies engaged in real estate projects. Not less than
          75% of the net assets of the scheme shall be in physical assets and
          such securities.{" "}
        </li>
      </li>
      Infrastructure Debt Schemes are closed-ended schemes with a tenor of at
      least five years that invest in debt securities and securitized debt of
      infrastructure companies. 90% of the fund’s portfolio should be invested
      in the specified securities.
    </ul>
  </div>
);
const adsOfMf = (
  <div>
    <h3>Advantages from investing in mutual funds: </h3>
    <p>
      Mutual funds investment offers many advantages to an investor especially
      those who are not able to invest directly in equities for various reasons:{" "}
    </p>
    <ul style={{ listStyleType: "square" }}>
      <li>
        <h5>Professional Management </h5>
        <p>
          Mutual funds employ experienced and skilled professionals who make
          investment research and analyze the performance and prospects of
          various instruments before selecting a particular investment. Thus, by
          investing in mutual funds, one can avail the services of professional
          fund managers, which would otherwise be costly for an individual
          investor.{" "}
        </p>
      </li>
      <li>
        <h5>Return Potential </h5>
        <p>
          By allocating right asset mix, mutual funds offer a chance of higher
          potential of returns. The high concentration of risky assets would
          lead to higher return and vice-versa.{" "}
        </p>
      </li>
      <li>
        <h5>Diversification </h5>
        <p>
          Diversification involves holding a wide variety of investments in a
          portfolio so as to mitigate risks. Mutual funds usually spread
          investments across various industries and asset classes, constrained
          only by the stated investment objective. Thus, by investing in mutual
          funds, one can avail the benefits of diversification and asset
          allocation without investing a large amount of money that would be
          required to create an individual portfolio.{" "}
        </p>
      </li>
      <li>
        <h5>Liquidity </h5>
        <p>
          In an open-ended scheme, unit holders can redeem their units from the
          fund house anytime. Even with close-ended schemes, one can sell the
          units on a stock exchange at the prevailing market price. Besides,
          some close-ended and interval schemes allow direct repurchase of units
          at NAV related prices from time to time. Thus, investors do not have
          to worry about finding buyers for their investments.{" "}
        </p>
      </li>
      <li>
        <h5>Flexibility </h5>
        <p>
          Mutual funds offer a variety of plans, such as regular investment,
          regular withdrawal and dividend reinvestment plans. Depending upon
          one’s preferences and convenience, one can invest or withdraw funds,
          accordingly.{" "}
        </p>
      </li>
      <li>
        <h5>Cost Effective </h5>
        <p>
          Since Mutual funds have a number of investors, the fund’s transaction
          costs, commissions and other fees get reduced to a considerable
          extent. Thus, owing to the benefits of larger scale, mutual funds are
          comparatively less expensive than direct investment in the capital
          markets.{" "}
        </p>
      </li>
      <li>
        <h5>Well Regulated </h5>
        <p>
          Mutual funds in India are regulated and monitored by the Securities
          and Exchange Board of India (SEBI), which strives to protect the
          interests of investors. Mutual funds are required to provide investors
          with regular information about their investments, in addition to other
          disclosures like specific investments made by the scheme and the
          proportion of investment in each asset classes.{" "}
        </p>
      </li>
      <li>
        <h5>Convenient Administration </h5>
        <p>
          The facility of making investments through service centres as well as
          through internet ensures convenience.{" "}
        </p>
      </li>
      <li>
        <h5>Transparency </h5>
        <p>
          Information available through fact sheets, offer documents, annual
          reports and promotional materials help investors gather knowledge
          about their investments.{" "}
        </p>
      </li>
      <li>
        <h5>Choice of Schemes </h5>
        <p>
          The investors can choose from various kinds of scheme available to
          them. The risk-seeker investors can go for more aggressive schemes
          while risk-averse investors can go for income schemes funds and so on.{" "}
        </p>
      </li>
    </ul>
  </div>
);
const returnFromMF = (
  <div>
    <h5>Return from mutual fund </h5>
    <p>
      An investor can realise returns from his or her investment in mutual funds
      in the following ways:{" "}
    </p>
    <h5>Profit from higher NAV </h5>
    <p>
      Any increase in value of fund’s asset increases the NAV of the fund.
      Investors can make profit by selling back their units to fund house.{" "}
    </p>
    <h5>Dividends </h5>
    <p>
      Unit holders earn dividends on mutual funds. These dividends are
      distributed from the income generated through dividends on stocks and
      interest on other instruments.{" "}
    </p>
    <h5>Capital Gains </h5>
    <p>
      Investors get capital gains on mutual funds. If the fund sells securities
      that have appreciated in value, it earns capital gains. Most funds
      distribute these capital gains also to investors.{" "}
    </p>
  </div>
);

export default function MutualFunds() {
  const history = useHistory();

  const closeModal = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  const [show, setShow] = useState(true);
  // const [showInitialData, setShowInitialData] = useState(true);
  const [steps, setSteps] = useState("initialData");

  const handleClose = () => {
    setShow(false);
    history.goBack();
  };
  const handleSteps = (s) => {
    // console.log(s);
    setSteps(s);
    let elementToView = document.getElementById("modal2")
    elementToView.scrollIntoView()
  };
  // const handleShow = () => setShow(true);
  return (
    <div id="#MutualFunds">
      <Modal
        className="modalBackdrop"
        show={show}
        // onHide={handleClose}
        // onExiting={'./Learn'}
        animation={true}
        // onClick={closeModal}
        size="lg"
        id="modal2"
      >
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>
            <h2>Mutual Funds</h2>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {steps === "initialData"
            ? initialMutualFundData
            : steps === "1"
            ? structureOfMF
            : steps === "2"
            ? typesOfMF
            : steps === "3"
            ? adsOfMf
            : returnFromMF}
        </Modal.Body>
        <Modal.Footer>
          {steps === "initialData" ? (
            <div className="funds-footer first-right">
              <div>
                <p onClick={() => handleSteps("1")} className="underline">
                  Structure of Mutual Funds
                </p>
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          ) : steps === "1" ? (
            <div className="funds-footer">
              <div>
                <i class="fas fa-chevron-left"></i>
                <p
                  onClick={() => handleSteps("initialData")}
                  className="underline"
                >
                  What is Mutual Funds
                </p>
              </div>
              <div>
                <p onClick={() => handleSteps("2")} className="underline">
                  Types of Mutual Funds
                </p>
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          ) : steps === "2" ? (
            <div className="funds-footer">
              <div>
                <i class="fas fa-chevron-left"></i>
                <p onClick={() => handleSteps("1")} className="underline">
                  Structure of Mutual Funds
                </p>
              </div>
              <div>
                <p onClick={() => handleSteps("3")} className="underline">
                  Advantages of Investing
                </p>
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          ) : steps === "3" ? (
            <div className="funds-footer">
              <div>
                <i class="fas fa-chevron-left"></i>
                <p onClick={() => handleSteps("2")} className="underline">
                  Types of Mutual Funds
                </p>
              </div>
              <div>
                <p onClick={() => handleSteps("4")} className="underline">
                  Return from Mutual Fund
                </p>
                <i class="fas fa-chevron-right"></i>
              </div>{" "}
            </div>
          ) : (
            <div className="funds-footer">
              <div>
                <i class="fas fa-chevron-left"></i>
                <p onClick={() => handleSteps("3")} className="underline">
                  Types of Mutual Funds
                </p>
              </div>{" "}
              <Button variant="primary" onClick={handleClose}>
                Go Back
              </Button>
            </div>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}