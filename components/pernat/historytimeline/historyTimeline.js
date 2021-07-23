import React, { useState, useEffect, useRef } from 'react'
import moment from 'moment'
import { numberFormat } from '../../UI/numberFormat/number';

// import { Ref } from 'semantic-ui-react'

import Timeline from 'react-timelines'
import 'react-timelines/lib/css/style.css'

import {
    START_YEAR,
    NUM_OF_YEARS,
  } from '../timeline/constants'
  
  import {
    buildTimebar,
  } from '../timeline/builders'

const HistoryTimeline = ({ arr }) => {

    const timeRef = useRef()

    useEffect(() => {
      if(timeRef.current) {
        timeRef.current.children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].innerHTML = 'Hoy'
      }
    }, [timeRef])

    const start = new Date(`${START_YEAR}`)
    const end = new Date(`${START_YEAR + NUM_OF_YEARS}`)
    const timebar = buildTimebar()

    const groupBy = key => array =>
      array.reduce(
        (objectsByKeyValue, obj) => ({
          ...objectsByKeyValue,
          [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj)
        }),
        {}
      );

    const groupByProduct = groupBy('producto')
    const timelineArray = groupByProduct(arr)

    const buildElement = (title, apertura, vencimiento, id, producto) => {
      return {
          id: `t-${id}-el-${id}`,
          title,
          start: new Date(moment(apertura, 'DD/MM/YYYY')),
          end: vencimiento ? new Date(moment(vencimiento, 'DD/MM/YYYY')) : end,
          style: {
            backgroundColor: vencimiento ? new Date(moment(vencimiento, 'DD/MM/YYYY')) < new Date() ? '#a6abab'  : producto === 'DPF' ? '#146cae' : producto === 'CTS' ? '#e01e2b' : `#363439` : producto === 'DPF' ? '#146cae' : producto === 'CTS' ? '#e01e2b' : '#363439',
            color: '#ffffff',
            borderRadius: '4px',
            boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
            textTransform: 'capitalize',
            fontSize: '14px'
            }
          }
  }
  
  const buildSubElement = (item) => {
    return {
      id: `track-${item.id}-${item.crypt}`,
      title: `${item.producto} ${item.ifi}`,
      elements: [{
        id: `t-${item.id}-el-${item.id}`,
        title: `${item.idmoneda === 1 ? 'S/' : '$'} ${numberFormat(item.monto)} ${item.plazo ? '- ' + item.plazo  + '(d) -' : '-'} ${item.trea ? item.trea.toFixed(2) : '-'}%`,
        start: new Date(moment(item.apertura, 'DD/MM/YYYY')),
        end: item.vencimiento ? new Date(moment(item.vencimiento, 'DD/MM/YYYY')) : end,
        style: {
          backgroundColor: item.vencimiento ? new Date(moment(item.vencimiento, 'DD/MM/YYYY')) < new Date() ? '#a6abab'  : item.producto === 'DPF' ? '#40679E' : item.producto === 'CTS' ? '#B52F2F' : `#363439` : item.producto === 'DPF' ? '#40679E' : item.producto === 'CTS' ? '#B52F2F': '#363439',
          color: '#ffffff',
          borderRadius: '4px',
          boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
          textTransform: 'capitalize',
          fontSize: '14px'
          }
        }]
        }
      }

    const timeLineData = (arr) => arr.map((item, i) => {
        return {
          id: `track-${i}`,
          title: item,
          elements: timelineArray[item].map(ele => buildElement(item, ele.apertura, ele.vencimiento, ele.id, ele.producto)),
          tracks: timelineArray[item].map(ele => buildSubElement(ele)),
          isOpen: false
          }
      })

      const tracksById = timeLineData(Object.keys(timelineArray)).reduce((acc, item) => {
        return {
          ...acc,
          [item.title]: item
        }
      }, {})

      const [state, setState] = useState({
        open: false,
        tracksById,
        tracks: Object.values(tracksById)
      })

    const handleToggleTrackOpen = (data) => {
      setState(state => {
        const tracksById = {
          ...state.tracksById,
          [data.title]: {
            ...data,
            isOpen: !data.isOpen
          }
        }
        return {
          tracksById,
          tracks: Object.values(tracksById)
        }
      })
    }

    const MIN_ZOOM = 2
    const MAX_ZOOM = 20

    return (
        // <Ref innerRef={timeRef}>
          <Timeline
          scale={{
                start,
                end,
                zoom: 2,
                zoomMin: MIN_ZOOM,
                zoomMax: MAX_ZOOM,
              }}
              clickTrackButton={(track) => { alert(JSON.stringify(track)) }}
              timebar={timebar}
              isOpen={state.open}
              now={new Date()}
              tracks={
                state.tracks
              }
              toggleTrackOpen={handleToggleTrackOpen}
              toggleOpen={() => setState({
                ...state,
                open: !state.open
              })}
              scrollToNow
              enableSticky
          />
        // </Ref>
    )
}


export default React.memo(HistoryTimeline)