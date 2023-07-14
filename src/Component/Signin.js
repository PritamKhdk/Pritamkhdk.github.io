import React, { useContext, useState } from "react";
import { callContext } from "../Hooks";
import { useNavigate } from "react-router-dom";


export default function Signin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");

    const navigate=useNavigate();
    
    const{formstate,formdispatch}=useContext(callContext)
     
    function handleChange(event) {
      if (event.target.name === "emails") {
        setUsername(event.target.value);
         formdispatch({type:"UPDATE_EMAIL",payload:event.target.value})
        } 
        else if (event.target.name === "password") {
        setPassword(event.target.value);
        formdispatch({type:"UPDATE_PASSWORD",payload:event.target.value})
      }
       else {
        setNumber(event.target.value);
        formdispatch({type:"UPDATE_NUMBER",payload:event.target.value})
      }
    }

    function handleSubmit(event) {
      event.preventDefault();
      navigate("/Signindetail")
      console.log("formstates",formstate)
    }

  return (
    <div>
      <div className="min-h-screen bg-gray-300 flex justify-center items-center">
        <div className="bg- shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-80">
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="emails"
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">
                Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
