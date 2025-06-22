import { Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const News = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 via-green-600 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-amber-700/30"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4 shadow-2xl">
              <Calendar className="h-16 w-16 text-yellow-100" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl drop-shadow-2xl">
              ACTUALITÉS
            </h1>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 mx-auto max-w-4xl border border-white/30 shadow-2xl">
            <p className="text-2xl sm:text-3xl text-yellow-50 font-bold drop-shadow-lg leading-relaxed">
              📰 Toute l'actualité du HC Mouscron
            </p>
            <p className="text-lg text-yellow-100 mt-4 drop-shadow-md">
              Événements • Résultats • Annonces importantes • Vie du club
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="shadow-2xl border-0 overflow-hidden bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-green-800 via-green-600 to-amber-600 text-white py-8">
              <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-4">
                <Clock className="h-8 w-8" />
                Actualités du Club
                <User className="h-8 w-8" />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12">
              <div className="text-center py-20">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-800 to-amber-600 rounded-full mb-6 shadow-lg">
                    <Calendar className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Section en construction
                </h3>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Cette section sera bientôt disponible pour vous tenir informés de toute l'actualité du HC Mouscron.
                </p>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                    <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-green-800 mb-2">Événements</h4>
                    <p className="text-sm text-green-700">Tournois, matchs importants, événements du club</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg">
                    <Clock className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-amber-800 mb-2">Résultats</h4>
                    <p className="text-sm text-amber-700">Résultats des matchs et performances de nos équipes</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-amber-50 p-6 rounded-lg">
                    <User className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">Vie du club</h4>
                    <p className="text-sm text-gray-700">Nouvelles du club, arrivées, départs, actualités</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default News;