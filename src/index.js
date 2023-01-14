import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

//1초씩 늘어나는 시간초 예제.
//React가 전체 화면을 렌더링하는게 아니고 변경된부분만 렌더링 되는 모습을 개발자도구를 통해 볼수 있다.
function tick() {
  var element = (
    <div>
      <h1>hello, world!</h1>
      <h2>Time to late, {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  // root.render(element);
}

setInterval(tick, 1000);

class Clock extends React.Component {
  //1. Clock 컴포넌트가 root.render로 전달된 후

  //2. React는 CLock 컴포넌트의 constructor를 호출한다.
  //this.state를 지정하는 class constructor
  constructor(props) {
    super(props);
    //변경시 React가 자동 인지하는 고정 변수 값이라 생각됨.

    /*
    State 주의사항!!
      1. 직접 state를 수정하지말자!
        ex)this.state.name = "John"; (X)
        state를 직접 수정시 컴포넌트를 다시 렌더링하지 않는다
        ex)this.setState({name : "John"}) (O)
        직접 지정할수 있는 유일 공간은 컴포넌트의 constructor 이다.
      
        
      2. State 업데이트는 비동기적일 수 있다.
        React는 성능상 setState() 호출을 단일 업데이트로 한꺼번에 처리 할수 있다.

        this.props와 this.state가 비동기적으로 업데이트될수 있기 때문에 
        ex)
        (X)
        this.setState({ 
          counter : this.state.counter + this.props.increment
        })

        ex)
        (O) - 함수는 이전 state를 첫번째 인자로 받아들이고, 업데이트가 적용된 시점의 props를 두번째 인자로 받아들이기 때문에
              비동기에도 안전하게 업데이트 될수 있다.
        this.setState((state, props) => ({
          return {
            counter : state.counter + props.increment
          }
        }));
        위 코드는 카운터 업데이트에 실패할 수 있다.

      3. 데이터는 아래로 흐른다.
        컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달할수 있다.
        ex) <FormattedDate date={this.state.date}/>
        FormattedDate 컴포넌트는 date를 자신의 props로 받을 것이고 이 값이 Clock에서 왔는지 FormattedDate 컴포넌트에 값인지 알수는 없다.

    */

    this.state = {
      date: new Date(),
      name: props.name,
    };
  }

  /*
    4. componentDidMount메서드 호출한다.
    매초 컴포넌트의 tick() 메소드를 호출하기 위한 타이머를 설정하도록 브라우저에 요청한다.
  */

  //생명주기 메서드
  //컴포넌트 출력물이 DOM에 렌더링 된 후에 실행됩니다.
  //이장소가 타이머를 설정하기에 좋은 장소이다.
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  /*
    6. Clock 컴포넌트가 DOM으로부터 한번이라도 삭제된다면 
    React는 타이머를 멈추기 위해 해당 메소드를 호출한다.
  */
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  /*
    5. componentDidMount() 메서드에 설정된 대로 매초 tick 메소드가 호출되면서 
    Clock 컴포넌트의 this.state.date 값을 업데이트시켜준다.
    React는 this.state가 변경되는것을 인지하고 화면에 표시될 내용을 알아내기 위해 render()메서드를 다시 호출한다.
    이때 render메서드 안의 this.state.date가 달라지고 React는 DOM을 업데이트한다.
  */
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  //3. React는 render 메서드를 호출한다.
  //render 메서드가 호출되면서 React는 화면에 표시되어야 할 내용을 알게 된다.
  //React는 Clock의 렌더링 출력값을 일치시키기 위해 DOM에 삽입한다.
  render() {
    //render는 이벤트가 발생할때마다 호출된다.
    return (
      <div>
        <h1>hello, {this.state.name}</h1>
        <h2>Time to late2, {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
