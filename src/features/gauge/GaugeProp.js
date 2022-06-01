import React from 'react';
//import { Container } from 'react-bootstrap';
import GaugeChart from 'react-gauge-chart'
import {GaugeValue} from '../../components/financialpulse/GaugeValue';

export default function GaugeProp({percent,index}) {
    return (
        <div className="card">
            <GaugeChart id="gauge-chart5"
                nrOfLevels={420}
                arcsLength={[0.4, 0.4, 0.2]}
                colors={['#EA4228', '#F5CD19', '#5BE12C']}
                percent={percent}
                arcPadding={0.02}
                textColor="black"
                hideText={true}
            />
            <div className="text-center my-3">
                <h3 style={{fontWeight:"normal"}}>{GaugeValue[index].name}</h3>
                <h4 style={{fontWeight:"lighter"}}>{GaugeValue[index].description}</h4>
            </div>
            {/* <GaugeChart id="gauge-chart1" textColor="black" /> */}
            {/* <GaugeChart id="gauge-chart2"
                    nrOfLevels={20}
                    percent={props.percent}
                    textColor="black"
                /> */}
            {/* <GaugeChart id="gauge-chart3"
                    nrOfLevels={30}
                    colors={["#FF5F6D", "#FFC371"]}
                    arcWidth={0.3}
                    percent={props.percent}
                /> */}
            {/* <GaugeChart id="gauge-chart4"
                    nrOfLevels={10}
                    arcPadding={0.1}
                    cornerRadius={3}
                    percent={props.percent}
                /> */}
            {/* <GaugeChart id="gauge-chart6"
                    animate={false}
                    nrOfLevels={15}
                    percent={props.percent}
                    needleColor="#345243"
                /> */}
            {/* <h3>Financially {props.score}</h3> */}
            {/* <p> {props.message}</p> */}
        </div>
    );
}
