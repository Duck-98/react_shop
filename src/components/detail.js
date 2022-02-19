/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './detail.scss';
import Inventory from './Inventory';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

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
  const [tab, setTab] = useState(0);
  const [value, setValue] = useState(false);

  useEffect(() => {
    // component가 Mount 될 때 컴포넌트가 UPDATE될 때 특정 코드를 실행시킬 수 있다.
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer); // 타이머가 종료되게 해줌
    };
  }, [alert, data]); // alert가 변경이 될때만 실행이 됨.

  // 최근 본 항목 ui 기능
  useEffect(() => {
    let arr = localStorage.getItem('watched');
    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(arr);
    }

    arr.push(id); // useParams를 이용하여 가져온 id 변수
    arr = new Set(arr); // set 자료형은 array와 같지만 중복을 자동으로 제거해줌.
    arr = [...arr];

    localStorage.setItem('watched', JSON.stringify(arr));
  }, []);

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
          <Inventory inventory={props.inventory} />

          <button
            className="btn btn-danger"
            onClick={() => {
              props.setInventory([9, 10, 11]);
              props.dispatch({
                type: 'add',
                payload: { id: selectItem.id, name: selectItem.title, quan: 1 },
              });
              history.push('/cart'); // 버튼을 클릭 했을 때 지정된 링크로 자동으로 이동하게 해줌.
            }}
          >
            주문하기
          </button>
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
      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setValue(false);
              setTab(0);
            }}
          >
            상품설명
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setValue(false);
              setTab(1);
            }}
          >
            배송정보
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={value} classNames="wow" timeout={500}>
        <TabContent tab={tab} setValue={setValue} />
      </CSSTransition>
    </div>
  );
};

const TabContent = (props) => {
  useEffect(() => {
    props.setValue(true);
  });

  if (props.tab === 0) {
    return <div>0번째 내용</div>;
  } else if (props.tab === 1) {
    return <div>1번째 내용</div>;
  }
};

function data(state) {
  // redux store data를 가져와서 props로 변환
  return {
    state: state.reducer,
    alertState: state.reducer2,
  };
}
export default connect(data)(Detail);
