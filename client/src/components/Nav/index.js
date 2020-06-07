import React from "react";

function Nav() {
  return (
    <>
    <nav>
      <div className="nav-wrapper">
      <a href="#" class="brand-logo">Google Books Search</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
          <li><a href="">Search</a></li>
          <li><a href="">Saved</a></li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo">
    <li><a href="">Search</a></li>
    <li><a href="">Saved</a></li>
  </ul>
  </>
  );
}

export default Nav;
