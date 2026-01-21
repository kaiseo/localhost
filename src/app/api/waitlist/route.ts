import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // TODO: Connect to Resend / Supabase / Google Sheets
        // For now, we simulate a successful collection
        console.log(`[Waitlist] New subscription: ${email}`);

        // Example Resend implementation (uncomment to use):
        /*
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
            },
            body: JSON.stringify({
                from: 'Localhost <onboarding@resend.dev>',
                to: 'your-email@example.com',
                subject: 'New Waitlist Signup',
                html: `<p>New signup: <strong>${email}</strong></p>`
            })
        });
        */

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Waitlist API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
