export const initialProductData = {
  departments: "",
  name: "",
  description: "",
  price: "",
  stock: "",
  sku: "",
  supplier: "",
  delivered: "",
  imageUrl: "",
};

const initialState = {
  products: [],
  productData: initialProductData,
  lowStock:false,
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "SET_DEPARTMENT":
      return { ...state, department: action.payload };
    case "TOGGLE_LOW_STOCK":
      return { ...state, lowStock: !state.lowStock };
    default:
      return state;
  }
};

export { initialState, productReducer };
