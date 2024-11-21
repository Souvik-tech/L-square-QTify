import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button"
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "../Navbar/Navbar.module.css";

function Navbar({  }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
   
       <Search/>
      
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;