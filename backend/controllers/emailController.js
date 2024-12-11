const nodemailer = require('nodemailer');
require('dotenv').config();

exports.sendEmail = async (req, res) => {
    const { name, email, company, subject, address } = req.body;

    // Konfigurasi Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL, // Email tujuan
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nAddress: ${address}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
};