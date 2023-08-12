import { useInventory } from "../context/InventoryContext";
import { useParams } from "react-router-dom";

export function ProductDetails() {
  const { state } = useInventory();
  const { id } = useParams();

  const selectedProduct = state.products.find(
    (product) => product.id === Number(id)
  );

  const {
    department,
    name,
    description,
    price,
    stock,
    sku,
    supplier,
    delivered,
    imageUrl,
  } = selectedProduct;

  return (
    <>
     <div className="pl-10 pt-5 pb-5">
      <h1 className="font-bold text-xl">{name}</h1>
      <img src={imageUrl} alt={name}/>
      <p>Price: ${price}</p>
      <p>Stock: {stock}</p>
      <p>Supplier: {supplier}</p>
      <p>Department: {department}</p>
      <p>SKU: {sku}</p>
      <p>Delivered: {delivered}</p>
      <p>Description: {description}</p>
      </div>
    </>
  );
}
