import "./styles.css";

const Box = ({ value, onBoxClick }) => (
  <div onClick={onBoxClick} className="box">
    <p>{value}</p>
  </div>
);

export default Box;
