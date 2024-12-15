import { ButtonType } from "../../types";

const Button = ({
  label,
  onClick,
  type,
  className,
  isSubmitting,
}: ButtonType) => {
  return (
    <button
      type={type}
      disabled={isSubmitting}
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  );
};

export default Button;
