import React from 'react';

import { SectionTitle, SectionStyle1 ,CardStyle11} from '../../sofbox';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section id="team" className="overview-block-ptb it-works">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle
                                    title="Meet The Team"
                                    subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley, Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                />
                             </div>
                        </div>
                        <div className="row iq-team-1">
                            <div className="col-lg-4 col-sm-6 iq-mtb-20">
                                <CardStyle11  media={"/assets/images/team/round-img1.png"}>
                                    <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">Rinks Cooper</h5>
                                    <span>CEO, Qwilo</span>
                                    <div className="iq-star iq-font-green iq-mb-10">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <p>Sofbox allows easily to customize the template as per your business needs. Also it makes easy to tailor-made.</p>
                                    
                                </CardStyle11>
                            </div>

                            <div className="col-lg-4 col-sm-6 iq-mtb-20 ">
                                <CardStyle11  media={"/assets/images/team/round-img2.png"}>
                                    <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">JD Scot</h5>
                                    <span>CEO, Qwilo</span>
                                    <div className="iq-star iq-font-green iq-mb-10">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <p>Sofbox allows easily to customize the template as per your business needs. Also it makes easy to tailor-made.</p>
                                    
                                    
                                </CardStyle11>
                            </div>

                            <div className="col-lg-4 col-sm-6 iq-mtb-20 ">
                                <CardStyle11  media={"/assets/images/team/round-img3.png"}>
                                    <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">Haris Morgan</h5>
                                    <span>CEO, Qwilo</span>
                                    <div className="iq-star iq-font-green iq-mb-10">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <p>Sofbox allows easily to customize the template as per your business needs. Also it makes easy to tailor-made.</p>
                                    

                                </CardStyle11>
                            </div>
                        </div>
                        <div className="text-center">
                                <a href="#" className="button-blue-shadow iq-mt-40"> Here More Team Members </a>
                        </div>
                    </div>
                  
                </section>

                

            </>
        );
    }

}

export default Index;