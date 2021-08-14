import { useState } from "react";
import Shadowcss from "./components/Shadowcss";
import Slider from "./components/Slider";

function App() {
  //box shadow : h_offset v_offset blur spread #color;

  const [value, setValue] = useState({
    h_offset: 0,
    v_offset: 0,
    blur: 0,
    spread: 0,
  });

  //assigning the slider values on change
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  //--------------------------

  return (
    <div className="App">
      <div className="shadow-generator">
        <h1 align="center">React Box Shadow Generator</h1>

        <div className="css-card">
          <Shadowcss
            h_offset={value.h_offset}
            v_offset={value.v_offset}
            blur={value.blur}
            spread={value.spread}
          />
        </div>

        <div className="slider-container">
          
          {/* Sliders */}
          <Slider
            value={value.h_offset}
            handleChange={handleChange}
            min="-100"
            max="100"
            label="Horizontal offset"
            name={"h_offset"}
          />

          <Slider
            value={value.v_offset}
            handleChange={handleChange}
            min="-100"
            max="100"
            label="Vertical offset"
            name={"v_offset"}
          />


          <Slider
            value={value.spread}
            handleChange={handleChange}
            min="-100"
            max="100"
            label="Spread"
            name={"spread"}
          />

          
          <Slider
            value={value.blur}
            handleChange={handleChange}
            min="0"
            max="100"
            label="Blur"
            name={"blur"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
