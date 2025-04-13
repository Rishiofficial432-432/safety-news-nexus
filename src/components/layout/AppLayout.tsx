
import React from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Home, Shield, AlertTriangle, Newspaper, CloudLightning, Virus, Globe, ShieldAlert, PanelLeftClose } from "lucide-react";
import { Link } from 'react-router-dom';

interface AppLayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  { title: "Dashboard", path: "/", icon: Home },
  { title: "News Feed", path: "/news", icon: Newspaper },
  { title: "Risk Map", path: "/risk-map", icon: Shield },
  { title: "Weather Alerts", path: "/weather", icon: CloudLightning },
  { title: "Health Advisories", path: "/health", icon: Virus },
  { title: "Global Events", path: "/global", icon: Globe },
  { title: "Cyber Threats", path: "/cyber", icon: ShieldAlert },
  { title: "Emergency Alerts", path: "/alerts", icon: AlertTriangle },
];

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <div className="flex items-center h-14 px-4 border-b">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Shield className="h-6 w-6 text-safety-high" />
              <span className="font-bold text-lg">SafetyNewsNexus</span>
            </Link>
          </div>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.path} className="flex items-center gap-2">
                          <item.icon className="h-5 w-5" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div className="flex-1 flex flex-col">
          <header className="h-14 border-b flex items-center px-4 justify-between">
            <SidebarTrigger />
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-muted-foreground" />
            </div>
          </header>
          <main className="flex-1 overflow-auto p-4">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
