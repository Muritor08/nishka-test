import React, { Component } from "react";
import Slider from "react-slick";

import { NextArrow, PrevArrow } from "./arrows.component"

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            arrows: true,
            centerMode: true,
            centerPadding: "300px",
            slidesToShow: 1,
            infinite: true,
            speed: 5000,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}