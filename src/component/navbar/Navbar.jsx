import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <>
            <nav>
                <ul className="flex gap-20 p-5 justify-center top-3">
                    <li className="cursor-pointer">
                        <NavLink to={''}>Home</NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to={'about'}>About</NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to={'parent'}>Parent</NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to={'gallary'}>Gallary</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )


}


