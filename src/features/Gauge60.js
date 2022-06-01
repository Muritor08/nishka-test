import React from 'react';
import GaugeChart from 'react-gauge-chart'

export default function Gauge() {
    return (
        <div className="card" style={{border:'none'}}>
            <h3 style={{ whiteSpace:"nowrap"}}> Coping (41-80) </h3>
            <br/>
            <GaugeChart id="gauge-chart5"
                nrOfLevels={420}
                arcsLength={[0.4, 0.4, 0.2]}
                colors={['#EA4228', '#F5CD19', '#5BE12C']}
                percent={0.60}
                arcPadding={0.02}
                textColor="black"
                hideText={true}
            />
            {/* <GaugeChart id="gauge-chart1" textColor="black" /> */}
            {/*   <GaugeChart id="gauge-chart2"
                    nrOfLevels={20}
                    percent={0.86}
                    textColor="black"
                /> */}
            {/* <h4>Financially Coping</h4> */}
            {/* <p>  You are doing good but there is good scope to improve</p> */}
        </div>
    );
}
