import React from 'react'
import DemoApp from './calendar'
import MyCalender from './calendar'
function Selling({n}) {
  return (
    <div>
        <MyCalender />
        <div className=' text-xl flex space-y-8 flex-col justify-center bg-red-300 items-center absolute top-32 right-0 border border-black h-32 ml-2 w-1/2 h-3/4 rounded-xl shadow-xl'>
            <h1>Confirm Your Booking </h1>
            

            <input type='text' placeholder='Name' className='font-bold w-1/3'/>
            <input type='text' placeholder='Event type' className='font-bold  w-1/3'/>
            <input type='date' placeholder='Date' className='font-bold w-1/3'/>
            <input type='text' placeholder='Email' className='font-bold w-1/3'/>
            <h1>Pay through </h1>
<select>
    <option>UPI</option>
    <option>Debit Card</option>
    <option>Credit card</option>
</select>
<button type='submit' className='border border-black rounded  p-2'>Lets Planit</button>


        </div>
    </div>
  )
}

export default Selling