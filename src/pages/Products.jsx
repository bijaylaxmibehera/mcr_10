import { FilterBar } from "../component/FilterBar";
import { useInventory } from "../context/InventoryContext";
import { Link } from "react-router-dom";

export function Products() {
  const { state ,selectedDepartment} = useInventory();
  let productsToDisplay = state.lowStock
    ? state.products.filter((product) => product.stock <= 10)
    : state.products;

  if (state.selectedDepartment) {
    productsToDisplay = productsToDisplay.filter(
      (product) => product.departments === state.selectedDepartment
    );
  }

  return (
    <>
      <div>
        <FilterBar />
      </div>
      <table className="p-15 table-auto border-collapse border border-slate-400 m-auto ">
        <thead className="border  border-slate-500">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {productsToDisplay.map((product) => (
            <tr
              key={product.id}
              className="border-b-[1.5px] border-slate-300 bg-white"
            >
              <td>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-[100px] h-[100px] mr-2"
                />
              </td>
              <td className="text-sm">
                <Link to={`/products/${product.id}`} className="text-blue-500">
                  {product.name}
                </Link>
              </td>
              <td className="text-sm mr-2">{product.description}</td>
              <td className="text-sm">${product.price}</td>
              <td className="text-sm">{product.stock}</td>
              <td className="text-sm">{product.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
