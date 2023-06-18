import { NavLink } from "react-router-dom";
import { AuthButton } from "../auth";

import "./Header.css";

const isSelected = ({ isActive }) => (isActive ? "selected" : "");

function Header() {
  return (
    <header>
      <h1>Nodepop React</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/adverts" className={isSelected} end>
              Nodepop
            </NavLink>
          </li>
          <li>
            <NavLink to="/adverts/new" className={isSelected}>
              New advert
            </NavLink>
          </li>
        </ul>
      </nav>
      <AuthButton />
    </header>
  );
}

export default Header;
