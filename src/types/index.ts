export type PageRoute = 
  | 'home' 
  | 'services' 
  | 'service-detail' 
  | 'work' 
  | 'project-detail' 
  | 'about' 
  | 'contact';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  materialsUsed: string[];
  idealFor: string;
  primaryImage: string;
  galleryImages: string[];
  iconName: string;
  emergencyAvailable?: boolean;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  scope: string;
  description: string;
  primaryImage: string;
  galleryImages: string[];
  beforeAfter?: {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
  features: string[];
}

export interface CompanyDetails {
  name: string;
  legalName: string;
  tagline: string;
  subheadline: string;
  phone: string;
  displayPhone: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  serviceAreaName: string;
  primaryCities: string[];
  hours: string;
  emergencyService: string;
  credentials: {
    title: string;
    description: string;
    verified: boolean;
  }[];
  founder: {
    name: string;
    role: string;
    photo: string;
    quote: string;
  };
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  cityPostal: string;
  projectDescription: string;
  preferredTimeline: string;
  photos: File[];
}
