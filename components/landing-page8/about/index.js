import React from 'react';

import { SectionTitle, FancyCard ,SectionStyle1} from '../../sofbox';
import OwlCarousel from 'react-owl-carousel2';

const Cards = (props) => {
    const cardList = props.cardList;
    return cardList.map((card, index) => (
        <div key={index} className="col-sm-12 col-lg-3 col-md-6">
            <FancyCard icon={card.icon} title={card.title} text={card.text} />
        </div>
    ));
};
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
            cardData: [
                {
                    icon: 'ion-ios-monitor-outline',
                    title: 'Fully responsive',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    icon: 'ion-ios-settings',
                    title: 'Well documented',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    icon: 'ion-social-googleplus-outline',
                    title: 'Easy to use',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    icon: 'ion-ios-heart-outline',
                    title: 'Clean codes',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
              

            ]
        };
    }

    render() {
        const { cardData } = this.state;
        const { small } = this.props;
        return (
            <>
               <section id="how-it-works" className="overview-block-ptb it-works">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle
                                    title="How it works ?"
                                    subTitle="Sofbox is a sleek, clean and powerful landing page template."
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
               
               
                <section id="what_can_do" className="overview-block-ptb how-works">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="heading-title left text-left">
                                    <h3 className="iq-tw-7 iq-mb-25 title">What can sofbox do ?</h3>
                                </div>
                                <div className="text-discover iq-mb-25 ">
                                <p>With sofbox you can create beautiful and elegant websites that suits your business.</p>
                                <p className="iq-mt-20">You can fully customize the template with ease. Every page is fully responsive and retina ready which makes your creation look good on any device.</p>
                                </div>
                                <h6 className="iq-tw-6 iq-mb-15 iq-mt-25">Discover our best ever services.</h6>
                                <a href="#" className="button">Click Here</a>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <img className="iq-works-img" src="/assets/images/drive/01.png" alt="drive01" />
                            </div>
                        </div>
                    </div>
                    <div className="iq-objects">
                        <span className="iq-objects-01">
                            <img src="/assets/images/drive/02.png" alt="drive02" />
                        </span>
                        <span className="iq-objects-02 skrollable skrollable-between" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-100px);" style={{ transform: 'translateY(6.77966px)' }}>
                            <img src="/assets/images/drive/03.png" alt="drive02" />
                        </span>
                        <span className="iq-objects-03 skrollable skrollable-between" data-bottom="transform:translatex(50px)" data-top="transform:translatex(-100px);" style={{ transform: 'translateX(-5.74572px)' }}>
                            <img src="/assets/images/drive/04.png" alt="drive02" />
                        </span>
                        <span className="iq-objects-04 iq-fadebounce">
                            <span className="iq-round" />
                        </span>
                    </div>
                </section>
                

              
            </>
        );
    }
}

export default Index;
