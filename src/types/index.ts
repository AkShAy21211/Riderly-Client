export type RegisterFormType = {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type LoginFormType = {
  email: string;
  password: string;
};

export type ButtonType = {
  label: string;
  onClick?: () => void;
  type: any;
  className: string;
};

export type BenifitType = {
  label: string;
  icon: string;
};

export type ServiceType = {
  label: string;
  icon: string;
};

export type TestimonialCardType = {
  description: string;
  quoteIcon: string;
  profile:{
    name: string;
    avatar: string;
  };
};

