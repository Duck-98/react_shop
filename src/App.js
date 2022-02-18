/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import './App.css';
import { Jumbotron, Button } from 'react-bootstrap';
import React, { useState, useContext, lazy, Suspense } from 'react';
import Product from './components/product';
import data from './data';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Cart from './components/Cart';
import axios from 'axios';

//import Detail from './components/detail';
let Detail = lazy(() => {
  return import('./components/Detail.js');
});

export const rangecontext = React.createContext(); // 같은 변수 값을 공유할 범위 생성

function App() {
  const [shoeData, setShoeData] = useState(data);
  const [loading, setLoading] = useState(false);
  const [inventory, setInventory] = useState([10, 11, 12]);

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
              <div className="row">
                {shoeData.map((a, i) => {
                  return (
                    <rangecontext.Provider value={inventory}>
                      {' '}
                      {/* value={공유하고싶은 값}*/}
                      <Product shoeData={shoeData[i]} i={i} key={i} />
                    </rangecontext.Provider>
                  );
                })}
              </div>
            </div>
            {loading === true ? (
              <div className="loading">
                <p>로딩중입니다.</p>
              </div>
            ) : null}
            <button
              className="btn btn-primary"
              onClick={() => {
                // eslint-disable-next-line no-lone-blocks
                setLoading(true);
                axios
                  .get('https://codingapple1.github.io/shop/data2.json')
                  .then((result) => {
                    console.log('성공', result.data);
                    setLoading(false);
                    setShoeData([...shoeData, ...result.data]); // shoeData copy본 생성
                  })
                  .catch(() => {
                    console.log('실패');
                    setLoading(true);
                  }); // sever에 get 요청
              }}
            >
              더보기
            </button>
          </Route>

          <Route path="/detail/:id">
            <Suspense fallback={<div>로딩중</div>}>
              <Detail
                shoeData={shoeData}
                inventory={inventory}
                setInventory={setInventory}
              />
            </Suspense>
          </Route>

          <Route path="/cart">
            <Cart> </Cart>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
