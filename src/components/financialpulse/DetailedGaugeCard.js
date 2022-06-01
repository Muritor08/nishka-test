import React from "react";
import GaugeChart from "react-gauge-chart";
import { GaugeValueCategory } from "./GaugeValue";
import { GaugeValue } from "./GaugeValue";

export const GaugePropOverall = ({ percent, index, heading }) => {
  return (
    <div
      className="card p-3"
      style={{
        maxWidth: 500,
        width: "100%",
        // margin: "0 auto",
      }}
    >
      <h4 className="fs-3 text-center my-2 fw-bold">{heading}</h4>
      <GaugeChart
        id="gauge-chart5"
        nrOfLevels={420}
        arcsLength={[0.4, 0.4, 0.2]}
        colors={["#EA4228", "#F5CD19", "#5BE12C"]}
        percent={percent}
        arcPadding={0.02}
        textColor="black"
        hideText={true}
        className="pt-2"
      />
      <div className="text-center my-3">
        <h3 className="fs-3">{GaugeValue[index].name}</h3>
        <h4 className="fs-5">{GaugeValue[index].description}</h4>
      </div>
    </div>
  );
};

export const GaugePropCategory = ({ percent, index, advices, heading }) => {
  return (
    <div className="card p-2">
      <h4 className="fs-4 text-center my-2 fw-bold">{heading}</h4>
      <GaugeChart
        id="gauge-chart5"
        nrOfLevels={420}
        arcsLength={[0.4, 0.4, 0.2]}
        colors={["#EA4228", "#F5CD19", "#5BE12C"]}
        percent={percent}
        arcPadding={0.02}
        textColor="black"
        hideText={true}
        className="pt-2"
      />
      <div className="text-center my-3">
        <h3 className="fs-4">{GaugeValueCategory[index].name}</h3>
        <p className="fs-6 text-center">{advices}</p>
      </div>
    </div>
  );
};
