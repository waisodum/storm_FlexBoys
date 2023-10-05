import React from 'react'

const Card1 = ({image,name,a}) => {
  return (
    <div class="w-1/4 p-4">
                <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
  <img class="w-full" src={image} alt="Sunset in the mountains" className='w-full h-40 object-cover' />
  <div class="px-6 py-4">
    {/* <div class="font-bold text-xl mb-2">{y.id}</div> */}
    <p class="text-gray-700 text-2xl subHeading">
      {name}
        </p>
  </div><div className="px-6">
  <h1 className='subHeading'>Events handled</h1>
  {a.map((b)=>(
    <h4>{b}</h4>
  ))}
  <div class="px-6 pt-4 pb-2">

  </div>


  </div>
</div>
</div>
  )
}

export default Card1;