import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

// Example data for events
const events = [
  {
    title: 'Sorry were booked',
    start: '2023-11-10', // Format: YYYY-MM-DD
    end: '2023-11-12',   // Format: YYYY-MM-DD
  },
  {
    title: 'Sorry were booked',
    start: '2023-11-15', // Format: YYYY-MM-DD
    end: '2023-11-17',   // Format: YYYY-MM-DD
  },
  // Add more events as needed
];

function MyCalendar() {
  return (
    <div className='mt-32 w-5/12 h-screen'>
      <FullCalendar
      height="500px"
        plugins={[dayGridPlugin]} // Load the dayGridPlugin
        initialView="dayGridMonth" // Set the initial view (e.g., month view)
        events={events} // Pass your event data
      />
    </div>
  );
}

export default MyCalendar;
