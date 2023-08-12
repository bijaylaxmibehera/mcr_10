import {NavLink} from "react-router-dom"

export function NavBar(){

    const getStyle=({isActive})=>(
        {
            color:isActive ? "white":"",
            fontWeight:isActive ? "bold":""
        }
    )


    return (
        <>
        <nav className="bg-black text-gray-400 h-screen flex flex-col gap-12 fixed w-[full] p-20">
            <NavLink to="/" style={getStyle}>
                <p>Dashboard</p>
            </NavLink>
            <NavLink to="/departments" style={getStyle}>
                <p>Departments</p>
            </NavLink>
            <NavLink to="/products" style={getStyle}>
                <p>Products</p>
            </NavLink>
        </nav>
        </>
    )
}