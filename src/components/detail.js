/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Detail = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const selectItem = props.shoeData.find(function (item) {
    return item.id == id;
  }); // data의 id 고유 값을 이용하여 id 값이 일치하는 값만 불러올 수 있게 find함수를 이용하여 설정
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              'https://codingapple1.github.io/shop/shoes' +
              selectItem.id +
              '.jpg'
            }
            width="100%"
            alt="profile"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{selectItem.title}</h4>
          <p>{selectItem.content}</p>
          <p>{selectItem.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack(); // 뒤로 가는 함수
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
