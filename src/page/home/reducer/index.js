import http from '../../../http/http.js'
const initState = {
    banner:[],
    topPost:[],
    topImage:[]
}
export const fetchData =()=> (dispatch)=>{
    
    http.get('/artic').then(res=>{
        dispatch({
            type:'home/fetchData',
            value:res
        })
    })
}
export default (state=initState,action)=>{
    switch (action.type) {
        case 'home/fetchData':
            
            return {
                ...state,
                banner:action.value
            }
    
        default:
           return state
    }
}