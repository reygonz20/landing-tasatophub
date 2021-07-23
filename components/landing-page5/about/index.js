import React from 'react';

import { SectionTitle } from '../../sofbox';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData: [
                {
                    title: 'Fully responsive',
                    icon: 'ion-ios-monitor-outline',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    title: 'Well documented',
                    icon: 'ion-ios-albums-outline',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    title: 'Easy to use',
                    icon: 'ion-ios-color-wand-outline',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    title: 'Clean codes',
                    icon: 'ion-ios-heart-outline',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }
            ]
        };
    }

    render() {
        const { cardData } = this.state;
        return (
            <>
                <section id={"about-us"} className="overview-block-ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle
                                    title="What is sofbox ?"
                                    subTitle="Sofbox is a sleek, clean and powerful landing page template"
                                />
                            </div>

                        </div>
                        <div className="row">
                            { cardData.map((card, index) => (
                                <div key={index} className="col-md-12 col-lg-3">
                                    <div className="iq-works-box round-icon text-center">
                                        <div className="icon-bg center-block">
                                            <i aria-hidden="true" className={card.icon} />
                                        </div>
                                        <h5 className=" iq-tw-7 iq-mt-25 iq-mb-15">{ card.title }</h5>
                                        <p>{ card.description }</p>
                                    </div>
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