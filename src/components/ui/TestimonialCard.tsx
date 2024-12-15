import { TestimonialCardType } from "../../types";

const TestimonialCard = ({
  description,
  quoteIcon,
  profile,
}: TestimonialCardType) => {
  return (
    <div className="flex flex-col   items-center space-x-4 w-1/2 md:w-1/5 text-center gap-8 shadow-lg p-5 h-auto rounded-2xl ">
      <p className="text-sm font-normal text-font text-gray-900">
        {description}
      </p>
      <img src={quoteIcon} alt="Quote Icon" className="w-6 h-6" />

      <img src={profile.avatar} alt="Profile" className="w-10  rounded-full" />
      <h3 className="text-sm -mt-5 font-semibold text-center text-font text-gray-900 ">
        {profile.name}
      </h3>
    </div>
  );
};

export default TestimonialCard;
