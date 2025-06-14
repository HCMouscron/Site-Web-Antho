
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
      <div className="h-64 bg-muted rounded-lg flex items-center justify-center mb-4">
        <div className="text-center text-muted-foreground">
          <MapPin className="h-12 w-12 mx-auto mb-2" />
          <p>Carte Google Maps</p>
          <p className="text-sm">Hall Max Lessines</p>
        </div>
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
