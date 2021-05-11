import React from "react";
import Wave from "react-wavify";

const SectionWave = ({reversed = false}: { reversed?: boolean }) => {
    return (

        // <svg width="100%" viewBox="0 0 1920 160" fill="none" xmlns="http://www.w3.org/2000/svg"
        //      style={reversed ? {transform: 'rotate(180deg)'} : {}}>
        //     <path
        //         fillRule="evenodd"
        //         clipRule="evenodd"
        //         d="M64.1276 20.2417L0 0.370849V0H1920V160L1855.87 140.129C1853.16 139.288 1850.33 138.41 1847.4 137.499C1780.97 116.875 1659.02 79.0133 1536.19 59.9834C1407.94 40.1125 1279.68 40.1125 1152.38 53.3598C1086.61 60.1532 1020.84 70.4305 955.067 80.7078C892.584 90.4712 830.1 100.235 767.617 107.011C640.319 120.258 512.064 120.258 383.809 99.7251C257.387 80.1383 131.895 41.2447 66.9162 21.1059C65.9739 20.8138 65.0443 20.5257 64.1276 20.2417Z"
        //         fill="#EDFFFB"
        //     />
        // </svg>
            <Wave fill='#EDFFFB'
                  className="flex"
                  style={!reversed ? {transform: 'rotate(180deg) scale(-1, 1)'} : {display: "block"}}
                  paused={false}
                  options={{
                      height: 20,
                      amplitude: 60,
                      speed: 0.05,
                      points: 3
                  }}
            />
    )
};

export default SectionWave;
