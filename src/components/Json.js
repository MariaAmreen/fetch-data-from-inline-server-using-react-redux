import React from 'react';
import './JsonStyle.css';
import {connect} from 'react-redux';
import {anotherName} from '../action/myaction';
import {Link} from 'react-router-dom';

const Json = props => {
  return (
    <div className="JsonStyle">
      <h2>Welcome to Json page</h2>
      <h3>Click Button to fetch Data from Online Server</h3>
      <button
        onClick={() => {
          props.changeName ();
        }}
      >
        Fetch Data
      </button>
      <div className="parent">
        <div id="box1">
          <p className="flex1">User Id</p>
          <p className="flex2">Id</p>
          <p className="flex3">Title</p>
          <p className="flex4">Completed</p>
        </div>
        {props.myname &&
          props.myname.map (u => {
            return (
              <div id="box2">
                <p className="flex1">
                  {u.userId}
                </p>
                <p className="flex2">
                  <Link to={`newPage/${u.id}`}>
                    {u.id}
                  </Link>
                </p>
                <p className="flex3">{u.title}</p>
                <p className="flex4">{`${u.completed}`}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {

  return {
    myname: state.name,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeName: () => {
      dispatch (anotherName ());
    },
  };
};
export default connect (mapStateToProps, mapDispatchToProps) (Json);
