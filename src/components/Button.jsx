import { Link } from "react-router-dom";

const Button = ({ route }) => {
  return (
    <Link to={route} className="btn">
      <i className="btn__icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <path
            d="M11 5L4 12L11 19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12H20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </i>
      Back To Home Page
    </Link>
  );
};

export default Button;
