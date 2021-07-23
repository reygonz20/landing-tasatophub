import React from 'react';

const PriceList = (props) => {
    const items = props.items;
    const list = items.map((item, index) => {

        return (
            <li className='iq-mtb-20' key={index}>
                <i aria-hidden="true" className={ "iq-mr-10 " + item.icon } />
                { item.title }
            </li>
        );
    });

    return (
        <>
            <ul className="iq-mtb-30">
                { list }
            </ul>
        </>
    );

};

const Index = (props) => {

    return (
        <>
            <div className={"iq-pricing-5 iq-ptb-40 " + props.active }>
                <div className="pricing-header iq-mb-30">
                    <h6 className="iq-tw-6 iq-mb-10 text-capitalize">{ props.title }</h6>
                    <h3 className="iq-tw-6">{ props.price }</h3>
                    <PriceList items={ props.items } />
                    { props.children }
                </div>
            </div>
        </>
    );
};

export default Index;
