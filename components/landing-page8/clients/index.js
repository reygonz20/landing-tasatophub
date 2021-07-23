import React from 'react';

import { ClientCarousal } from '../../sofbox';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carousalImages : [
                { src: '/assets/images/clients/01.png' },
                { src: '/assets/images/clients/02.png' },
                { src: '/assets/images/clients/03.png' },
                { src: '/assets/images/clients/04.png' },
                { src: '/assets/images/clients/05.png' },
                { src: '/assets/images/clients/06.png' },
                { src: '/assets/images/clients/07.png' },
                { src: '/assets/images/clients/09.png' }
            ]
        }
    }

    render() {
        const { carousalImages } = this.state;
        return (
            <>
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

}

export default Index;