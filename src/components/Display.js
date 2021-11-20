import PropTypes from "prop-types";

function Display(props) {
  const { hex, error } = props;
  const rgb = (hex) => {
    let rgb = "";

    if (hex.substring(0, 1) === "#") {
      rgb = hex.substring(1);
    }

    let rgbColor = {};
    rgbColor.r = parseInt(rgb.substring(0, 2), 16);
    rgbColor.g = parseInt(rgb.substring(2, 4), 16);
    rgbColor.b = parseInt(rgb.substring(4), 16);

    return `rgb(${rgbColor.r},${rgbColor.g},${rgbColor.b})`;
  };

  return <div className="display">{error ? "Ошибка!" : rgb(hex)}</div>;
}

Display.defaultProps = {
  hex: "#000000",
  error: false,
};

Display.propTypes = {
  hex: PropTypes.string,
  error: PropTypes.bool,
};

export default Display;
