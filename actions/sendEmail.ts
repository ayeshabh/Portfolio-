
"use server";


import { validateString,getErrorMessage } from "@/lib/utils";
import {Resend} from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
const resend=new Resend(process.env.NEXT_RESEND_API_KEY);
export  const sendEmail=async (FormData: FormData)=>{
const message=FormData.get('message');
const senderEmail=FormData.get('senderEmail');

//simple validation
if(!validateString(senderEmail,500) )
{
    return{
        error:"Invalid sender email"
    }
}

if(!validateString(message,5000) )
{
    return{
        error:"Invalid message"
    }
}
let data;
try {
 data= await  resend.emails.send({
        from:'Contact Form <onboarding@resend.dev>',
        to:'ayesha.bhangu@hotmail.com',
        subject:'PortFolio message',
        reply_to:senderEmail as string,
        react:React.createElement(ContactFormEmail,{message:message as string,
        senderEmail:senderEmail as string,
        })
     
    })
} catch (error:unknown) {
     return {
        error: getErrorMessage(error)
     }
}
return {data,}

    }