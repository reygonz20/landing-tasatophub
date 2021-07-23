import React from 'react'
import {Wave} from "../../sofbox";


class Home extends React.Component {

    componentDidMount(props) {
    }

    render() {
        return (
            <>
                <section id="iq-home" className="iq-banner-03 overview-block-pt blue-bg">
                    <div className="container">
                        <div className="banner-text text-left">
                            <div className="row justify-content-between">
                                <div className="col-md-6 align-self-center">
                                    <h1 className="iq-font-white iq-tw-4">Provides To Make Better  <b>software</b></h1>
                                    <h5 className="iq-font-white iq-mtb-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</h5>
                                    
                                        <a href="#" className="button bt-black iq-mt-15 iq-mb-30">Download</a>
                                </div>
                                <div className="col-md-6">
                                    <div className="iq-banner-video">
                                        <Wave
                                            className={"popup-youtube"}
                                            btnLink={"/assets/video/01.mp4"}
                                        />
                                        <img alt="" className="banner-img" src="/assets/images/banner/05.png" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-objects">
                        <span className="banner-objects-01" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-50px);">
                            <img src="/assets/images/drive/03.png" alt="drive02" />
                        </span>
                        <span className="banner-objects-02 iq-fadebounce">
                            <span className="iq-round"/>
                        </span>
                        <span className="banner-objects-03 iq-fadebounce">
                            <span className="iq-round"/>
                        </span>
                        <span className="banner-objects-04" data-bottom="transform:translatex(100px)" data-top="transform:translatex(-100px);">
                            <img src="/assets/images/drive/04.png" alt="drive02" />
                        </span>
                    </div>
                </section>
            </>
        )
    }
}

export default Home
