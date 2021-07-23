import React, { Component } from "react";
import Link from 'next/link'

const Faq = () => {
    const small = false;

    return (
<React.Fragment>
        <section className="our-blog-section ptb-100 gray-light-bg">
        <div className="h1 compare-title col-lg-12" style={{backgroundColor: '#146cae', margin: '0px', padding: '0px', textAlign: 'center', marginBottom: '60px', width: '100%', height: '90px', display: 'flex', alignItems: 'center', textAlign: 'center'}}><span style={{color: 'white', fontSize: '1.8rem', margin: 'auto', fontWeight: '600'}}>Preguntas Frecuentes</span></div>
          <div className="container" style={{marginBottom: '50px'}}>
          <div className="row align-items-center" style={{textAlign: 'center'}}>
                        <div className="col-md-12 col-lg-12">
                            <img src="/assets/images/preguntas-frecuentes.png" alt="drive10" style={{marginBottom: '5%'}} />
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="iq-accordion">
                                {/* <div className="iq-accordion accordion-active">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">Can sofbox be used for any business ?</a>
                                    <div className="accordion-details">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <img alt="#" className="img-fluid" src="/assets/images/blog/01.jpg" />
                                            </div>
                                            <div className="col-sm-9"> Yes. You can use this template for any business and can be customized as per your needs.
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="iq-accordion accordion-active">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">¿Por qué el depósito a plazo es un producto de menor riesgo?</a>
                                    <div className="accordion-details" style={{textAlign: 'justify'}}>Porque los intereses que ganarás son pactados al comienzo de la transacción sin posibilidad a una reducción de los mismos, salvo no cumpla el plazo establecido. Además, los depósitos a plazo están cubierto por el Fondo de Seguro de Depósito.

                                    </div>
                                </div>
                                <div className="iq-accordion">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">¿Por qué el depósito a plazo es mejor que una cuenta de ahorro?</a>
                                    <div className="accordion-details" style={{textAlign: 'justify'}}>Porque te da más rentabilidad, mayor tasa de interés y planificas tus finanzas de mediano a largo plazo.

                                    </div>
                                </div>
                                <div className="iq-accordion">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">¿Qué es el Fondo de Seguro de Depósito (FSD)?</a>
                                    <div className="accordion-details" style={{textAlign: 'justify'}}>Es el seguro que cubre los ahorros de cualquier persona natural hasta por S/100,432 (junio – agosto 2019) en entidades del sistema financiero autorizadas a captar depósitos del público. El seguro es por persona, por entidad financiera y se aplica en caso de insolvencia o quiebra de la entidad financiera.

                                    </div>
                                </div>
                                <div className="iq-accordion">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">¿Tengo que depositar el dinero en Tasatop?</a>
                                    <div className="accordion-details" style={{textAlign: 'justify'}}>No, somos un canal de acercamiento entre el usuario y las instituciones afiliadas participantes quienes otorgan las mejores condiciones al usuario, en ningún caso se deposita dinero a las cuentas de TasaTop. Nosotros trabajamos con las instituciones financieras afiliadas a Tasatop.

                                    </div>
                                </div>
                                <div className="iq-accordion">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">¿Tiene costo el servicio que ofrecen?</a>
                                    <div className="accordion-details" style={{textAlign: 'justify'}}>Para los usuarios el servicio es gratuito, nosotros tenemos un acuerdo comercial con las instituciones financieras con las cuales trabajamos y donde depositarás el dinero de tu depósito.

                                    </div>
                                </div>                                
                                {/* <div className="iq-accordion">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">Can we change the color scheme ?</a>
                                    <div className="accordion-details">
                                        <div className="row">
                                            <div className="col-sm-9"> Yes. You can change the color scheme of the website. There is customizer available from which you can change the websites color.
                                            </div>
                                            <div className="col-sm-3">
                                                <img alt="#" className="img-fluid" src={"/assets/images/blog/01.jpg"} />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="iq-accordion">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">¿Cuánto tiempo tengo para hacer valer las condiciones obtenidas?</a>
                                    <div className="accordion-details" style={{textAlign: 'justify'}}>Una vez terminada la subasta, tienes hasta 02 días hábiles para poder contactar a la entidad financiera y hacer efectivas las condiciones ganadas. Luego de ese plazo, la entidad no reconocerá las condiciones pactadas.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="iq-accordion">
                                
                                <div className="iq-accordion accordion-active">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">¿Cuál es el compromiso u obligación de TasaTop y de las instituciones afiliadas?</a>
                                    <div className="accordion-details" style={{textAlign: 'justify'}}>Tasatop se compromete a hacer cumplir las condiciones que la entidad financiera ha ofertado y absolver todas las dudas que tengas sobre nuestra plataforma o proceso de servicio. La entidad financiera tiene la obligación de cumplir con las condiciones ofertadas al usuario, en los plazos estipulados.

                                    </div>
                                </div>
                                <div className="iq-accordion">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">¿Cómo se realiza la operación de Plazo Fijo con la entidad ganadora?</a>
                                    <div className="accordion-details" style={{textAlign: 'justify'}}>Al finalizar la subasta, recibirás una notificación con los datos de contacto de la entidad ganadora (nombre del funcionario, correo electrónico y teléfono). La entidad ganadora también se pondrá en contacto contigo para coordinar la realización del depósito, apertura y la firma de documentos. Exige las condiciones ofrecidas que están en la constancia que enviamos a tu correo. Todas las instituciones financieras con las cuales trabajamos tienen cuenta bancaria en los bancos más grandes, así podrás realizar la transferencia sin moverte de tu casa.

                                    </div>
                                </div>
                                <div className="iq-accordion">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">¿Mis datos están seguros dentro de TasaTop?</a>
                                    <div className="accordion-details" style={{textAlign: 'justify'}}>Sí, estamos inscritos en el Ministerio de Justicia (MINJUS), bajo la “Ley de protección de datos al consumidor” (Ley N°29733). Tus datos de identidad están registrados en la plataforma y son otorgados a solo una entidad financiera al término del proceso de elección de cualquier producto financiero.

                                    </div>
                                </div>
                                <div className="iq-accordion">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">¿Hay un mínimo o máximo de subastas al año por persona?</a>
                                    <div className="accordion-details" style={{textAlign: 'justify'}}>Puedes crear como máximo 5 subastas simultáneas. Cada subasta ganada es una propuesta de carácter no vinculante, sin embargo, la entidad financiera está obligada a cumplirlas.

                                    </div>
                                </div>
                                <div className="iq-accordion">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">¿Cuáles son los canales de atención de Tasatop y cuál es su horario?</a>
                                    <div className="accordion-details" style={{textAlign: 'justify'}}>Nos encuentras en WhatsApp, Facebook, LinkedIn, Instagram, Twitter, YouTube, y nuestra web site www.tasatop.com

                                    </div>
                                </div>                                
                                
                                <div className="iq-accordion">
                                    <a href="#" className="accordion-title iq-tw-7 iq-font-grey">¿Cuáles son los requisitos mínimos para realizar una subasta de Plazo Fijo?</a>
                                    <div className="accordion-details" style={{textAlign: 'justify'}}>Ser mayor de edad, tener como mínimo S/ 3,000 o USD 3,000 y completar el registro de datos.<br></br><br></br>

Una vez finalizada mi subasta, ¿puedo llamar directamente a cualquier representante de la entidad financiera para hacer mi depósito?<br></br><br></br>

Sólo puedes llamar al representante que nosotros te asignamos mediante la constancia de finalización de subasta, con el fin de coordinar un servicio personalizado. Es el único contacto con el cual puedes comunicarte de la entidad financiera, ellos tendrán el detalle de tu operación.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
            

          </div>
        </section>
      </React.Fragment>
    )
}



export default Faq;
