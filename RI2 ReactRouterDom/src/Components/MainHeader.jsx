import React from 'react'
import { Outlet } from 'react-router-dom'

function MainHeader() {
  return (
    <div>
    <Outlet />
      {/* <h1>MainHeader Page</h1> */}
    </div>
  )
}

export default MainHeader
