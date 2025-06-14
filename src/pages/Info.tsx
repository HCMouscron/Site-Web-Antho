
import { Clock, MapPin, Euro, Calendar, UserPlus, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Info = () => {
  const trainingSchedule = [
    { category: "Seniors Hommes", day: "Mardi", time: "20:00 - 22:00" },
    { category: "Seniors Hommes", day: "Jeudi", time: "20:00 - 22:00" },
    { category: "Seniors Dames", day: "Lundi", time: "19:00 - 21:00" },
    { category: "Seniors Dames", day: "Mercredi", time: "19:00 - 21:00" },
    { category: "Juniors -18 ans", day: "Mercredi", time: "17:00 - 18:30" },
    { category: "Juniors -18 ans", day: "Vendredi", time: "17:00 - 18:30" },
    { category: "Cadets -15 ans", day: "Samedi", time: "14:00 - 15:30" },
    { category: "École de Handball", day: "Samedi", time: "10:00 - 11:30" },
  ];

  const fees = [
    { category: "Seniors", price: "250€", period: "/an", includes: "License + Assurance + Équipement" },
    { category: "Juniors (-18 ans)", price: "200€", period: "/an", includes: "License + Assurance + Équipement" },
    { category: "Cadets (-15 ans)", price: "150€", period: "/an", includes: "License + Assurance + Équipement" },
    { category: "École de Handball", price: "100€", period: "/an", includes: "License + Assurance" },
    { category: "Famille (3+ membres)", price: "500€", period: "/an", includes: "Réduction famille nombreuse" },
  ];

  const seasonEvents = [
    { date: "Septembre 2024", event: "Début de saison - Inscriptions" },
    { date: "Octobre 2024", event: "Tournoi de rentrée" },
    { date: "Décembre 2024", event: "Tournoi de Noël" },
    { date: "Février 2025", event: "Match de gala" },
    { date: "Avril 2025", event: "Tournoi de Pâques" },
    { date: "Juin 2025", event: "Fête du club - Remise des prix" },
  ];

  const registrationSteps = [
    { step: 1, title: "Contactez-nous", description: "Par téléphone, email ou via notre formulaire de contact" },
    { step: 2, title: "Séance d'essai", description: "Venez essayer gratuitement lors d'un entraînement" },
    { step: 3, title: "Inscription", description: "Remplissez le formulaire d'inscription et fournissez les documents" },
    { step: 4, title: "Paiement", description: "Réglez la cotisation annuelle" },
    { step: 5, title: "Équipement", description: "Récupérez votre équipement et commencez à jouer !" },
  ];

  return (
    <div className="w-full py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Informations pratiques
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tout ce que vous devez savoir pour nous rejoindre : horaires, tarifs, 
            lieu d'entraînement et procédure d'inscription.
          </p>
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
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Salle Omnisports de Mouscron</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>📍 Rue des Prés 84B, 7700 Mouscron</p>
                    <p>🚗 Parking gratuit sur place</p>
                    <p>🚌 Arrêt de bus "Sports Complex" ligne 12</p>
                    <p>♿ Accès PMR</p>
                    <p>🚿 Vestiaires avec douches</p>
                    <p>☕ Cafétéria ouverte les soirs d'entraînement</p>
                  </div>
                </div>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Carte Google Maps intégrée</p>
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
            {trainingSchedule.map((training, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
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
              </Card>
            ))}
          </div>
        </section>

        {/* Fees */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-hc-green">
            Tarifs des cotisations
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fees.map((fee, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-hc-green">
                <CardHeader className="text-center">
                  <CardTitle className="text-hc-orange">{fee.category}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-hc-green">
                      {fee.price}
                    </span>
                    <span className="text-muted-foreground">{fee.period}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {fee.includes}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-6 bg-muted/50 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Bon à savoir :</strong> Paiement possible en 3 fois sans frais • 
              Réduction de 20% pour les étudiants • Première séance d'essai gratuite
            </p>
          </div>
        </section>

        {/* Season Calendar */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-hc-green">
            Calendrier de la saison
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {seasonEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-center">
                        <div className="text-sm font-semibold text-hc-orange">
                          {event.date}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{event.event}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
              {registrationSteps.map((step, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
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
                </Card>
              ))}
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
      </div>
    </div>
  );
};

export default Info;
