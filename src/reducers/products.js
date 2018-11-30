const initialState = [
  {
    _id: "5bb4a99463e3a228d0c4a42a",
    name: "Nike 503",
    description: "Nike 503 description",
    type: "FootballBoots",
    price: 89.6,
    size: "41",
  },
];

export default function basket(state = initialState, action) {
  if (action.type === 'ADD_PRODUCT') {
    return [
      ...state,
      { ...action.product, size: action.size }
    ];
  }
  if (action.type === 'DELETE_PRODUCT') {
    return state.filter(elem => elem.name !== action.product.name);
  }
  return state;
}
