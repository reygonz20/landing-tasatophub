import React from 'react'
import {ParallaxHeroStyle1} from '../../sofbox';


class Home extends React.Component {

    componentDidMount(props) {
    }

    render() {
        return (
            <>
                <ParallaxHeroStyle1
                    ids="iq-home"
                    bgImage={"/assets/images/bg/01.jpg"}
                    className={"iq-banner-02 overview-block-pt iq-bg-over iq-over-blue-90 iq-parallax jarallax"}
                >
                    <div className="container">
                        <div className="banner-text text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className=" iq-font-white iq-tw-8">Perfect Landing Template</h1>
                                    <p  className="iq-font-white iq-pt-15 iq-mb-20 iq-mlr-100 iq-plr-50">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley,
                                    </p>
                                    <a className="button bt-black iq-mt-10 iq-mb-50" href="#">Download</a>
                                </div>
                                <div className="col-md-12">
                                    <img alt="" className="banner-img img-fluid center-block" src="/assets/images/banner/03.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-objects">
                        <span className="banner-objects-01 skrollable skrollable-before" style={{transform: "translateY(50px)"}}>
                            <img alt="drive02" src="./assets/images/drive/03.png" />
                        </span>
                        <span className="banner-objects-02 iq-fadebounce">
                            <span className="iq-round"></span>
                        </span>
                        <span className="banner-objects-03 iq-fadebounce">
                            <span className="iq-round"></span>
                        </span>
                        <span className="banner-objects-04 skrollable skrollable-between" data-bottom="transform:translatex(100px)" data-top="transform:translatex(-100px);" style={{transform: "translateX(-66.3317px)"}}>
                            <img alt="drive02"  src="/assets/images/drive/04.png" />
                        </span>
                    </div>
                    <div style={{position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none", zIndex: "-100"}} id="jarallax-container-0">
                        <div style={{backgroundPosition: "50% 50%",backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: "url('/assets/images/bg/01.jpg')", position: "absolute", top: "0px", left: "0px", width: "1587px", height: "733.92px", overflow: "hidden", pointerEvents: "none", marginTop: "-129.96px", transform: "translate3d(0px, 61.56px, 0px)"}}></div>
                    </div>
                </ParallaxHeroStyle1>
            </>
        )
    }
}

export default Home
