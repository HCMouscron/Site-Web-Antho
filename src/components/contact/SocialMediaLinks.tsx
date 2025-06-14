
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram } from 'lucide-react';

const SocialMediaLinks = () => (
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
);

export default SocialMediaLinks;
