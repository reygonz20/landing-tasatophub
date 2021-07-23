import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="iq-client white-bg">
                <div className="client-img">
                    <img alt="drive1" className="img-fluid rounded-circle" src={ props.image } />
                </div>
                <div className="client-info">
                    { props.children }
                </div>
            </div>

        </>
    );
};

export default Index;