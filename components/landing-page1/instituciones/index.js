import React, { useState } from 'react';

import { ClientCarousal, SectionTitle } from '../../sofbox';


const instituciones = () => {

    const [carousalImages, setCarousalImages] = useState([
            { src: '/assets/images/instituciones/01.png' },
            { src: '/assets/images/instituciones/02.png' },
            { src: '/assets/images/instituciones/03.png' },
            { src: '/assets/images/instituciones/04.png' },
            { src: '/assets/images/instituciones/05.png' },
            { src: '/assets/images/instituciones/06.png' },
            { src: '/assets/images/instituciones/07.png' },
            { src: '/assets/images/instituciones/08.png' },
            { src: '/assets/images/instituciones/09.png' },
            { src: '/assets/images/instituciones/10.png' },
            { src: '/assets/images/instituciones/11.png' },
            { src: '/assets/images/instituciones/12.png' },
            { src: '/assets/images/instituciones/13.png' }
        ]
    )
    
return (
    <>
    <div className="container" style={{marginTop: '30px', marginBottom: '0px'}}>
            <div className="row">
                <div className="col-sm-12">
                    <SectionTitle
                        title="Instituciones Afiliadas"
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


export default instituciones;