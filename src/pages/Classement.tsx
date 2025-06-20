
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trophy, Loader2, Medal, Award } from 'lucide-react';

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
    <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 via-orange-500 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 to-green-700/30"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4 shadow-2xl">
              <Trophy className="h-16 w-16 text-yellow-100" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl drop-shadow-2xl">
              CLASSEMENT
            </h1>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 mx-auto max-w-4xl border border-white/30 shadow-2xl">
            <p className="text-2xl sm:text-3xl text-yellow-50 font-bold drop-shadow-lg leading-relaxed">
              🏆 Suivez la progression de nos équipes dans le championnat
            </p>
            <p className="text-lg text-yellow-100 mt-4 drop-shadow-md">
              Performances en temps réel • Statistiques détaillées • Classement officiel
            </p>
          </div>
        </div>
      </section>

      {/* Classement Table */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="shadow-2xl border-0 overflow-hidden bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-amber-500 via-orange-500 to-green-600 text-white py-8">
              <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-4">
                <Medal className="h-8 w-8" />
                Classement Championnat
                <Award className="h-8 w-8" />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {loading ? (
                <div className="flex items-center justify-center py-20 bg-gradient-to-br from-amber-50 to-green-50">
                  <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin text-amber-500 mx-auto mb-4" />
                    <span className="text-xl text-gray-700 font-medium">Chargement du classement...</span>
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
                        <TableHead className="font-bold text-gray-800 py-4">Équipe</TableHead>
                        <TableHead className="font-bold text-center text-gray-800 py-4">MJ</TableHead>
                        <TableHead className="font-bold text-center text-gray-800 py-4">V</TableHead>
                        <TableHead className="font-bold text-center text-gray-800 py-4">N</TableHead>
                        <TableHead className="font-bold text-center text-gray-800 py-4">D</TableHead>
                        <TableHead className="font-bold text-center text-gray-800 py-4">Points</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {classementData.map((team, index) => (
                        <TableRow 
                          key={index}
                          className={`${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-r from-amber-50/50 to-green-50/50'} hover:bg-gradient-to-r hover:from-amber-100 hover:to-green-100 transition-all duration-300 border-b border-gray-100`}
                        >
                          <TableCell className="text-center font-bold py-4">
                            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold shadow-lg ${
                              team.position === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : 
                              team.position === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500' : 
                              team.position === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600' : 
                              'bg-gradient-to-br from-amber-500 to-green-600'
                            }`}>
                              {team.position}
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold text-gray-800 py-4 text-lg">{team.equipe}</TableCell>
                          <TableCell className="text-center font-medium py-4">{team.matchs_joues}</TableCell>
                          <TableCell className="text-center text-green-600 font-bold py-4 text-lg">{team.victoires}</TableCell>
                          <TableCell className="text-center text-yellow-600 font-bold py-4 text-lg">{team.nuls}</TableCell>
                          <TableCell className="text-center text-red-600 font-bold py-4 text-lg">{team.defaites}</TableCell>
                          <TableCell className="text-center font-bold py-4 text-xl">
                            <span className="bg-gradient-to-r from-amber-500 to-green-600 bg-clip-text text-transparent">
                              {team.points}
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

export default Classement;
