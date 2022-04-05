import React from "react";

export default function BackgroundStatic(){
    let arr = [];
    for (let i = 0; i < 16; i++) {
        arr.push(i);
    }

    let points = arr.map((item, index) => {
        let linePoints = arr.map((item, index) => {
            return <span key={index} className={'static-layer__point'}>
           </span>;
        })
        return <div key={index} className={'static-layer__line'}>
            {linePoints}
        </div>;
    })

    return <div className={'wrapper'}>
        <div className="background-static">
            <div className="static-layer static-layer_right">
                <div className="static-layer__points">
                    {points}
                    <div className="static-layer__sector"/>
                </div>
            </div>
            <div className="static-layer static-layer_left">
                <div className="static-layer__points">
                    {points}
                    <div className="static-layer__sector"/>
                </div>
            </div>
        </div>
    </div>;
}
