
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';
import RiskMapComponent from '@/components/risk/RiskMapComponent';

const RiskMap = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Risk Map</h1>
          <p className="text-muted-foreground">View and monitor safety risks in your area</p>
        </div>

        <RiskMapComponent />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Shield className="h-5 w-5 mr-2 text-safety-high" />
                Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">
                  The risk map shows potential threats and safety concerns globally. Hover over points to see details.
                </p>
                <p className="text-sm">
                  Filter the map by risk type using the tabs at the top of the map.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Shield className="h-5 w-5 mr-2 text-safety-medium" />
                Risk Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span>Cyber: Digital threats, hacking, ransomware</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
                  <span>Biological: Disease outbreaks, health hazards</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                  <span>Geopolitical: Conflicts, political instability</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Shield className="h-5 w-5 mr-2 text-safety-low" />
                Safety Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Monitor travel advisories for high-risk areas</li>
                <li>Register with embassy when traveling internationally</li>
                <li>Keep emergency contacts and information accessible</li>
                <li>Stay informed about local risks and safety protocols</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default RiskMap;
