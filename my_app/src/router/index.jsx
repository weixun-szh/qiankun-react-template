import {createBrowserRouter, Navigate} from 'react-router-dom';
import React from 'react';
import Index from '../views/Index';

const Islogin =(val)=>{
    let Com = val.children.type
    if(sessionStorage.getItem('token')){
        return <Com></Com>
    }else{
        return <Navigate to='/login'></Navigate>
    }
}

const router = createBrowserRouter([
    {path:'/', element:<Index/>,children
        :[
            {path:'/sub-react/list', element:<List/>}
        ]
    }
])

export default router;