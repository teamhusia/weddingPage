import "./SeparatorText.css";

const SeparatorText = ({ color, width, children }) => {
  return (
    <div className="separator-container">
      <div
        className="separator-left"
        style={{ backgroundColor: color ?? "#01040c", width: width ?? "2em" }}
      ></div>
      <div className="separator-content">{children}</div>
      <div
        className="separator-right"
        style={{ backgroundColor: color ?? "#01040c", width: width ?? "2em" }}
      ></div>
    </div>
  );
};

export default SeparatorText;
