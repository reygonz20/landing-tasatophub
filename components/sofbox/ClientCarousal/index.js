import React from 'react';

import OwlCarousel from 'react-owl-carousel2';

const Images = (props) => {
    const images = props.images;
    return images.map((image, index) => (
        <div key={index} className="item">
            <img className="img-fluid center-block" src={image.src} alt="#" />
        </div>
    ));
};

const Index = (props) => {
    const options = {
        items: 5,
        nav: true,
        rewind: true,
        autoplay: true,
        loop: true,
        dots: false,
        margin: 30,
        navText: ['<i class="fa fa-angle-left fa-2x" />', '<i class="fa fa-angle-right fa-2x" />'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 1
            },
            // breakpoint from 786 up
            786: {
                items: 2
            },
            // breakpoint from 1023 up
            1023: {
                items: 3
            },
            1199: {
                items: 5
            }
        }
    };
    return (
        <>
            <OwlCarousel options={options}>
                <Images images={props.images} />
            </OwlCarousel>
        </>
    );
};

export default Index;