import http from '../../../http/http'
const initState = {
    post:[]
}
export const fetchData = ()=>(dispatch)=> {
    http.get('/post').then(res=>{
        console.log(res)
        dispatch({
            type:'post/fetch-data',
            value:res
        })
    })
}
export default (state=initState,action)=>{
    switch (action.type) {
        case 'post/fetch-data' :
            return {
                ...state,
                post:action.value
            }
        default:
            return state
    }
}