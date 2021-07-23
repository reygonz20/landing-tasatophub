import React from 'react'

const Index = (props) => {
    return (<li className="iq-tw-6">
        <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i>
        <span className="iq-font-black">{props.details}</span>
    </li>)
};

export default Index;