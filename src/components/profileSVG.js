import React from 'react';


const profileSCG = () => {

    return (
        <div className="loginSvgWrap">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="2136" height="810" viewBox="0 0 2136 810">
                <defs>
                    <filter id="a" x="0" y="0" width="2136" height="810" filterUnits="userSpaceOnUse">
                        <feOffset dy="15" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="35" result="b"/>
                        <feFlood flood-opacity="0.161"/>
                        <feComposite operator="in" in2="b"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#a)">
                    <path d="M0,0H1926V600S1462.5,447,981,447,0,600,0,600Z" transform="translate(105 90)"
                          fill="#051a12"/>
                </g>
            </svg>


        </div>
    );

};
export default profileSCG;
