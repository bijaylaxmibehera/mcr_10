import { useNavigate } from "react-router-dom";
import { useInventory } from "../context/InventoryContext";
import { useState } from "react";

export function FilterBar() {
  const navigate = useNavigate();
  const { availableDepartments, state, dispatch ,selectedDepartment, setSelectedDepartment} = useInventory();
  const [lowStockOnly, setLowStockOnly] = useState(false);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value)
    dispatch({ type: "SET_DEPARTMENT", payload:event.target.value });
  };

  const handleLowStockToggle = () => {
    setLowStockOnly(!lowStockOnly);
    dispatch({ type: "TOGGLE_LOW_STOCK" });
  };
  return (
    <>
      <div className="flex justify-evenly my-7 items-center">
        <h1 className="font-bold text-2xl">Products</h1>
        <select name="departments" 
          value={selectedDepartment}
          onChange={handleDepartmentChange}>
          {availableDepartments.map((dept) => (
            <option value={dept} key={dept}>
              {dept}
            </option>
          ))}
        </select>
        <label>
          <input
            type="checkbox"
            checked={lowStockOnly}
            onChange={handleLowStockToggle}
          />
          Low Stock Items
        </label>
        <select>
          <option>Name</option>
          <option>Stock</option>
          <option>Price</option>
        </select>
        <button
          className="bg-blue-500 text-white py-1 px-3 rounded-md font-semibold"
          onClick={() => navigate(`/addproduct`)}
        >
          New
        </button>
      </div>
    </>
  );
}
