### memo

##### 성능을 향상을 위해 좋은 함수

- 예시

```js
function Cart() {
  return <Parent name="john" old="20" />;
}

function Parent(props) {
  return (
    <div>
      <Child1 name={props.name} />
      <Child2 old={props.old} />
    </div>
  );
}
function Child1() {
  useEffect(() => {
    console.log('렌더링됨1');
  });
  return <div>1111</div>;
}
function Child2() {
  useEffect(() => {
    console.log('렌더링됨2');
  });
  return <div>2222</div>;
}
```

##### 위와 같이 Props를 전달하여 부모 컴포넌트에서 사용하는 데이터를 자식 컴포넌트에서 사용할 수 있게 했다고 치자.

위와 같이 코드를 짜게 되면 불필요한 재 렌더링이 발생하여 코드의 효율이 떨어질 수 있다.

예를 들어, Parent 컴포넌트에서 사용되는 name 데이터를 수정하게 되면,
자식 컴포넌트 전부가 재 렌더링이 발생하게 된다.

그렇기 때문에 위와 같은 비 효율적인 상황을 막기 위해서, 우리는 memo함수를 이용해야한다.

```js
function Cart() {
  return <Parent name="john" old="20" />;
}

function Parent(props) {
  return (
    <div>
      <Child1 name={props.name} />
      <Child2 old={props.old} />
    </div>
  );
}
function Child1() {
  useEffect(() => {
    console.log('렌더링됨1');
  });
  return <div>1111</div>;
}
const Child2 = memo(function () {
  useEffect(() => {
    console.log('렌더링됨2');
  });
  return <div>2222</div>;
});
```

Child2 컴포넌트를 memo 함수를 이용하여 감싸게 되면, child2 컴포넌트와 관련된 props(데이터)가 변경될 때만 재렌더링이 발생할 수 있게되어, 훨씬 성능이 효율적인 코드를 작성할 수 있게 된다.
