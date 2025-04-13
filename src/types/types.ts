
export interface RiskAssessment {
  id: string;
  timestamp: string;
  overallRiskScore: number;
  categories: {
    cyber: number;
    bio: number;
    geo: number;
  };
}

export interface RiskLocation {
  id: string;
  lat: number;
  lng: number;
  label: string;
  riskType: 'cyber' | 'bio' | 'geo';
  riskLevel: 'low' | 'medium' | 'high';
}

export interface TrendPoint {
  timestamp: string;
  cyber: number;
  bio: number;
  geo: number;
  integrated: number;
}
