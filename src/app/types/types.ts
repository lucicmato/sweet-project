export type ServiceItem = {
  title: string;
  description: string;
  imageSrc: string;
  altText?: string;
};

export type PriceCard = {
  imageSrc: string;
  priceLabel: string;
  category: string;
  description: string;
  items?: string[];
  buttonColor: 'red' | 'blue' | 'yellow' | 'green';
};

export type TeamMember = {
  name: string;
  description: string;
  imageSrc: string;
  socialLinks: SocialMedia[];
};

export type SocialMedia = {
  platform: string;
  url: string;
  icon: string;
};
