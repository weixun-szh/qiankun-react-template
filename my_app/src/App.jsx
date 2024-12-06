import { useState } from 'react'
import './App.css'
import { Button, Menu } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

let routes = [{
  label: 'react', key: 'sub-react', children: [
    { label: 'react-list', key: '/sub-react/list' },
    { label: 'react', key: '/sub-react' },
  ]
},
{
  label: 'vue', key: 'vue', path: 'sub-vue', children: [
    { label: 'vue-list', key: '/sub-vue/list' },
    { label: 'vue', key: '/sub-vue' },
  ]
},];
function App() {
  let navigate = useNavigate();
  const currentPath = window.location.pathname;

  const [selectedPath, setSelectedPath] = useState(
    routes.find(item => currentPath == item.key)?.key
  );

  // 重写函数
  (() => {
    const _wr = function (type) {
      const orig = (window).history[type]
      return function () {
        const rv = orig.apply(this, arguments)
        const e = new Event(type)
        e.arguments = arguments
        window.dispatchEvent(e)
        console.log(e);
        return rv
      }
    }
    window.history.pushState = _wr('pushState')
    // 递归查找路由
    let findUrl = (rlist, url) => {
      if (rlist.find(i => i.key == url)) {
        return url;
      } else {
        return findUrl(rlist.find(i => url.includes(i.key)).children, url);
      }
    }
    // 在这个函数中做跳转后的逻辑
    const bindHistory = () => {
      const currentPath = window.location.pathname;
      console.log(findUrl(routes, currentPath));
      setSelectedPath(
        findUrl(routes, currentPath)
      )
    }
    // 绑定事件
    window.addEventListener('pushState', bindHistory)
  })()
  return (
    <div className='app'>
      <div className='header'>
      </div>
      <div className='body'>
        <div className='left'>
          <Menu
            theme="dark"
            mode="inline"
            items={routes}
            defaultSelectedKeys={['sub-react']}
            selectedKeys={[selectedPath || 'sub-react']}
            onClick={({ key }) => { setSelectedPath(key); navigate(key) }}
          />
        </div>
        <div className='right'>
          <div id='sub-app'></div>
        </div>
      </div>
    </div>
  )
}

export default App
