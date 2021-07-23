import React from 'react';


const Index = (props) => {

    return (
        <>
            <div className="iq-feature10">
                <div className="left">
                    <i className={props.iconClass} />
                </div>
                <div className="right">
                    { props.children }
                </div>
            </div>
        </>
    );
};

export default Index;
