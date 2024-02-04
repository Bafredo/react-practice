import React from "react";
import "./../App.css";

export default function Header() {
  return (
    <>
      <div className="navBar">
        <div className="logo">Freddy</div>
        <div className="search">
          <form>
            <input className="searchBox" type="text" placeholder="Search" />
            <input type="submit" value="search" />
          </form>
        </div>
        <div className="cart">Cart</div>
      </div>
    </>
  );
}
