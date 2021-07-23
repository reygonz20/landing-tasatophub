import React from 'react';

const Index = (props) => {

    return (
        <>
            <section id="blog" className="blue-bg iq-ptb-40 get-feature iq-font-white iq-mt-100">
           
                <div className="container-fluid">
                    <div className="row flex-row-reverse">
                      
                        <div className="col-lg-6">
                            <h2 className="iq-tw-6 iq-font-white iq-mb-20 section-title">Lorem Ipsum is simply</h2>
                            <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#" className="button bt-black iq-mt-10 iq-mr-20">Renew Home</a>
                            <a href="#" className="button-line-white iq-mt-10">Re Download</a>
                        </div>
                        <div className="col-lg-6">
                                <img className="img-fluid" src="/assets/images/drive/16.png" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;