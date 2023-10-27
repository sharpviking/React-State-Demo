import "./Box.css";
function Box({ isActive, toggle }) {
  return (
    <div
      onClick={toggle}
      className="Box"
      style={{ backgroundColor: isActive ? "orange" : "red" }}
    ></div>
  );
}

export default Box;
