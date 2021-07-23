import React from 'react';

const Index = (props) => {

    return (
        <>
            <section id={props.ids}  className="overview-block-ptb how-works">
                <div className="container">
                    <div className={"row"}>
                        { props.children }
                        <div className={ props.small ? 'iq-objects-software' : 'iq-objects-softwarenew' }>
                            <span className="iq-objects-01" data-bottom="transform:translatey(50px)"
                                  data-top="transform:translatey(-100px);">
                                <img src="/assets/images/drive/03.png" alt="drive02" />
                            </span>
                            <span className="iq-objects-02" data-bottom="transform:translatex(50px)"
                                  data-top="transform:translatex(-100px);">
                                <img src="/assets/images/drive/04.png" alt="drive02" />
                            </span>
                            <span className="iq-objects-03 iq-fadebounce">
                                <span className="iq-round" />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;