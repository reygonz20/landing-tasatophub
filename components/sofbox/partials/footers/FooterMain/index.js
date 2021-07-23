import React from 'react';

const Index = (props) => {

    return (
        <>
            <footer id="contact" className={ props.className }>
                <div className="container">
                    { props.children }
                </div>
            </footer>
        </>
    );
};

export default Index;