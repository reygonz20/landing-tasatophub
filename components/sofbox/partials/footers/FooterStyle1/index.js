import React from 'react';

const Index = (props) => {

    return (
        <>
            <div id="contact" className="footer iq-footer3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7 col-sm-12 text-left iq-font-dark">
                            <div className="iq-ptb-20" dangerouslySetInnerHTML={{ __html: props.footerText }} />
                        </div>
                        <div className=" col-md-5 col-lg-4 col-sm-12 align-self-center">
                            <ul className="info-share text-center text-sm-right">
                                { props.socialNavItems.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href}> <i className={item.icon} /></a>
                                    </li>
                                )) }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;