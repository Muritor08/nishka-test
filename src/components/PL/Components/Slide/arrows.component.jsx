import React from "react";

export const NextArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "#3AD4AF", borderRadius:"100%", marginRight:"20px", zIndex:"10" }}
                onClick={props.onClick}
            />
        </>
    );
};

export const PrevArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "#3AD4AF", borderRadius:"100%", marginLeft:"20px", zIndex:"10" }}
                onClick={props.onClick}
            />
        </>
    );
};