import moment from 'moment'

const simulaciones = [{"codigo":"SPF331421000263","crypt":"461DC7FD7B1B31D69DBF37758C7D18B0","monto":10000.00,"moneda":1,"plazo":365,"trea": 4.300,"subastado":1619474400202,"situacion":"F","ifiGanador":"Financiera Credinka"}]



export const dataSimulaciones = {
    columns: [
      {
        label: '#',
        field: 'numero',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Código',
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
        label: 'Trea',
        field: 'trea',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Subastado El',
        field: 'fechasubasta',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Situación',
        field: 'situacion',
        sort: 'asc',
        width: 150
      },
      {
        label: 'IFI Ganadora',
        field: 'ifiganadora',
        sort: 'asc',
        width: 150
      }
    ],
    rows:
    
    simulaciones.map((item, i) => {

        

      return {          
          numero: i + 1,
          codigo: item.codigo,
          monto: `S/ ${Intl.NumberFormat("en-US").format(item.monto)}`,
          plazo: item.plazo,
          trea: `${item.trea} %`,
          fechasubasta: moment(item.subastado).format('DD/MM/YYYY'),
          situacion: item.situacion === "F" ? "Terminado" : "Otros",
          ifiganadora: item.ifiGanador,
      }
    })
  };

  export const dataInversiones = {
    columns: [
      {
        label: '#',
        field: 'numero',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Producto',
        field: 'Producto',
        sort: 'asc',
        width: 270
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
        label: 'Interés Anual',
        field: 'interesanual',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Ganancia Anual',
        field: 'gananciaanual',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Pago Mensual',
        field: 'pagomensual',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Envio',
        field: 'envio',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Apertura',
        field: 'apertura',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Situación',
        field: 'situacion',
        sort: 'asc',
        width: 150
      }
    ],
    rows: []
    
    // empresa.map((item, i) => {

    //   return {          
    //       numero: i + 1,
    //       nombres: item.nombres,
    //       apellidos: item.apellidos,
    //       documento: item.documento,
    //       email: item.email,
    //       ciudad: item.ciudad,
    //       celular: item.celular,
    //       registro: moment(item.registro).format('DD/MM/YYYY'),
    //       check: item.verifiedEmail.toString(),
    //       opciones: <div style={{textAlign: 'center'}}><span></span></div>
    //   }
    // })
  };

  export const dataDpfDirecto = {
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
        label: 'IFI',
        field: 'ifi',
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
        label: 'Trea',
        field: 'tasa',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Registro',
        field: 'registro',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Apertura',
        field: 'apertura',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Situación',
        field: 'situacion',
        sort: 'asc',
        width: 150
      }
    ],
    rows: []
    
    // empresa.map((item, i) => {

    //   return {          
    //       numero: i + 1,
    //       nombres: item.nombres,
    //       apellidos: item.apellidos,
    //       documento: item.documento,
    //       email: item.email,
    //       ciudad: item.ciudad,
    //       celular: item.celular,
    //       registro: moment(item.registro).format('DD/MM/YYYY'),
    //       check: item.verifiedEmail.toString(),
    //       opciones: <div style={{textAlign: 'center'}}><span></span></div>
    //   }
    // })
  };
