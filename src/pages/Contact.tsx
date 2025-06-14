import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Remplacement des coordonnées par celles présentes sur Facebook
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+32 476 83 29 12", "Lun-Ven 18h-21h"],
      color: "text-hc-green"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@hcmouscron.be", "Réponse rapide par email"],
      color: "text-hc-orange"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Salle Omnisports", "Rue du Stade, 7700 Mouscron"],
      color: "text-hc-green"
    },
    {
      icon: Clock,
      title: "Horaires secrétariat",
      details: ["Lundi à Vendredi: 18h-21h", "Samedi: 9h-12h"],
      color: "text-hc-orange"
    }
  ];

  // Mise à jour des adresses email et téléphones du staff si possible
  const staff = [
    {
      name: "Marie Dubois",
      role: "Présidente",
      phone: "+32 476 83 29 12",
      email: "info@hcmouscron.be"
    },
    {
      name: "Jean Leroy", 
      role: "Secrétaire",
      phone: "+32 56 123 457",
      email: "secretaire@hcmouscron.be"
    },
    {
      name: "Sophie Martin",
      role: "Trésorière",
      phone: "+32 56 123 458",
      email: "tresorier@hcmouscron.be"
    },
    {
      name: "Pierre Moreau",
      role: "Responsable Jeunes",
      phone: "+32 56 123 459",
      email: "jeunes@hcmouscron.be"
    }
  ];

  return (
    <div className="w-full py-8 bg-gradient-to-br from-hc-green/80 via-white to-hc-orange/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <img src="/lovable-uploads/7f5485a2-eaa0-4a73-8e50-8de5813ec2f3.png" alt="Logo HC Mouscron" className="mx-auto h-20 w-20 rounded-full bg-white p-1 shadow mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-hc-green sm:text-5xl mb-6 drop-shadow">
            Contactez-nous
          </h1>
          <p className="text-xl text-hc-orange max-w-3xl mx-auto">
            Une question ? Envie de nous rejoindre ? Notre équipe vous répond rapidement pour tout renseignement sur le club ou le handball à Mouscron !
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <section>
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl text-hc-green">
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="Votre nom et prénom"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="Objet de votre message"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1"
                      rows={6}
                      placeholder="Votre message..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-hc-green hover:bg-hc-green-light">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <section className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <info.icon className={`h-6 w-6 mt-1 ${info.color}`} />
                      <div>
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Staff Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-hc-orange">
                  Contacts du bureau
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {staff.map((member, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{member.name}</h4>
                          <p className="text-sm text-hc-green">{member.role}</p>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <p>{member.phone}</p>
                          <p>{member.email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-hc-green">
                  Comment nous trouver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Carte Google Maps</p>
                    <p className="text-sm">Salle Omnisports de Mouscron</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong>Adresse :</strong> Rue du Stade, 7700 Mouscron</p>
                  <p><strong>Parking :</strong> Gratuit sur place</p>
                  <p><strong>Transport :</strong> Bus ligne 12 - Arrêt "Sports Complex"</p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-hc-orange">
                  Suivez-nous
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Restez connectés avec nous sur les réseaux sociaux pour ne rien manquer 
                  de l'actualité du club !
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href="https://www.facebook.com/HCMouscron"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Facebook className="h-5 w-5" />
                      Facebook
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href="https://www.instagram.com/hcmouscron/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Instagram className="h-5 w-5" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
