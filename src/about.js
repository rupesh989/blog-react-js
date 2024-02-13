
import React from "react";
class About extends React.Component {
  constructor() {
    super();
    console.warn("props", this.props);

    // this.state = {
    //   name: "Rupesh",
    //   age: 25,
    // };
    // console.warn("Constructor  ");
  }
  componentDidMount() {
    console.warn("props", this.props);
    console.warn("props", this.props.skill);

    // console.warn("did mount");
  }
  componentDidUpdate() {
    // console.warn("did Update    ");
    // alert("Data Updated ");
  }

  // componentDidCatch(){}
  // componentWillUnmount(){}
  render() {
    // console.warn("render");

    return (
      <div>
        <h1>About us component</h1>
        {/* <h2>{this.state.name}</h2> */}
        {/* <h2>{this.state.age}</h2> */}
        {/* <button
          onClick={() => {
            this.setState({ name: "rupesh bavaskar" });
          }}
        >
          Update State
        </button> */}
      </div>
    );
  }
}

export default About;
