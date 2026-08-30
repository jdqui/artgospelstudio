"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendContactEmail(formData: FormData) {
  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  console.log({ firstname, lastname, email, service, message });

  if (!firstname || !lastname || !email || !service || !message) {
    console.log("Validation failed — one or more fields missing");
    return { success: false, error: "All fields are required." };
  }

  try {
    await transporter.sendMail({
      from: `"${firstname} ${lastname}" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New inquiry: ${service} — from ${firstname} ${lastname}`,
      text: `From: ${firstname} ${lastname} (${email})\nService: ${service}\n\n${message}`,
    });
    console.log("Email sent successfully");
    return { success: true };
  } catch (err) {
    console.error("Send failed:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}