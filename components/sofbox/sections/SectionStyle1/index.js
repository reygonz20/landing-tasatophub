import React from 'react';

const Index = (props) => {

    return (
        <>
            <section id={props.ids}  className="how-works overview-block-ptb">
                <div className="container">
                    <div className={ props.rowReverse ? "row flex-row-reverse" : "row" }>
                        { props.children }
                        <div className="iq-objectsnew">
                            <span className="iq-objects-02" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-100px);">
                                <img src="/assets/images/drive/03.png" className="img-fluid" alt="drive02" />
                            </span>
                            <span className="iq-objects-03" data-bottom="transform:translatex(50px)"
                                  data-top="transform:translatex(-100px);">
                                <img src="/assets/images/drive/04.png" className="img-fluid" alt="drive02" />
                            </span>
                            <span className="iq-objects-04 iq-fadebounce">
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