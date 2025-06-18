
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const MapSection = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-xl text-hc-green">
        Comment nous trouver
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-64 rounded-lg overflow-hidden mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.289896374582!2d3.2086744!3d50.7455833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2f6b0b0b0b0b1%3A0x1234567890abcdef!2sRue%20des%20Pr%C3%A9s%2084B%2C%207700%20Mouscron%2C%20Belgium!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hall Max Lessines - Mouscron"
        />
      </div>
      <div className="text-sm text-muted-foreground space-y-1">
        <p>
          <strong>Adresse :</strong> Hall Max Lessines, Rue des Prés 84B, 7700 Mouscron
        </p>
        <p>
          <strong>Parking :</strong> Gratuit sur place
        </p>
      </div>
    </CardContent>
  </Card>
);

export default MapSection;
