import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-2 bg-slate-300 text-center">
      <NavLink
        className={({ isActive }) => `${isActive && "font-bold"} mx-2`}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => `${isActive && "font-bold"} mx-2`}
        to={"/analytics"}
      >
        Analytics
      </NavLink>
      <NavLink
        className={({ isActive }) => `${isActive && "font-bold"} mx-2`}
        to={"/contact"}
      >
        Contact
      </NavLink>
    </nav>
  );
}
