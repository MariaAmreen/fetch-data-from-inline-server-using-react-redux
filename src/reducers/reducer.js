const initState = {
  name: '',
  item: '',
};

const reducer = (state = initState, action) => {
  if (action.type === 'CHANGE_NAME') {
    return {
      ...state,
      name: action.payload,
    };
  }
  if (action.type === 'FETCH_TODO_ITEM') {
    console.log (action.payload);
    return {
      ...state,
      item: action.payload,
    };
  }
  return state;
};

export default reducer;
