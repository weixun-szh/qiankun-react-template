import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.interceptors.response.use(res => res.data)
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

let root;
function render(props) {
  const { container } = props
  const dom = container ? container.querySelector('#root') : document.getElementById('root')
  root = createRoot(dom)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
} else {
  renderWithQiankun({
    // 子应用挂载
    mount(props) {
      render(props);
    },
    // 只有子应用第一次加载会触发
    bootstrap() {
      console.log('react app bootstrap');
    },
    // 更新
    update() {
      console.log('react app update');
    },
    // 卸载
    unmount() {
      console.log('react app unmount');
    }
  });
}