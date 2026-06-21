import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { BarChart2, FileText, LayoutDashboard, MessageSquare } from "lucide-react";

export function AppSidebar() {
  const navItems = [
    { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { title: "Resume", href: "/resume", icon: FileText },
    { title: "Analysis", href: "/analysis", icon: BarChart2 },
    { title: "Feedback", href: "/feedback", icon: MessageSquare },
  ];
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
