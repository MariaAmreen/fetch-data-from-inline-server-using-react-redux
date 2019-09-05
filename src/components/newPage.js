import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodoItem} from '../action/myaction';

class newPage extends Component {
  componentDidMount () {
    this.props.getTodoItem (this.props.match.params.id);
    console.log (this.props.match.params.id);
  }

  render () {
    if (this.props.newData) {
      return (
        <div>
          <p>
            ID: {this.props.newData.id}
          </p>

          <p>
            UserId: {this.props.newData.userId}
          </p>

          <p>
            Title: {this.props.newData.title}
          </p>

          <p>
            Completed: {`${this.props.newData.completed}`}
          </p>
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  return {
    newData: state.item,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTodoItem: id => {
      dispatch (fetchTodoItem (id));
    },
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (newPage);
