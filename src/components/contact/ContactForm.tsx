
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        'https://posfjtzhypekptobqiep.functions.supabase.co/contact-form',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        }
      );
      const data = await response.json();

      if (response.ok) {
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
      } else {
        toast({
          title: "Erreur lors de l'envoi",
          description:
            data?.error
              ? `Détail : ${data.error}`
              : "Une erreur est survenue. Merci d'essayer plus tard.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Erreur réseau",
        description: "Impossible d'envoyer le message. Vérifiez votre connexion.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-hc-green hover:bg-hc-green-light"
            disabled={loading}
          >
            {loading ? "Envoi..." : "Envoyer le message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
