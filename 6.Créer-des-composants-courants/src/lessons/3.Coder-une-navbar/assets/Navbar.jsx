import { useState } from "react";
import hamburger from "./hamburger.svg";
import close from "./close.svg";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-200 text-slate-800 py-4 px-6 shadow-md z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Titre du site ou logo */}
        <div className="text-lg font-semibold">MonSite</div>

        {/* Bouton hamburger pour mobile */}
        <button className="sm:hidden" onClick={toggleMenu}>
          <img
            src={showMenu ? close : hamburger}
            alt="Menu"
            className="w-6 h-6"
          />
        </button>

        {/* Menu horizontal (desktop) */}
        <ul className="hidden sm:flex gap-8 text-base">
          <li>
            <a href="#" className="hover:underline">
              Accueil
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Tarifs
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Menu vertical (mobile) */}
      {showMenu && (
        <ul className="flex flex-col items-center gap-4 mt-4 sm:hidden">
          <li>
            <a href="#" className="block">
              Accueil
            </a>
          </li>
          <li>
            <a href="#" className="block">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block">
              Tarifs
            </a>
          </li>
          <li>
            <a href="#" className="block">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
