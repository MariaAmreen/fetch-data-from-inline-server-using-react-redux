

// export const anotherName = (name)=>{
//     return{
//         type: 'CHANGE_NAME',
//         payload: name
//     }
// }

export const anotherName = ()=>
{
    return (dispatch)=>
    {
        
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(res => 
            {  
         
            dispatch({type: 'CHANGE_NAME',payload:res});
        })
    }
}
