const initialState = [];
/*
{
    _id: "5bb4a99463e3a228d0c4a42a",
    name: "Nike 503",
    description: "Nike 503 description",
    type: "FootballBoots",
    price: 89.6,
    size: "41",
  },
  {
    _id: "5bb4a99463e3a228d0c4a42a",
    name: "Nike 503",
    description: "Nike 503 description",
    type: "FootballBoots",
    price: 89.6,
    size: "41",
  },
*/

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
