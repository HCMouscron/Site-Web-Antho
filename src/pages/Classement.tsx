
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trophy, Loader2 } from 'lucide-react';

interface ClassementData {
  position: number;
  equipe: string;
  matchs_joues: number;
  victoires: number;
  nuls: number;
  defaites: number;
  points: number;
}

const Classement = () => {
  const [classementData, setClassementData] = useState<ClassementData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClassement = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.functions.invoke('classement');
        
        if (error) throw error;
        
        setClassementData(data || []);
      } catch (err) {
        console.error('Erreur lors du fetch du classement:', err);
        setError('Impossible de charger le classement pour le moment.');
      } finally {
        setLoading(false);
      }
    };

    fetchClassement();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-hc-green via-hc-green to-hc-orange relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="h-12 w-12 text-yellow-200 mr-4" />
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-2xl">
              CLASSEMENT
            </h1>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mx-auto max-w-4xl border border-white/20">
            <p className="text-xl sm:text-2xl text-yellow-100 font-bold drop-shadow-lg">
              Suivez la progression de nos équipes dans le championnat
            </p>
          </div>
        </div>
      </section>

      {/* Classement Table */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-hc-green to-hc-orange text-white">
              <CardTitle className="text-2xl font-bold text-center">
                Classement Championnat
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="h-8 w-8 animate-spin text-hc-green mr-2" />
                  <span className="text-lg">Chargement du classement...</span>
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
                        <TableHead className="font-bold">Équipe</TableHead>
                        <TableHead className="font-bold text-center">MJ</TableHead>
                        <TableHead className="font-bold text-center">V</TableHead>
                        <TableHead className="font-bold text-center">N</TableHead>
                        <TableHead className="font-bold text-center">D</TableHead>
                        <TableHead className="font-bold text-center">Points</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {classementData.map((team, index) => (
                        <TableRow 
                          key={index}
                          className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-hc-green/10 transition-colors`}
                        >
                          <TableCell className="text-center font-bold">
                            <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${
                              team.position === 1 ? 'bg-yellow-500' : 
                              team.position === 2 ? 'bg-gray-400' : 
                              team.position === 3 ? 'bg-orange-500' : 
                              'bg-hc-green'
                            }`}>
                              {team.position}
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold">{team.equipe}</TableCell>
                          <TableCell className="text-center">{team.matchs_joues}</TableCell>
                          <TableCell className="text-center text-green-600 font-semibold">{team.victoires}</TableCell>
                          <TableCell className="text-center text-yellow-600 font-semibold">{team.nuls}</TableCell>
                          <TableCell className="text-center text-red-600 font-semibold">{team.defaites}</TableCell>
                          <TableCell className="text-center font-bold text-hc-green text-lg">{team.points}</TableCell>
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

export default Classement;
