import React from 'react'

const Card = ({image,name,a}) => {
  return (
    <div class="w-1/4 p-4">
                <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
  <img class="w-full" src={image} alt="Sunset in the mountains" className='w-full h-40 object-cover' />
  <div class="px-6 py-4">
    {/* <div class="font-bold text-xl mb-2">{y.id}</div> */}
    <p class="text-gray-700 text-base">
      {name}
        </p>
  </div>
  <h1>Events handled</h1>
  {a.map((b)=>(
    <h4>{b}</h4>
  ))}
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
</div>
  )
}

export default Card