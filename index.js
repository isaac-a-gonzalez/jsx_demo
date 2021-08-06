class JSXDemo extends React.Component {
  render() {
    return (
      <img
        src="https://images.unsplash.com/photo-1628107629380-bc93cf5769e2?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
