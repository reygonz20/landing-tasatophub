import React from 'react';

import { AboutStyle1 } from '../../sofbox';

const Index = (props) => {

    return (
        <>

            <AboutStyle1
                ids="great-features"
                className="overview-block-ptb how-works r-mt-40"
                animation={false}
                rowReverse={false}
                sectionImage={"/assets/images/bg/14.png"}
            >
                <div className="heading-title left text-left">
                    <h3 className="iq-tw-7 iq-mb-25 title">Sofbox speciality</h3>
                </div>
                <p className="iq-font-15">
                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <a href="#" className="button iq-mt-10">Click Here</a>

            </AboutStyle1>

            <AboutStyle1
                className="overview-block-pb how-works r-mt-40 iq-rmt-80"
                animation={false}
                rowReverse={true}
                sectionImage={"/assets/images/bg/15.png"}
            >
                <div className="heading-title left text-left">
                    <h3 className="iq-tw-7 iq-mb-25 title">Variations</h3>
                </div>
                <p className="iq-font-15">
                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <a href="#" className="button iq-mt-10">Click Here</a>

            </AboutStyle1>

            <AboutStyle1
                className="overview-block-ptb how-works r-mt-40"
                animation={false}
                rowReverse={false}
                sectionImage={"/assets/images/bg/16.png"}
            >
                <div className="heading-title left text-left">
                    <h3 className="iq-tw-7 iq-mb-25 title">Build beautiful with sofbox</h3>
                </div>
                <p className="iq-font-15">
                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <a href="#" className="button iq-mt-10">Click Here</a>

            </AboutStyle1>

        </>
    );
};

export default Index;