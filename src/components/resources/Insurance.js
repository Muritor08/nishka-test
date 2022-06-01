import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
// import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Insurance() {
  const [showMore, setShowMore] = useState(false);

  const initialData = (
    <div>
      <h3>What is Insurance ?</h3>
      <p>
        Insurance is a basic form of risk management which provides protection
        against the loss of the economic benefits that can be enjoyed from
        assets.These assets may be physical assets, such as buildings and
        machinery, or they may be human assets.Assets are subject to the risk
        that their ability to generate benefits could be lost or reduced due to
        unforeseen or unexpected events.
      </p>
      <p>
        There is a financial or economic consequence to the risk, and insurance
        indemnifies or protects against these consequences.For example, the
        ability of human beings to generate income from occupation may be
        affected by illness, disabilities and death; factory buildings &
        machinery may break down or may be destroyed leading to loss of
        output.The events themselves cannot be avoided.
      </p>
      <p>
        The consequences of the loss can either be borne by the person to whom
        the benefits accrue(risk retention) or they can be transferred to
        another(risk transfer).
      </p>
      <p>
        Insurance enables risk transfer from the beneficiary(insured) to the
        insurance company(insurer), which undertakes to indemnify the insured
        for the financial loss suffered.
      </p>
      <p>
        In return, the insured pays a periodic fee, called premium, to the
        insurer to receive this protection.To be insurable, the event being
        insured against, such as death, accident or fire must result in a
        financial loss which can be quantified and insured against.
      </p>
      <p>
        The premium payable will depend upon this expected loss and the
        probability of the event occurring during the period of contract.For
        example, the premium payable on a health policy for an individual whose
        parents have a history of ill - health that are considered genetic, such
        as ailment of heart, cancer or diabetes, is much higher than that for an
        individual coming from healthy stock.
      </p>
      <p>
        This is because the chance that the insurance company will be required
        to pay medical expenses in the first case is much higher than what it is
        in the second case.
      </p>
      <p>
        In the absence of insurance, the loss arising out of the event has to be
        borne by the person who would have otherwise enjoyed the benefit from
        the asset.
      </p>
      <h3>How does it work ?</h3>
      <p>
        Any individual or company can seek insurance from an insurance company,
        but the decision to provide insurance is at the discretion of the
        insurance company.The insurance company will evaluate the claim
        application to make a decision.Generally, insurance companies refuse to
        provide insurance to high - risk applicants.
      </p>
      <p>
        Once insurer company approves the application it enters into a legal
        contract or agreement with insured for the insurance, which is called
        the insurance policy.The insurance policy has details about the
        conditions and circumstances under which the insurance company will pay
        out the insurance amount to either the insured person or the nominees.
      </p>
      <p>
        Generally, the premium for a big insurance cover is much lesser in terms
        of money paid.The insurance company takes this risk of providing a high
        cover for a small premium because very few insured people actually end
        up claiming the insurance.This is why you get insurance for a big amount
        at a low price.
      </p>
      <h5>Tax benefits on Insurance </h5>
      <p>
        The income tax benefits that you can avail from life insurance and
        medical insurance policy:{" "}
      </p>
      <ul style={{ listStyleType: "square" }}>
        <li>
          Life insurance premium of up to ₹1.5 lakh can be claimed as a
          tax-saving deduction under Section 80C of Income Tax Act{" "}
        </li>
        <li>
          Medical insurance premium of up to ₹25,000 for yourself and your
          family and ₹25,000 for your parents can be claimed as a tax-saving
          deduction under Section 80D under Income Tax Act{" "}
        </li>
      </ul>
    </div>
  );

  const typesOfInsurance = (
    <div>
      <h3>Types of Insurance</h3>
      <p>
        Insurance in India can be broadly divided into life insurance and non -
        life insurance.
      </p>
      <h4>Life Insurance</h4>
      <p>
        As the name suggests, life insurance is insurance on your life.You buy
        life insurance to make sure your dependents are financially secured in
        the event of your untimely demise.Life insurance is particularly
        important if you are the sole breadwinner for your family or if your
        family is heavily reliant on your income. Life insurance products can be
        defined by the benefits that they provide to the insured.The insured
        would get the following benefits from life insurance products:
      </p>
      <ul>
        <li>
          Death cover: Where the benefit is paid only on the death of the
          insured within a specified period.If death does not occur, then no
          benefit will be paid.
        </li>
        <li>
          Survival benefits: Where the benefit is paid when the insured survives
          a specified period.
        </li>
      </ul>
      <p>
        Most insurance policies are a combination of the above two
        features.Policies with survival benefits combine saving and protection
        benefits while policies with only death benefits are pure protection
        products.
      </p>
      <h4>Health Insurance</h4>
      <p>
        Health insurance policies reimburse the medical expenses incurred for
        the policy holder and identified family members who are covered under
        the policy.
      </p>
      <p>
        This policy provides for reimbursement of hospitalization or domiciliary
        treatment expenses for illness or accidental injury up to the sum
        insured under the policy.
      </p>
      <p>
        The expenses that can be claimed, such as consultation fees, medicine
        and treatment costs, room costs, are specified in the policy and sub -
        limits may be fixed for each head.
      </p>
      <p>
        Claim is typically allowed only for “In - patient” (patients who are
        admitted in a hospital for treatment that requires at least overnight or
        24 hours of stay in hospital) treatments and domiciliary
        treatments(patients can be treated at home when they are not in a
        condition to be moved to the hospital), according to the terms of the
        policy.
      </p>
      <p>
        Pre - existing illnesses may be excluded from cover for a fixed period
        when insurance is being taken for the first time or if it is being
        renewed after a lapse.
      </p>
      <p>
        Health policies provide cashless facility too where the bills are
        directly settled with the hospital and the insured is not required to
        pay upfront upto the sum approved for this facility.
      </p>
      <p>
        There is also the option to take a family floater policy that will cover
        multiple family members under the same policy upto the sum insured.
      </p>
      <p>
        The premium payable on the policy is a function of the sum insured, age
        and medical history of the insured, among others.
      </p>
      <p>
        Premiums may be adjusted for continued health cover and record of no -
        claim.Portability of health policies has been introduced under which the
        benefits of no - claim, bonus and time - bound exclusions for existing
        conditions can be transferred, if the insured chooses to switch the
        insurance company.
      </p>
      <p>
        To benefit from portability, the previous policy should have been
        maintained without a break.
      </p>
      <h3>Non - Life Insurance</h3>
      <p>Following are the various non - life insurance available in India.</p>
      <h4>Motor Insurance</h4>
      <p>
        In today’s world, a car insurance is an important policy for every car
        owner.This insurance protects you against any untoward incident like
        accidents.Some policies also compensate for damages to your car during
        natural calamities like floods or earthquakes.It also covers third -
        party liability where you have to pay damages to other vehicle owners.
        Under motor insurance, you insure a two - wheeler, three - wheeler or a
        four wheeler, and whether it is a personal vehicle or a company’s
        vehicle the insurer company against any untoward incident. The insurance
        company indemnifies the insured in the event of accident caused by, or
        arising out of the use of the motor vehicle, anywhere in India against
        all sums including claimant’s cost and expenses which the insured shall
        become legally liable to pay in respect of:
      </p>
      <ul>
        <li>death or bodily injury to any person,</li>
        <li>
          damage to the property other than property belonging to the insured or
          held in trust or custody or control of the insured.
        </li>
      </ul>
      <p>
        The insurance of motor vehicles against damage is not made compulsory
        but the insurance of third - party liability arising out of the use of
        motor vehicles in public places is made compulsory. No motor vehicle can
        be used in a public place without such insurance.
      </p>
      {!showMore ? (
        <div className="text-center">
          <Button onClick={() => setShowMore(true)}>Read More</Button>
        </div>
      ) : (
        <div>
          <h4>Education Insurance</h4>
          <p>
            The child education insurance is akin to a life insurance policy
            which has been specially designed as a saving tool.An education
            insurance can be a great way to provide a lump sum amount of money
            when your child reaches the age for higher education and gains entry
            into college(18 years and above).This fund can then be used to pay
            for your child’s higher education expenses.Under this insurance, the
            child is the life assured or the recipient of the funds, while the
            parent / legal guardian is the owner of the policy.
          </p>
          <h4>Home Insurance</h4>
          <p>
            Home is one of our biggest investment we make in our life and we
            would like to protect it from risks like fire, theft and other
            natural calamities or perils.
          </p>
          <p>
            Home insurance provides protection against most risks to property
            such as fire, theft etc.Home insurance generally means insuring the
            structure and the contents of the building against natural and man -
            made disasters.
          </p>
          Wilful destruction of property, loss / damage due to wear and tear and
          art and antiques are typically not covered by home insurance.
          <h4> Personal Accident Insurance</h4>
          <p>
            {" "}
            Personal accident insurance policy provides that if the insured
            shall sustain any bodily injury resulting solely and directly from
            accident caused by external violent and visible means, then the
            company shall pay to the insured or his legal personal
            representative, as the case may be, the sum defined in the
            policy.Following types of disablement are covered under this policy:
          </p>
          <ul>
            <li>Permanent total disablement</li>
            <li>Permanent Partial disablement</li>
            <li>Temporary total disablement</li>
          </ul>
          <h4>Travel Insurance</h4>
          <p>
            Travel insurance provides medical, financial and other assistance in
            case of an emergency during international travel.The cover will
            typically be provided for instances such as medical help required,
            delay in baggage clearance, accident and any additional cover
            required. The cover will be in the form of reimbursement upto the
            maximum amount mentioned in the policy. Travel insurance may be
            mandatory for travel to some countries.
          </p>
          <h4>Liability Insurance</h4>
          <p>
            The purpose of liability insurance is to provide indemnity in
            respect of damages payable under law for personal injury to third
            parties or damage to their property. This legal liability may arise
            under common law on the basis of negligence or under statutory law
            on no fault basis i.e.when there is no negligence.
          </p>
          <h4>Tax benefits on Insurance</h4>
          <p>
            The income tax benefits that you can avail from life insurance and
            medical insurance policy:{" "}
          </p>
          <li>
            Life insurance premium of up to ₹1.5 lakh can be claimed as a tax -
            saving deduction under Section 80C of Income Tax Act
          </li>
          <li>
            Medical insurance premium of up to ₹25, 000 for yourself and your
            family and ₹25, 000 for your parents can be claimed as a tax -
            saving deduction under Section 80D under Income Tax Act
          </li>
        </div>
      )}
    </div>
  );

  const history = useHistory();

  // const closeModal = (e) => {
  //   e.stopPropagation();
  //   history.goBack();
  // };
  const [show, setShow] = useState(true);
  const [showInitialData, setShowInitialData] = useState(true);

  const handleClick = (b) => {
    setShowInitialData(b);
  };
  const handleClose = () => {
    setShow(false);
    history.goBack();
  };
  // const handleShow = () => setShow(true);
  return (
    <div id="#Insurance">
      <Modal
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
            <h2>Insurance</h2>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {showInitialData ? initialData : typesOfInsurance}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button> */}
          {showInitialData ? (
            <div className="funds-footer first-right">
              <div>
                <p onClick={() => handleClick(false)} className="underline">
                  Types of Insurance Funds
                </p>
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          ) : (
            <div className="funds-footer">
              <div>
                <i class="fas fa-chevron-left"></i>
                <p onClick={() => handleClick(true)} className="underline">
                  What is Insurance?{" "}
                </p>
              </div>
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
