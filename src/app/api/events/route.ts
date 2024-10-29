import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

// Schema for form validation
const eventSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    date: z.string().min(1, "Date is required"),
    location: z.string().min(1, "Location is required"),
    capacity: z.number().min(1, "Capacity must be at least 1"),
    category: z.string(),
    status: z.string()
});

export async function POST(request: Request) {
    try {
        // Get and validate request data
        const body = await request.json();
        const validatedData = eventSchema.parse(body);

        // Create event
        const event = await prisma.event.create({
            data: {
                title: validatedData.title,
                description: validatedData.description,
                date: new Date(validatedData.date),
                location: validatedData.location,
                capacity: validatedData.capacity,
                category: validatedData.category,
                status: validatedData.status
            }
        });

        return NextResponse.json(event);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Failed to create event' },
            { status: 500 }
        );
    }
}