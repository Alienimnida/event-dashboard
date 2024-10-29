import { GalleryVerticalEnd, Calendar, Users, TrendingUp, Filter } from "lucide-react"

export const mockData = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
        {
            title: "Dashboard",
            url: "#",
            icon: GalleryVerticalEnd,
            isActive: true,
        },
        {
            title: "Events",
            url: "#",
            icon: Calendar,
        },
        {
            title: "Attendees",
            url: "#",
            icon: Users,
        },
        {
            title: "Analytics",
            url: "#",
            icon: TrendingUp,
        },
        {
            title: "Settings",
            url: "#",
            icon: Filter,
        },
    ],
    recentEvents: [
        { name: 'Tech Conference 2024', date: '2024-11-15', attendees: 520, status: 'Upcoming' },
        { name: 'Marketing Workshop', date: '2024-11-10', attendees: 150, status: 'Upcoming' },
        { name: 'Product Launch', date: '2024-11-05', attendees: 300, status: 'Upcoming' }
    ],
    attendanceData: [
        { month: 'Jan', attendees: 1500 },
        { month: 'Feb', attendees: 2200 },
        { month: 'Mar', attendees: 1800 },
        { month: 'Apr', attendees: 2400 },
        { month: 'May', attendees: 2800 },
        { month: 'Jun', attendees: 3200 }
    ],
    eventDistribution: [
        { name: 'Tech Events', value: 45 },
        { name: 'Workshops', value: 30 },
        { name: 'Conferences', value: 15 },
        { name: 'Other', value: 10 }
    ]
}