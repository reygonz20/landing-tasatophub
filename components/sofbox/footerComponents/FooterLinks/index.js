import React from 'react';


const MainList = (props) => {
    const content = props.content;
    return content.map((item, index) => (
        <div key={index} className="col-lg-12 col-md-12 col-sm-12">
            <List section={item.section} />
        </div>
    ));
};

const List = (props) => {
    const content = props.section;
    const list = content.map((list, index) => (
        <li key={index}>
            <a href={ list.href }>{ list.title }</a>
        </li>
    ));
    return (
        <>
            <ul className="menu">
                { list }
            </ul>
        </>
    );
};

const Index = (props) => {

    return (
        <>
            <h5 className={"iq-tw-7 iq-font-white  iq-mb-10"}>{props.title}</h5>
            <div className="row">
                <MainList content={props.content} />
            </div>
        </>
    );
};

export default Index;