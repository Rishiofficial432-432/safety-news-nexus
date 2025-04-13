
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import NewsCard from '@/components/news/NewsCard';
import RiskBadge from '@/components/risks/RiskBadge';
import { getBreakingNews, getAllRisks, getRisksByLevel, getAllNews } from '@/services/newsService';
import { getDomainLabel, getDomainColor } from '@/utils/riskDomains';
import { Link } from 'react-router-dom';
import { AlertTriangle, Bell, Shield, Zap, ArrowRight, MapPin, Info } from 'lucide-react';

const Index = () => {
  const breakingNews = getBreakingNews();
  const allRisks = getAllRisks();
  const highRisks = getRisksByLevel('high');
  const recentNews = getAllNews().slice(0, 4);

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Breaking News Ticker */}
        {breakingNews.length > 0 && (
          <div className="bg-safety-high text-white p-2 rounded-md overflow-hidden relative">
            <div className="flex items-center whitespace-nowrap animate-marquee">
              <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="font-medium mr-4">BREAKING:</span>
              {breakingNews.map((news) => (
                <Link to={`/news/${news.id}`} key={news.id} className="mr-10 hover:underline flex items-center">
                  <span>{news.title}</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <h1 className="text-3xl font-bold">Safety Dashboard</h1>
            <p className="text-muted-foreground">Stay informed with the latest safety updates and alerts</p>
          </div>
          <Link to="/alerts">
            <Button className="gap-2">
              <Bell className="h-4 w-4" />
              View All Alerts
            </Button>
          </Link>
        </div>

        {/* Risk Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Shield className="h-5 w-5 mr-2 text-safety-high" />
                Current Risk Summary
              </CardTitle>
              <CardDescription>Overview of active safety risks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {highRisks.length > 0 ? (
                  highRisks.map((risk) => (
                    <div key={risk.id} className="flex items-start gap-2">
                      <Badge className={`${getDomainColor(risk.domain)} mt-0.5`}>
                        {getDomainLabel(risk.domain)}
                      </Badge>
                      <div>
                        <p className="font-medium">{risk.title}</p>
                        <p className="text-sm text-muted-foreground">{risk.description}</p>
                        {risk.location && (
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            {risk.location}
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4">
                    <Info className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">No high-level risks detected</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Zap className="h-5 w-5 mr-2 text-safety-high" />
                Latest News & Updates
              </CardTitle>
              <CardDescription>Recent safety news and alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All Updates</TabsTrigger>
                  <TabsTrigger value="breaking">Breaking</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="m-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {recentNews.map((news) => (
                      <Link to={`/news/${news.id}`} key={news.id}>
                        <NewsCard news={news} compact />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Link to="/news">
                      <Button variant="outline" className="gap-2">
                        <span>View All News</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </TabsContent>
                <TabsContent value="breaking" className="m-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {breakingNews.length > 0 ? (
                      breakingNews.map((news) => (
                        <Link to={`/news/${news.id}`} key={news.id}>
                          <NewsCard news={news} compact />
                        </Link>
                      ))
                    ) : (
                      <div className="col-span-2 text-center py-8">
                        <Info className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">No breaking news at this time</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Risk Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Risk Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {['cyber', 'health', 'weather', 'disaster', 'geo'].map((domain) => (
              <Link to={`/${domain}`} key={domain}>
                <Card className={`border-l-4 border-safety-${domain} hover:shadow-md transition-all`}>
                  <CardHeader>
                    <CardTitle className="text-lg">{getDomainLabel(domain as any)}</CardTitle>
                    <CardDescription>
                      {allRisks.filter(risk => risk.domain === domain).length} active risks
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
