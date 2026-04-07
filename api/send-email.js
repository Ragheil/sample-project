import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { firstName, lastName, email, company, message } = req.body || {};

  if (!firstName || !lastName || !email || !company || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ragheil123@gmail.com",
        pass: "wfdr vujr rmjs ccxp",
      },
    });

    const emailHtml = `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#0b0b0f;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#0b0b0f;margin:0;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#111116;border:1px solid #23232b;border-radius:20px;overflow:hidden;">
            <tr>
              <td style="padding:0;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:linear-gradient(135deg,#ff3b3b 0%,#d81414 100%);">
                  <tr>
                    <td style="padding:28px 32px;">
                      <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#ffe5e5;font-weight:bold;">
                        Phonipino Corp.
                      </div>
                      <div style="font-size:28px;line-height:1.2;color:#ffffff;font-weight:700;margin-top:8px;">
                        New Website Inquiry
                      </div>
                      <div style="font-size:14px;line-height:1.6;color:#fff1f1;margin-top:8px;">
                        A new message was submitted through your contact form.
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:32px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #23232b;width:160px;font-size:13px;color:#9ca3af;font-weight:bold;">
                      Full Name
                    </td>
                    <td style="padding:14px 0;border-bottom:1px solid #23232b;font-size:15px;color:#f5f5f5;">
                      ${firstName} ${lastName}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #23232b;font-size:13px;color:#9ca3af;font-weight:bold;">
                      Email
                    </td>
                    <td style="padding:14px 0;border-bottom:1px solid #23232b;font-size:15px;">
                      <a href="mailto:${email}" style="color:#ff5a5a;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #23232b;font-size:13px;color:#9ca3af;font-weight:bold;">
                      Company
                    </td>
                    <td style="padding:14px 0;border-bottom:1px solid #23232b;font-size:15px;color:#f5f5f5;">
                      ${company}
                    </td>
                  </tr>
                </table>

                <div style="margin-top:24px;">
                  <div style="font-size:13px;color:#9ca3af;font-weight:bold;margin-bottom:10px;">
                    Message
                  </div>
                  <div style="background:#18181f;border:1px solid #2a2a35;border-radius:16px;padding:18px 20px;font-size:15px;line-height:1.7;color:#f3f4f6;white-space:pre-wrap;">
${String(message).replace(/</g, "&lt;").replace(/>/g, "&gt;")}
                  </div>
                </div>

                <div style="margin-top:28px;padding-top:18px;border-top:1px solid #23232b;font-size:12px;color:#7f8591;line-height:1.6;">
                  Sent from the Phonipino Corp. website contact form.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

    await transporter.sendMail({
      from: `"Phonipino Website" <ragheil123@gmail.com>`,
      replyTo: email,
      to: "ragheil123@gmail.com",
      subject: `New Inquiry from ${firstName} ${lastName}`,
      html: emailHtml,
    });

    return res.status(200).json({
      success: true,
      message: "Inquiry sent successfully!",
    });
  } catch (error) {
    console.error("Send email error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send inquiry",
    });
  }
}