import React ,{Suspense} from 'react'
import {NavLink} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import router from './router'
import './style.scss'
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading</div>}>
      {renderRoutes(router)}
      </Suspense>
      <div className="nav">
             {
               router.filter(item=>item.meta).map((item,index)=><NavLink to={item.path} key={index}><i className={item.meta.icon}></i><span>{item.meta.title}</span></NavLink>)
             }   
      </div>
    </div>
  );
}

export default App;
