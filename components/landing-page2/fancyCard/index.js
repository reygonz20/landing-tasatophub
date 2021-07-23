import React from 'react';

import { SectionTitle, FancyCard } from '../../sofbox';


const Cards = (props) => {
    const cardList = props.cardList;
    return cardList.map((card, index) => (
        <div key={index} className="col-sm-12 col-lg-3 col-md-6">
            <FancyCard icon={card.icon} title={card.title} text={card.text} />
        </div>
    ));
};

class Index extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            cardData: [
                {
                    icon: "ion-ios-monitor-outline",
                    title: "High Resolution",
                    text: "Provided with high resolution images."
                },
                {
                    icon: "ion-ios-settings",
                    title: "Color Schemes",
                    text: "You can use color schemes as you need."
                },
                {
                    icon: "ion-social-googleplus-outline",
                    title: "Google Fonts",
                    text: "You can change the fonts of the website."
                },
                {
                    icon: "ion-ios-heart-outline",
                    title: "Clean Codes",
                    text: "Clean code which can be understood."
                }
            ]
        }
    }

    render() {
        const { cardData } = this.state;
        return (
            <>
                <section className="overview-block-ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle
                                    title="What is sofbox ?"
                                    subTitle="Sofbox is a sleek, clean and powerful landing page template "
                                />
                            </div>
                        </div>
                        <div className="row">
                            <Cards cardList={cardData} />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Index;