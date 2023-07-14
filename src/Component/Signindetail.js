import React, {useContext } from 'react'
import { callContext } from '../Hooks'



const Signindetail = () => {
  const {formstate} =useContext(callContext)


  console.log(formstate)

  return (
<>
    To make the description text appealing using Tailwind CSS, you can apply various styles and classes
    jsx
  
    <h1 className="text-2xl font-bold mb-4">Form Values</h1>
    <p className="text-gray-700 mb-2">
      Username: <span className="text-blue-500">{formstate.email}</span>
    </p>
    <p className="text-gray-700">
      Number: <span className="text-blue-500">{formstate.number}</span>
    </p>
    </> 
  )
}

export default Signindetail