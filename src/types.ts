export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metrics: string;
  typicalTimeline: string;
  image?: string;
  highlighted?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientIndustry: string;
  timeline: string;
  metricHighlight: string;
  metricLabel: string;
  overview: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  category: 'supply_chain' | 'operations' | 'capital_strategy';
  image?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  metricResult: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceId: string;
  estimatedBudget: string;
  preferredDate: string;
  preferredTime: string;
  projectScope: string;
}
