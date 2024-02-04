import React from "react";
import "./../App.css";
import Shop from "./shop";
import Search from "./search";
import Logo from "./logo";

export default function Header() {
  return (
    <>
      <div class="navbar">
      <Logo/>
      <Search/>
      <Shop/>
     </div>
    </>
  );
}
