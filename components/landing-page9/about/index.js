import React from 'react';

import { SectionTitle, CardStyle10,SectionStyle1 } from '../../sofbox';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section id="how-it-works" className="overview-block-ptb it-works">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle
                                    title="What is sofbox ?"
                                    subTitle="Sofbox is a sleek, clean and powerful landing page template."
                                />
                             </div>
                        </div>
                        <div className="row iq-mb-40">
                            <div className="col-md-12 col-lg-4">
                                <CardStyle10  media={"/assets/images/services/icon-4.png"}>
                                    <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">Easy to Customize</h5>
                                    <p>Sofbox allows easily to customize the template as per your business needs. Also it makes easy to tailor-made.</p>
                                    <a href="#">Social security</a>
                                </CardStyle10>
                            </div>

                            <div className="col-md-12 col-lg-4 r-mt-30">
                                <CardStyle10  media={"/assets/images/services/icon-5.png"}>
                                    <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">Multipurpose layout</h5>
                                    <p>Choose the layout that suits your needs, customize the sections, headers choose from pre-made elements.</p>
                                    <a href="#">Social security</a>
                                    
                                </CardStyle10>
                            </div>

                            <div className="col-md-12 col-lg-4 r-mt-30">
                                <CardStyle10  media={"/assets/images/services/icon-6.png"}>
                                    <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">Unique Design</h5>
                                    <p>Sofbox’s harmonious design and super clean looks will make your website look beautiful and elegant.</p>
                                    <a href="#">Social security</a>

                                </CardStyle10>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                                <a href="#" className="button-blue-shadow iq-mt-10">Read More</a>
                        </div>
                    </div>
                  
                </section>

                

            </>
        );
    }

}

export default Index;