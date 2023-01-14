import logo from "./logo.svg";
import "./App.css";
import EventHandling from "./example/EventEx.js";
import ConditionRendering from "./example/ConditionRendring.js";
import ListAndKey from "./example/ListAndKey";
import NameForm from "./example/Form";

//==========================================================

//사용자 정의 컴포넌트 사용 가능(React Dom)
//컴포넌트의 이름은 항상 대문자로 시작해야한다.
//소문자로 컴포넌트 정의시 DOM 태그로 처리한다.
//JSX 어트리뷰트와 자식을 컴포넌트에 단일 객체로 전달한다.(props)
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="SeYoung" />;

//=================================================================

//컴포넌트 합성 가능
//공통을 짜기 편할듯!
function Test() {
  return (
    <div>
      <Welcome name="KiYoon" />
      <Welcome name="GunWoo" />
      <Welcome name="Seyoung" />
    </div>
  );
}

const element2 = <Test />;

//=================================================================

//컴포넌트 추출
//메인 원본
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{new Date().getDay}</div>
    </div>
  );
}

//1. 제일안쪽 태그를 추출하여 재사용이 가능하도록함.
function AvatarImg(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

//2. 1번 추출한 태그의 상위 태그를 다시한번 추출함.
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <AvatarImg user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

//=================================================================

// (중요!) 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 합니다.

function App() {
  return (
    // <EventHandling />
    // <ConditionRendering
    //   unreadMessages={["React", "Re: React", "Re:Re: React"]}
    // />
    // <ListAndKey numbers={[1, 2, 3, 4, 5]} />
    <NameForm />

    /* <Comment
      author={{
        name: "Hello Kitty",
        avatarUrl: "./logo.svg",
      }}
      text="hello Kitty"
    /> */

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
