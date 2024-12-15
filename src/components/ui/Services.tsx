import { ServiceType } from "../../types";

const Services = ({ label, icon }: ServiceType) => {
  return (
    <div className="flex flex-col w-52 justify-center items-center gap-1 hover:shadow-md p-3 h-fit rounded-xl cursor-pointer">
      <img draggable={false} className="w-10 md:w-24 " src={icon} alt={label} />
      <p className="text-xs font-semibold text-font text-center">{label}</p>
    </div>
  );
};

export default Services;
