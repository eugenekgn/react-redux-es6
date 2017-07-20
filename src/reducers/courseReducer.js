const courseReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_COURSE':
      console.log('2) this is an action [REDUCER] ', state);
      return [...state, Object.assign({}, action.course)];
    default:
      return state;
  }
};

export default courseReducer;
