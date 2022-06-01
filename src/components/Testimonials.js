import { Component } from "react";
import Slider from "react-slick";
import "./TestimonialCard.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const testimonialsData = [
	{
		avatar: "man_test.png",
		name: "Ravi Vijayvargia",
		description:
			"It was a breeze opening up Bajaj Finance FD through Nishkaera website. One place for numerous financial options!!",
		place: "Vadodara",
	},
	{
		avatar: "man_test.png",
		name: "Ashish Singh",
		description:
			"Nishkaera does what financial advisors should do. What really impressed me was the way advisor took the time to understand my current financial situation and goals.",
		place: "Mumbai",
	},
	{
		avatar: "2(1) 1women_test.png",
		name: "Shilpa Dalal",
		description:
			"I was looking for investing in a high interest rate fixed deposit from a company I can trust. It's reliable, fast and gives you an excellent buying experience while at home.",
		place: "Ahmedabad",
	},
	{
		avatar: "man_test.png",
		name: "Ravi Vijayvargia",
		description:
			"It was a breeze opening up Bajaj Finance FD through Nishkaera website. One place for numerous financial options!!",
		place: "Vadodara",
	},
	{
		avatar: "man_test.png",
		name: "Ashish Singh",
		description:
			"Nishkaera does what financial advisors should do. What really impressed me was the way advisor took the time to understand my current financial situation and goals.",
		place: "Mumbai",
	},
	{
		avatar: "2(1) 1women_test.png",
		name: "Shilpa Dalal",
		description:
			"I was looking for investing in a high interest rate fixed deposit from a company I can trust. It's reliable, fast and gives you an excellent buying experience while at home.",
		place: "Ahmedabad",
	},
	{
		avatar: "man_test.png",
		name: "Ravi Vijayvargia",
		description:
			"It was a breeze opening up Bajaj Finance FD through Nishkaera website. One place for numerous financial options!!",
		place: "Vadodara",
	},
	{
		avatar: "man_test.png",
		name: "Ashish Singh",
		description:
			"Nishkaera does what financial advisors should do. What really impressed me was the way advisor took the time to understand my current financial situation and goals.",
		place: "Mumbai",
	},
	{
		avatar: "2(1) 1women_test.png",
		name: "Shilpa Dalal",
		description:
			"I was looking for investing in a high interest rate fixed deposit from a company I can trust. It's reliable, fast and gives you an excellent buying experience while at home.",
		place: "Ahmedabad",
	},
];



class Testimonials extends Component {
	state = {
		Testimonials: [],
	};

	componentDidMount() {
		// this.getTestimonialData()
	}

	renderTestimonials = () => {
		const settings = {
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: 0,
			slidesToShow: 3,
			dots: true,
			speed: 2000,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: true,
			prevArrow: <GrPrevious />,
			nextArrow: <GrNext />,
			swipeToSlide: true,
			pauseOnHover: false,
            adaptiveHeight: true,
			slidesPerRow: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};

		return (
			<div className="carousel-container">
				<div
					className="heading_test"
					style={{ position: "relative", height: "80px" }}
				>
					<h1
						className="head_content_test"
						
					>
						Testimonials
					</h1>
				</div>
				<Slider {...settings}>
					{testimonialsData.map((each) => (
						<div>
							<div className="testimonial_card card" style={{ marginLeft: "30px" }}>
								<div className="avatar-con">
									<img src={`${each.avatar}`} alt="avatar" className="avatar" />
								</div>
								<div className="details">
									<div className="top_quotes">
										<img
											src="Vectortop_comma.png"
											style={{ maxHeight: "100%", maxWidth: "100%" }}
											alt="nishkaera"
                                            className="quotes"
										/>
									</div>
									<div className="name-con">
										<h1 className="name">{each.name}</h1>
									</div>
									<div className="review-con">
										<h1 title={`${each.description}`} className="review">
											{each.description}
										</h1>
									</div>
									<div className="bottom_quotes">
										<img
											src="Vectorbottom_comma.png"
											style={{ maxHeight: "100%", maxWidth: "100%" }}
											alt="nishkaera"
                                            className="quotes"
										/>
									</div>
									<div className="place">
										<h1
											className="place_content"
											style={{
												fontSize: "22px",
												lineHeight: " 26px",
												fontStyle: "normal",
												fontWeight: "500",
												color: "#000000",
												textAlign: "center",
											}}
										>
											~ {each.place}
										</h1>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		);
	};

	render() {
		return this.renderTestimonials();
	}
}

export default Testimonials;
