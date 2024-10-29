import { Card, CardContent } from "@/components/ui/card"

interface Event {
    name: string;
    date: string;
    attendees: number;
    status: string;
}

interface RecentEventsTableProps {
    events: Event[];
}

export const RecentEventsTable = ({ events }: RecentEventsTableProps) => {
    return (
        <Card>
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-4 px-6 font-medium">Event Name</th>
                                <th className="text-left py-4 px-6 font-medium">Date</th>
                                <th className="text-left py-4 px-6 font-medium">Attendees</th>
                                <th className="text-left py-4 px-6 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-4 px-6">{event.name}</td>
                                    <td className="py-4 px-6">{event.date}</td>
                                    <td className="py-4 px-6">{event.attendees}</td>
                                    <td className="py-4 px-6">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            {event.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
};