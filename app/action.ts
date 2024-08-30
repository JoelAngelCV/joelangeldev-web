"use server"

import { sendEmail } from "./lib/brevo";
import { redirect } from "next/navigation";

async function handleForm(formData: FormData){
    const to_name = "Joel Angel Dev";
    const to_email = "joelangelcv@gmail.com";
    
    const user_name = formData.get('user_name');
    const user_email = formData.get('user_email');
    const subject = formData.get('subject');
    const content = formData.get('content');

    if (!user_name || !user_email || !content){
      return console.log('Por favor rellena todos los campos')
    }

    await sendEmail({
        subject: subject as string,
        to: [{
            name: to_name as string,
            email: to_email as string
        }],
        user_name: user_name as string,
        user_email: user_email as string,
        htmlContent: content as string,

    })

    redirect('/success')

  }

export default handleForm
