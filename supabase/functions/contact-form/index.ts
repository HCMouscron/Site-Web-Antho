import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend("re_LsVBjrop_4iTtyU8yALVjxq9Vj9mZ4B9R");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    // On force le destinataire à antho.mcrz@gmail.com
    const emailResponse = await resend.emails.send({
      from: "HC Mouscron <onboarding@resend.dev>",
      to: ["antho.mcrz@gmail.com"],
      subject: subject || "Nouveau message via le formulaire de contact",
      html: `
        <h1>Nouveau message de ${name}</h1>
        <p><strong>Email de l'expéditeur :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("Email envoyé à antho.mcrz@gmail.com :", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Erreur dans la fonction contact-form :", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
