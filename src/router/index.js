import React, {lazy} from 'react'
import {Redirect} from 'react-router-dom'
export default [
    {
        path:'/',
        exact:true,
     render:()=> <Redirect to="/home"></Redirect>,
    },
    {
        path:'/home',
     component:lazy(()=>import('../page/home/root')) ,
     meta:{
         title:'首页',
         icon:'iconfont iconyemian-copy-copy-copy'
     }    
    },                    
    {
        path:'/post',
     component:lazy(()=>import('../page/post/root')),
     meta:{
        title:'广场',
        icon:'iconfont iconwenzhang'
    } 
    },

    {  
        path:'/message',
     component:lazy(()=>import('../page/post/root')),
     meta:{
        title:'消息',
        icon:'iconfont iconsheying'
    } 
    },
    {
        path:'/mine',
     component:lazy(()=>import('../page/mine/root')),
     meta:{
        title:'我的',
        icon:'iconfont iconmainoff'
    } 
    },
]