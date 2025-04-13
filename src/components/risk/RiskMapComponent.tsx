
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RiskAssessment, RiskLocation } from '@/types/types';
import { generateMockRiskLocations, getRiskLevelBgColor, getRiskTypeBgColor } from '@/services/mockData';
import { GlobeIcon } from 'lucide-react';

interface RiskMapProps {
  risk?: RiskAssessment;
}

const RiskMapComponent = ({ risk }: RiskMapProps) => {
  const [locations, setLocations] = useState<RiskLocation[]>([]);
  const [activeTab, setActiveTab] = useState<string>('all');
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setLocations(generateMockRiskLocations());
  }, [risk]);

  // Filter locations based on active tab
  const filteredLocations = locations.filter(location => {
    if (activeTab === 'all') return true;
    return location.riskType === activeTab;
  });

  return (
    <Card className="col-span-1 md:col-span-2 shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold flex items-center">
            <GlobeIcon className="mr-2 h-5 w-5" />
            Global Risk Map
          </CardTitle>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="cyber">Cyber</TabsTrigger>
              <TabsTrigger value="bio">Biological</TabsTrigger>
              <TabsTrigger value="geo">Geopolitical</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[400px] bg-slate-100 dark:bg-slate-800 rounded-md relative map-container">
          {/* This would be replaced with actual map implementation */}
          <div ref={mapRef} className="w-full h-full overflow-hidden relative">
            {/* Grid pattern background */}
            <div className="absolute inset-0" style={{ 
              backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)`, 
              backgroundSize: '20px 20px' 
            }}></div>
            
            {/* Map Hotspots */}
            {filteredLocations.map(location => (
              <div 
                key={location.id}
                className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ 
                  left: `${((location.lng + 180) / 360) * 100}%`, 
                  top: `${((90 - location.lat) / 180) * 100}%` 
                }}
              >
                <div className={`
                  h-3 w-3 rounded-full 
                  ${getRiskTypeBgColor(location.riskType)} 
                  animate-pulse
                  group-hover:scale-150 transition-transform
                `}>
                  <div className={`absolute -top-1 -left-1 h-5 w-5 rounded-full ${getRiskTypeBgColor(location.riskType)} opacity-30`}></div>
                </div>
                
                <div className="absolute opacity-0 group-hover:opacity-100 bg-white dark:bg-gray-800 text-xs rounded shadow-lg p-2 -mt-24 ml-2 min-w-[150px] z-50 transition-opacity">
                  <p className="font-bold">{location.label}</p>
                  <div className="flex items-center mt-1">
                    <span className={`inline-block h-2 w-2 rounded-full mr-1 ${getRiskLevelBgColor(location.riskLevel)}`}></span>
                    <span>{location.riskType.charAt(0).toUpperCase() + location.riskType.slice(1)} Risk: {location.riskLevel}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Map Legend */}
            <div className="absolute bottom-3 right-3 bg-white dark:bg-gray-800 rounded p-2 shadow-md text-xs z-20">
              <div className="font-bold mb-1">Risk Types</div>
              <div className="flex items-center mb-1">
                <span className="inline-block h-2 w-2 rounded-full mr-2 bg-blue-500"></span>
                <span>Cyber</span>
              </div>
              <div className="flex items-center mb-1">
                <span className="inline-block h-2 w-2 rounded-full mr-2 bg-green-600"></span>
                <span>Biological</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block h-2 w-2 rounded-full mr-2 bg-amber-500"></span>
                <span>Geopolitical</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskMapComponent;
