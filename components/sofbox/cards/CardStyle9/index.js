import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="future-services text-center">
                <div className="future-img">
                    <img src={ props.iconImage } className="img-fluid" alt="" />
                </div>
                { props.children }
            </div>
        </>
    );
};

export default Index;