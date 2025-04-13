
import React, { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import NewsCard from '@/components/news/NewsCard';
import { getAllNews, getBreakingNews } from '@/services/newsService';
import { RiskDomain, getDomainLabel } from '@/utils/riskDomains';
import { Link } from 'react-router-dom';
import { AlertTriangle, Search, Filter, Bell } from 'lucide-react';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [domainFilter, setDomainFilter] = useState<string>('all');
  const allNews = getAllNews();
  const breakingNews = getBreakingNews();
  
  const filteredNews = allNews.filter(news => {
    // Apply search filter
    const matchesSearch = !searchQuery || 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      news.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply domain filter
    const matchesDomain = domainFilter === 'all' || news.domain === domainFilter;
    
    return matchesSearch && matchesDomain;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Already filtering dynamically, so no need to do anything else here
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Breaking News Alert */}
        {breakingNews.length > 0 && (
          <div className="bg-safety-high text-white p-4 rounded-md">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <h2 className="font-bold text-lg">Breaking News Alerts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {breakingNews.slice(0, 2).map((news) => (
                <div key={news.id} className="bg-white/10 p-3 rounded-sm">
                  <h3 className="font-medium">{news.title}</h3>
                  <p className="text-sm mt-1 line-clamp-2">{news.content}</p>
                  <Link to={`/news/${news.id}`} className="text-sm flex items-center mt-2 hover:underline">
                    Read more
                    <Bell className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold">News & Updates</h1>
          <p className="text-muted-foreground">Stay informed with the latest safety news and alerts</p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input 
                  placeholder="Search news..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <Select value={domainFilter} onValueChange={setDomainFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Domains</SelectItem>
                    <SelectItem value="cyber">Cybersecurity</SelectItem>
                    <SelectItem value="health">Public Health</SelectItem>
                    <SelectItem value="weather">Weather</SelectItem>
                    <SelectItem value="disaster">Natural Disasters</SelectItem>
                    <SelectItem value="geo">Geopolitical</SelectItem>
                  </SelectContent>
                </Select>
                <Button type="submit" variant="default">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* News Content */}
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All News</TabsTrigger>
            <TabsTrigger value="breaking">Breaking</TabsTrigger>
            {['cyber', 'health', 'weather', 'disaster', 'geo'].map((domain) => (
              <TabsTrigger key={domain} value={domain} className="hidden md:flex">
                {getDomainLabel(domain as RiskDomain)}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((news) => (
                  <Link to={`/news/${news.id}`} key={news.id}>
                    <NewsCard news={news} />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No news found matching your criteria</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery('');
                    setDomainFilter('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="breaking" className="mt-6">
            {breakingNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {breakingNews.map((news) => (
                  <Link to={`/news/${news.id}`} key={news.id}>
                    <NewsCard news={news} />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No breaking news at this time</p>
              </div>
            )}
          </TabsContent>
          
          {['cyber', 'health', 'weather', 'disaster', 'geo'].map((domain) => (
            <TabsContent key={domain} value={domain} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allNews
                  .filter(news => news.domain === domain)
                  .map((news) => (
                    <Link to={`/news/${news.id}`} key={news.id}>
                      <NewsCard news={news} />
                    </Link>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default News;
