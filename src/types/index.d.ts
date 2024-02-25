export type NavbarLinkProps = {
  id?: number;
  link: string;
  label: string;
};

export type FooterLinkProps = {
  company: NavbarLinkProps[];
  help: NavbarLinkProps[];
  emails: { id?: number; email: string }[];
};

export interface HighlightsProps {
  id: number;
  title: string;
  img: string;
  date: string;
  speaker: string;
  description: any;
}

export interface SpeakerProps {
  id: number;
  name: string;
  title: string;
  // title2: string;
  src: string;
  description: any;
  socials: {
    platform: string;
    url: string;
  }[];
}

export interface ProductProps {
  id?: string;
  image?: string;
  ratingImageURL?: string;
  name?: string;
  rating?: string;
  reviewsCount?: string;
  discount?: string;
  price?: string;
  originalPrice?: string;
  sizes?: string[];
  description?: string;
  reviews?: Review[];
}

interface Review {
  author: string;
  content: string;
}
