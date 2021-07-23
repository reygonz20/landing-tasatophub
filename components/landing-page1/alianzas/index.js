import React, { useState } from 'react';

import { ClientCarousal, SectionTitle } from '../../sofbox';


const alianzas = () => {

    const [carousalImages, setCarousalImages] = useState([
            { src: '/assets/images/alianzas/01.png' },
            { src: '/assets/images/alianzas/02.png' },
            { src: '/assets/images/alianzas/03.png' },
            { src: '/assets/images/alianzas/04.png' },
            { src: '/assets/images/alianzas/05.png' },
            { src: '/assets/images/alianzas/06.png' },
            { src: '/assets/images/alianzas/07.png' }
        ]
    )
    
return (
    <>
    <div className="container" style={{marginTop: '30px', marginBottom: '0px'}}>
            <div className="row">
                <div className="col-sm-12">
                    <SectionTitle
                        title="Nuestras Alianzas"
                        // subTitle="Sofbox is a sleek, clean and powerful landing page template."
                    />
            </div>
                </div>
                    
        </div>
        <div className="iq-our-clients white-bg iq-ptb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <ClientCarousal images={carousalImages} />
                    </div>
                </div>
            </div>
        </div>

    </>
    );
}


export default alianzas;