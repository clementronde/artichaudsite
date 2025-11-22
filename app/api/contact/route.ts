// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'artichaud.studio@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Champs requis manquants' }, { status: 400 });
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { 
          name: 'Site Artichaud Studio', 
          email: 'artichaud.studio@gmail.com' 
        },
        to: [{ email: RECIPIENT_EMAIL }],
        replyTo: { email, name },
        subject: `[CONTACT] ${subject || 'Nouveau message'} de ${name}`,
        htmlContent: `
          <h2>Nouveau message</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ''}
          <hr>
          <p>${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error(`Brevo API error: ${response.status}`);
    }

    return NextResponse.json({ message: 'Email envoyé !' }, { status: 200 });

  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ 
      message: 'Erreur lors de l\'envoi' 
    }, { status: 500 });
  }
}