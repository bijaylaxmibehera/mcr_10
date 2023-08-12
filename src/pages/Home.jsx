import { useInventory } from "../context/InventoryContext";

export function Home() {
  const {state}=useInventory();
  const totalStocks=state.products.reduce((total, product) => total + product.stock, 0);

  const totalDelivered=state.products.reduce((total,product)=>total+ product.delivered,0)

  const lowStocksItem=state.products.filter((product)=>product.stock<=10);

  return (
    <>
      <div className="flex justify-evenly mt-10 text-xl font-bold">
        <div className="bg-slate-200 p-6 text-center rounded-md">
            <p className="text-green-700">{totalStocks}</p>
            <h1>Total Stock</h1>
        </div>
        <div className="bg-slate-200 p-6 text-center rounded-md">
            <p className="text-orange-400">{totalDelivered}</p>
            <h1>Total Delivered</h1>
        </div>
        <div className="bg-slate-200 p-6 text-center rounded-md">
            <p className="text-red-600">{lowStocksItem.length}</p>
            <h1>Low Stock Item</h1>
        </div>
      </div>
    </>
  );
}
