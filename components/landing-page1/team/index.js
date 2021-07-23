import React from 'react';

import { CardStyle3 } from '../../sofbox';

const Index = () => {

    const teamList = [
        {title: 'Dante León',
        subtitle: 'CEO & CO-FOUNDER',
        descripcion: 'Ingeniero de Sistemas por la Universidad Peruana Unión - Perú, MBA ESAN, Máster en SCM ESIC - España, 10 años de experiencia en gestión de proyectos de software, innovación y emprendimiento.',
        media: '/assets/images/members/dante.jpg',
        socialLinks: [
            { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/danteduvalleon/'},
            { icon: 'fab fa-twitter', link: 'https://twitter.com/dalealta'}
        ]
    },
        {
            media: '/assets/images/members/alfredo.jpg',
            title: 'Alfredo Cardoso',
            subtitle: 'CFO & CO-FOUNDER',
            descripcion: 'Licenciado de Administración de Empresas por la Universidad de Piura - Perú, MBA ESAN. Especialización en Mercado de Capitales CONASEV. 17 años de experiencia en sector retail y financiero.',
            socialLinks: [
                { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/alfredocardoso1111/'},
            ]
        },
        {title: 'Gisela Peralta',
        subtitle: 'PARTNER',
        descripcion: 'Licenciada de Administración de Empresas por la Universidad del Pacífico - Perú, MBA IE Business School - España, Especialización en Marketing ESAN. 18 años de experiencia en Marketing y estrategia de producto.',
        media: '/assets/images/members/gisela.jpg',
        socialLinks: [
            { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/giselaperalta/'},
            { icon: 'fab fa-twitter', link: 'https://twitter.com/gsllperalta'}
        ],
    },
        {title: 'Karla Vera',
        subtitle: 'INVESTMENT ADVISOR',
        descripcion: 'Técnica en Administración Bancaria por Certus. 3 años de experiencia en asesoría financiera en ahorros e inversiones, gestión patrimonial y atención al cliente.',
        media: '/assets/images/members/karla.jpg',
        socialLinks: [
            { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/karla-michelle-vera-huaman-119b50168/'}
        ],
    },
        {title: 'Reinaldo Gonzalez',
        subtitle: 'FRONTEND DEVELOPER JUNIOR',
        descripcion: 'Universidad del Zulia - Venezuela. 1 año de experiencia aplicando análisis, diseño, desarrollo e implementación de sistemas web como frontend en el Perú.',
        media: '/assets/images/members/reinaldo.jpg',
        socialLinks: [
            { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/reinaldo-gonzalez-montero/'}
        ],
    },
        {title: 'Carlos Calderón',
        subtitle: 'LEGAL PARTNER',
        descripcion: 'Abogado por la Pontificia Universidad Católica del Perú, MBA ESAN, Máster en SCM ESIC - España. Especialista en mercado de capitales por CONASEV. 14 años de experiencia en asesoría legal en operaciones de financiamiento, mercado de valores y compraventa de empresas.',
        media: '/assets/images/members/carlos-calderon.jpg',
        socialLinks: [
            { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/carloscalderonabogado/'}
        ],
    },
        {title: 'Carlos Seminario',
        subtitle: 'FINANCIAL ADVISOR & PARTNER',
        descripcion: 'Contador Público, MBA ESAN con especialización en Finanzas Corporativas. 12 años de experiencia en el sector retail, bancario y educación. Sólidos conocimientos en contabilidad, planeamiento financiero, cash management y tesorería. Consultor en modelos financieros, docente en contabilidad y planeamiento financiero.',
        media: '/assets/images/members/carlos-seminario.jpg',
        socialLinks: [
            { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/carlos-seminario-45113876/'}
        ],
    },
        {title: 'Hugo Alonzo',
        subtitle: 'LEGAL PARTNER',
        descripcion: 'Abogado por la Pontificia Universidad Católica del Perú, Máster en Economía, Competencia y Regulación en Servicios Públicos por la Universidad de Barcelona. 14 años de experiencia asesorando a fondos de inversión, empresas estatales y privadas del sector inmobiliario, retail, gas, telecomunicaciones y construcción.',
        media: '/assets/images/members/hugo.jpg',
        socialLinks: [
            { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/hugo-alonzo-navarro-95a7969a/'}
        ],
    },
        {title: 'Luis Farje',
        subtitle: 'SWEDEN CONTACT & CDO',
        descripcion: 'Ingeniero de Sistemas por la Universidad de Ciencias Aplicadas - Perú, Máster en Data Science & IT por la University of Dundee - USA. 21 años de experiencia trabajando con big data y bases de datos relacionales y dimensionales.',
        media: '/assets/images/members/lucho.jpg',
        socialLinks: [
            { }
        ],
    },
        {title: 'Jesús Fuente',
        subtitle: 'CHIEF BLOCKCHAIN OFFICER',
        descripcion: 'Solucionador compulsivo de problemas con 12 años de experiencia en economía y generación de negocios, diseñador de monedas sociales y digitales, desarrollador de productos financieros en México y Perú.',
        media: '/assets/images/members/jesus.jpg',
        socialLinks: [
            { }
        ]
    },
        
    ]
    
        return (
    <>
    <div className="h1 compare-title col-lg-12" style={{backgroundColor: '#146cae', margin: '0px', padding: '0px', textAlign: 'center', marginBottom: '60px', width: '100%', height: '90px', display: 'flex', alignItems: 'center', textAlign: 'center'}}><span style={{color: 'white', fontSize: '1.8rem', margin: 'auto', fontWeight: '600'}}>Nosotros</span></div>
                    <section className="" id="team" style={{marginBottom: '30px'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 iq-font">
                                    <div className="heading-title text-center">
                                        <p style={{textAlign: 'justify'}}>Tasatop surge como una solución al problema que muchas personas enfrentan cuando tienen un extra de dinero, que buscan dónde ahorrar, pero no disponen mucho tiempo para encontrar las mejores condiciones y se conforman con lo que les ofrece unas pocas instituciones financieras. Actualmente este servicio es masivo y poco democrático en efecto tienes poca capacidad de negociación con las instituciones.</p>
                                        <p style={{textAlign: 'justify'}}>Nosotros decidimos democratizar el ahorro e inversiones en Perú y Latinoamérica. Queremos hacerlo lo más accesible posible para todos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                { teamList.map((list, index) => (
                                    <div key={index} className="col-lg-4 col-sm-6 iq-mb-30" style={{marginTop: '50px'}}>
                                        <CardStyle3
                                            media={ list.media }
                                            title={ list.title }
                                            subtitle={ list.subtitle }
                                            socialLinks={ list.socialLinks }
                                            descripcion={ list.descripcion }
                                        />
                                    </div>
                                )) }
                            </div>
                        </div>
                    </section>
                </>
        )
    
    
    }

export default Index;
