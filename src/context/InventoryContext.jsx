import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { inventoryData } from "../database/InventoryData";
import { initialState, productReducer } from "../reducer/DataReducers";

export const InventoryContext = createContext();

export function InventoryProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const [productsData, setProductsData] = useState(inventoryData);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  useEffect(() => {
    dispatch({ type: "INITIALIZE_PRODUCTS", payload: productsData });
  }, []);

  const availableDepartments=productsData.reduce((departments, product) => {
    if (!departments.includes(product.department)) {
      departments.push(product.department);
    }
    return departments;
  }, []);

  return (
    <InventoryContext.Provider value={{ state, dispatch ,availableDepartments,selectedDepartment, setSelectedDepartment}}>
      {children}
    </InventoryContext.Provider>
  );
}

export const useInventory = () => useContext(InventoryContext);
