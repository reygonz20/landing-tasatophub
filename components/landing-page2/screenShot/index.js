import React from 'react';
import $ from 'jquery';

const tabActive = (id) => {
    $('.tab-content').find('.active').removeClass('active');
    $('.nav-item').find('.active1').removeClass('active1');
    $('#' + id).addClass('active');
};

const List = (props) => {
    const listItems = props.tabs;
    const list = listItems.map((item, index) => (
        <li key={index} className="nav-item iq-r-mb-15">
            <a
                id={item.id}
                className={ item.active ? "nav-link sof-box active1 " : "nav-link sof-box"}
                data-toggle="pill"
                href={'#' + item.href}
                role="tab"
                aria-controls={item.href}
                onClick={() => { tabActive(item.href) }}
            >
                <i className={item.icon} /> { item.title }

            </a>
        </li>
    ));

    return (
        <>
            <ul className="nav nav-pills tabs-left justify-content-center" id="pills-tab2" role="tablist">
                { list }
            </ul>
        </>
    );
};

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    id: 'retina1-tab',
                    href: 'retina1',
                    title: 'Retina Ready',
                    active: true,
                    icon: 'ion-ios-color-wand-outline'
                },
                {
                    id: 'designs1-tab',
                    href: 'designs1',
                    title: 'Latest Designs',
                    active: false,
                    icon: 'ion-ios-heart-outline'
                },
                {
                    id: 'customize1-tab',
                    href: 'customize1',
                    title: 'Easy to Customize',
                    active: false,
                    icon: 'ion-ios-settings'
                },
                {
                    id: 'clean1-tab',
                    href: 'clean1',
                    title: 'Clean',
                    active: false,
                    icon: 'ion-ios-checkmark-outline'
                },
                {
                    id: 'revolution1-tab',
                    href: 'revolution1',
                    title: 'Revolution Slider',
                    active: false,
                    icon: 'ion-ios-albums-outline'
                }
            ]
        }
    }

    render() {
        const { tabs } = this.state;
        return (
            <>
                <div className="overview-block-ptb iq-tab horizontal blue-bg" id="great-screenshots">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-title iq-font-white white">
                                    <h3 className="title iq-tw-7 iq-font-white">Why Choose Sofbox ?</h3>
                                    <p>Sofbox provides beautiful and elegant look for your website
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <List tabs={tabs} />

                                <div className="tab-content iq-mt-30">

                                    <div className="tab-pane active" id="retina1">
                                        <div className="row flex-row-reverse">
                                            <div className="col-lg-6  col-md-6">
                                                <img src="/assets/images/product/07.png" className="img-fluid iq-pr-50"
                                                     alt="drive1" />
                                            </div>
                                            <div className="col-lg-6  col-md-6 text-left align-self-center">
                                                <h3 className="iq-tw-7 iq-font-white">We Are An Agency That Focuses On
                                                    Digital Design Solutions</h3>
                                                <p className="iq-mt-30 iq-font-white">The template can be fully customizable with ease. Clean code which can be understood. Simply choose the layout that suits your needs, customize the sections, headers, sliders, colors, choose from pre-made useful elements.
                                                </p>
                                                <a href="#" className="button bt-black">Let's Started</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="designs1">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <img src="/assets/images/product/06.png" className="img-fluid iq-pr-50"
                                                     alt="drive1" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 text-left align-self-center">
                                                <h3 className="iq-tw-7 iq-font-white">We Are An Agency That Focuses On
                                                    Digital Design Solutions</h3>
                                                <p className="iq-mt-30 iq-font-white">The template can be fully customizable with ease. Clean code which can be understood. Simply choose the layout that suits your needs, customize the sections, headers, sliders, colors, choose from pre-made useful elements.
                                                </p>
                                                <a href="#" className="button bt-black">Let's
                                                    Started</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="customize1">
                                        <div className="row flex-row-reverse">
                                            <div className="col-lg-6 col-md-6">
                                                <img src="/assets/images/product/07.png" className="img-fluid iq-pr-50"
                                                     alt="drive" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 text-left align-self-center">
                                                <h3 className="iq-tw-7 iq-font-white">We Are An Agency That Focuses On
                                                    Digital Design Solutions</h3>
                                                <p className="iq-mt-30 iq-font-white">The template can be fully customizable with ease. Clean code which can be understood. Simply choose the layout that suits your needs, customize the sections, headers, sliders, colors, choose from pre-made useful elements.
                                                </p>
                                                <a href="#" className="button bt-black">Let's
                                                    Started</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="clean1">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <img src="/assets/images/product/05.png" className="img-fluid iq-pr-50"
                                                     alt="drive1" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 text-left align-self-center">
                                                <h6 className="iq-font-main iq-font-blue iq-mb-10">We’re Creative
                                                    Agency</h6>
                                                <h3 className="iq-tw-7 iq-font-white">We Are An Agency That Focuses On
                                                    Digital Design Solutions</h3>
                                                <p className="iq-mt-30 iq-font-white">The template can be fully customizable with ease. Clean code which can be understood. Simply choose the layout that suits your needs, customize the sections, headers, sliders, colors, choose from pre-made useful elements.
                                                </p>
                                                <a href="#" className="button bt-black">Let's
                                                    Started</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="revolution1">
                                        <div className="row flex-row-reverse">
                                            <div className="col-lg-6 col-md-6">
                                                <img src="/assets/images/product/06.png" className="img-fluid iq-pr-50"
                                                     alt="drive" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 text-left align-self-center">
                                                <h6 className="iq-font-main iq-font-blue iq-mb-10">We’re Creative
                                                    Agency</h6>
                                                <h3 className="iq-tw-7 iq-font-white">We Are An Agency That Focuses On
                                                    Digital Design Solutions</h3>
                                                <p className="iq-mt-30 iq-font-white">The template can be fully customizable with ease. Clean code which can be understood. Simply choose the layout that suits your needs, customize the sections, headers, sliders, colors, choose from pre-made useful elements.
                                                </p>
                                                <a href="#" className="button bt-black">Let's
                                                    Started</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="responsive1">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <img src="/assets/images/product/07.png" className="img-fluid iq-pr-50"
                                                     alt="drive" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 text-left align-self-center">
                                                <h6 className="iq-font-main iq-font-blue iq-mb-10">We’re Creative
                                                    Agency</h6>
                                                <h3 className="iq-tw-7 iq-font-white">We Are An Agency That Focuses On
                                                    Digital Design Solutions</h3>
                                                <p className="iq-mt-30 iq-font-white">The template can be fully customizable with ease. Clean code which can be understood. Simply choose the layout that suits your needs, customize the sections, headers, sliders, colors, choose from pre-made useful elements.
                                                </p>
                                                <a href="#" className="button bt-black">Let's
                                                    Started</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }

}

export default Index;