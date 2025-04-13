
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CloudLightning } from 'lucide-react';

const Weather = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Weather Alerts</h1>
          <p className="text-muted-foreground">Stay updated on weather conditions and alerts</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CloudLightning className="h-5 w-5 mr-2 text-safety-high" />
              Weather Conditions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <CloudLightning className="h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-xl font-medium mb-2">Weather Alerts Coming Soon</h2>
              <p className="text-muted-foreground">
                We're working on integrating real-time weather data and alerts.
                Check back soon for updates!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Weather;
