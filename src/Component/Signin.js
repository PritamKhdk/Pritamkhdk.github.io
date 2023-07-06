import { useNavigate } from "react-router-dom";
export default function(){
    return(
     <div>
     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-80">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <form >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
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
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             />
          </div>

          <div className="mb-6">
            <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">
             Number
            </label>
            <input
              type="Number"
              id="number"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
            //   onSubmit={()=>}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>

    )
}