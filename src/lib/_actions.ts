'use server';

import { Resend } from 'resend';
import { ContactEmailForm } from './types';
import ContactFormEmail from 'emails/contact-form-email';

import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { ConfigSchema } from './schema';
import getPrompt, { CompanyInfo } from './getPrompt';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactEmailForm) {
  const { name, email, message, phone, to } = data;
  try {
    const data = await resend.emails.send({
      from: `delivered@resend.dev`,
      to: [to],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message, phone } as ContactEmailForm),
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}

export const generateConfig = async (companyInfo: CompanyInfo) => {
  const result = await generateObject({
    model: openai('gpt-4o'),
    prompt: getPrompt(companyInfo),
    schema: ConfigSchema,
  });
  return result.object;
};
