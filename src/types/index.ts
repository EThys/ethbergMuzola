export interface Skill {
  name: string;
  percentage: number;
}

export interface Technology {
  name: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
  description?: string;
  url?: string;
  technologies?: string[];
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface Education {
  year: string;
  degree: string;
  institution: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  social: {
    twitter?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
  };
}

