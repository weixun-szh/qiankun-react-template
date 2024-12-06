import React from 'react'
import { Outlet } from 'react-router-dom/dist'

export default function Index() {
  return (
    <div>
        <h1>react子应用</h1>
        <div style={{backgroundColor:'pink',height:'100px'}}><Outlet /></div>
        
    </div>
  )
}
