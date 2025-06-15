import { Clock, MapPin, Euro, Calendar, UserPlus, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const trainingSchedule = [{
  category: "U16 & U18",
  day: "Lundi",
  time: "18:00 - 19:30"
}, {
  category: "Seniors & U18",
  day: "Mercredi",
  time: "19:30 - 21:00"
}, {
  category: "U16 & U18",
  day: "Vendredi",
  time: "17:30 - 19:00"
}, {
  category: "Seniors & U18",
  day: "Vendredi",
  time: "19:00 - 20:30"
}, {
  category: "Loisirs",
  day: "Vendredi",
  time: "20:30 - 21:30"
}, {
  category: "Mini handball",
  day: "Samedi",
  time: "10:30 - 12:00"
}];
const seasonEvents = [{
  date: "Septembre 2024",
  event: "Début de saison - Inscriptions"
}, {
  date: "Octobre 2024",
  event: "Tournoi de rentrée"
}, {
  date: "Décembre 2024",
  event: "Tournoi de Noël"
}, {
  date: "Février 2025",
  event: "Match de gala"
}, {
  date: "Avril 2025",
  event: "Tournoi de Pâques"
}, {
  date: "Juin 2025",
  event: "Fête du club - Remise des prix"
}];
const registrationSteps = [{
  step: 1,
  title: "Contactez-nous",
  description: "Par téléphone, email ou via notre formulaire de contact"
}, {
  step: 2,
  title: "Séance d'essai",
  description: "Venez essayer gratuitement lors d'un entraînement"
}, {
  step: 3,
  title: "Inscription",
  description: "Remplissez le formulaire d'inscription et fournissez les documents"
}, {
  step: 4,
  title: "Paiement",
  description: "Réglez la cotisation annuelle"
}];

const tarifs = [
  {
    label: "Mini-handball (né(e)s en 2014 et après)",
    price: "100 €"
  },
  {
    label: "Juniors (né(e)s à partir de 2008)",
    price: "150 €"
  },
  {
    label: "Fratries (à partir du 2ème enfant)",
    price: "135 €"
  },
  {
    label: "Séniors (né(e)s en 2007 et avant)",
    price: "200 €"
  }
];

const calendars = [
  {
    label: "Séniors",
    url: "https://calendar.google.com/calendar/u/0?cid=NzY5YWQzNDhkYjc2YTRlODg5NGYwZDRhNjhkOTVjZWUxOWJmMTZmZThmMDEwNjY5OWUzOGZjMzI1MDkzYzU5ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
  },
  {
    label: "U18",
    url: "https://calendar.google.com/calendar/u/0?cid=ZGJiOGZlOTA1YjgwZGQ5YTc5MTdlZmFlYTkyOTQ1YTZiYTk5MmZmMGU2ODQ3YzI4MGZhNzRhYjhmZGVlMzk1M0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
  },
  {
    label: "U16",
    url: "https://calendar.google.com/calendar/u/0?cid=YmI0NTc5ODdkMGViMzQ3MmQzYjZjZDc1ODk3ZTliNTdmMjMxNTVlNTMzNzlmNzUyZDM0YjYyNjRiZDlmNTY5YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
  },
];

const Info = () => {
  return (
    <div className="w-full py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Informations pratiques
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Tout ce que vous devez savoir pour nous rejoindre : horaires, lieu d'entraînement et procédure d'inscription.</p>
        </div>

        {/* Location & Venue */}
        <section className="mb-16">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-hc-green text-2xl">
                <MapPin className="h-6 w-6" />
                Notre salle d'entraînement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8 md:items-stretch">
                {/* Infos salle - à gauche sur desktop */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-4">Salle Omnisports de Mouscron</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>📍 Rue des Prés 84B, 7700 Mouscron</p>
                    <p>🚗 Parking gratuit sur place</p>
                    <p>🚿 Vestiaires avec douches</p>
                    <p>☕ Cafétéria ouverte les soirs d'entraînement</p>
                  </div>
                </div>
                {/* Bloc de carte dummy - au centre à droite sur desktop */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="h-64 w-full bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-center w-full">
                      Carte Google Maps intégrée
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Training Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-hc-green">
            Horaires d'entraînement
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trainingSchedule.map((training, index) => <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge className="bg-hc-orange text-white mb-2">
                        {training.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {training.day}
                      </div>
                      <div className="flex items-center gap-2 text-lg font-semibold">
                        <Clock className="h-4 w-4" />
                        {training.time}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Season Calendar */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-hc-green">
            Calendrier de la saison
          </h2>
          <div className="max-w-4xl mx-auto text-center py-12">
            <span className="text-lg text-muted-foreground">
              Le calendrier de la saison est à venir.
            </span>
          </div>
        </section>

        {/* Agendas Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-hc-orange">Agendas</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {calendars.map((cal) => (
              <div
                key={cal.label}
                className="flex flex-col items-center bg-hc-green-light/10 p-6 rounded-lg shadow-sm"
              >
                <div className="text-xl font-semibold text-hc-green mb-4">{cal.label}</div>
                <a
                  href={cal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-hc-orange text-white px-4 py-2 rounded hover:bg-hc-orange/80 transition-colors font-medium mt-auto"
                >
                  Ouvrir l'agenda
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 text-muted-foreground text-sm">
            Accès direct aux calendriers Google des matchs pour chaque catégorie.
          </div>
        </section>

        {/* Tarifs Section */}
        <section className="mb-16" id="tarifs">
          <h2 className="text-3xl font-bold text-center mb-12 text-hc-orange">Tarifs</h2>
          <div className="max-w-3xl mx-auto text-center p-10 rounded-lg bg-white/90 border shadow space-y-6">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {tarifs.map((t, idx) => (
                <div
                  key={t.label}
                  className="flex flex-col items-center justify-center bg-hc-green-light/10 rounded-lg p-4 shadow-sm"
                >
                  <div className="text-lg font-semibold text-hc-green mb-1">{t.label}</div>
                  <div className="text-2xl font-bold text-hc-orange mb-1">{t.price}</div>
                </div>
              ))}
            </div>
            <div className="bg-hc-green/10 p-4 rounded-lg shadow mb-4">
              <div className="font-medium mb-1">
                <Euro className="inline-block mr-2" /> Règlement par virement bancaire :
              </div>
              <div className="font-mono text-md text-hc-green font-semibold">
                BE07 1261 1084 1566
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Merci d'indiquer le nom et prénom du joueur en communication.<br />
                Paiement avant le <span className="font-semibold text-hc-orange">30/09/25</span>
              </div>
            </div>
            <div className="italic text-muted-foreground text-sm">
              Les montants des cotisations peuvent être revus à la baisse en cas d’arrivée tardive en cours de saison,
              sur décision du comité du club.
            </div>
          </div>
        </section>

        {/* Registration Process */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-hc-green">
            Procédure d'inscription
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {registrationSteps.map((step, index) => <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-hc-green rounded-full flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
            
            <div className="mt-12 p-6 bg-gradient-to-r from-hc-green to-hc-orange rounded-lg text-center text-white">
              <h3 className="text-xl font-bold mb-4">Documents nécessaires pour l'inscription</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p>✓ Certificat médical de non contre-indication</p>
                  <p>✓ Copie de la carte d'identité</p>
                  <p>✓ Photo d'identité récente</p>
                </div>
                <div>
                  <p>✓ Attestation d'assurance responsabilité civile</p>
                  <p>✓ Autorisation parentale (pour les mineurs)</p>
                  <p>✓ Formulaire d'inscription complété</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Téléchargements utiles */}
        <section className="mt-16 mb-24">
          <h2 className="text-3xl font-bold text-center mb-8 text-hc-orange">
            Téléchargements utiles
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-4">
            <a
              href="https://drive.google.com/file/d/1Z5f29NA636bP7u8egB8dI44vWgYCAQN2/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-hc-orange hover:bg-hc-orange/80 text-white font-medium px-6 py-3 rounded-lg shadow transition-all w-full md:w-auto">
                Télécharger la fiche d'inscription (PDF)
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1kqxLUl4IiAW-ZD-7Fx7foLRVvnhq9hhu/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-hc-green hover:bg-hc-green/80 text-white font-medium px-6 py-3 rounded-lg shadow transition-all w-full md:w-auto">
                Télécharger le certificat médical (PDF)
              </button>
            </a>
          </div>
          <div className="text-center text-muted-foreground text-sm">
            Documents hébergés sur Google Drive.&nbsp;
            <span className="italic">Téléchargement public : seul le fichier est accessible, aucun autre document ne l'est.</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Info;
