import * as brevo from '@getbrevo/brevo'

const apiInstance = new brevo.TransactionalEmailsApi()

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY as string
)

interface Params{
    subject: string;
    to: {email: string; name: string }[];
    user_email: string;
    htmlContent: string;
    user_name: string;
}

export async function sendEmail({subject, to, htmlContent, user_name, user_email}: Params){
    try{
        const smtpEmail = new brevo.SendSmtpEmail();
        smtpEmail.subject = subject;
        smtpEmail.to = to;
        smtpEmail.htmlContent = `<html><body>${htmlContent}</body></html>`;
        smtpEmail.sender= {name: "Portafolio", email:"joelangelcv@gmail.com"};
        smtpEmail.replyTo= {name: `${user_name}`, email:`${user_email}`};

        await apiInstance.sendTransacEmail(smtpEmail);    
    } catch(error) {
        console.error(error);
    }
    
}