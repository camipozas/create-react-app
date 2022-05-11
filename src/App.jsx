import "./App.css"

const { Component, Children, PropTypes } = React

const id = <div id="app"></div>;
/* It takes a string of text, splits it into individual characters, and then wraps each character in a
span tag with a unique animation delay */
class SplitText extends Component {
  render() {
    return (
      <span aria-label={this.props.copy} role={this.props.role}>
        {this.props.copy.split("").map(function (char, index) {
          let style = { "animation-delay": 0.5 + index / 10 + "s" };
          return (
            <span aria-hidden="true" key={index} style={style}>
              {char}
            </span>
          );
        })}
      </span>
    );
  }
}

/* The `<SplitText />` component is a wrapper for the `<Split />` component. It takes in a `copy` prop
and a `role` prop. The `copy` prop is the text that will be split into individual characters. The
`role` prop is the HTML element that will be used to wrap each character */
class Layout extends Component {
  render() {
    return (
      <h1>
        <SplitText copy="Camila Pozas" role="heading" />
      </h1>
    );
  }
}

/* Rendering the `id` variable to the `app` div in the HTML. */
ReactDOM.render(id, document.getElementById("app"))
