import React from 'react';
import $ from 'jquery';

const scrollTop = () => {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
};
const Index = () => {

    return (
        <>
            <div id="back-to-top" style={{ display: 'none' }}>
                <a className="top" id="top" href="#" onClick={scrollTop}> <i className="ion-ios-upload-outline" /> </a>
            </div>
        </>
    );
};

export default Index;