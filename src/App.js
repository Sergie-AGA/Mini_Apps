import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import More from "./components/pages/More";

function App() {
  const [burgerMenu, setBurger] = useState("burger-menu__inside");
  const [activeMenu, setMenu] = useState("navbar__items");

  function toggleMenu(burgerMenu) {
    if (burgerMenu == "burger-menu__inside") {
      setBurger("burger-menu__inside open");
      setMenu("navbar__items open-mobile");
    } else {
      setBurger("burger-menu__inside");
      setMenu("navbar__items");
    }
  }

  return (
    <Fragment>
      <Router>
        <Navbar
          toggleMenu={toggleMenu}
          burgerMenu={burgerMenu}
          activeMenu={activeMenu}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/more" component={More} />
          {/* <Route component={NotFound} /> */}
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
