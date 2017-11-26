import React from 'react'
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js'

const Event = (props) => (
  <div
    className="eventPoint"
    style={{
      right: `${getTimeInPercentage(props.event.start)}%`,
    }}
  >
  {/*<span className='eventTitle'>{props.event.targettedResource.title}</span>*/}
      opacity .$= NowInSec {props.event.end/(60*60*24)/100};

  </div>
)





export default Event
