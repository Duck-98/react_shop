/* eslint-disable no-unused-vars */
import './App.css';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Jumbotron,
  Button,
} from 'react-bootstrap';
import React, { useState } from 'react';
import Product from './components/product';
import data from './data';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './components/detail';
import Header from './components/header';

function App() {
  const [shoeData, setShoeData] = useState(data);
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Jumbotron className="background">
              <h1 color="white">30% Season Sale</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
            <div className="container">
              {shoeData.map((a, i) => {
                return <Product shoeData={shoeData[i]} i={i} key={i} />;
              })}
            </div>
          </Route>

          <Route path="/detail">
            <Detail />
          </Route>

          <Route path="/:id">
            <div>아무거나</div>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
