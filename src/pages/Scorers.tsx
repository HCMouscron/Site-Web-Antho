
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Target, Loader2, Zap, Star } from 'lucide-react';

interface ScorerData {
  position: number;
  nom: string;
  club: string;
  buts: number;
}

const Scorers = () => {
  const [scorersData, setScorersData] = useState<ScorerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScorers = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.functions.invoke('scorers');
        
        if (error) throw error;
        
        // Trier par nombre de buts décroissant
        const sortedData = (data || []).sort((a: ScorerData, b: ScorerData) => b.buts - a.buts);
        setScorersData(sortedData);
      } catch (err) {
        console.error('Erreur lors du fetch des scorers:', err);
        setError('Impossible de charger les scorers pour le moment.');
      } finally {
        setLoading(false);
      }
    };

    fetchScorers();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-500 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-700/30 to-amber-600/30"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4 shadow-2xl">
              <Target className="h-16 w-16 text-yellow-100" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl drop-shadow-2xl">
              SCORERS
            </h1>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 mx-auto max-w-4xl border border-white/30 shadow-2xl">
            <p className="text-2xl sm:text-3xl text-yellow-50 font-bold drop-shadow-lg leading-relaxed">
              ⚡ Les meilleurs buteurs du championnat
            </p>
            <p className="text-lg text-yellow-100 mt-4 drop-shadow-md">
              Talents exceptionnels • Performances remarquables • Précision redoutable
            </p>
          </div>
        </div>
      </section>

      {/* Scorers Table */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="shadow-2xl border-0 overflow-hidden bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-green-600 via-emerald-500 to-amber-500 text-white py-8">
              <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-4">
                <Zap className="h-8 w-8" />
                Classement des Buteurs
                <Star className="h-8 w-8" />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {loading ? (
                <div className="flex items-center justify-center py-20 bg-gradient-to-br from-green-50 to-amber-50">
                  <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin text-green-500 mx-auto mb-4" />
                    <span className="text-xl text-gray-700 font-medium">Chargement des scorers...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="text-center py-20 bg-red-50">
                  <p className="text-red-600 text-xl font-medium">{error}</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                        <TableHead className="font-bold text-center text-gray-800 py-4">Position</TableHead>
                        <TableHead className="font-bold text-gray-800 py-4">Nom du Joueur</TableHead>
                        <TableHead className="font-bold text-gray-800 py-4">Club</TableHead>
                        <TableHead className="font-bold text-center text-gray-800 py-4">Buts</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {scorersData.map((scorer, index) => (
                        <TableRow 
                          key={index}
                          className={`${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-r from-green-50/50 to-amber-50/50'} hover:bg-gradient-to-r hover:from-green-100 hover:to-amber-100 transition-all duration-300 border-b border-gray-100`}
                        >
                          <TableCell className="text-center font-bold py-4">
                            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold shadow-lg ${
                              scorer.position === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : 
                              scorer.position === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500' : 
                              scorer.position === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600' : 
                              'bg-gradient-to-br from-green-500 to-amber-500'
                            }`}>
                              {scorer.position}
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold text-gray-800 py-4 text-lg">{scorer.nom}</TableCell>
                          <TableCell className="font-medium text-gray-700 py-4">{scorer.club}</TableCell>
                          <TableCell className="text-center font-bold py-4 text-xl">
                            <span className="bg-gradient-to-r from-green-600 to-amber-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
                              <Target className="h-5 w-5 text-green-600" />
                              {scorer.buts}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Scorers;
