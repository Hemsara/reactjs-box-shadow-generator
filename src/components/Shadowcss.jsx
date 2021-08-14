const Shadowcss = ({ h_offset, v_offset, blur, spread }) => {
    const styles = {
      boxShadow: `${h_offset}px ${v_offset}px ${blur}px ${spread}px #9E9E9E`,
    };
  
    return (
      <div className="css" style={styles}>
        <div className="macos">
          <div className="bullet red"></div>
          <div className="bullet orange"></div>
          <div className="bullet green"></div>
        </div>
        <div className="code">
          <p className="value">
            <span className="prop">box-shadow :</span>{" "}
            <span className="x">{h_offset}px</span> <span className="y">{v_offset}px</span>{" "}
            <span className="blur">{blur}px</span> <span>{spread}px</span>{" "}
            <span className="color">#9E9E9E</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default Shadowcss;
  