
import { RiskLocation, TrendPoint } from "@/types/types";

// Generate random risk locations around the world
export function generateMockRiskLocations(): RiskLocation[] {
  const riskTypes = ['cyber', 'bio', 'geo'] as const;
  const riskLevels = ['low', 'medium', 'high'] as const;
  const cityLabels = [
    'New York, USA', 'London, UK', 'Tokyo, Japan', 'Sydney, Australia',
    'Moscow, Russia', 'Beijing, China', 'Rio de Janeiro, Brazil', 'Cape Town, South Africa',
    'New Delhi, India', 'Paris, France', 'Berlin, Germany', 'Cairo, Egypt',
    'Mexico City, Mexico', 'Toronto, Canada', 'Dubai, UAE', 'Singapore'
  ];

  return Array.from({ length: 20 }, (_, i) => {
    const riskType = riskTypes[Math.floor(Math.random() * riskTypes.length)];
    return {
      id: `risk-location-${i}`,
      lat: (Math.random() * 140) - 70, // -70 to 70 lat
      lng: (Math.random() * 320) - 160, // -160 to 160 lng
      label: cityLabels[i % cityLabels.length],
      riskType: riskType,
      riskLevel: riskLevels[Math.floor(Math.random() * riskLevels.length)]
    };
  });
}

// Generate mock trend data
export function generateMockTrendData(days: number): TrendPoint[] {
  const data: TrendPoint[] = [];
  const today = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    const cyber = 20 + Math.random() * 40;
    const bio = 15 + Math.random() * 45;
    const geo = 25 + Math.random() * 35;
    
    data.push({
      timestamp: date.toISOString(),
      cyber: Math.round(cyber),
      bio: Math.round(bio),
      geo: Math.round(geo),
      integrated: Math.round((cyber + bio + geo) / 3)
    });
  }
  
  return data;
}

// Helper functions for coloring
export function getRiskLevelBgColor(level: 'low' | 'medium' | 'high'): string {
  switch (level) {
    case 'low':
      return 'bg-green-500';
    case 'medium':
      return 'bg-yellow-500';
    case 'high':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
}

export function getRiskTypeBgColor(type: 'cyber' | 'bio' | 'geo'): string {
  switch (type) {
    case 'cyber':
      return 'bg-blue-500';
    case 'bio':
      return 'bg-green-600';
    case 'geo':
      return 'bg-amber-500';
    default:
      return 'bg-gray-500';
  }
}
