import React, { useRef, useEffect, useState } from 'react'
import moment from 'moment'
import Timeline from 'react-timelines'

// import { Ref } from 'semantic-ui-react'

import 'react-timelines/lib/css/style.css'
import './styles.css';

import {
  START_YEAR,
  NUM_OF_YEARS,
} from './constants'

import {
  buildTimebar,
} from './builders'
import { numberFormat } from '../../UI/numberFormat/number';

const Timelines = ({ arr }) => {
    const [open, setOpen] = useState(false)

    const timeRef = useRef()

    useEffect(() => {
      if(timeRef.current) {
        timeRef.current.children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].innerHTML = 'Hoy'
      }
    }, [timeRef])

    const now = new Date()

    const timebar = buildTimebar()

    const MIN_ZOOM = 2
    const MAX_ZOOM = 20

    const start = new Date(`${START_YEAR}`)
    const end = new Date(`${START_YEAR + NUM_OF_YEARS}`)

    const timeLineData = arr.map((item, i) => {
      return {
        id: `track-${i}`,
        title: `${item.producto} ${item.ifi}`,
        elements: [{
          id: `t-${i}-el-${i}`,
          title: `${item.idmoneda === 1 ? 'S/' : '$'} ${numberFormat(item.monto)} ${item.plazo ? '- ' + item.plazo + ' -' : '-'} ${item.trea.toFixed(2)}%`,
          start: new Date(moment(item.apertura, 'DD/MM/YYYY')),
          end: item.vencimiento ? new Date(moment(item.vencimiento, 'DD/MM/YYYY')) : end,
          style: {
            backgroundColor: item.vencimiento ? new Date(moment(item.vencimiento, 'DD/MM/YYYY')) < new Date() ? '#a6abab'  : item.producto === 'DPF' ? '#146cae' : item.producto === 'CTS' ? '#e01e2b' : `#363439` : item.producto === 'DPF' ? '#146cae' : item.producto === 'CTS' ? '#e01e2b': '#363439',
            color: '#ffffff',
            borderRadius: '4px',
            boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
            textTransform: 'capitalize',
            fontSize: '14px'
            }
          }]
              }
    })
    
    return (
        <React.Fragment>
          {/* <Ref innerRef={timeRef}> */}
            <Timeline
            scale={{
                  start,
                  end,
                  zoom: 2,
                  zoomMin: MIN_ZOOM,
                  zoomMax: MAX_ZOOM,
                }}
                timebar={timebar}
                now={now}
                toggleOpen={() => setOpen(!open)}
                tracks={
                  timeLineData
                }
                isOpen={open}
                scrollToNow
                enableSticky
            />
          {/* </Ref> */}
        </React.Fragment>
    )
}


export default Timelines