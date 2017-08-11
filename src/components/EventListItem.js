import React from 'react';

const EventListItem = ({event}) => {
  return (
    <li>
      <p>Name: {event.name}</p>
      <p>Description: {event.description}</p>
      <p>Start Time: {event.start_time}</p>
      <p>End Timer: {event.end_time}</p>
      <p>Location: {event.location}</p>
    </li>
  )
}

export default EventListItem;