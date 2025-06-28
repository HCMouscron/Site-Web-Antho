import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import ContactForm from "@/components/contact/ContactForm";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import StaffContacts from "@/components/contact/StaffContacts";
import MapSection from "@/components/contact/MapSection";
import SocialMediaLinks from "@/components/contact/SocialMediaLinks";

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

  // Coordonnées à jour : synchronisé avec le footer
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

  // Staff aligné avec la page Équipe : 3 membres principaux du bureau seulement
  const staff = [
    {
      name: "David Macarez",
      role: "Secrétaire",
      phone: "+32 (0)467 32 84 24",
      email: "handballmouscron@gmail.com"
    },
    {
      name: "Damien Cockenpot",
      role: "Trésorier",
      phone: "+32 (0)467 32 84 24",
      email: "handballmouscron@gmail.com"
    },
    {
      name: "Joaquim Vercruysse",
      role: "Trésorier",
      phone: "+32 (0)467 32 84 24",
      email: "handballmouscron@gmail.com"
    },
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
            Une question ? Envie de nous rejoindre ? Notre équipe vous répond rapidement pour tout renseignement sur le club ou le handball à Mouscron !
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <section>
            <ContactForm />
          </section>
          {/* Contact Info, Staff, Map, Social, tout dans l'ordre */}
          <section className="space-y-8">
            <ContactInfoCards />
            <StaffContacts />
            <MapSection />
            <SocialMediaLinks />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;