import { Resend } from "resend";
import { DOMAIN } from "@/lib/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationToken = async (token: string, email: string) => {
  try {
    const confirmLink = `${DOMAIN}/auth/verify?token=${token}`;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Confirm your email",
      html: `<a href="${confirmLink}">
      
       visit to verify
      </a>`,
    });
  } catch (err) {
    console.log(err);
  }
};

export const sendPasswordResetToken = async (token: string, email: string) => {
  try {
    const confirmLink = `${DOMAIN}/auth/reset-password?token=${token}`;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Reset password",
      html: `<a href="${confirmLink}">
      
       visit to reset
      </a>`,
    });
  } catch (err) {
    console.log(err);
  }
};
export const sendTwoFactorToken = async (token: string, email: string) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "2FA code",
      html: token,
    });
  } catch (err) {
    console.log(err);
  }
};
