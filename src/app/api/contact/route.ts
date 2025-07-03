import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { nome, email, assunto, mensagem } = await req.json();

  if (!nome || !email || !assunto || !mensagem) {
    return NextResponse.json({ error: 'Preencha todos os campos' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nova mensagem de ${nome} - ${assunto}`,
      text: mensagem,
      html: `
        <h2>Nova mensagem do seu portfólio</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });

    return NextResponse.json({ message: 'Email enviado com sucesso!' });

  } catch(error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao enviar email.' }, { status: 500 });
  }
}