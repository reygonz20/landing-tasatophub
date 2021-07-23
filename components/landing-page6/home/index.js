import React from 'react';

import { SectionBannerStyle1 } from '../../sofbox';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <SectionBannerStyle1
                    reverseSection={true}
                    media={(
                        <>
                            <img src="/assets/images/bg/17.png" className="banner-img img-fluid iq-pr-50" alt="" />
                            <img src="/assets/images/bg/18.png" className="img-fluid banner-ani wow fadeInRight"
                                 alt="" />
                        </>
                    )}
                >
                    <h2 className="iq-mb-20 iq-tw-9 r-mt-30">Sofbox</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                    <a href="#" className="button bt-black iq-mt-5 ">Download</a>
                </SectionBannerStyle1>

            </>
        );
    }

}

export default Index;