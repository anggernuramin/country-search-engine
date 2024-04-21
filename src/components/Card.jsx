const Card = ({ children, shadow, overflowHidden, description }) => {
  return (
    <div
      className={`country ${shadow ? "shadow" : ""} ${
        overflowHidden ? "overflow-hidden" : ""
      } ${description ? "description" : ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
