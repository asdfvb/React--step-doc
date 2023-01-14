import React from "react";

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1> Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggenIn = props.isLoggenIn;
  if (isLoggenIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LogintButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggenIn: false,
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({
      isLoggenIn: true,
    });
  }

  handleLogoutClick() {
    this.setState({
      isLoggenIn: false,
    });
  }

  render() {
    let button;
    const isLoggenIn = this.state.isLoggenIn;
    if (isLoggenIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggenIn={isLoggenIn} />
        {button}
      </div>
    );
  }
}

//JSX 안에서 중괄호에 javaScript 논리연산자를 이용한 표현식을 사용하기.
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    //true && expression = expression, false && expression = false 로 판단.
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
      The user is
      <b> {unreadMessages.length ? "currently" : "not"} </b>loggen in.
    </div>
  );
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: false,
    };
    this.handleWarnBanner = this.handleWarnBanner.bind(this);
  }

  handleWarnBanner() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleWarnBanner}>
          {this.state.showWarning ? "show" : "hide"}
        </button>
      </div>
    );
  }
}

export default Page;
