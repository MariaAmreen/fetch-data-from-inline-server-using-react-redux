
const initState ={
    name: ''
    
}

const reducer = (state = initState, action)=>{
    if(action.type === 'CHANGE_NAME'){
        return{
            ...state,
            name: action.payload
        }
    }
    return state;
}

export default reducer;