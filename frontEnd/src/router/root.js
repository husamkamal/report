import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='container'>
              <Sidebar />
              <Outlet />

    </div>
  )
}
