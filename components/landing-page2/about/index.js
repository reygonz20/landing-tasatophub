import React from 'react';

import { AboutStyle1 } from '../../sofbox';

class Index extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
        }
    }

    render() {
        return (
            <>
                <AboutStyle1
                    ids="how-it-works"
                    className="overview-block-ptb how-works"
                    sectionImage={"/assets/images/drive/iPad-Mockup1.png"}
                >
                    <div className="heading-title left text-left">
                        <h3 className="iq-tw-7 iq-mb-25 title">What can sofbox do ?</h3>
                    </div>
                    <p className="">
                        You can fully customize the template with ease. Every page is fully responsive and retina ready which makes your creation look good on any device.
                    </p>
                    <a href="#" className="button iq-mt-10">Click Here</a>
                </AboutStyle1>
                <AboutStyle1
                    ids="how-it-works-two"
                    className="overview-block-ptb how-works"
                    sectionImage={"/assets/images/drive/iPad-Mockup.png"}
                    rowReverse={true}
                >
                    <div className="heading-title left text-left">
                        <h3 className="iq-tw-7 iq-mb-25 title">Beautiful interface</h3>
                    </div>
                    <p className="">
                        Sofbox’s harmonious design and super clean looks will make your website look beautiful and elegant.
                    </p>
                    <a href="#" className="button iq-mt-10">Click Here</a>
                </AboutStyle1>
            </>
        );
    }
}

export default Index;