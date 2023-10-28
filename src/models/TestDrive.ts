export interface FormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

export interface Input {
  key: keyof FormData;
  type: 'text' | 'email' | 'tel';
  placeholder?: string;
  isRequired?: boolean;
}