import React from 'react';
import {SectionStyle2} from "../../sofbox";


class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <SectionStyle2 ids="software-features" small={true}>
                    <div className="iq-software-demo">
                        <img className="img-fluid" src="/assets/images/drive/05.png" alt="drive05" />
                    </div>
                    <div className="col-lg-6 offset-lg-6">
                        <div className="heading-title left text-left">
                            <h3 className="iq-tw-7 iq-mb-25 title">Software Features</h3>
                        </div>
                        <p>Software provides you with many features that will help you to keep track and keep records of your business. Software is designed and build as per the customers requirement. </p>
                        <ul className="iq-mt-40 iq-list">
                            <li className="iq-tw-6 iq-mb-15">
                                <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" />
                                <span className="iq-font-black">To keep records of customers such as contact information, support interactions and statistical data.</span>
                            </li>
                            <li className="iq-tw-6 iq-mb-15">
                                <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" />
                                <span className="iq-font-black">It keeps information which can be retrieved when required.</span>
                            </li>
                            <li className="iq-tw-6 iq-mb-15">
                                <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" />
                                <span className="iq-font-black">Software must be effective to gather, combine and analyze data so you can reveal crucial insights in making decisions.</span>
                            </li>
                            <li className="iq-tw-6 iq-mb-15">
                                <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" />
                                <span className="iq-font-black">The software built should support your business as it grows so that you don't have to transfer to another software and start from scratch.</span>
                            </li>
                            <li className="iq-tw-6 iq-mb-15">
                                <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" />
                                <span className="iq-font-black">The software should be able to add more users, provide advanced features, and give security.</span>
                            </li>
                        </ul>
                    </div>
                </SectionStyle2>

            </>
        );
    }

}

export default Index;