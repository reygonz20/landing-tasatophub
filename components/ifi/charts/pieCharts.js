import React from 'react';
import _ from 'lodash'
import C3Chart from 'react-c3js';
import 'c3/c3.css';

import { numberFormat } from '../../UI/numberFormat/number';


const PieCharts = ({
  moneda,
  mobile,
  arrSum,
  setMoneda,
  setResume,
  ifi
 }) => {

  function getColor(arr, color) {
    let count = 0.8;
    const divided = 0.8 / arr.length
    count += divided
    let newArr = []
    for(let i = 0;i <= arr.length && count > 0; i++) {
      count -= divided
      newArr = [
        ...newArr,
        `rgba(${color}, ${count.toFixed(1)})`
      ]
    }
    return newArr
  }

  const ordered = _.orderBy(arrSum, ['valor'], ['desc'])

  const COLORSOLES = getColor(ordered, '20, 108, 174')
  const COLORDOLARES = getColor(ordered, '224, 30, 43')
  
  const data = {
    columns: ordered.map(item => item.valor ? [item.producto, item.valor] : []),
    type: 'pie',
    labels: false,
    colors: ordered.reduce((acc, item, i) => {
      return {
        ...acc,
        [item.producto]: moneda === 1 ? COLORSOLES[i] : COLORDOLARES[i]
      }
    }, {}),
    empty: {
      label: {
        text: 'No data'
      }
    },
    onclick: ifi   ? () => {} : function (d, i) {
       setResume(d.id)
      setMoneda(moneda)
     },
     unload: true
  }

  const tooltip = {
    position: (data, width, height, element) => {
        return { top: height, left: width };
    },
    format: {
      value: (value, id) => {
        return `${moneda === 1 ? 'S/' : '$'} ${numberFormat(value)}`
      } 
    } 
  }
  

  return (
    <C3Chart className={`chart-${moneda}`} unloadBeforeLoad={true} data={data} size={mobile ? {width: 320, height: 320} : {width: 320, height: 320}} tooltip={tooltip} /> 
    /* <Pie data={dataTest} /> */
  )
}

export default React.memo(PieCharts)
