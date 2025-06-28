import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MapSection = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-xl text-hc-green">
        Comment nous trouver
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-64 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-green-50 to-amber-50 flex items-center justify-center border-2 border-gray-200">
        <div className="text-center p-8">
          <MapPin className="h-16 w-16 text-hc-green mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Hall Max Lessines</h3>
          <p className="text-gray-600 mb-4">Rue des Prés 84B, 7700 Mouscron</p>
          <Button asChild className="bg-hc-green hover:bg-hc-green-light text-white">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rue+des+Prés+84B,+7700+Mouscron,+Belgium"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MapPin className="h-4 w-4" />
              Ouvrir dans Google Maps
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      <div className="text-sm text-muted-foreground space-y-1">
        <p>
          <strong>Adresse :</strong> Hall Max Lessines, Rue des Prés 84B, 7700 Mouscron
        </p>
        <p>
          <strong>Parking :</strong> Gratuit sur place
        </p>
        <p>
          <strong>Accès :</strong> Cliquez sur le bouton ci-dessus pour obtenir l'itinéraire
        </p>
      </div>
    </CardContent>
  </Card>
);

export default MapSection;