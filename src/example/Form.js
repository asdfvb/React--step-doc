//제어 컴포넌트
//React에 의해 값이 제어되는 입력 폼 엘리먼트를 의미한다.
//사용자의 입력을 기반으로 state를 관리하고 업데이트한다.
//항상 최신값을 유지한다.

/**
 * 제어 컴포넌트 사용시기
 *
 * 1. 유효성 검사
 * 2. 유효한 데이터가 없는 경우 전송 버튼의 상태를 disabled 시키기
 *
 *
 * 문제점.
 * 타자 한번의 입력에도 리렌더링하여 값이 갱신되어 버리기때문에
 * 자원 낭비 문제가 발생한다.
 */

//비제어 컴포넌트 (state 사용x -> ref 사용o)
/*
    값이 실시간으로 동기화 되지 않는다. 따라서 a에대한 변화를 즉각적으로 b가 영향을 받아야 할때 비제어 컴포넌트는 대응 할수 없다.
    사용자가 직접 트리거를 하기 전까지는 리렌더링을 발생시키지도 않고, 값을 동기화 시키지도 않는다.
*/

import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginId: "",
      password: "",
      cn: "",
      deptCd: "coconut",
    };
    this.handleElementChange = this.handleElementChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCnTAChange = this.handleCnTAChange.bind(this);
    this.handleDeptChange = this.handleDeptChange.bind(this);
  }

  handleElementChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleCnTAChange(event) {
    this.setState({
      cn: event.target.value,
    });
  }

  handleDeptChange(event) {
    this.setState({
      deptCd: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name :
            <input
              type="text"
              name="loginId"
              value={this.state.loginId}
              onChange={this.handleElementChange}
            />
          </label>
          <label>
            Password :
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleElementChange}
            />
          </label>
          <textarea
            value={this.state.cn}
            onChange={this.handleCnTAChange}
          ></textarea>
          <select value={this.state.deptCd} onChange={this.handleDeptChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default NameForm;
