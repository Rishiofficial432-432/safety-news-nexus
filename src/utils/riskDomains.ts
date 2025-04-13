
export type RiskLevel = 'low' | 'medium' | 'high';

export type RiskDomain = 'cyber' | 'health' | 'weather' | 'disaster' | 'geo';

export interface Risk {
  id: string;
  title: string;
  description: string;
  level: RiskLevel;
  domain: RiskDomain;
  location?: string;
  timestamp: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  source: string;
  url: string;
  imageUrl?: string;
  timestamp: string;
  domain: RiskDomain;
  isBreaking: boolean;
  relatedRisks: string[]; // Risk IDs
  region?: string;
}

export const getDomainLabel = (domain: RiskDomain): string => {
  switch (domain) {
    case 'cyber':
      return 'Cybersecurity';
    case 'health':
      return 'Public Health';
    case 'weather':
      return 'Weather';
    case 'disaster':
      return 'Natural Disasters';
    case 'geo':
      return 'Geopolitical';
    default:
      return domain;
  }
};

export const getRiskLevelColor = (level: RiskLevel): string => {
  switch (level) {
    case 'low':
      return 'bg-safety-low text-white';
    case 'medium':
      return 'bg-safety-medium text-white';
    case 'high':
      return 'bg-safety-high text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

export const getDomainColor = (domain: RiskDomain): string => {
  switch (domain) {
    case 'cyber':
      return 'bg-safety-cyber text-white';
    case 'health':
      return 'bg-safety-health text-white';
    case 'weather':
      return 'bg-safety-weather text-white';
    case 'disaster':
      return 'bg-safety-disaster text-white';
    case 'geo':
      return 'bg-safety-geo text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};
