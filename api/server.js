
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const router = express.Router(); 

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(process.env.PORT || 5000, () => console.log('server running 5000'));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gastonluchini@gmail.com',
        pass: 'xlvzksxubpvvoynp',
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Ready to send');
    }
})

router.post('/contact', (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;

    const mail = {
        from: name,
        to: 'gastonluchini@gmail.com',
        subject: 'Contact from Submission - Portfolio',
        html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>`
    }

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: 'Message send' });
        }
    })
});