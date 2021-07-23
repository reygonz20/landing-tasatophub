import React from 'react'


class Home extends React.Component {

    componentDidMount(props) {
    }

    render() {
        return (
            <>
                <section id="iq-home" className="iq-banner-12 overview-block-pt blue-bg">
                    <div className="container">
                        <div className="banner-text text-left">
                            <div className="row justify-content-between">
                                <div className="col-md-6 align-self-center">
                                    <h1 className="iq-font-white iq-tw-4">Why do we use it <b>Sofbox Template</b></h1>
                                    <h5 className="iq-font-white iq-mtb-20">Sleek, clean and powerful landing page template</h5>
                                    <form className="form-inline">
                                        <div className="form-group mb-2">
                                            <input type="text" className="form-control" id="inputPassword2" placeholder="Search"/>
                                        </div>
                                        <a href="#" className="button bt-black">Search</a>
                                    </form>
                                </div>
                                <div className="col-md-6">
                                    <img className="banner-img img-fluid center-block" src="/assets/images/bg/21.png" alt=""/>
                                    <img className="banner-phone img-fluid center-block wow fadeInUp"  src="/assets/images/product/mob.png" alt=""/>
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
