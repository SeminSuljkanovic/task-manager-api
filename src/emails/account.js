const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dedis.bih@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'dedis.bih@gmail.com',
        subject: 'Sorry that you are leaving us!',
        text: `We were glad to have you with us, ${name}. Let us know what you did not like and your reason for leaving our service, so we can improve our system.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}