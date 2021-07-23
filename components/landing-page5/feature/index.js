import React from 'react';

const Index = (props) => {

    return (
        <>
            <section id="feature" className="overview-block-ptb how-works">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="heading-title left text-left">
                                <h3 className="iq-tw-7 iq-mb-25 title">What sofbox can do ?</h3>
                            </div>
                            <div className=" text-discover iq-mb-25">
                                <span className="iq-font-blue iq-tw-8">It has survived not only five centuries,</span>
                                <p className="iq-font-15 iq-mt-10">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                            </div>
                            <a href="#" className="button">Click Here</a>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <img className="iq-works-img" src="/assets/images/banner/11.png" alt="drive01" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;