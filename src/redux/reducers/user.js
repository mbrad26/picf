const INITIAL_STATE = {
  currentUser: null,
  error: null,
}

const user = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default: return state;
  };
};