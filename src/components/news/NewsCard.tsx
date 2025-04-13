
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NewsItem } from '@/utils/riskDomains';
import { getDomainLabel, getDomainColor } from '@/utils/riskDomains';
import { Calendar, ExternalLink } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface NewsCardProps {
  news: NewsItem;
  compact?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, compact = false }) => {
  const formattedDate = formatDistanceToNow(new Date(news.timestamp), { addSuffix: true });
  
  if (compact) {
    return (
      <Card className="h-full hover:shadow-md transition-all">
        <CardHeader className="p-4 pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-sm font-medium line-clamp-2">{news.title}</CardTitle>
          </div>
        </CardHeader>
        <CardFooter className="p-4 pt-0 flex justify-between items-center text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{formattedDate}</span>
          </div>
          <Badge className={`${getDomainColor(news.domain)} text-xs`}>{getDomainLabel(news.domain)}</Badge>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="h-full hover:shadow-md transition-all">
      {news.imageUrl && (
        <div className="w-full h-40 overflow-hidden relative">
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="w-full h-full object-cover"
          />
          {news.isBreaking && (
            <div className="absolute top-2 left-2">
              <Badge variant="destructive" className="animate-pulse">Breaking</Badge>
            </div>
          )}
        </div>
      )}
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{news.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3">{news.content}</p>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          <span>{formattedDate}</span>
          <span className="ml-2 font-medium">Source: {news.source}</span>
        </div>
        <div className="flex gap-2">
          <Badge className={`${getDomainColor(news.domain)}`}>{getDomainLabel(news.domain)}</Badge>
          {news.isBreaking && <Badge variant="destructive">Breaking</Badge>}
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
