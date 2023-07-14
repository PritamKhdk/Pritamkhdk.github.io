import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate =useNavigate();
  return (
  <>
  <h1>Add user to the Page</h1>
  <form>
    <label>
        Name:
        <input></input>
    </label>
    <label>
        Contact:
        <input></input>
    </label>
    <label>
        Address:
        <input></input>
    </label>
    <label>
        Email:
        <input></input>
    </label>
    <button>Submit</button>

  </form>
  </>
  )
}

export default Home