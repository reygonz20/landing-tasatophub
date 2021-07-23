import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="iq-works-box text-left">
                <div className="step">{ props.step }</div>
                <div className="icon-bg text-center">
                    <img src={ props.media } className="img-fluid" alt="#" />
                </div>
                { props.children }
            </div>

        </>
    );
};

export default Index;