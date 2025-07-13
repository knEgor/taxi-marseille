// /api/trip route for Next.js App Router
const trips = [
    { id: 1, from: 'Сквирський провулок', to: 'Горіхуватський шлях 7а', status: 'completed', price: 100, timestamp: 1752422955000 },
    { id: 2, from: 'Площа Перемоги', to: 'Вулиця Лесі Українки', status: 'pending', price: 150, timestamp: 1752422955000 },
];

export async function GET(request) {
    // Example: return a list of trips

    return new Response(JSON.stringify({ trips, time: new Date().toISOString() }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request) {
    // Example: create a new trip
    const data = await request.json();
    // In a real app, you'd save this to a database
    return new Response(JSON.stringify({ message: 'Trip created', trip: data, time: new Date().toISOString() }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
    });
}
