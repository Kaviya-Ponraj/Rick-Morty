import React from 'react'
import Gender from './Category/Gender'
import Specious from './Category/Specious'
import Status from './Category/Status'

const Filters = ({setpageNumber, setStatus, setGender , setSpecies}) => {
  let clear = () => {
    setpageNumber("") 
    setStatus("")
    setGender("")
    setSpecies("")
    window.location.reload(false);
  }
  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className="text-center fs-4 mb-2">Filters</div>
      <div onClick={clear} style={{cursor : 'pointer'}} className="text-center text-primary text-decoration-underline mb-4">
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
       
       
        
        <Status 
        setpageNumber = {setpageNumber}
        setStatus ={setStatus}
      
        />
        <Specious 
        setpageNumber = {setpageNumber}
        setSpecies = {setSpecies}
        />
        <Gender 
         setpageNumber = {setpageNumber}
          setGender= {setGender}
        />
        
    </div>

      </div>
  )
}

export default Filters