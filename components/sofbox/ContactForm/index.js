import React from 'react';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mailData: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            statusMail: false,
            buttonDis: true
        }
    }

    onSubmit = () => {

    };

    inputChangedHandler = (event) => {
        const updatedKeyword = event.target.value;
        // May be call for search result
    }

    render() {
        const { mailData, buttonDis } = this.state;

        return (
            <>
                <form method="post" onSubmit={this.onSubmit}>
                    <div className="contact-form">
                        <div className="section-field">
                            <input className="require" id="contact_name" value={mailData.name} type="text"
                                   placeholder="Nombres y Apellidos*" name="name" required
                                   onChange={(event)=>this.inputChangedHandler(event)}
                            />
                        </div>
                        <div className="section-field">
                            <input className="require" id="contact_email" value={mailData.email} type="email"
                                   placeholder="Correo*" name="email" required
                                   onChange={(event)=>this.inputChangedHandler(event)}
                            />
                        </div>
                        <div className="section-field">
                            <input className="require" id="contact_phone" value={mailData.phone} type="text"
                                   placeholder="Celular*" name="phone" required
                                   onChange={(event)=>this.inputChangedHandler(event)}
                            />
                        </div>
                        <div className="section-field textarea">
                            <label htmlFor="contact_message"/>
                            <textarea id="contact_message" value={mailData.message} className="input-message require"
                                      placeholder="Escribe tu mensaje*" rows="5" name="message" required
                                      onChange={(event)=>this.inputChangedHandler(event)}
                            />
                        </div>
                        <div className="section-field iq-mt-20">
                            {/*<div className="g-recaptcha" data-sitekey="6LdA3mYUAAAAANpUuZTLbKM_s23tTHlcdJ7dYfgI"></div>*/}
                        </div>
                        <button id="submit" name="submit" type="submit" value="Send"
                                className={buttonDis ? 'button iq-mt-15 disabled' : 'button iq-mt-15 '}>Enviar Mensaje
                        </button>
                        <div className="alert alert-success alert-dismissible fade show" role="alert" id="success">
                            <strong>Gracias, hemos recibido tu mensaje.</strong>.
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

export default Index;

