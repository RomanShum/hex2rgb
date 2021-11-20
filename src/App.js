import "./App.css";
import Wrapper from "./components/Wrapper";
import Input from "./components/Input";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("#000000");
  const [error, setError] = useState(false);

  const handleChange = (valueInput) => {
    setValue(valueInput);
    let regex = /^(#)([A-Fa-f0-9]{6})$/;
    setError(regex.exec(valueInput) !== null ? false : true);
  };

  return (
    <div className="wrap" style={{ background: error ? "red" : value }}>
      <Wrapper>
        <Input value={value} onInputChange={handleChange} />
        <Display hex={value} error={error} />
      </Wrapper>
    </div>
  );
}

export default App;
