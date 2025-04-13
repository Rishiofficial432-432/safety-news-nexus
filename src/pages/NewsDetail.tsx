
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import RiskBadge from '@/components/risks/RiskBadge';
import { getAllNews, getRiskById } from '@/services/newsService';
import { getDomainLabel, getDomainColor } from '@/utils/riskDomains';
import { formatDistanceToNow } from 'date-fns';
import { AlertTriangle, Calendar, MapPin, ArrowLeft, ExternalLink, Shield } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const allNews = getAllNews();
  const newsItem = allNews.find(news => news.id === id);
  
  if (!newsItem) {
    return (
      <AppLayout>
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-2xl font-bold mb-4">News item not found</h1>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </AppLayout>
    );
  }
  
  const formattedDate = formatDistanceToNow(new Date(newsItem.timestamp), { addSuffix: true });
  const relatedRisks = newsItem.relatedRisks.map(riskId => getRiskById(riskId)).filter(Boolean);

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Navigation */}
        <div>
          <Button variant="outline" size="sm" onClick={() => navigate(-1)} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Button>
        </div>
        
        {/* News Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge className={`${getDomainColor(newsItem.domain)}`}>
              {getDomainLabel(newsItem.domain)}
            </Badge>
            {newsItem.isBreaking && (
              <Badge variant="destructive" className="flex items-center">
                <AlertTriangle className="h-3 w-3 mr-1" />
                Breaking News
              </Badge>
            )}
            {newsItem.region && (
              <Badge variant="outline" className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {newsItem.region}
              </Badge>
            )}
          </div>
          
          <h1 className="text-3xl font-bold">{newsItem.title}</h1>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formattedDate}</span>
            <span className="mx-2">•</span>
            <span>Source: {newsItem.source}</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* News Image */}
            {newsItem.imageUrl && (
              <div className="w-full h-64 overflow-hidden rounded-lg">
                <img 
                  src={newsItem.imageUrl} 
                  alt={newsItem.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* News Content */}
            <Card>
              <CardContent className="p-6">
                <div className="prose max-w-none">
                  <p className="text-lg leading-relaxed">{newsItem.content}</p>
                  <p className="text-lg leading-relaxed mt-4">
                    Safety officials recommend staying informed about this situation and following all safety guidelines.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    For more detailed information, please visit the official source website.
                  </p>
                </div>
                
                <div className="mt-6">
                  <Button asChild className="gap-2">
                    <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                      <span>Read Full Article</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Risks */}
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-safety-high" />
                  Related Risks
                </h2>
              </CardHeader>
              <CardContent>
                {relatedRisks.length > 0 ? (
                  <div className="space-y-4">
                    {relatedRisks.map(risk => (
                      <div key={risk?.id} className="border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{risk?.title}</h3>
                          <RiskBadge risk={risk!} />
                        </div>
                        <p className="text-sm text-muted-foreground">{risk?.description}</p>
                        {risk?.location && (
                          <div className="flex items-center text-xs text-muted-foreground mt-2">
                            <MapPin className="h-3 w-3 mr-1" />
                            {risk.location}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No related risks found</p>
                )}
              </CardContent>
            </Card>
            
            {/* Related News */}
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">More from {getDomainLabel(newsItem.domain)}</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {allNews
                    .filter(news => news.domain === newsItem.domain && news.id !== newsItem.id)
                    .slice(0, 3)
                    .map(news => (
                      <Link to={`/news/${news.id}`} key={news.id} className="block">
                        <div className="border-b pb-3 last:border-0 last:pb-0 hover:bg-muted/30 p-2 rounded-sm transition-colors">
                          <h3 className="font-medium text-sm line-clamp-2">{news.title}</h3>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            {formatDistanceToNow(new Date(news.timestamp), { addSuffix: true })}
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/news">View All News</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default NewsDetail;
