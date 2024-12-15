import affordibility from "../assets/icons/affordability.png";
import safety from "../assets/icons/safety.png";
import flexibility from "../assets/icons/flexibility.png";
import convenince from "../assets/icons/convenince.png";

import car from "../assets/icons/Car.png";
import driver from "../assets/icons/Driver.png";
import city from "../assets/icons/City.png";

import person from "../assets/icons/person.png";
import quote from "../assets/icons/Quote.png";
export const BENIFITS_HERO = [

    {
        id:1,
        icon:convenince,
        label:"Convenience"
    },
    {
        id:2,
        icon:safety,
        label:"Safety",
    },
    {
        id:3,
        icon:affordibility,
        label:"Affordability"
    },
    {
        id:4,
        icon:flexibility,
        label:"Flexibility"
    }
]


export const SERVICES = [

    {
        id:1,
        icon:car,
        label:"CAR RENTEL"
    },
    {
        id:2,
        icon:driver,
        label:"HIRE DRIVER",
    },
    {
        id:3,
        icon:city,
        label:"INTERCITY TRANSFER"
    }
]

export const TESTIMONIALS = [
  {
    id:1,
    description:
      "Riderly made my travel so easy! The platform is seamless, and the car options are fantastic. Highly recommended!",
    quoteIcon: quote,
    profile: {
      name: "John Doe",
      avatar: person,
    },
  },
  {
    id:2,
    description:
      "A wonderful experience! Booking a car was quick, and the support team was extremely helpful throughout my trip.",
    quoteIcon: quote,
    profile: {
      name: "Jane Smith",
      avatar: person,
    },
  },
  {
    id:3,
    description:
      "Affordable, reliable, and convenient! Riderly exceeded all my expectations. I’ll definitely use it again.",
    quoteIcon: quote,
    profile: {
      name: "Robert Brown",
      avatar: person,
    },
  },
];

