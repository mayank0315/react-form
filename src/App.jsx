import { useState } from "react"
const App = () => {

  const [username, setusername] = useState("")

  const SubmitHandler = (e) => {
    e.preventDefault()
    console.log(username)
  }
  const handleChange = (e) => {
    setusername(e.target.value)
  }
  return (
    <div>
      <div className='rounded mx-auto w-[80%] mt-10 p-5 bg-zinc-200'>
        <form onChange={SubmitHandler}
          className="w-full  max-w-md bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App