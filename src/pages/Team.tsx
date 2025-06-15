import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const bureau = [{
  name: "David Macarez",
  role: "Secrétaire",
  image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face"
}, {
  name: "Damien Cockenpot",
  role: "Président",
  image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop&crop=face"
}, {
  name: "Joaquim Vercruysse",
  role: "Trésorier",
  image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=face"
}, {
  name: "Ghotane Dhont",
  role: "Organisateur événementiel et sportif",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
}, {
  name: "Jean Philippe Fabbri",
  role: "Logistique",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
}, {
  name: "Thierry Vincent",
  role: "Coordinateur Technique",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
}, {
  name: "Stijn Tack",
  role: "Community Manager et Graphisme",
  image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face"
}];

const entraineursSeniors = [{
  name: "Laszlo Baan",
  role: "Coach T1",
  image: "https://images.unsplash.com/photo-1519340333755-c55307049130?w=200&h=200&fit=crop&crop=face"
}, {
  name: "Thierry Vincent",
  role: "Coach T2",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
}];

const entraineursJeunes = [{
  name: "Anthony Delaby",
  role: "Entraîneur U18",
  image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&crop=face"
}, {
  name: "Philippe Julien",
  role: "Entraîneur U16",
  image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face"
}, {
  name: "Lucas Vincent",
  role: "Entraîneur U14",
  image: "https://images.unsplash.com/photo-1502764613149-7f1d229e2306?w=200&h=200&fit=crop&crop=face"
}, {
  name: "Antoine Lampole",
  role: "Entraîneur U14",
  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face"
}, {
  name: "Nino Mancinone",
  role: "Mini handball",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
}, {
  name: "Dorian Derveaux",
  role: "Mini handball",
  image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=200&h=200&fit=crop&crop=face"
}];

// Classement par âge pour les équipes avec images pour seniors et vétérans et maintenant U18
const categories = [
  { name: "Seniors", color: "bg-hc-green", img: "/lovable-uploads/a4551830-cf39-4d58-bf31-7325e3117da5.png" },
  { name: "Vétérans / Loisir", color: "bg-hc-orange", img: "/lovable-uploads/3f691e54-6444-4b56-966f-fab9bcea6968.png" },
  { name: "U18", color: "bg-hc-green-light", img: "/lovable-uploads/2c5565cf-f45d-4d43-b901-68086906cbad.png" },
  { name: "U16", color: "bg-hc-green" },
  { name: "U14", color: "bg-hc-green-light" },
  { name: "Mini handball", color: "bg-hc-green-light" },
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
                {c.img && (
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
                          : "border-gray-300"
                      } animate-fade-in`}
                    />
                    <span className="mt-2 text-sm text-muted-foreground italic">
                      {c.name} - Saison 2024
                    </span>
                  </div>
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
