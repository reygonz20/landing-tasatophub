import React from 'react';

import { CardStyle8 } from '../../sofbox';

const Cards = (props) => {
    const cardData = props.cardData;
    const list = cardData.map((item, index) => (
        <div key={index} className="col-sm-12 col-lg-3 col-md-6" >
            <CardStyle8
                title={item.title}
                subtitle={ item.subtitle }
                image={ item.image }
            >
                <ul>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#"><i className="fab fa-facebook" /></a></li>
                    <li><a href="#"><i className="fab fa-google" /></a></li>
                    <li><a href="#"><i className="fab fa-github" /></a></li>
                </ul>
            </CardStyle8>

        </div>
    ));

    return list;
};

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [
                {
                    title: 'JD Adams',
                    subtitle: 'Web Designer',
                    image: '/assets/images/team/01.jpg'
                },
                {
                    title: 'Rinkal Oberoi',
                    subtitle: 'Web Designer',
                    image: '/assets/images/team/02.jpg'
                },
                {
                    title: 'Jason Deol',
                    subtitle: 'Web Designer',
                    image: '/assets/images/team/03.jpg'
                },
                {
                    title: 'kush Jackson',
                    subtitle: 'Web Designer',
                    image: '/assets/images/team/04.jpg'
                }
            ]
        }
    }

    render() {
        const { list } = this.state;
        return (
            <>

                <section id="team" className="overview-block-ptb white-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title">
                                    <h3 className="title iq-tw-7">Meet the Team</h3>
                                    <p>Our team of talented professionals who helped in growing business.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Cards cardData={list} />
                        </div>
                    </div>
                </section>


            </>
        );
    }

}

export default Index;