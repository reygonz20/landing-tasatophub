import React from 'react';
import { ContactForm } from '../../sofbox';

import { SectionTitle, CardStyle10,SectionStyle1 } from '../../sofbox';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section id="contact" className="overview-block-ptb it-works">
                    <div className="container text-center">
                        <div className="row ">
                            <div className="col-md-12">
                                <SectionTitle
                                    title="Lorem simply dummy"
                                    subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley, Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                />
                             </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className ="col-lg-4  text-center">
                            <a href="#" className="button-blue-shadow iq-mt-20 iq-mr-20">Learn More</a>
                            <a href="#" className="button-line-shadow iq-mt-20">Download</a>
                            </div>
                        </div>
                      
                    </div>
                  
                </section>

               

            </>
        );
    }

}

export default Index;