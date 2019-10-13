import React from "react";

class ClassComponentDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flash: "Welcome Peeps, This is a Class Component" };
    this.noticeRef = React.createRef();
  }

  componentDidMount() {
    const flash = document.querySelectorAll("#flash")[0];
    flash.innerHTML = this.state.flash;
    this.timeout = setTimeout(() => {
      flash.innerHTML = "";
    }, 5000);
  }

  componentDidUpdate() {
    const flash = document.querySelectorAll("#flash")[0];
    if (this.timeout) clearTimeout(this.timeout);
    flash.innerHTML = this.state.flash;
    this.timeout = setTimeout(() => {
      flash.innerHTML = "";
    }, 5000);
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  handleSubmitNotice = e => {
    this.setState({ flash: this.noticeRef.current.value });
  };

  render() {
    return (
      <div>
        <h2 id="flash">Demo</h2>
        <textarea ref={this.noticeRef} type="text" />
        <div className="p-auto">
          <button onClick={this.handleSubmitNotice}>Send Flash Message</button>
        </div>
      </div>
    );
  }
}

export default ClassComponentDemo;
