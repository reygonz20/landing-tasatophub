import React from 'react';

import { ContactForm } from '../../sofbox';


const contact = () => {

    return (
        <>
            <section id="contacto" className="footer-info white-bg">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-md-6 col-lg-4">
                            <div className="iq-get-in">
                                <h4 className="iq-tw-7 iq-mb-20">¿Tienes alguna pregunta? ¡escríbenos!:</h4>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
                <iframe className="map" style="border:0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2980916498555!2d-77.04114768536432!3d-12.091733791437376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85c016e5841%3A0xcd1f1c1408f743a8!2sCalle%20Las%20Palmeras%20216%2C%20San%20Isidro%2015073!5e0!3m2!1ses-419!2spe!4v1603479399303!5m2!1ses-419!2spe"
                        style={{ border:0 }} allowFullScreen />
            </section>
        </>
    );
}

export default contact;