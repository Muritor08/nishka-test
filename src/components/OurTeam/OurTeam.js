import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./OurTeam.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 754 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 754, min: 0 },
    items: 1,
  },
};

export default function OurTeam() {
    const members = [
        {
            id:1,
            name:"Mounvi Podapati",
            facebook:"https://www.facebook.com/mounvi.podapati",
            instagram:"https://www.instagram.com/im_mounvi15/",
            linkedin:"https://www.linkedin.com/in/mounvi-podapati-900a841a0/",
            img:"mounvi.png",
            designation:"Frontend Developer"
        },
        {
            id:2,
            name:"Mounvi Podapati",
            facebook:"https://www.facebook.com/mounvi.podapati",
            instagram:"https://www.instagram.com/im_mounvi15/",
            linkedin:"https://www.linkedin.com/in/mounvi-podapati-900a841a0/",
            img:"mounvi.png",
            designation:"Frontend Developer"
        },
        {
            id:3,
            name:"Mounvi Podapati",
            facebook:"https://www.facebook.com/mounvi.podapati",
            instagram:"https://www.instagram.com/im_mounvi15/",
            img:"mounvi.png",
            linkedin:"https://www.linkedin.com/in/mounvi-podapati-900a841a0/",
            designation:"Frontend Developer"
        },
        {
            id:4,
            name:"Mounvi Podapati",
            facebook:"https://www.facebook.com/mounvi.podapati",
            instagram:"https://www.instagram.com/im_mounvi15/",
            linkedin:"https://www.linkedin.com/in/mounvi-podapati-900a841a0/",
            img:"mounvi.png",
            designation:"Frontend Developer"
        },
    ]
  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2500}
      keyBoardControl={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className="team-carousel"
    >
        {members.map(member=>(
                  <div className="member-card">
                   <img src={member.img} alt={member.name} />
                   <h4 className="member-title">{member.name}</h4>
                   <p>{member.designation}</p>
                   <div className="member-links">
                     <a href={member.facebook}><i class="fab fa-facebook-square" /></a>
                     <a href={member.linkedin}><i class="fab fa-linkedin linked" /></a>
                     <a href={member.instagram}><i class="fab fa-instagram-square" /></a>
                   </div>
                </div>
        ))}
    </Carousel>
    </div>

  );
}
