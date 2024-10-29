"use client"
import Link from 'next/link'
import { Plus, Calendar, Users, TrendingUp, Clock, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserProfileSection } from "@/components/dashboard/user-profile-section"
import { ChartSection } from "@/components/dashboard/chart-section"
import { RecentEventsTable } from "@/components/dashboard/recent-events-table"
import { mockData } from "@/lib/mock-data"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardPage() {
    return (
        <SidebarProvider>
            <div className="flex h-screen overflow-hidden">
                <Sidebar className="w-64 border-r">
                    <SidebarHeader>
                        <SidebarMenu>
                            <UserProfileSection />
                        </SidebarMenu>
                        <form>
                            <SidebarGroup className="py-0">
                                <SidebarGroupContent className="relative">
                                    <Label htmlFor="search" className="sr-only">
                                        Search
                                    </Label>
                                    <Input
                                        id="search"
                                        placeholder="Search..."
                                        className="pl-8"
                                    />
                                    <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </form>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {mockData.navMain.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild isActive={item.isActive}>
                                                <a href={item.url} className="flex items-center gap-3">
                                                    <item.icon className="h-4 w-4" />
                                                    {item.title}
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <div className="flex-1 overflow-auto">
                    <div className="min-h-screen bg-background p-8">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <SidebarTrigger className="-ml-1" />
                                <h1 className="text-3xl font-bold">Dashboard</h1>
                                <p className="text-muted-foreground">Welcome back to your event management dashboard</p>
                            </div>
                            <Link href="/create-event">
                                <Button className="flex items-center gap-2">
                                    <Plus className="w-4 h-4" /> Create Event
                                </Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <Card>
                                <CardContent className="flex items-center p-6">
                                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                                        <Calendar className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Total Events</p>
                                        <h3 className="text-2xl font-bold">24</h3>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="flex items-center p-6">
                                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Total Attendees</p>
                                        <h3 className="text-2xl font-bold">1,234</h3>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="flex items-center p-6">
                                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Growth Rate</p>
                                        <h3 className="text-2xl font-bold">+12.5%</h3>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="flex items-center p-6">
                                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Upcoming Events</p>
                                        <h3 className="text-2xl font-bold">8</h3>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <ChartSection
                            attendanceData={mockData.attendanceData}
                            eventDistribution={mockData.eventDistribution}
                        />

                        <RecentEventsTable events={mockData.recentEvents} />
                    </div>
                </div>
            </div>
        </SidebarProvider>
    )
}