import PropTypes from "prop-types";

function Input(props) {
  const { onInputChange, value } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    onInputChange(value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} maxLength="7" />
  );
}

Input.defaultProps = {
  value: "#000000",
};

Input.propTypes = {
  value: PropTypes.string,
};

export default Input;
