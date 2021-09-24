const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'panu4602@gmail.com',
        subject: 'Welcome to Task Manager App',
        text: `Hey ${name}, Thanks for choosing our Task Manager App. Let us know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'panu4602@gmail.com',
        subject: 'Profile deletion Confirmation',
        text: `Hey ${name}, Sorry for going. Help us improve our service by letting us know why are you leaving, mate?!`
    })
}

module.exports ={
    sendWelcomeEmail,
    sendCancelEmail
}
