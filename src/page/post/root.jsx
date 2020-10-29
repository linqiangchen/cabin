import React , {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {fetchData} from './reducer'
export default function Post() {
    const dispatch = useDispatch()
    const add = (a,b)=>{
        return a +b
    }
    useEffect(() => {
        dispatch(fetchData())
        add()
    }, [dispatch])
    return (
        <div>
            <h1>首页</h1>
        </div>
    )
}
