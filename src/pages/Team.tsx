
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const bureau = [
  {
    name: "David Macarez",
    role: "Secrétaire",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Damien Cockenpot",
    role: "Trésorier",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Joaquim Vercruysse",
    role: "Trésorier",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=face"
  },
];

const entraineursSeniors = [
  {
    name: "Laszlo Baan",
    role: "Entraîneur principal Seniors",
    image: "https://images.unsplash.com/photo-1519340333755-c55307049130?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Thierry Vincent",
    role: "Entraîneur secondaire Seniors",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
  },
];

const entraineursJeunes = [
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
    name: "Lucas Vincent",
    role: "Entraîneur U14",
    image: "https://images.unsplash.com/photo-1502764613149-7f1d229e2306?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Antoine Lampole",
    role: "Entraîneur U14",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Nino Mancinone",
    role: "Mini handball",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Dorian Derveaux",
    role: "Mini handball",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=200&h=200&fit=crop&crop=face"
  },
];

const categories = [
  "Seniors",
  "U18",
  "U16",
  "U14",
  "Vétérans / Loisir",
  "Mini handball",
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

        {/* Staff Technique - Bureau */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-hc-green">
            Bureau
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {bureau.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge className="bg-hc-orange text-white mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                {/* Pas d'expérience à afficher dans le bureau */}
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
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
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
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
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
          <div className="flex flex-col items-center gap-5">
            {categories.map((c, idx) => (
              <span key={c+idx} className={
                c === "Vétérans / Loisir"
                  ? "px-6 py-3 rounded-full bg-hc-orange text-white text-lg font-semibold shadow text-shadow"
                  : c === "Mini handball"
                  ? "px-6 py-3 rounded-full bg-hc-green-light text-white text-lg font-semibold shadow text-shadow"
                  : idx % 2 === 0
                  ? "px-6 py-3 rounded-full bg-hc-green text-white text-lg font-semibold shadow text-shadow"
                  : "px-6 py-3 rounded-full bg-hc-green-light text-white text-lg font-semibold shadow text-shadow"
              }>
                {c}
              </span>
            ))}
          </div>
        </section>
        {/* Section Palmarès supprimée */}
      </div>
    </div>
  );
};

export default Team;
