'use server'
import { customerEmailTemplate } from '@/components/emailTemplate/customerEmailTemplate';
// import { EmailTemplate } from "@/components/emailTemplates/Congrats";
import { EmailTemplate } from '@/components/emailTemplate/emailtemplate';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

interface valuesProps {
    email: string,
    name: string,
    number: string,
    codePostal : string,
    consent?: boolean
}

export const sendEmail = async (values:valuesProps) =>{
    // console.log(values)
    try {
        const {data, error} = await resend.emails.send({
            from:'4SRENT <info@4srent.es>',
            to:'qerystore@gmail.com',
            subject:'Asunto: Nuevo Interesado en Contacto',
            react: EmailTemplate({name:`${values?.name}`, number:`${values.number}`, email:`${values.email}`, codePostal:`${values.codePostal}`}),
            // text:`${formData.text}`,
        })
        if(error){
            return error
        }
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const sendEmailCustomer = async (values:valuesProps) =>{
    // console.log(values)
    try {
        const {data, error} = await resend.emails.send({
            from:'4SRENT <info@4srent.es>',
            to:`${values.email}`,
            subject:'Gracias por contactarnos ',
            react: customerEmailTemplate({name:`${values?.name}`, number:`${values.number}`, email:`${values.email}`, codePostal:`${values.codePostal}`}),
            // text:`${formData.text}`,
        })
        if(error){
            return error
        }
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}