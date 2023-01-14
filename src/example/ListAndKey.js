function ListItems(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  //map() 함수가 너무 중첩된다면 컴포넌트로 추출하는 것이 좋다.
  const listItems = numbers.map((number, index) => (
    <ListItems key={number.toString()} value={number} />
  ));

  return <ul>{listItems}</ul>;
}

export default NumberList;
