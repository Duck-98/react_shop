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
import axios from 'axios';

function App() {
  const [shoeData, setShoeData] = useState(data);
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Jumbotron className="background">
              <h1>30% Season Sale</h1>
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
            <button
              className="btn btn-primary"
              onClick={() => {
                axios
                  .get('https://codingapple1.github.io/shop/data2.json')
                  .then((result) => {
                    console.log('성공', result.data);
                  })
                  .catch(() => {
                    console.log('실패');
                  }); // sever에 get 요청
              }}
            >
              더보기
            </button>
          </Route>

          <Route path="/detail/:id">
            <Detail shoeData={shoeData} />
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
