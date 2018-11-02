const initialState = [
  'nike 501',
  'adidas 123',
];

export default function basket(state = initialState, action) {
  if (action.type === 'ADD_PRODUCT') {
    return [
      ...state,
      action.product,
    ];
  }
  if (action.type === 'DELETE_PRODUCT') {
    return state.filter(elem => elem !== action.product);
  }
  return state;
}
