import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
axios.defaults.baseURL ='http://127.0.0.1:3000'
axios.interceptors.response.use(res =>res.data)
import './index.css'
import { start, registerMicroApps } from 'qiankun';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)


// 1. 要加载的子应用列表
const apps = [
  {
    name: "sub-react", // 子应用的名称
    entry: '//localhost:5100', // 默认会加载这个路径下的html，解析里面的js
    activeRule: "/sub-react", // 匹配的路由
    container: "#sub-app" // 加载的容器
  },
  {
    name: "sub-vue", // 子应用的名称
    entry: '//localhost:5200', // 默认会加载这个路径下的html，解析里面的js
    activeRule: "/sub-vue", // 匹配的路由
    container: "#sub-app" // 加载的容器
  },
]

// 2. 注册子应用
registerMicroApps(apps, {
  beforeLoad: [async app => console.log('before load', app.name)],
  beforeMount: [async app => console.log('before mount', app.name)],
  afterMount: [async app => console.log('after mount', app.name)],
})

start() // 3. 启动微服务
