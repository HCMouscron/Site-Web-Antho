
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Attribution images :
const images = [
  "/lovable-uploads/41bb9730-94a9-4c03-9d26-41eec3e20d2a.png", // 1. Gothane
  "/lovable-uploads/c65c089e-74e7-498b-bb79-bfbb16be852f.png",   // 2. JP Fabbri
  "/lovable-uploads/56312c99-84e1-456e-b1a1-0c57fa1fe4d5.png",   // 3. Joaquim
  "/lovable-uploads/034cfb6a-b3cd-4529-b3c9-c074b6f702cd.png",   // 4. Laszlo
  "/lovable-uploads/b44b811f-37de-47a2-ac2a-d4ba2d5b0030.png",   // 5. Lucas
  "/lovable-uploads/365e0e89-3729-4a6f-b74f-c945d205cd46.png",   // 6. Nino
  "/lovable-uploads/f1b2cda2-2794-414e-8253-3598892a0a4b.png",   // 7. Stijn
  "/lovable-uploads/41bb9730-94a9-4c03-9d26-41eec3e20d2a.png",   // 8. Thierry (corriger si besoin)
];

// MAPPING :
const bureau = [
  {
    name: "Ghotane Dhont",
    role: "Organisateur événementiel et sportif",
    image: images[0],
  },
  {
    name: "Jean Philippe Fabbri",
    role: "Logistique",
    image: images[1],
  },
  {
    name: "Joaquim Vercruysse",
    role: "Trésorier",
    image: images[2],
  },
  {
    name: "Laszlo Baan",
    role: "Président",
    image: images[3],
  },
  {
    name: "Lucas Vincent",
    role: "Secrétaire",
    image: images[4],
  },
  {
    name: "Nino Mancinone",
    role: "Trésorier adjoint",
    image: images[5],
  },
  {
    name: "Stijn Tack",
    role: "Community Manager et Graphisme",
    image: images[6],
  },
  {
    name: "Thierry Vincent",
    role: "Coordinateur Technique",
    image: images[7],
  },
];

const entraineursSeniors = [
  {
    name: "Laszlo Baan",
    role: "Coach T1",
    image: images[3],
  },
  {
    name: "Thierry Vincent",
    role: "Coach T2",
    image: images[7],
  },
];

const entraineursJeunes = [
  {
    name: "Lucas Vincent",
    role: "Entraîneur U14",
    image: images[4],
  },
  {
    name: "Nino Mancinone",
    role: "Mini handball",
    image: images[5],
  },
  {
    name: "Stijn Tack",
    role: "Entraîneur Jeunes",
    image: images[6],
  },
  // On garde les autres entraîneurs jeunes non cités pour ne pas perdre d’info :
  {
    name: "Anthony Delaby",
    role: "Entraîneur U18",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Philippe Julien",
    role: "Entraîneur U16",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Antoine Lampole",
    role: "Entraîneur U14",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Dorian Derveaux",
    role: "Mini handball",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=200&h=200&fit=crop&crop=face"
  },
];

const categories = [
  { name: "Mini handball", color: "bg-hc-green-light" },
  { name: "U14", color: "bg-hc-green-light" },
  { name: "U16", color: "bg-hc-green", img: "/lovable-uploads/faeb26b4-5b82-49e1-8fb0-69a10700de49.png" },
  { name: "U18", color: "bg-hc-green-light", img: "/lovable-uploads/2c5565cf-f45d-4d43-b901-68086906cbad.png" },
  { name: "Seniors", color: "bg-hc-green", img: "/lovable-uploads/a4551830-cf39-4d58-bf31-7325e3117da5.png" },
  { name: "Vétérans / Loisir", color: "bg-hc-orange", img: "/lovable-uploads/3f691e54-6444-4b56-966f-fab9bcea6968.png" }
];

const Team = () => {
  return (
    <div className="w-full py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Notre équipe
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez le staff technique et les catégories qui font la force du HC Mouscron, 
            unis par la passion du handball et l'esprit d'équipe.
          </p>
        </div>

        {/* Staff Technique - Comité */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-hc-green">Comité</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
            {bureau.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge className="bg-hc-orange text-white mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Entraîneurs Seniors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-hc-green">
            Entraîneurs Seniors
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {entraineursSeniors.map((coach, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                    <img src={coach.image} alt={coach.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-lg">{coach.name}</CardTitle>
                  <Badge className="bg-hc-green text-white mx-auto">
                    {coach.role}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Entraîneurs Jeunes et Mini handball */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-hc-green">
            Entraîneurs Jeunes & Mini handball
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {entraineursJeunes.map((coach, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                    <img src={coach.image} alt={coach.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-lg">{coach.name}</CardTitle>
                  <Badge className="bg-hc-green-light text-white mx-auto">
                    {coach.role}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Nos équipes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-hc-green">
            Nos équipes
          </h2>
          <div className="flex flex-col items-center gap-10">
            {categories.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2 w-full max-w-xl">
                <span
                  className={`px-6 py-3 rounded-full ${c.color} text-white text-lg font-semibold shadow text-shadow`}
                >
                  {c.name}
                </span>
                {"img" in c && c.img ? (
                  <div className="flex flex-col items-center mt-2">
                    <img
                      src={c.img}
                      alt={`Équipe ${c.name} HC Mouscron`}
                      className={`w-full max-w-md rounded-2xl shadow-lg border-4 ${
                        c.name === "Vétérans / Loisir"
                          ? "border-hc-orange"
                          : c.name === "Seniors"
                          ? "border-hc-green"
                          : c.name === "U18"
                          ? "border-hc-green-light"
                          : c.name === "U16"
                          ? "border-hc-green"
                          : "border-gray-300"
                      } animate-fade-in`}
                    />
                    <span className="mt-2 text-sm text-muted-foreground italic">
                      {c.name} - Saison 2024
                    </span>
                  </div>
                ) : (
                  // Message "À venir..." pour U14 et Mini handball
                  (c.name === "U14" || c.name === "Mini handball") && (
                    <div className="flex flex-col items-center mt-4">
                      <span className="italic text-muted-foreground text-md">
                        À venir...
                      </span>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Section Palmarès supprimée */}
      </div>
    </div>
  );
};

export default Team;

