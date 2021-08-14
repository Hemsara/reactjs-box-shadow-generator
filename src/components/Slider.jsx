const Slider = ({ handleChange, min, max, value, label, name }) => {
    return (
      <>
        <label>{label}</label>
        <input
          type="range"
          name={name}
          min={min}
          max={max}
          value={value}
          class="slider"
          onChange={handleChange}
        />
      </>
    );
  };
  
  export default Slider;
  