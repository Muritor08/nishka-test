import React, { useEffect } from "react";

//Components
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Marque from "../../Marque";

const HomeLayout = (props) => {
	return (
		<>
			<Header />
			<Marque />
			<div className="">{props.children}</div>
			<Footer />
		</>
	);
};

export default HomeLayout;
