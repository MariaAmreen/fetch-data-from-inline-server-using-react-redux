export const anotherName = () => {
  return dispatch => {
    fetch ('https://jsonplaceholder.typicode.com/todos')
      .then (response => response.json ())
      .then (res => {
        dispatch ({type: 'CHANGE_NAME', payload: res});
      });
  };
};

export const fetchTodoItem = id => {
  return dispatch => {
    fetch (`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then (response => response.json ())
      .then (res => {
        dispatch ({type: 'FETCH_TODO_ITEM', payload: res});
      });
  };
};
