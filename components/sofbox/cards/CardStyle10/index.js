import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="iq-works-box text-center">
                <div className="text-center">
                    <img src={ props.media } className="img-fluid" alt="#" />
                </div>
                { props.children }
            </div>

        </>
    );
};

export default Index;