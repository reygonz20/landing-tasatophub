import React from 'react';

const Index = (props) => {

    return (
        <>
            <section className="overview-block-ptb iq-breadcrumb iq-banner-13 text-left iq-over-blue-30 " id="iq-home">
                <div className="banner-text">
                    <div className="container">
                        <div className={props.reverseSection ? 'row flex-row-reverse align-items-center' : ' row align-items-center'}>
                            <div className="col-lg-7 ">
                                { props.media }
                            </div>
                            <div className="col-lg-5 text-left">
                                { props.children }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;