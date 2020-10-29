import http from '../../../http/http.js'
const initState = {
    Image:[]
}
export const fetchData =()=> (dispatch)=>{
    
    http.get('/allImage').then(res=>{
        console.log(res)
        dispatch({
            type:'image/fetchData',
            value:res
        })
    })
}
export default (state=initState,action)=>{
    switch (action.type) {
        case 'image/fetchData':
            
            return {
                ...state,
                Image:action.value
            }
    
        default:
           return state
    }
}