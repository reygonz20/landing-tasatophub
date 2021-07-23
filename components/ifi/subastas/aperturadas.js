import moment from 'moment'

const aperturadas = [{"id":9884,"codigo":"SPF331421000197","situacion":"S","prod":"DPF","isCanceledByIfi":false,"datosProducto":{"id":9884,"producto":1,"moneda":1,"monto":100000.00,"montofinal":100000.00,"plazo":365,"plazofinal":365,"tasa":4.900,"tasafinal":4.900,"ubicacion":"Lima y Callao","ifiGanadora":"Financiera ProEmpresa","tasaGanadora":4.900,"tyc":true,"titular":true,"codigo":"SPF331421000197","situacion":"S","apertura":1617166800000,"inicio":1616623771534,"fin":1616709600487},"datosCliente":{"nombre":"Marco Antonio","apellidos":"Mamani Utrilla","documento":1,"docNumero":"08886576","celular":"993126624","correo":"marcomamani@hotmail.com"},"ganador":true}]

const dataAperturadas = {
    columns: [
      {
        label: '#',
        field: 'numero',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Codigo',
        field: 'codigo',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Monto',
        field: 'monto',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Plazo (días)',
        field: 'plazo',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Fecha de registro',
        field: 'inicio',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Ubicación',
        field: 'ubicacion',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Tasa',
        field: 'tasa',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Numero de documento',
        field: 'docNumero',
        sort: 'asc',
        width: 150
      },
    ],
    rows: aperturadas.map((item, i) => {

        const tasa = <div style={{textAlign: 'center'}}><p style={{marginTop: '0px', marginBottom: '0px', lineHeight: '30px', fontSize: '1rem'}}>{`${item.datosProducto.tasafinal} %`}</p><p style={{marginTop: '0px', marginBottom: '10px', lineHeight: '0px', color: '#AEAEAE', fontSize: '0.8rem'}}>{`${item.datosProducto.tasa} %`}</p></div>
        const monto = <div style={{textAlign: 'right'}}><p style={{marginTop: '0px', marginBottom: '0px', lineHeight: '30px', fontSize: '1rem'}}>{`S/ ${Intl.NumberFormat("en-US").format(item.datosProducto.montofinal)}`}</p><p style={{marginTop: '0px', marginBottom: '10px', lineHeight: '0px', color: '#AEAEAE', fontSize: '0.8rem'}}>{`S/ ${Intl.NumberFormat("en-US").format(item.datosProducto.monto)}`}</p></div>
        const plazo = <div style={{textAlign: 'right'}}><p style={{marginTop: '0px', marginBottom: '0px', lineHeight: '30px', fontSize: '1rem'}}>{`${item.datosProducto.plazofinal} días`}</p><p style={{marginTop: '0px', marginBottom: '10px', lineHeight: '0px', color: '#AEAEAE', fontSize: '0.8rem'}}>{`${item.datosProducto.plazo} días`}</p></div>


        
      return {
          numero: i + 1,
          codigo: item.codigo,
          monto: monto,
          plazo: plazo,
          inicio: moment(item.datosProducto.inicio).format('DD/MM/YYYY'),
          ubicacion: item.datosProducto.ubicacion,
          tasa: tasa,
          docNumero: item.datosCliente.docNumero
      }
    })
  };


export default dataAperturadas;
