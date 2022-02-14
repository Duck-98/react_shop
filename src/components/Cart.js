import React from 'react';
import { Table } from 'react-bootstrap';
import { connect, useSelector, useDispatch } from 'react-redux';

const Cart = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state.reducer);
  return (
    <>
      <div>
        <Table responsive="sm">
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
          <tbody>
            {state.reducer.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.quan}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch({ type: 'increase', data: a.id });
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        dispatch({ type: 'decrease', data: a.id });
                      }}
                    >
                      -
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {props.alertState === true ? (
          <div className="my-alert2">
            <p>지금 구매하면 신규 할인 20%</p>
            <button
              onClick={() => {
                dispatch({ type: 'exit' });
              }}
            >
              x
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};
/*
function data(state) {
  // redux store data를 가져와서 props로 변환
  return {
    state: state.reducer,
    alertState: state.reducer2,
  };
}

export default connect(data)(Cart);
*/
export default Cart;
