import React from 'react';
import {SectionStyle2, SectionTitle} from '../../sofbox';


class Index extends React.Component {

    render() {

        return (
            <>
                <SectionStyle2 ids="software-features" small={true}>
                    <div className="iq-software-demo">
                        <img className="img-fluid" src="/assets/images/drive/05.png" alt="drive05" />
                    </div>
                    <div className="col-lg-6 offset-lg-6">
                        <SectionTitle
                            title="Software Features"
                            subTitle=""
                            className={"left text-left"}
                        />
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                        <ul className="iq-mt-40 iq-list">
                            <li className="iq-tw-6 iq-mb-15">
                                <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" />
                                <span className="iq-font-black">It is a long established fact that a reader will be distracted by the readable content.</span>
                            </li>
                            <li className="iq-tw-6 iq-mb-15">
                                <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" />
                                <span className="iq-font-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</span>
                            </li>
                            <li className="iq-tw-6 iq-mb-15">
                                <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" />
                                <span className="iq-font-black">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</span>
                            </li>
                            <li className="iq-tw-6 iq-mb-15">
                                <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" />
                                <span className="iq-font-black">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</span>
                            </li>
                            <li className="iq-tw-6 iq-mb-15">
                                <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" />
                                <span className="iq-font-black">Simply dummy text of the Lorem Ipsum is printing and type setting industry.</span>
                            </li>
                        </ul>
                    </div>
                </SectionStyle2>
            </>
        );
    }
}
export default Index;
