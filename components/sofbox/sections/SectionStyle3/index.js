import React from 'react';

const Index = (props) => {

    return (
        <>
            <h6 className={props.className}>{props.title}</h6>
            <p className={props.pClassName}>
                {props.description}
            </p>
        </>
    );
};

export default Index;