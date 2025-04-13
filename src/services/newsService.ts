
import { NewsItem, Risk, RiskDomain, RiskLevel } from '@/utils/riskDomains';

// Mock data for risks
export const generateMockRisks = (): Risk[] => {
  return [
    {
      id: 'risk-1',
      title: 'Elevated Phishing Attempts',
      description: 'Increase in sophisticated phishing emails targeting financial institutions.',
      level: 'medium',
      domain: 'cyber',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'risk-2',
      title: 'COVID-19 Variant Spread',
      description: 'New COVID variant showing increased transmission in urban areas.',
      level: 'high',
      domain: 'health',
      location: 'Global',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'risk-3',
      title: 'Severe Thunderstorm Warning',
      description: 'Potential for flash flooding and hail in the southeastern region.',
      level: 'high',
      domain: 'weather',
      location: 'Southeast',
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'risk-4',
      title: 'Wildfire Risk',
      description: 'Dry conditions creating elevated wildfire risk in western states.',
      level: 'medium',
      domain: 'disaster',
      location: 'Western Region',
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'risk-5',
      title: 'Trade Agreement Tensions',
      description: 'Rising tensions between major economies affecting global trade agreements.',
      level: 'low',
      domain: 'geo',
      location: 'Global',
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'risk-6',
      title: 'Ransomware Campaign',
      description: 'New ransomware campaign targeting healthcare providers.',
      level: 'high',
      domain: 'cyber',
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'risk-7',
      title: 'Earthquake Activity',
      description: 'Increased seismic activity detected along the west coast.',
      level: 'medium',
      domain: 'disaster',
      location: 'West Coast',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    },
  ];
};

// Mock data for news items
export const generateMockNews = (): NewsItem[] => {
  return [
    {
      id: 'news-1',
      title: 'Major Data Breach Affects Millions',
      content: 'A major tech company revealed today that a data breach has compromised personal information of millions of users. Experts advise users to immediately change their passwords and enable two-factor authentication.',
      source: 'Tech Security Today',
      url: '#',
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      domain: 'cyber',
      isBreaking: true,
      relatedRisks: ['risk-1', 'risk-6'],
      region: 'Global',
    },
    {
      id: 'news-2',
      title: 'Health Officials Warn of New Virus Variant',
      content: 'Health authorities are monitoring a new COVID variant that appears to be more transmissible in densely populated areas. Vaccination effectiveness is being evaluated.',
      source: 'Global Health Monitor',
      url: '#',
      imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      domain: 'health',
      isBreaking: false,
      relatedRisks: ['risk-2'],
      region: 'North America',
    },
    {
      id: 'news-3',
      title: 'Hurricane Warning Issued for Coastal Areas',
      content: 'The National Weather Service has issued a hurricane warning for several coastal counties. Residents are advised to prepare emergency kits and follow evacuation orders if issued.',
      source: 'Weather Alert Network',
      url: '#',
      imageUrl: 'https://images.unsplash.com/photo-1531012278403-e7d562163c1f',
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      domain: 'weather',
      isBreaking: true,
      relatedRisks: ['risk-3'],
      region: 'Southeast',
    },
    {
      id: 'news-4',
      title: 'Wildfire Spreads in National Forest',
      content: 'A wildfire has spread to over 5,000 acres in the national forest. Multiple firefighting crews have been deployed and nearby communities are on alert for possible evacuation.',
      source: 'Emergency Response Network',
      url: '#',
      imageUrl: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      domain: 'disaster',
      isBreaking: false,
      relatedRisks: ['risk-4'],
      region: 'Western Region',
    },
    {
      id: 'news-5',
      title: 'International Summit Addresses Security Concerns',
      content: 'Leaders from major nations are meeting to discuss growing security concerns and trade disagreements. Market analysts predict potential impacts on global trade agreements.',
      source: 'World Affairs Journal',
      url: '#',
      imageUrl: 'https://images.unsplash.com/photo-1607695334424-cb1cc6c5bc4d',
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      domain: 'geo',
      isBreaking: false,
      relatedRisks: ['risk-5'],
      region: 'Global',
    },
    {
      id: 'news-6',
      title: 'Banks Issue Alert on New Phishing Campaign',
      content: 'Several major banks have issued alerts about a sophisticated phishing campaign targeting customers. The emails appear to come from legitimate bank addresses and request verification of account information.',
      source: 'Financial Security Alert',
      url: '#',
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      domain: 'cyber',
      isBreaking: false,
      relatedRisks: ['risk-1'],
      region: 'North America',
    },
    {
      id: 'news-7',
      title: 'Earthquake Preparedness Drills Scheduled',
      content: 'Following increased seismic activity, authorities have scheduled earthquake preparedness drills in several west coast cities. Residents are encouraged to participate and review emergency plans.',
      source: 'Disaster Readiness Today',
      url: '#',
      imageUrl: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      domain: 'disaster',
      isBreaking: false,
      relatedRisks: ['risk-7'],
      region: 'West Coast',
    },
    {
      id: 'news-8',
      title: 'Healthcare Systems Targeted by Ransomware',
      content: 'Multiple healthcare providers have reported ransomware attacks disrupting their systems. Security experts are working with affected organizations to restore services and protect patient data.',
      source: 'Health Tech Security',
      url: '#',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      domain: 'cyber',
      isBreaking: true,
      relatedRisks: ['risk-6'],
      region: 'Global',
    },
  ];
};

// Get all news
export const getAllNews = (): NewsItem[] => {
  return generateMockNews();
};

// Get breaking news
export const getBreakingNews = (): NewsItem[] => {
  return generateMockNews().filter(news => news.isBreaking);
};

// Get news by domain
export const getNewsByDomain = (domain: RiskDomain): NewsItem[] => {
  return generateMockNews().filter(news => news.domain === domain);
};

// Get news by region
export const getNewsByRegion = (region: string): NewsItem[] => {
  return generateMockNews().filter(news => news.region === region);
};

// Get news related to a specific risk
export const getNewsByRiskId = (riskId: string): NewsItem[] => {
  return generateMockNews().filter(news => news.relatedRisks.includes(riskId));
};

// Get all risks
export const getAllRisks = (): Risk[] => {
  return generateMockRisks();
};

// Get risks by level
export const getRisksByLevel = (level: RiskLevel): Risk[] => {
  return generateMockRisks().filter(risk => risk.level === level);
};

// Get risks by domain
export const getRisksByDomain = (domain: RiskDomain): Risk[] => {
  return generateMockRisks().filter(risk => risk.domain === domain);
};

// Get a single risk by ID
export const getRiskById = (id: string): Risk | undefined => {
  return generateMockRisks().find(risk => risk.id === id);
};
