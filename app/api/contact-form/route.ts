import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
  throw new Error('SMTP configuration is missing');
}

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, organizationName, email, message } = data;

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Message from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Message</h2>
        <h3>Contact Details:</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Organization:</strong> ${organizationName}</p>
        <p><strong>Email:</strong> ${email}</p>
        
        <h3>Message:</h3>
        <p>${message}</p>
      `
    };

    // Confirmation email to the sender
    const userMailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for contacting ImpactSites',
      html: `
        <h2>Thank you for reaching out, ${firstName}!</h2>
        <p>We've received your message and appreciate you taking the time to contact us.</p>
        
        <p>Here's what to expect:</p>
        <ul>
          <li>We typically respond within 24 hours during business days</li>
          <li>Our team will carefully review your message</li>
          <li>We'll get back to you at this email address: ${email}</li>
        </ul>
        
        <p>For urgent matters, you can reach us at:</p>
        <p>Phone: 1‑800‑IMPACT‑1</p>
        
        <p>Best regards,<br>The ImpactSites Team</p>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
