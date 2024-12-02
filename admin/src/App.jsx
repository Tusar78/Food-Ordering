import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-component">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
