import React from 'react';

import { SectionTitle, CardStyle10,SectionStyle1 } from '../../sofbox';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section id="counter" className="it-works">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle
                                    title="Happy Downloads"
                                    subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley, Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                />
                             </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className ="col-lg-4  text-center">
                                <div className="iq-counter-1">
                                    <div className="counter-date">
                                        <span className=" timer iq-tw-7 iq-font-dark" data-count-from="0" data-count-to="5656123"
                                          data-count-speed="100">5656123</span>
                                        <label className="iq-font-blue">App Download</label>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className ="col-lg-4  text-center">
                                <div className="iq-counter-1">
                                    <div className="counter-date">
                                        <span className=" timer iq-tw-7 iq-font-dark" data-count-from="0" data-count-to="2530"
                                          data-count-speed="100">2530</span>
                                        <label className="iq-font-blue">Happy Cluent</label>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                  
                </section>

                

            </>
        );
    }

}

export default Index;