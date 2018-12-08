const initialState = [];

export default function basket(state = initialState, action) {
  if (action.type === 'ADD_PRODUCT') {
    return [
      ...state,
      { ...action.product },
    ];
  }
  if (action.type === 'SET_PRODUCTS') {
    return action.products;
  }
  if (action.type === 'DELETE_PRODUCT') {
    const r = state.filter(elem => elem.id !== action.product.id);
    return r;
  }
  if (action.type === 'DELETE_PRODUCTS') {
    return [];
  }
  return state;
}
