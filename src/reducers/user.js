const initialState = {};

export default function user(state = initialState, action) {
  if (action.type === 'SIGN_IN') {
    return action.tokens;
  }
  if (action.type === 'SIGN_OUT') {
    return {};
  }
  if (action.type === 'ADD_USER_DATA') {
    return {
      ...state,
      ...action.user,
    };
  }
  return state;
}
