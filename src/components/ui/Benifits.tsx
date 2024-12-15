
import { BenifitType } from "../../types";
const Benifits = ({icon,label}:BenifitType) => {
  return (
    <div className="flex gap-3 justify-around">
      <img draggable={false} className="w-10" src={icon} alt={label} />
      <p className="text-sm text-font">{label}</p>
    </div>
  );
};

export default Benifits;
