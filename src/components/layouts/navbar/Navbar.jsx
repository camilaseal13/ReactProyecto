import "./navbar.css";

import { ShopCart } from "../../common/ShopCart/ShopCart";

export const Navbar = () => {
  return (
    <header className="navbar-header">
      <div>
        <nav className="navbar-container">
          <h2 className="logo">logo</h2>
          <ul className="category-container">
            <li>Hombres</li>
            <li>Mujeres</li>
            <li>Accesorios</li>
            <li>Sale</li>
          </ul>
          <ShopCart />
        </nav>
      </div>
    </header>
  );
};
