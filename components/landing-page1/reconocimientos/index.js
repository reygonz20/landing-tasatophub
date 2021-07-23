import React, { useState } from 'react';

import { ClientCarousal, SectionTitle } from '../../sofbox';


const reconocimientos = () => {

    const [carousalImages, setCarousalImages] = useState([
            { src: '/assets/images/reconocimientos/01.png' },
            { src: '/assets/images/reconocimientos/02.png' },
            { src: '/assets/images/reconocimientos/03.png' },
            { src: '/assets/images/reconocimientos/04.png' },
            { src: '/assets/images/reconocimientos/05.png' },
            { src: '/assets/images/reconocimientos/06.png' }
        ]
    )
    
return (
    <>
    <div className="container" style={{marginTop: '30px', marginBottom: '0px'}}>
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


export default reconocimientos;