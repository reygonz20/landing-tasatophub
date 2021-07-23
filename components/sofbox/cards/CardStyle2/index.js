import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className={props.active ? "active " : " " + ' iq-blog text-left iq-ptb-30 iq-pr-30 iq-pl-30'}>
                <div>
                    <i className={'iq-mb-10 ' + props.icon}/>
                    <h5 className="iq-tw-6">{props.title}</h5>
                </div>
                <div className="content-blog">
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default Index;
