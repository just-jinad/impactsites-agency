import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'isaacjinad@gmail.com',
    pass: 'mxtuggodzzxinaog'
  }
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { organizationName, website, mission, goal, fullName, email, phone } = data;

    // Email to admin (you)
    const adminMailOptions = {
      from: 'isaacjinad@gmail.com',
      to: 'isaacjinad@gmail.com',
      subject: `New ImpactSite Application from ${organizationName}`,
      html: `
        <h2>New Website Application</h2>
        <h3>Organization Details:</h3>
        <p><strong>Organization/Project:</strong> ${organizationName}</p>
        <p><strong>Current Website:</strong> ${website || 'N/A'}</p>
        
        <h3>Project Information:</h3>
        <p><strong>Mission:</strong><br>${mission}</p>
        <p><strong>Website Goals:</strong><br>${goal}</p>
        
        <h3>Contact Information:</h3>
        <p><strong>Contact Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      `
    };

    // Confirmation email to the applicant
    const userMailOptions = {
      from: 'isaacjinad@gmail.com',
      to: email,
      subject: 'Your ImpactSite Application Received',
      html: `
        <h2>Thank you for your application, ${fullName}!</h2>
        <p>We have received your application for ${organizationName}.</p>
        
        <p>Here's what happens next:</p>
        <ol>
          <li>Our team will review your application within 3-5 business days</li>
          <li>We'll reach out to you at this email address (${email}) to discuss your project in detail</li>
          <li>Together, we'll create a plan for your impactful web presence</li>
        </ol>
        
        <p>If you have any immediate questions, feel free to reply to this email.</p>
        
        <p>Best regards,<br>The ImpactSites Team</p>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
