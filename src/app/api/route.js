// Simple API route simulation for Next.js App Router
export async function GET(request) {
    return new Response(JSON.stringify({ message: 'API GET success', time: new Date().toISOString() }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request) {
    const data = await request.json();
    return new Response(JSON.stringify({ message: 'API POST success', received: data, time: new Date().toISOString() }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
