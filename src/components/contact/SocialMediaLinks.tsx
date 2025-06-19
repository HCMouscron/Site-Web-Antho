
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
        de l'actualité du club !
      </p>
      <div className="flex gap-4">
        <Button variant="outline" size="lg" asChild>
          <a
            href="https://www.facebook.com/HCMouscron"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <img 
              src="/lovable-uploads/b2e8bfa2-ec84-4d63-8d58-503664da7229.png" 
              alt="Facebook" 
              className="h-5 w-5"
            />
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
            <img 
              src="/lovable-uploads/e132c7e8-e206-404e-b6fb-60edb8e0d181.png" 
              alt="Instagram" 
              className="h-5 w-5"
            />
            Instagram
          </a>
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default SocialMediaLinks;
