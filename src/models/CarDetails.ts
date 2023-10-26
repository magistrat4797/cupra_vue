export interface CarDetails {
  model: string;
  image: string;
  specs: {
    power_details: string;
    leaseAvailability: string;
    monthlyRate: string;
    grossPrice: string;
  };
}
