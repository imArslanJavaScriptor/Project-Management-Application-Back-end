import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Project Management Application",
      link: "https://yourapp.com/",
    },
  });
  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHTML = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMPT_HOST,
    port: process.env.MAILTRAP_SMPT_PORT,
    auth: {
      user: process.env.MAILTRAP_SMPT_USER,
      pass: process.env.MAILTRAP_SMPT_PASS,
    },
  });

  const mail = {
    from: "mail.taskmanger@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHTML,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(
      "Email service failed silently Make sure that you have provided your MAILTRAP credentials in the .env file",
      error,
    );
  }
};

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro:
        "Welcome to our Project Management Application! We're excited to have you on board.",
      action: {
        instructions:
          "To get started, please verify your email address by clicking the button below:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Verify Your Email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we're always happy to assist you.",
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "You have requested to reset your password.",
      action: {
        instructions: "To reset your password, please click the button below:",
        button: {
          color: "#bc2241ff",
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we're always happy to assist you.",
    },
  };
};

export {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
};
