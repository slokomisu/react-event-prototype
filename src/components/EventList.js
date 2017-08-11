import React from 'react';
import EventListItem from './EventListItem'

const EventList = ({events}) => {
  const items = events.filter(event => {
    return new Date(event.start_time) > new Date()
  })
  .sort((a, b) => {
    return new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
  })
  .map((event, i) => (
    <EventListItem event={event} key={i} />
  ))
  return (
    <div>
      {items}
    </div>
  )
}

export default EventList;