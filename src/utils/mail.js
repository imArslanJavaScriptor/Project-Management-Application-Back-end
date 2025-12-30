import Mailgen from "mailgen";
const emailVerificationMailgenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our Project Management Application! We're excited to have you on board.",
            action: {
                instructions: "To get started, please verify your email address by clicking the button below:", 
                button: {
                    color: "#22BC66", // Optional action button color
                    text: "Verify Your Email",
                    link: verificationUrl
                }
            },
            outro: "Need help, or have questions? Just reply to this email, we're always happy to assist you."
        }
    }
}

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
                    link: passwordResetUrl
                }
            },
            outro: "Need help, or have questions? Just reply to this email, we're always happy to assist you."
        }
    }
}


export {emailVerificationMailgenContent, forgotPasswordMailgenContent};