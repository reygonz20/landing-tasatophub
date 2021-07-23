import React, { useEffect } from 'react';

import { ParallaxHeroStyle1 } from '../../sofbox';


import {index} from "../../../config/plugins";


const counter = () => {

    useEffect(() => {
        setTimeout( () => {
            index();
        }, 500);
      }, []);

      return (
        <>
            <ParallaxHeroStyle1
                ids="counter"
                bgImage="/assets/images/home/tasatop_metricas.jpg"
                className="iq-ptb-100 iq-counter-box iq-bg-over iq-over-blue-90 iq-font-white iq-parallax jarallax">
                <div className="container">

                    <div className="row" style={{justifyContent: 'center'}}>

                        {/* <div className="col-lg-3 col-md-6 col-sm-12 text-left" style={{visibility: 'hidden'}}>
                            <div className="counter">
                                <i className="ion-ios-folder-outline " aria-hidden="true" />
                                <div className="counter-date">
                                    <label className="iq-font-white text-uppercase">App Downloads</label>
                                    <span className="timer iq-tw-7" data-count-from="0" data-count-to="1540"
                                          data-count-speed="150" >1540</span>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-lg-4 col-md-6 col-sm-12 text-left">
                            <div className="counter">
                                <i className="ion-ios-paper-outline " aria-hidden="true" />
                                <div className="counter-date" style= {{textAlign: 'center'}}>
                                <div className="text" style={{fontSize: '2rem', fontWeight: '700'}}>100,000,000</div>
                                    <label className="iq-font-white text-uppercase">de soles invertidos</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 text-left">
                            <div className="counter">
                                <i className="ion-ios-person-outline " aria-hidden="true" />
                                <div className="counter-date" style= {{textAlign: 'center'}}>
                                    <div className="text" style={{fontSize: '2rem', fontWeight: '700'}}>10,000</div>
                                    <label className="iq-font-white text-uppercase">Usuarios</label>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-md-6 col-sm-12 text-left" style={{visibility: 'hidden'}}>
                            <div className="counter">
                                <i className="ion-ios-star " aria-hidden="true" />
                                <div className="counter-date">
                                    <label className="iq-font-white text-uppercase">Total App Rates</label>
                                    <span className="timer iq-tw-7" data-count-from="0" data-count-to="1620"
                                          data-count-speed="150" >1620</span>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </ParallaxHeroStyle1>
        </>
    );
}

export default counter;