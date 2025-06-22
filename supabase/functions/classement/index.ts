import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Données de test pour le classement
const mockClassementData = [
  {
    position: 1,
    equipe: "HC Mouscron",
    matchs_joues: 12,
    victoires: 10,
    nuls: 1,
    defaites: 1,
    points: 31
  },
  {
    position: 2,
    equipe: "HC Visé",
    matchs_joues: 12,
    victoires: 9,
    nuls: 2,
    defaites: 1,
    points: 29
  },
  {
    position: 3,
    equipe: "HC Herstal",
    matchs_joues: 12,
    victoires: 8,
    nuls: 1,
    defaites: 3,
    points: 25
  },
  {
    position: 4,
    equipe: "HC Liège",
    matchs_joues: 12,
    victoires: 7,
    nuls: 2,
    defaites: 3,
    points: 23
  },
  {
    position: 5,
    equipe: "HC Seraing",
    matchs_joues: 12,
    victoires: 6,
    nuls: 1,
    defaites: 5,
    points: 19
  }
];

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Récupération des données de classement...");
    
    return new Response(JSON.stringify(mockClassementData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Erreur dans la fonction classement :", error);
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