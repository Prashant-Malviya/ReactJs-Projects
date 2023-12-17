import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex flex-row justify-between font-bold">
        <NavLink to="/">
          <div>
            <h1>E-Shop</h1>
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink>
            <div>
              <MdShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
