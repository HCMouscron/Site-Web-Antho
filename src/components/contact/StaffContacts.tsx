import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

const StaffContacts = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-xl text-hc-orange">Contact du club</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="p-4 bg-muted/50 rounded-lg">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold">Contact principal</h4>
            <p className="text-sm text-hc-green">Secrétariat</p>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            <p>+XX XX XX XX XX</p>
            <p>handballmouscron@gmail.com</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default StaffContacts;