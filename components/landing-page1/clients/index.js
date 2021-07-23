import React, { useState } from 'react';

import { ClientCarousal } from '../../sofbox';


const clientes = () => {

    const [carousalImages, setCarousalImages] = useState([
            { src: '/assets/images/clients/01.png' },
            { src: '/assets/images/clients/02.png' },
            { src: '/assets/images/clients/03.png' },
            { src: '/assets/images/clients/04.png' },
            { src: '/assets/images/clients/05.png' },
            { src: '/assets/images/clients/06.png' },
            { src: '/assets/images/clients/07.png' },
            { src: '/assets/images/clients/09.png' }
        ]
    )
    
return (
    <>
    <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <SectionTitle
                        title="Reconocimientos"
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


export default clientes;