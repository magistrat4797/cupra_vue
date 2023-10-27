export interface CarDetails {
  model: {
    name: string;
    label: string;
  };
  image: string;
  specs: {
    power_details: string;
    leaseAvailability: string;
    monthlyRate: string;
    grossPrice: string;
  };
}
