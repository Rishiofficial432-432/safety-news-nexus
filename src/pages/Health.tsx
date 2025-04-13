
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartPulse } from 'lucide-react';

const Health = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Health Advisories</h1>
          <p className="text-muted-foreground">Stay informed about public health issues and advisories</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HeartPulse className="h-5 w-5 mr-2 text-safety-high" />
              Health Advisories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <HeartPulse className="h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-xl font-medium mb-2">Health Information Coming Soon</h2>
              <p className="text-muted-foreground">
                We're working on compiling health advisories and safety recommendations.
                Check back soon for updates!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Health;
