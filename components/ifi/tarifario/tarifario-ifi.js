import React, { Fragment, useState, useEffect } from 'react';
import { Modal, Button, Tooltip, OverlayTrigger, Nav, Navbar, Form, InputGroup } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';
import { CSVLink } from "react-csv";
import dataTarifario from './data'
import './index.css'


const Tarifario = ({mobile}) => {


    const headers = [
        {
          label: <div style={{textAlign: 'center'}}><span>Name</span></div>,
          key: 'name'
        },
        {
          label: 'Position',
          key: 'position'
        },
        {
          label: 'Office',
          key: 'office'
        },
        {
          label: 'Age',
          key: 'age'
        },
        {
          label: 'Start date',
          key: 'date'
        },
        {
          label: 'Salary',
          key: 'salary'
        }
      ]


    const data = {
        columns: [
          {
            label: '#',
            field: 'numero',
            sort: 'asc',
            width: 150,
            text: {textAlign: 'center'}
          },
          {
            label: 'Producto',
            field: 'producto',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Moneda',
            field: 'moneda',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Departamento',
            field: 'departamento',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Monto Min',
            field: 'montomax',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Monto Max',
            field: 'montomax',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Plazo Min',
            field: 'plazomin',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Plazo Max',
            field: 'plazomax',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Tasa',
            field: 'tasa',
            sort: 'asc',
            width: 150
          },
        ],
        rows: dataTarifario.map((item, i) => {

          return {
              numero: i + 1,
              producto: item.producto,
              moneda: item.moneda,
              departamento: item.departamento,
              montomin: `S/ ${Intl.NumberFormat("en-US").format(item.montomin)}`,
              montomax: `S/ ${Intl.NumberFormat("en-US").format(item.montomax)}`,
              plazomin: item.plazomin,
              plazomax: item.plazomax,
              tasa: item.tasa,
              clickEvent: (item) => {alert(`Esta es la fila ${item.numero}`)}               
          }
        })
      };


    return (
        <React.Fragment>
            
        
        <h4 style={{fontWeight: 'bold', fontSize: '18px', padding: '1%', color: '#146cae'}}>Tarifario</h4>

        {data.rows.length ? <CSVLink separator={";"} headers={headers} data={data.rows} filename={"Tarifario.csv"} ><button style={{marginLeft: '20px'}} className="btn btn-success">Exportar a CSV</button></CSVLink> : null }

        <div style={{padding: '30px'}}>
        <MDBDataTable
        exportToCSV={true}
        sortable
        noBottomColumns={true}
        paginationLabel={["Anterior", "Siguiente"]}
        searchLabel="Buscar"
        entriesLabel=""
        entriesOptions={[]}
        displayEntries={false}
        searching={false}
        info={false}
            bordered
            small
            data={data}
            
        />
        </div>


        </React.Fragment>
    )
}

export default Tarifario;