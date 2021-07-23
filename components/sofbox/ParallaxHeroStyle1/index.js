import React from 'react';

class Index extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const { className, ids, bgImage } = this.props;
        return (
            <>
                <div 
                    id={ids}
                    data-parallax="true"
                    className={className}
                    style={{ backgroundImage: 'url(' + bgImage + ')' }} >
                    { this.props.children }
                </div>
            </>
        );

    }

}

export default Index;