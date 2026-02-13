import type { APIRoute } from 'astro';
import { GoogleGenerativeAI } from '@google/generative-ai';

export const POST: APIRoute = async ({ request }) => {
    try {
        const { message } = await request.json();
        const apiKey = import.meta.env.GOOGLE_API_KEY;

        if (!apiKey || apiKey === 'your_google_studio_api_key_here') {
            return new Response(JSON.stringify({
                error: "Google API key is not configured. Please add it to your .env file."
            }), { status: 500 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: "You are the Oceanpark Digital Cyber-Strategist. Your persona is professional, futuristic, and focused on growth for ambitious brands. Your slogan is 'Delete outerspace. Bring back inner space.' Help users with digital strategy, SEO, web development, and AI implementation ideas in a concise, insightful way.",
        });

        const result = await model.generateContent(message);
        const response = await result.response;
        const reply = response.text();

        return new Response(JSON.stringify({ reply }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: any) {
        console.error('Google AI Error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
