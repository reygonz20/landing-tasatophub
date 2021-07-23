import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className=" iq-pall-20 text-center" style={{minHeight: '450px'}}>
                <div className="text-center">
                    <img src={ props.media } className="img-fluid" alt="#" style={{width: '100px', height: '100px'}} />
                </div>
                { props.children }
            </div>

        </>
    );
};

export default Index;