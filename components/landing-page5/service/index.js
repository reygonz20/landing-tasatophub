import React from 'react';


// Import for the Sofbox components...
import { SectionStyle2 } from '../../../components/sofbox';
class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <SectionStyle2 ids="how-it-works" small={true}>
                    <div className="col-lg-6">
                        <img className="img-fluid" src="/assets/images/drive/05.png" alt="drive05" />
                    </div>
                    <div className="col-lg-6">
                        <div className="heading-title left text-left">
                            <h3 className="iq-tw-7 iq-mb-25 title">Sofbox features</h3>
                        </div>
                        <div className=" text-discover iq-mb-25">
                            <span className="iq-font-blue iq-tw-8">It has survived not only five centuries,</span>
                            <p className="iq-font-15 iq-mt-10">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.</p>
                        </div>
                        <a href="#" className="button">Click Here</a>
                    </div>
                </SectionStyle2>

                <section id="how-works" className="overview-block-ptb how-works">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="heading-title left text-left">
                                    <h3 className="iq-tw-7 iq-mb-25 title">Sofbox services</h3>
                                </div>
                                <div className="text-discover iq-mb-25 ">
                                    <span className="iq-font-blue iq-tw-8">It has survived not only five centuries,</span>
                                    <p className="iq-font-15 iq-mt-10">remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <a href="#" className="button">Click Here</a>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <img className="iq-works-img" src="/assets/images/drive/01.png" alt="drive01" />
                            </div>
                        </div>
                    </div>
                    <div className="iq-objects">
                        <span className="iq-objects-01">
                            <img src="/assets/images/drive/02.png" alt="drive02" />
                        </span>
                        <span className="iq-objects-02 skrollable skrollable-between" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-100px);" style={{ transform: 'translateY(6.77966px)' }}>
                            <img src="/assets/images/drive/03.png" alt="drive02" />
                        </span>
                        <span className="iq-objects-03 skrollable skrollable-between" data-bottom="transform:translatex(50px)" data-top="transform:translatex(-100px);" style={{ transform: 'translateX(-5.74572px)' }}>
                            <img src="/assets/images/drive/04.png" alt="drive02" />
                        </span>
                        <span className="iq-objects-04 iq-fadebounce">
                            <span className="iq-round" />
                        </span>
                    </div>
                </section>
            </>
        );
    }

}

export default Index;