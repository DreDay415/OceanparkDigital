import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const { email, name, source } = data;

        if (!email) {
            return new Response(JSON.stringify({ message: 'Email is required' }), { status: 400 });
        }

        // Since this is server-side, we can use the environment variables directly
        // We'll use the Firestore REST API to keep things extremely light
        const PROJECT_ID = import.meta.env.PUBLIC_FIREBASE_PROJECT_ID;
        const API_KEY = import.meta.env.PUBLIC_FIREBASE_API_KEY;

        const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/emails?key=${API_KEY}`;

        const firestoreResponse = await fetch(firestoreUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fields: {
                    email: { stringValue: email },
                    name: { stringValue: name || '' },
                    source: { stringValue: source || 'unknown' },
                    timestamp: { timestampValue: new Date().toISOString() },
                },
            }),
        });

        if (!firestoreResponse.ok) {
            const errorData = await firestoreResponse.json();
            console.error('Firestore REST Error:', errorData);
            throw new Error('Failed to save to Firestore');
        }

        return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
    } catch (error) {
        console.error('Waitlist API Error:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
};
