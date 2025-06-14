
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

const staff = [
  {
    name: "David Macarez",
    role: "Secrétaire",
    phone: "+XX XX XX XX XX",
    email: "handballmouscron@gmail.com"
  },
  {
    name: "Damien Cockenpot",
    role: "Trésorier",
    phone: "+XX XX XX XX XX",
    email: "handballmouscron@gmail.com"
  },
  {
    name: "Joaquim Vercruysse",
    role: "Trésorier",
    phone: "+XX XX XX XX XX",
    email: "handballmouscron@gmail.com"
  },
];

const StaffContacts = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-xl text-hc-orange">
        Contacts du bureau
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {staff.map((member, index) => (
          <div key={index} className="p-4 bg-muted/50 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-hc-green">{member.role}</p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p>{member.phone}</p>
                <p>{member.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default StaffContacts;
