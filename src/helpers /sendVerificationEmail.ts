import { resend } from "@/lib/resend";
//import { Verification } from "next/dist/lib/metadata/types/metadata-types";
//import VerificationEmail from "../../emails/VerificationEmail";
import VerificationEmail from "../../emails/verificationEmail";
//import { ApiResponse } from '@/types/ApiResponse';
import { ApiResponse } from "@/types /ApiRespone";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: 'yuvimittal2004@gmail.com',
      to: email,
      subject: 'Mystery Message Verification Code',
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: 'Verification email sent successfully.' };
  } catch (emailError) {
    console.error('Error sending verification email:', emailError);
    return { success: false, message: 'Failed to send verification email.' };
  }
}
