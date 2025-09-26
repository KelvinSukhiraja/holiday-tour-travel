import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Ensure we're only accepting POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { fullName, email, phone, country, message } = req.body;

    // Use Resend to send the email
    const { data, error } = await resend.emails.send({
      from: "Contact Form <noreply@yourverifieddomain.com>", // Use your verified domain
      to: ["hologram171@gmail.com"], // Your client's actual email address
      subject: `New Inquiry from ${fullName}`,
      reply_to: email, // Set the user's email as the reply-to address
      html: `
        <h1>New Website Inquiry</h1>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Country:</strong> ${country}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message || "No message."}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return res.status(400).json({ error: "Failed to send email." });
    }

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An unexpected error occurred." });
  }
}
