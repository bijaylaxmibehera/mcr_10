import { useInventory } from "../context/InventoryContext"

export function Department(){
    const {availableDepartments}=useInventory();
    


    return (
        <> 
        <div className="flex justify-evenly mt-8">
        {availableDepartments.map((dept,index)=>(
            <div key={index} className="bg-slate-100 py-6 px-10 rounded-md text-lg font-bold">{dept}</div>
        ))}
        </div>
        
        </>
    )
}