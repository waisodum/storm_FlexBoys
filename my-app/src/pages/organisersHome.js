import React, { useEffect } from 'react'
import Orgnavbar from '../components/Orgnavbar'
import Eventupload from '../components/eventupload'

const OrganisersHome = ({n}) => {
    useEffect(()=>{

n(false);

return ()=>{
    n(true);
}
    },[])
  return (
    <>
    <Orgnavbar/> 
    <Eventupload/>
    </>
  )
}

export default OrganisersHome
