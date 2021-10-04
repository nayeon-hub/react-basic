import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  console.log(useState(0));
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    // 함수적 갱신
    setNumber((prevNumber) => prevNumber - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;

// 최초 렌더링을 하는 동안, 반환된 number는 첫번째 전달된 인자("")의 값과 같다.
// setNumber 함수는 number를 갱신할 때 사용한다. 새 state값을 받아 컴포넌트 리렌더링을 큐에 등록한다.
// 다음 리렌더링 시에 useState를 통해 반환받은 첫번째 값은 항상 갱신된 최신 state가 된다.
// Change 이벤트가 발생될 때마다 리렌더링되고, 최신 number가 된다.
