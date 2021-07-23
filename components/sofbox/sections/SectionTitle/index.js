import React from 'react';

const Index = (props) => {
    return (
        <>
            <div className={"heading-title " + props.className} >
                <h3 className="title iq-tw-7">{ props.title }</h3>
                <p className={ props.pClassName }>{ props.subTitle }</p>
            </div>
        </>
    );
}

export default Index;
