
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

const Cyber = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Cyber Threats</h1>
          <p className="text-muted-foreground">Stay protected from cyber security threats</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShieldAlert className="h-5 w-5 mr-2 text-safety-high" />
              Cyber Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <ShieldAlert className="h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-xl font-medium mb-2">Cyber Threat Information Coming Soon</h2>
              <p className="text-muted-foreground">
                We're working on compiling cyber security threats and advisories.
                Check back soon for updates!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Cyber;
