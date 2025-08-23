import { NavLink, Link } from "react-router-dom";
export default function Navbar() {
  const links = [
    { name: "Acceuil", path: "/" },
    { name: "Auteurs", path: "/authors" },
  ];
  return (
    <nav className="shadow">
      <div className="container mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <Link to={"/"} className="text-2xl font-bold md:text-3xl">
          Blog
        </Link>
        <ul className="flex gap-5">
          {links.map((link, index) => (
            <li key={index}>
              {" "}
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-zinc-700"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
