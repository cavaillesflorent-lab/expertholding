import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { nom, prenom, email, telephone, entreprise, fonction, sujet, message } = body;

    // Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: 'Contact ExpertiseHolding <florent@expertholding.fr>', // Remplacez par votre domaine vérifié
      to: ['florent@occitea-ip.fr'],
      replyTo: email,
      subject: `Nouveau contact : ${sujet}`,
      html: `
        <h2>Nouveau message depuis ExpertHolding.fr</h2>
        <p><strong>Nom :</strong> ${nom} ${prenom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        ${entreprise ? `<p><strong>Entreprise :</strong> ${entreprise}</p>` : ''}
        ${fonction ? `<p><strong>Fonction :</strong> ${fonction}</p>` : ''}
        <p><strong>Sujet :</strong> ${sujet}</p>
        <hr>
        <h3>Message :</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}