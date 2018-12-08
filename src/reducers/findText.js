const initialState = '';

export default function basket(state = initialState, action) {
  if (action.type === 'SET_FINDTEXT') {
    return action.findText;
  }
  return state;
}
