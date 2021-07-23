import React from 'react';

import { CardStyle3 } from '../../sofbox';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teamList: [
                {
                    media: '/assets/images/team/small/01.jpg',
                    title: 'Ellie Davis',
                    subtitle: 'CEO, Sofbox',
                    socialLinks: [
                        { icon: 'fab fa-facebook-f', link: '#'},
                        { icon: 'fab fa-twitter', link: '#'},
                        { icon: 'fab fa-pinterest-p', link: '#'}
                    ]
                },
                {
                    media: '/assets/images/team/small/02.jpg',
                    title: 'Dylan Wilson',
                    subtitle: 'CEO, Sofbox',
                    socialLinks: [
                        { icon: 'fab fa-facebook-f', link: '#'},
                        { icon: 'fab fa-twitter', link: '#'},
                        { icon: 'fab fa-pinterest-p', link: '#'}
                    ]
                },
                {
                    media: '/assets/images/team/small/03.jpg',
                    title: 'Alvin Martin',
                    subtitle: 'CEO, Sofbox',
                    socialLinks: [
                        { icon: 'fab fa-facebook-f', link: '#'},
                        { icon: 'fab fa-twitter', link: '#'},
                        { icon: 'fab fa-pinterest-p', link: '#'}
                    ]
                },
                {
                    media: '/assets/images/team/small/04.jpg',
                    title: 'Caleb Nelson',
                    subtitle: 'CEO, Sofbox',
                    socialLinks: [
                        { icon: 'fab fa-facebook-f', link: '#'},
                        { icon: 'fab fa-twitter', link: '#'},
                        { icon: 'fab fa-pinterest-p', link: '#'}
                    ]
                },
            ]
        }
    }

    render() {
        const { teamList } = this.state;

        return (
            <>
                <section className="overview-block-ptb blue-bg iq-team-main" id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 iq-font-white">
                                <div className="heading-title white text-center">
                                    <h2 className="title white iq-tw-6 iq-font-white iq-mb-50">Meet Our Creative
                                        Team</h2>
                                    <p>Our team of talented professionals who helped in growing business.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            { teamList.map((list, index) => (
                                <div key={index} className="col-lg-3 col-sm-6 iq-mb-30">
                                    <CardStyle3
                                        media={ list.media }
                                        title={ list.title }
                                        subtitle={ list.subtitle }
                                        socialLinks={ list.socialLinks }
                                    />
                                </div>
                            )) }
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Index;
