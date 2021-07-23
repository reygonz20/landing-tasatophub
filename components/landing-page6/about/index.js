import React from 'react';

import { AboutStyle1 } from '../../sofbox';

const Index = (props) => {

    return (
        <>
            <AboutStyle1
                ids="how-it-works"
                className="overview-block-ptb how-works r-mt-40"
                animation={false}
                rowReverse={false}
                sectionImage={"/assets/images/bg/20.png"}
            >
                <div className="heading-title left text-left">
                    <h3 className="iq-tw-7 iq-mb-25 title">What is sofbox ?</h3>
                </div>
                <p className="">
                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <a href="#" className="button iq-mt-10">Click Here</a>

            </AboutStyle1>

            <AboutStyle1
                ids="how-works"
                className="overview-block-pb how-works r-mt-40 iq-rmt-80"
                animation={false}
                rowReverse={true}
                sectionImage={"/assets/images/bg/12.png"}
            >
                <div className="heading-title left text-left">
                    <h3 className="iq-tw-7 iq-mb-25 title">What sofbox can do ?</h3>
                </div>
                <p className="">
                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <a href="#" className="button iq-mt-10">Click Here</a>

            </AboutStyle1>
        </>
    );
};

export default Index;