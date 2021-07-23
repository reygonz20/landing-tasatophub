import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="iq-team grey-bg">
                <div className="iq-team-img">
                    <img src={props.image} className="img-fluid center-block" alt="drive1" />
                </div>
                <div className="iq-team-info text-center">
                    <h5 className="iq-font-black iq-tw-7">{ props.title }</h5>
                    <span className="team-post">{ props.subtitle }</span>
                </div>
                <div className="share">
                    { props.children }
                </div>
            </div>

        </>
    );
};

export default Index;