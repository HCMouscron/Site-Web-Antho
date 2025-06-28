import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    details: ["+32 (0)467 32 84 24"],
    color: "text-hc-green"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["handballmouscron@gmail.com", "Réponse rapide par email"],
    color: "text-hc-orange"
  },
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Hall Max Lessines", "Rue des Prés 84B, 7700 Mouscron"],
    color: "text-hc-green"
  }
];

const ContactInfoCards = () => (
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
);

export default ContactInfoCards;