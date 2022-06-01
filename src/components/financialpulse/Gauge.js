import React from 'react';
import GaugeChart from 'react-gauge-chart'

export default function Gauge() {
    return (
        <div>
            {/* <div className="card"> */}
                <GaugeChart id="gauge-chart5"
                    nrOfLevels={420}
                    arcsLength={[0.3, 0.4, 0.3]}
                    colors={['#EA4228', '#F5CD19', '#5BE12C']}
                    percent={0.30}
                    arcPadding={0.02}
                    textColor="black"
                    hideText={true}
                />
            {/* </div> */}
            <h3>Financially Gauge</h3>
            <p> Financial Text</p>
        </div>
    );
}
