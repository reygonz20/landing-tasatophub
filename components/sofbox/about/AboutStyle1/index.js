import React from 'react';

import { AnimationShape } from '../../../sofbox';

const Index = (props) => {

    return (
        <>
            <section id={props.ids} className={props.className}>
                { props.animation && ( <AnimationShape animationShapeRight={props.rowReverse} /> ) }
                <div className="container-fluid">
                    <div className={ props.rowReverse ? 'row flex-row-reverse' : 'row' }>
                        <div className="col-lg-6 col-md-6 ">
                            <img className="iq-works-imgs" src={ props.sectionImage } alt="drive01"/>
                        </div>

                        <div className="col-lg-4 col-md-5 align-self-center">
                            { props.children }
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};


export default Index;