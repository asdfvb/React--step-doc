import React from "react";

function Form() {
  //e는 합성 이벤트이다.
  //합성 이벤트는 모든 브라우저에서 호환가능하도록 해주기 위한 이벤트이다.
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">submit</button>
    </form>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;
