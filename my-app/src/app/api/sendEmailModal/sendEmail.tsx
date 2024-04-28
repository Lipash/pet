'use server'
import nodemailer from 'nodemailer'

const { NEXT_PUBLIC_SMTP_PASSWORD, NEXT_PUBLIC_SMTP_EMAIL } = process.env
const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: NEXT_PUBLIC_SMTP_EMAIL,
    pass: NEXT_PUBLIC_SMTP_PASSWORD,
  },
})

export default async function sendMail(email: string, message: string) {
  try {
    const sendResult = await transport.sendMail({
      from: 'email',
      to: NEXT_PUBLIC_SMTP_EMAIL,
      subject: email,
      html: message,
    })
    console.log('try', email, message, sendResult)
  } catch (error) {
    console.log(error)
    return
  }
}
