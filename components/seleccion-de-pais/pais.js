import React, {useState, useEffect, useContext} from 'react'
import Link from 'next/link'
import Router from 'next/router';

import PernatContext from '../../context/user/PernatContext'

const Pais = () => {

	const redirect = () => {
		localStorage.setItem('paisSeleccion', 'peru')
		// console.log(localStorage.getItem('paisSeleccion'))
		Router.push({
            pathname:'/pe',
        })
	}

    return (
        <div class="page-content text-center">
			<div class="page-logo-tst">
				<img class="img-logo-tst" src="/assets/images/logoweb_pais.png" style={{width: '300px', marginTop: '8%', marginBottom: '3%'}} />
			</div>
			<h2 style={{marginBottom: '3%'}}>Encuentra la mejor manera de <b>ahorrar</b> e <b>invertir</b> en un solo lugar.</h2>
			<div class="page-select" style={{fontSize: '1.5rem', fontWeight: '600', color: 'black', marginBottom: '2%'}}>
				Selecciona tu país:
			</div>
			<div class="page-flags row" style={{display: 'flex', justifyContent: 'center'}}>
				<div class="page-flag-logo" style={{marginRight: '3%'}}>
					<a style={{cursor: 'pointer'}} onClick={() => redirect()}><img src="/assets/images/flag-pe.png" style={{width: '100px'}} /></a>
					<p>Perú</p>
				</div>
				<div class="page-flag-logo" style={{marginLeft: '3%'}}>
					<div onclick="setCookie('country','MX',30);"><img src="/assets/images/flag-mx.png" style={{width: '100px'}} /></div>
					<p>México</p>
				</div>
			</div>
		</div>
    )
}

export default Pais;