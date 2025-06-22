
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Target, Loader2 } from 'lucide-react';

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
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-hc-orange via-hc-orange to-hc-green relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Target className="h-12 w-12 text-yellow-200 mr-4" />
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-2xl">
              SCORERS
            </h1>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mx-auto max-w-4xl border border-white/20">
            <p className="text-xl sm:text-2xl text-yellow-100 font-bold drop-shadow-lg">
              Les meilleurs buteurs du championnat
            </p>
          </div>
        </div>
      </section>

      {/* Scorers Table */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-hc-orange to-hc-green text-white">
              <CardTitle className="text-2xl font-bold text-center">
                Classement des Buteurs
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="h-8 w-8 animate-spin text-hc-orange mr-2" />
                  <span className="text-lg">Chargement des scorers...</span>
                </div>
              ) : error ? (
                <div className="text-center py-20">
                  <p className="text-red-600 text-lg">{error}</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-bold text-center">Position</TableHead>
                        <TableHead className="font-bold">Nom du Joueur</TableHead>
                        <TableHead className="font-bold">Club</TableHead>
                        <TableHead className="font-bold text-center">Buts</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {scorersData.map((scorer, index) => (
                        <TableRow 
                          key={index}
                          className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-hc-orange/10 transition-colors`}
                        >
                          <TableCell className="text-center font-bold">
                            <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${
                              scorer.position === 1 ? 'bg-yellow-500' : 
                              scorer.position === 2 ? 'bg-gray-400' : 
                              scorer.position === 3 ? 'bg-orange-500' : 
                              'bg-hc-orange'
                            }`}>
                              {scorer.position}
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold">{scorer.nom}</TableCell>
                          <TableCell>{scorer.club}</TableCell>
                          <TableCell className="text-center font-bold text-hc-orange text-lg">
                            {scorer.buts}
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
