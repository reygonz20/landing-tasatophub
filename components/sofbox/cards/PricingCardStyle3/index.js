import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="pricing-plan">
                <div className="iq-icon">
                    <i aria-hidden="true" className={props.icon} />
                </div>
                <h4 className=" iq-tw-5">{ props.title }</h4>
                { props.children }
            </div>

        </>
    );
};

export default Index;