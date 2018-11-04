const initialState = {};

export default function user(state = initialState, action) {
  if (action.type === 'SIGN_IN') {
    return action.user;
  }
  if (action.type === 'SIGN_OUT') {
    return {};
  }
  return state;
}
