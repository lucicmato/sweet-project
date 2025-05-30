export type ServiceItem = {
  title: string;
  description: string;
  imageSrc: string;
  altText?: string;
}

export type PriceCard = {
  imageSrc: string;
  priceLabel: string;
  category: string;
  description: string;
  items?: string[];
  buttonColor: 'red' | 'blue' | 'yellow' | 'green';
};