import React from 'react';
import { PricingCardStyle1 } from '../../sofbox';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            packageList: [
                {
                    title: 'Start Up',
                    price: '$1.99',
                    items: [
                        { icon: 'ion-checkmark-round', title: 'Photoshop'},
                        { icon: 'ion-checkmark-round', title: 'HTML5 & CSS 3'},
                        { icon: 'ion-close-round', title: 'Wordpress'},
                        { icon: 'ion-close-round', title: 'Javascript'},
                        { icon: 'ion-close-round', title: 'Animation'}
                    ],
                    active: 0
                },
                {
                    title: 'Professional',
                    price: '$4.99',
                    items: [
                        { icon: 'ion-checkmark-round', title: 'Photoshop'},
                        { icon: 'ion-checkmark-round', title: 'HTML5 & CSS 3'},
                        { icon: 'ion-close-round', title: 'Wordpress'},
                        { icon: 'ion-close-round', title: 'Javascript'},
                        { icon: 'ion-close-round', title: 'Animation'}
                    ],
                    active: 1
                },
                {
                    title: 'Advanced',
                    price: '$9.99',
                    items: [
                        { icon: 'ion-checkmark-round', title: 'Photoshop'},
                        { icon: 'ion-checkmark-round', title: 'HTML5 & CSS 3'},
                        { icon: 'ion-close-round', title: 'Wordpress'},
                        { icon: 'ion-close-round', title: 'Javascript'},
                        { icon: 'ion-close-round', title: 'Animation'}
                    ],
                    active: 0
                },
                {
                    title: 'Premium',
                    price: '$45.99',
                    items: [
                        { icon: 'ion-checkmark-round', title: 'Photoshop'},
                        { icon: 'ion-checkmark-round', title: 'HTML5 & CSS 3'},
                        { icon: 'ion-close-round', title: 'Wordpress'},
                        { icon: 'ion-close-round', title: 'Javascript'},
                        { icon: 'ion-close-round', title: 'Animation'}
                    ],
                    active: 0
                }
            ]
        }
    }

    render() {
        const { packageList } = this.state;
        return (
            <>
                <section className="overview-block-ptb iq-pricing-main" id="pricing">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="heading-title text-center">
                                    <h3 className="title iq-tw-6">Our Pricing</h3>
                                    <p>Make custom website as per our custom website packages.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            { packageList.map((packageDetails, index) => (
                                <div key={index} className="col-lg-3 col-md-6 col-sm-12 iq-mtb-10">
                                    <PricingCardStyle1
                                        active={ packageDetails.active }
                                        title={ packageDetails.title }
                                        price={ packageDetails.price }
                                        items={ packageDetails.items }
                                    >
                                        <a className="button iq-mr-0" href="#">Purchase</a>
                                    </PricingCardStyle1>
                                </div>
                            )) }
                        </div>
                    </div>
                </section>
            </>
        );
    }

}

export default Index;
