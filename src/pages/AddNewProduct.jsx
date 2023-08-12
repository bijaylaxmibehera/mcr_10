import { useState } from "react";
import { useInventory } from "../context/InventoryContext";
import { initialProductData } from "../reducer/DataReducers";
import { useNavigate } from "react-router-dom";

export function AddnewProduct() {
  const navigate = useNavigate();
  const { availableDepartments, dispatch } = useInventory();
  const [newProduct, setNewProduct] = useState(initialProductData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProductId = Math.random();

    const productToAdd = {
      id: newProductId,
      ...newProduct,
    };

    dispatch({ type: "ADD_PRODUCT", payload: productToAdd });
    setNewProduct(initialProductData);
    navigate(`/products`)
  };
  return (
    <>
      <h1 className="text-center">Add new product</h1>
      <form
        className="flex flex-col gap-4 w-[40vw] mx-auto my-10"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          Department:
          <select
            className="border-slate-200 border-2"
            name="departments"
            value={newProduct.departments}
            onChange={handleInputChange}
          >
            {availableDepartments.map((dept) => (
              <option value={dept} key={dept}>
                {dept}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col">
          Name:
          <input
            type="text"
            className="border-slate-200 border-2"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Description:
          <textarea
            className="border-slate-200 border-2"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <label className="flex flex-col">
          Price:
          <input
            type="number"
            className="border-slate-200 border-2"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Stock:
          <input
            type="number"
            className="border-slate-200 border-2"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="flex flex-col">
          SKU:
          <input
            type="text"
            className="border-slate-200 border-2"
            name="sku"
            value={newProduct.sku}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Delivered
          <input
            type="number"
            className="border-slate-200 border-2"
            name="delivered"
            value={newProduct.delivered}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="flex flex-col">
          imageURL:
          <input
            type="file"
            className="border-slate-200 border-2"
            accept="image/*"
            name="imageUrl"
            value={newProduct.imageUrl}
            onChange={handleInputChange}
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold text-lg rounded-md px-3 py-1"
        >
          Add product
        </button>
      </form>
    </>
  );
}
