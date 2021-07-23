import React from 'react';

const Index = (props) => {

    return (
        <>
            <section id="blog" className="overview-block-ptb iq-bg-over  iq-over-blue-80 iq-tool-feature  iq-font-white">
                <div className="soft-about">
                    <img className="box-img1 img-fluid wow fadeInUp" alt=""
                         src="/assets/images/device/awesome-img1.png" data-wow-duration="1.5s"
                         style={{ visibility: 'visible', animationDuration: '1.5s', animationName: 'fadeInUp' }} />
                    <img className="box-img6 img-fluid wow fadeInUp" alt=""
                         src="/assets/images/device/awesome-img6.png" data-wow-duration="2.5s"
                         style={{ visibility: 'visible', animationDuration: '2.5s', animationName: 'fadeInUp' }} />
                    <img className="box-img3 img-fluid wow rotateIn" alt=""
                         src="/assets/images/device/awesome-img3.png" data-wow-duration="1s"
                         style={{ visibility: 'visible', animationDuration: '1s', animationName: 'rotateIn' }} />
                    <img className="box-img4 img-fluid wow fadeInRight" alt=""
                         src="/assets/images/device/awesome-img4.png" data-wow-duration="1.5s"
                         style={{ visibility: 'visible', animationDuration: '1.5s', animationName: 'fadeInRight' }} />
                    <img className="box-img5 img-fluid wow rotateInUpRight" alt=""
                         src="/assets/images/device/awesome-img5.png" data-wow-duration="1.5s"
                         style={{ visibility: 'visible', animationDuration: '1.5s', animationName: 'rotateInUpRight' }} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <h2 className="iq-tw-6 iq-mt-100 iq-mb-20 iq-font-white">How To use Sofbox ?</h2>
                            <p className="">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, Simply dummy text of the
                                printing and typesetting industry.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 soft-about">
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;