export interface CarDetails {
  model: {
    name: string;
    label: string;
  };
  image: string;
  specs: {
    powerDetails: string;
    leaseAvailability: string;
    monthlyRate: string;
    grossPrice: string;
  };
}
