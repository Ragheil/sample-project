const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, company, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ragheil123@gmail.com",
        pass: "wfdr vujr rmjs ccxp", // ✅ put it HERE (NOT in React)
      },
    });

await transporter.sendMail({
  from: `"Phonipino Website" <ragheil123@gmail.com>`,
  replyTo: email,
  to: "ragheil123@gmail.com",
  subject: `New Inquiry from ${firstName} ${lastName}`,

  html: `
  <div style="margin:0;padding:0;background:#0b0b0f;font-family:Arial;">
    <div style="max-width:680px;margin:auto;padding:20px;">
      
      <div style="
        background:#111116;
        border-radius:20px;
        overflow:hidden;
        border:1px solid #23232b;
      ">
        
        <!-- HEADER -->
        <div style="
          background:linear-gradient(135deg,#ff3b3b,#d81414);
          padding:25px 30px;
          color:#fff;
        ">
          <div style="font-size:12px;letter-spacing:2px;">PHONIPINO CORP.</div>
          <h2 style="margin:10px 0 0;">New Website Inquiry</h2>
        </div>

        <!-- BODY -->
        <div style="padding:25px;color:#e5e5e5;">
          
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> 
            <a href="mailto:${email}" style="color:#ff4d4d">${email}</a>
          </p>
          <p><strong>Company:</strong> ${company}</p>

          <div style="margin-top:20px;">
            <div style="font-size:13px;color:#999;margin-bottom:8px;">Message</div>
            <div style="
              background:#18181f;
              padding:15px;
              border-radius:12px;
              border:1px solid #2a2a35;
              white-space:pre-wrap;
            ">
              ${message}
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
  `,
});

    res.status(200).send("Email sent");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending email");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));