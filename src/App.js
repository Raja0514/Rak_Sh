import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Topar from "./Components/Topar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Policy from "./Components/Policy";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topar />
        <NavBar/>
        <Switch>
           <Route path='/' component={Home} exact/>
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path='/policy' component={Policy} exact />
         </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
