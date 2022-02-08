/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './detail.scss';

const Box = styled.div`
  padding: 20px;
`;
const Subject = styled.h4`
  font-size: 25px;
  color: ${(props) => props.colors};
`;

const Detail = (props) => {
  const [alert, setAlert] = useState(true);
  const [data, setData] = useState('');

  useEffect(() => {
    // component가 Mount 될 때 컴포넌트가 UPDATE될 때 특정 코드를 실행시킬 수 있다.
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer); // 타이머가 종료되게 해줌
    };
  }, [alert, data]); // alert가 변경이 될때만 실행이 됨.

  const { id } = useParams();
  const history = useHistory();
  const selectItem = props.shoeData.find(function (item) {
    return item.id == id;
  }); // data의 id 고유 값을 이용하여 id 값이 일치하는 값만 불러올 수 있게 find함수를 이용하여 설정
  return (
    <div className="container">
      <Box>
        <Subject className="red">Detail</Subject>
      </Box>
      <input
        onChange={(e) => {
          setData(e.target.value);
        }}
      />

      {alert === true ? (
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={
              'https://codingapple1.github.io/shop/shoes' +
              (selectItem.id + 1) +
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
