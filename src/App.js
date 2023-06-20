
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import AddNewProp from "./components/AddNewProp";
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Container fluid>

    <Router>

      <div className="App">

        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addNewProp" component={AddNewProp} />
        </Switch>
      </div>



    </Router>

    </Container>





  )


}

export default App;
