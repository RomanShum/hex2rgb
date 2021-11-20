function Wrapper(props) {
  return <div className="content">{props.children}</div>;
}

Wrapper.defaultProps = {
  children: <div></div>,
};

export default Wrapper;
