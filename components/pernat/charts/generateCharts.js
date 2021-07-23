import React from 'react'


import PieCharts from "./pieCharts";
// import ConglomeradoTable from '../conglomeradoTable/conglomeradoTable';

const GenerateCharts = ({ moneda, mobile, productos, setMoneda, setResume, resume, loading, cambioResume, cambioMoneda}) => {

  const generateMonto = (moneda, arr) => {
    const valores = arr.map(item => {
      return [
        ...arr.filter(filter => filter.idmoneda === moneda && filter.producto === item.producto),
      ].reduce((a, b) => a + b.monto, 0)
    })

    // console.log(arr);
    // console.log(moneda);

    const x = arr.reduce((acc, item, i) => {
        return acc.concat({
          producto: item.producto,
          valor: valores[i]
        })
    }, [])

    function getUnique(arr, comp) {
      const unique = arr.map(e => e[comp]) //['DPF', 'DPF', 'CTS', 'FM'] (arr)
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e]).map(e => arr[e]);
       return unique;
    }
    return getUnique(x, 'producto').filter(item => item.valor > 0)
  }
 
  
    return (
      <React.Fragment>
        {/* {
        loading ? 
        <div></div>
        :  */}
        <PieCharts
              arrSum={generateMonto(moneda, productos)}
              moneda={moneda}
              mobile={mobile}
              setMoneda={setMoneda}
              setResume={setResume}
              resume={resume}
              cambioResume={cambioResume}
              cambioMoneda={cambioMoneda}
          />
          {/* } */}

        {/* {!totales ? null : <React.Fragment>
          {mobile ?
          <ConglomeradoTable totales={totales} mobile={mobile} soles='Total en soles' dolares='Total en dólares' moneda={moneda} tot />  
          : null}
        </React.Fragment>} */}
      </React.Fragment>
    )
}


export default React.memo(GenerateCharts)