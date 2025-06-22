import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Données de test pour les scorers
const mockScorersData = [
  {
    position: 1,
    nom: "Lucas Vincent",
    club: "HC Mouscron",
    buts: 45
  },
  {
    position: 2,
    nom: "Antoine Lampole",
    club: "HC Mouscron",
    buts: 38
  },
  {
    position: 3,
    nom: "Pierre Dubois",
    club: "HC Visé",
    buts: 35
  },
  {
    position: 4,
    nom: "Marc Leroy",
    club: "HC Herstal",
    buts: 32
  },
  {
    position: 5,
    nom: "Jean Martin",
    club: "HC Liège",
    buts: 29
  },
  {
    position: 6,
    nom: "Paul Bernard",
    club: "HC Seraing",
    buts: 27
  },
  {
    position: 7,
    nom: "Nino Mancinone",
    club: "HC Mouscron",
    buts: 25
  },
  {
    position: 8,
    nom: "David Laurent",
    club: "HC Visé",
    buts: 23
  }
];

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Récupération des données des scorers...");
    
    return new Response(JSON.stringify(mockScorersData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Erreur dans la fonction scorers :", error);
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