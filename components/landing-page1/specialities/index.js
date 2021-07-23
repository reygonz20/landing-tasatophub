import React, { useState } from 'react';

import { CardStyle6 } from '../../sofbox';


const specialities = () => {

    const [list, setList] = useState([
        {
            icon: 'ion-ios-monitor-outline',
            title: 'High Resolution',
            description: 'Provided with high resolution images.'
        },
        {
            icon: 'ion-ios-settings',
            title: 'Color Schemes',
            description: 'You can use color schemes as you need.'
        },
        {
            icon: 'ion-social-googleplus-outline',
            title: 'Google Fonts',
            description: 'You can change the fonts of the website.'
        },
        {
            icon: 'ion-ios-heart-outline',
            title: 'Clean Codes',
            description: 'Clean code which can be understood.'
        },
        {
            icon: 'ion-ios-color-wand-outline',
            title: 'Responsive Design',
            description: 'Fully responsive and retina ready.'
        },
        {
            icon: 'ion-ios-checkmark-outline',
            title: 'Easy to Use',
            description: 'The template can be fully customizable with ease.'
        },
        {
            icon: 'ion-ios-photos-outline',
            title: 'Perfect Showcase',
            description: 'Template makes your website look beautiful.'
        },
        {
            icon: 'ion-ios-videocam-outline',
            title: 'Video Animation',
            description: 'You can also add videos to the website as you need.'
        }
    ]);

    return (
        <>
            <section className="overview-block-ptb grey-bg iq-specialities">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="heading-title">
                                <h3 className="title iq-tw-7">Sofbox Specialities </h3>
                                <p>Sofbox is popular for the below specialities that can make your website look beautiful
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        { list.map((item, index) => (
                            <div key={index} className="col-sm-12 col-lg-3 col-md-6 iq-mb-30">
                                <CardStyle6 icon={item.icon} >
                                    <h5 className="iq-tw-7 iq-pt-20 iq-pb-10">{ item.title }</h5>
                                    <p>{ item.description }</p>
                                </CardStyle6>
                            </div>
                        )) }
                    </div>
                </div>
            </section>
        </>
    );
}


export default specialities;