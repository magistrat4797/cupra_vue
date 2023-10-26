export interface CarFeature {
  title: string;
  subtitle: string;
  image: string;
  action: {
    text: string;
    href: string;
    btnStyle: string;
    scrollTo?: string;
  };
}
