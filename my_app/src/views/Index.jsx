import React from 'react'
import {Button} from 'antd'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  let navigate = useNavigate();
  return (
    <div>
        <h1>主应用</h1>
        <Button onClick={()=>{navigate('/sub-react')}}>react子应用</Button>
        <Button onClick={()=>{navigate('/sub-vue')}}>vue子应用</Button>
        <div id='sub-app'>

        </div>
    </div>
  )
}
