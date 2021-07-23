import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="iq-fancy-boxnew text-center">
                <div className="iq-icon icon-bg ">
                    <i aria-hidden="true" className={ props.icon } />
                </div>
                <div className="fancy-content">
                    <h5 className="iq-tw-7 iq-pt-20 iq-pb-10">{ props.title }</h5>
                    <p>{ props.text }</p>
                </div>
            </div>

        </>
    );
};
export default Index;