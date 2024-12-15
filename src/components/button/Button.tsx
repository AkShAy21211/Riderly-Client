import { ButtonType } from "../../types";

const Button = ({ label, onClick, type ,className}: ButtonType) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  );
};

export default Button;
