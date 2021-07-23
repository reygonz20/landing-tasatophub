import React from 'react';


const Index = () => {

    return (
        <>
            <div className="bg-dark iq-ptb-10 header-top-bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-auto mr-auto">
                            <ul className={"mb-0"}>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-phone iq-mr-10" aria-hidden="true" />
                                        <span className="iq-font-white">+1234567890</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <div className="social-bar">
                                <ul className={"mb-0"}>
                                    <li><a href="#"><i className="fab fa-facebook-f"/></a></li>
                                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest" /></a></li>
                                    <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};


export default Index;
