export type Language = 'fr' | 'ar';

export type PageId =
  | 'accueil'
  | 'services'
  | 'apropos'
  | 'contact'
  | 'politique'
  | 'conditions';

export interface QuoteFormData {
  fullNameOrCompany: string;
  phone: string;
  email: string;
  departureCity: string;
  arrivalCity: string;
  cargoType: string;
  quantityOrVolume: string;
  preferredDate: string;
  additionalNotes: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface MoroccanCity {
  id: string;
  nameFr: string;
  nameAr: string;
  regionFr: string;
  regionAr: string;
  hub: boolean;
}
