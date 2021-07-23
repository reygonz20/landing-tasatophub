import React from 'react';
import Link from 'next/link'
import { SectionTitle, SectionStyle1 ,CardStyle11} from '../sofbox';


const Team = () => {

    const members = [
        {nombre: 'Alfredo Cardoso',
        cargo: 'CEO & CO-FOUNDER',
        descripcion: 'Licenciado de Administración de Empresas por la Universidad de Piura - Perú, MBA ESAN. Especialización en Mercado de Capitales CONASEV. 17 años de experiencia en sector retail y financiero.',
        imagen: '/assets/images/members/alfredo.jpg',
        linkedin: 'https://www.linkedin.com/in/alfredocardoso1111/'
    },
        {nombre: 'Dante León',
        cargo: 'CTO & CO-FOUNDER',
        descripcion: 'Ingeniero de Sistemas por la Universidad Peruana Unión - Perú, MBA ESAN, Máster en SCM ESIC - España, 10 años de experiencia en gestión de proyectos de software, innovación y emprendimiento.',
        imagen: '/assets/images/members/dante.jpg',
        linkedin: 'https://www.linkedin.com/in/danteduvalleon/',
        twitter: 'https://twitter.com/dalealta'
    },
        {nombre: 'Gisela Peralta',
        cargo: 'PARTNER',
        descripcion: 'Licenciada de Administración de Empresas por la Universidad del Pacífico - Perú, MBA IE Business School - España, Especialización en Marketing ESAN. 18 años de experiencia en Marketing y estrategia de producto.',
        imagen: '/assets/images/members/gisela.jpg',
        linkedin: 'https://www.linkedin.com/in/giselaperalta/',
        twitter: 'https://twitter.com/gsllperalta'
    },
        {nombre: 'Karla Vera',
        cargo: 'INVESTMENT ADVISOR',
        descripcion: 'Técnica en Administración Bancaria por Certus. 3 años de experiencia en asesoría financiera en ahorros e inversiones, gestión patrimonial y atención al cliente.',
        imagen: '/assets/images/members/karla.jpg',
        linkedin: 'https://www.linkedin.com/in/karla-michelle-vera-huaman-119b50168/'
    },
        {nombre: 'Reinaldo Gonzalez',
        cargo: 'FRONTEND DEVELOPER JUNIOR',
        descripcion: 'Universidad del Zulia - Venezuela. 1 año de experiencia aplicando análisis, diseño, desarrollo e implementación de sistemas web como frontend en el Perú.',
        imagen: '/assets/images/members/reinaldo.jpg',
        linkedin: 'https://www.linkedin.com/in/reinaldo-gonzalez-montero/'
    },
        {nombre: 'Carlos Calderón',
        cargo: 'LEGAL PARTNER',
        descripcion: 'Abogado por la Pontificia Universidad Católica del Perú, MBA ESAN, Máster en SCM ESIC - España. Especialista en mercado de capitales por CONASEV. 14 años de experiencia en asesoría legal en operaciones de financiamiento, mercado de valores y compraventa de empresas.',
        imagen: '/assets/images/members/carlos-calderon.jpg',
        linkedin: 'https://www.linkedin.com/in/carloscalderonabogado/'
    },
        {nombre: 'Carlos Seminario',
        cargo: 'FINANCIAL ADVISOR & PARTNER',
        descripcion: 'Contador Público, MBA ESAN con especialización en Finanzas Corporativas. 12 años de experiencia en el sector retail, bancario y educación. Sólidos conocimientos en contabilidad, planeamiento financiero, cash management y tesorería. Consultor en modelos financieros, docente en contabilidad y planeamiento financiero.',
        imagen: '/assets/images/members/carlos-seminario.jpg',
        linkedin: 'https://www.linkedin.com/in/carlos-seminario-45113876/'
    },
        {nombre: 'Hugo Alonzo',
        cargo: 'LEGAL PARTNER',
        descripcion: 'Abogado por la Pontificia Universidad Católica del Perú, Máster en Economía, Competencia y Regulación en Servicios Públicos por la Universidad de Barcelona. 14 años de experiencia asesorando a fondos de inversión, empresas estatales y privadas del sector inmobiliario, retail, gas, telecomunicaciones y construcción.',
        imagen: '/assets/images/members/hugo.jpg',
        linkedin: 'https://www.linkedin.com/in/hugo-alonzo-navarro-95a7969a/'
    },
        {nombre: 'Luis Farje',
        cargo: 'SWEDEN CONTACT & CDO',
        descripcion: 'Ingeniero de Sistemas por la Universidad de Ciencias Aplicadas - Perú, Máster en Data Science & IT por la University of Dundee - USA. 21 años de experiencia trabajando con big data y bases de datos relacionales y dimensionales.',
        imagen: '/assets/images/members/lucho.jpg'
    },
        {nombre: 'Jesús Fuente',
        cargo: 'CHIEF BLOCKCHAIN OFFICER',
        descripcion: 'Solucionador compulsivo de problemas con 12 años de experiencia en economía y generación de negocios, diseñador de monedas sociales y digitales, desarrollador de productos financieros en México y Perú.',
        imagen: '/assets/images/members/jesus.jpg'}
    ]


    const mapMembers = (members || []).map((member, i) => {
        return (
                        <div className="col-lg-4 col-sm-6 iq-mtb-20" style={{textAlign: 'center'}}>
                            <CardStyle11  media={member.imagen}>
                                <h5 className="iq-tw-7 iq-mt-25 iq-mb-15" style={{fontSize: '1rem', marginBottom: '0px'}}>{member.nombre}</h5>
                                <span style={{fontSize: '0.8rem', marginTop: '0px'}}>{member.cargo}</span>
                                <p style={{fontSize: '1rem', lineHeight:'1.2', marginTop: '3%'}}>{member.descripcion}</p>
                                
                                <div className="col-lg-12 col-md-12" style={{display: 'flex', justifyContent: 'space-around', height: '50px'}}>
                                <ul class="list-inline iq-mtb-50 iq-tags" style={{display: 'flex', justifyContent: 'space-around', padding: '0px', margin: '0px'}}>
                                    {member.linkedin ? <li><a href="" class="fab fa-linkedin text-primary"></a></li> : null}
                                    {member.twitter ? <li><a href="" class="fab fa-twitter text-primary"></a></li> : null}
                                </ul>
                            </div>
                            </CardStyle11>
                        </div>
        );
    });

    return (
        <>
        <div className="h1 compare-title col-lg-12" style={{backgroundColor: '#146cae', margin: '0px', padding: '0px', textAlign: 'center', marginBottom: '60px', width: '100%', height: '90px', display: 'flex', alignItems: 'center', textAlign: 'center'}}><span style={{color: 'white', fontSize: '1.8rem', margin: 'auto', fontWeight: '600'}}>Nosotros</span></div>
            <section id="team" className="our-blog-section ptb-100 gray-light-bg" style={{marginBottom: '5%'}}>
                <p style={{paddingLeft: '5%', paddingRight: '5%', textAlign: 'justify'}}>Tasatop surge como una solución al problema que muchas personas enfrentan cuando tienen un extra de dinero, que buscan dónde ahorrar, pero no disponen mucho tiempo para encontrar las mejores condiciones y se conforman con lo que les ofrece unas pocas instituciones financieras. Actualmente este servicio es masivo y poco democrático en efecto tienes poca capacidad de negociación con las instituciones.</p>
                <p style={{paddingLeft: '5%', paddingRight: '5%', textAlign: 'justify'}}>Nosotros decidimos democratizar el ahorro e inversiones en Perú y Latinoamérica. Queremos hacerlo lo más accesible posible para todos.</p>
            
                <div className="container" style={{marginTop: '5%'}}>
                    {/* <div className="row">
                        <div className="col-sm-12">
                            <SectionTitle
                                title="Meet The Team"
                                subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley, Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            />
                         </div>
                    </div> */}
                    <div className="row iq-team-1">
                        {mapMembers}                                                
                    </div>
                    {/* <div className="text-center">
                            <a href="#" className="button-blue-shadow iq-mt-40"> Here More Team Members </a>
                    </div> */}
                </div>
              
            </section>

            

        </>
    );
}



export default Team;