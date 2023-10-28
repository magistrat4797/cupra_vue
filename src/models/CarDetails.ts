export interface CarDetails {
  model: {
    name: string;
    label: string;
  };
  image: string;
  specs: {
    power_details: string;
    lease_availability: string;
    monthly_rate: string;
    gross_price: string;
  };
}
