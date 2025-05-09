// app/actions/contact.ts
"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactFormData = {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
    return { success: false, error: "Missing environment variables" }
  }

  if (!formData.name || !formData.email || !formData.message) {
    return { success: false, error: "All fields are required" }
  }

  if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    return { success: false, error: "Invalid email format" }
  }

  const { data, error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL,
    subject: `New Contact Form Submission from ${formData.name}`,
    replyTo: formData.email,
    text: `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
    `,
    html: `
      <strong>Name:</strong> ${formData.name}<br />
      <strong>Email:</strong> ${formData.email}<br /><br />
      <strong>Message:</strong><br />
      <pre>${formData.message}</pre>
    `
  })

  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true, data }
}
