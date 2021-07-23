import React from 'react';

const List = (props) => {

    const list = props.list;
    const listing = list.map((item, index) => (
        <li key={index} >
            { item.icon && (<i className={ item.iconClass } />) }
            <p>{ item.text }</p>
        </li>
    ));
    return (
        <ul className={props.addressClass + ' iq-contact'}> { listing } </ul>
    );
};

const Index = (props) => {
    return (
        <>
            <div className="contact-bg">
                <h5 className={ 'iq-tw-7 iq-mb-10 iq-font-white' }>{ props.addressTitle }</h5>
                <List addressClass={ props.addressClass } list={ props.addressContent } />
            </div>

        </>
    );
};

export default Index;