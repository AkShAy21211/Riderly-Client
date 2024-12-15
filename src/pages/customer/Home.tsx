import Benifits from "../../components/ui/Benifits";
import { BENIFITS_HERO, SERVICES, TESTIMONIALS } from "../../constants";
import car_hero from "../../assets/icons/hero-car.png";
import Services from "../../components/ui/Services";
import car_top from "../../assets/icons/car-top.png";
import Button from "../../components/button/Button";
import TestimonialCard from "../../components/ui/TestimonialCard";
import driver_with_car from "../../assets/images/driver-with-car.jpeg";

const Home = () => {
  return (
    <main>
      {/* Hero section */}
      <section className="w-full mt-20">
        {/* Benefits Section */}
        <div className="w-full grid grid-cols-2 place-items-center gap-10 md:flex md:flex-row md:justify-around md:gap-0">
          {BENIFITS_HERO.map((benifit) => (
            <Benifits
              key={benifit.id}
              icon={benifit.icon}
              label={benifit.label}
            />
          ))}
        </div>

        {/* Car Hero Section */}
        <div className="relative bg-primary h-28 md:h-60 mt-32 md:mt-80 flex justify-center items-center">
          {/* Car Image */}
          <img
            draggable={false}
            className="absolute object-contain -translate-y-16 md:-translate-y-24 lg:-translate-y-32"
            src={car_hero}
            alt="car_hero"
          />
        </div>
      </section>

      {/* Services section */}
      <section className="w-full mt-10">
        <h2 className="text-center text-font text-xl md:text-2xl font-semibold">
          SERVICES
        </h2>
        <div className="w-full flex h-auto  justify-around gap-0 mt-10">
          {SERVICES.map((service) => (
            <Services
              key={service.id}
              label={service.label}
              icon={service.icon}
            />
          ))}
        </div>
      </section>

      {/* Job section */}
      <section className="w-full">
        <div className="w-full flex  flex-col h-auto bg-primary text-white   text-start px-5 md:px-28  gap-0 mt-10 text-font">
          <h2 className="text-3xl md:text-5xl font-extrabold mt-16 [word-spacing:5px]">
            DO YOU WANT TO JOIN WITH US
          </h2>
          <p className="mt-3 md:text-2xl">
            Join our team of drivers or rent out yout car and earn on your
            schedule. Enjoy flexible hours, weekly payouts, and a seamless
            driving experience.
          </p>
          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <img
                className="mt-5"
                draggable={false}
                src={car_top}
                alt="car_top_image"
              />
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <Button
                className=" h-fit shadow-lg shadow-black/30 bg-black text-white w-3/4 py-5 px-4 rounded-full md:text-2xl transition duration-300"
                label={"Get Started"}
                onClick={() => {}}
                type={undefined}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="w-full mt-10">
        <h2 className="text-center text-font text-xl md:text-2xl font-semibold">
          TESTIMONIAL
        </h2>
        <div className="w-full flex flex-col  items-center md:flex-row h-auto  justify-around gap-10 mt-20">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              description={testimonial.description}
              quoteIcon={testimonial.quoteIcon}
              profile={testimonial.profile}
            />
          ))}
        </div>
      </section>

      {/* Offer section */}
      <section className="w-full mt-10 ">
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-white bg-primary h-auto mt-20 ">
          {/* Image */}
          <img
            src={driver_with_car}
            alt="driver_with_car"
            className="w-full md:w-1/3 rounded-md shadow-lg "
          />
          {/* Text Content */}
          <div className="flex flex-col w-full justify-center items-start mt-5  text-center">
            <h3 className="text-2xl text-font text-start font-bold px-4 md:px-8">
              35% OFF ON YOUR FIRST BOOKING
            </h3>
            <p className=" text-start md:text-lg text-font-light mt-1 px-4 md:px-8 mb-5">
              Get behind the wheel of your dream car at an unbeatable price!
              Whether it's for a quick trip or a long getaway, Riderly has you
              covered with seamless bookings and exceptional service.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
