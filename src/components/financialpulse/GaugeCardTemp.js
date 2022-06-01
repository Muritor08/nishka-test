import React from "react";

const GaugeCard = props => {
    return (
        <div className="gauge-card-column col-lg-4 col-md-6">
            <div className="card">
                <img className="card-img-top" src={props.img} alt={props.name} />
                <div className="card-body">
                    <h4 className="gauge-title">{props.name}</h4>
                    <p className="gauge-text">{props.description}</p>
                    <p className="gauge-score">£ {props.score}</p>
                </div>
            </div>
        </div>
    );
};

export default GaugeCard;
