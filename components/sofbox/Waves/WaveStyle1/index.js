import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="waves-box">
                <a className={"iq-video "+ props.className} href={ props.btnLink }>
                    <i className="ion-ios-play-outline"></i>
                </a>
                <div className="iq-waves">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                </div>
            </div>
        </>
    );
};


export default Index;
