import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="logo">
                <img className="img-fluid logo_img footer_img" src={ props.sectionImage } alt="#" />
                <div className={ 'iq-font-' + props.sectionColor  + ' iq-mt-15' }>{ props.sectionText }</div>
            </div>
        </>
    );
};

export default Index;