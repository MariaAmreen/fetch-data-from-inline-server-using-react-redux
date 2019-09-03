import React from 'react';
import './JsonStyle.css';
import { connect } from 'react-redux';
import {anotherName} from '../action/myaction';

const Json = (props)=>{
    console.log(props)
    return(         
        <div className = 'JsonStyle'>
            <h2>Welcome to Json page</h2>
            <h3>Click Button to fetch Data from Online Server</h3>          
            <button onClick ={()=>{props.changeName()}}>Fetch Data</button>     
        <div className='parent'>
        <div id = 'box1'>
            <p className = 'flex1'>User Id</p>
            <p className = 'flex2'>Id</p>
            <p className = 'flex3'>Title</p>
        </div>
        {props.myname && props.myname.map(u=>{
            return ( <> 
            
                <div id = 'box2'>
                    <p className = 'flex1'>{u.userId}</p>
                    <p className = 'flex2'>{u.id}</p>
                    <p className = 'flex3'>{u.title}</p>
                </div>
        
                   
            </>)               
            })
        }
        </div>
        </div>   
        )
}
const mapStateToProps = (state) =>{
    return{
        myname: state.name
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
         changeName: ()=>{dispatch(anotherName())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Json);