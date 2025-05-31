
import { motion } from "framer-motion";
import { Building, Users, MapPin, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
//import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";


// Sample data - in a real app, this would come from your database
// const institutionsData = [
//   {
//     id: 1,
//     name: "Brightside Academy",
//     location: "New York, USA",
//     studentCount: 1250,
//     type: "Primary",
//     established: 2005,
//     website: "brightsideacademy.edu"
//   },
//   {
//     id: 2,
//     name: "Tech Future College",
//     location: "San Francisco, USA",
//     studentCount: 3750,
//     type: "Tertiary",
//     established: 1998,
//     website: "techfuture.edu"
//   },
//   {
//     id: 3,
//     name: "Global Learning Institute",
//     location: "London, UK",
//     studentCount: 2800,
//     type: "Secondary",
//     established: 2010,
//     website: "globallearning.org"
//   },
//   {
//     id: 4,
//     name: "Innovation School",
//     location: "Tokyo, Japan",
//     studentCount: 950,
//     type: "Primary",
//     established: 2015,
//     website: "innovation-school.jp"
//   },
//   {
//     id: 5,
//     name: "Eduverse Academy",
//     location: "Toronto, Canada",
//     studentCount: 1650,
//     type: "Secondary",
//     established: 2007,
//     website: "eduverse.ca"
//   }
// ];

type Institution = {
  id: number;
  name: string;
  location: string;
  studentCount: number;
  type: string;
  established: number;
  website: string;
};

const RegisteredInstitutions = () => {
  const [viewMode, setViewMode] = useState<'card' | 'table'>('card');

  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchInstitutions = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/institutions"
); 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setInstitutions(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  fetchInstitutions();
}, []);

  
  return (
    <section className="py-16 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-8 -right-8 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Our Partner Institutions
            </span>
          </h2>
          <p className="text-gray-600">
            Join our growing network of educational leaders who are transforming learning experiences. These institutions have already embarked on their MiniMinds journey.
          </p>
          
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              onClick={() => setViewMode('card')}
              variant={viewMode === 'card' ? 'default' : 'outline'}
              size="sm"
              className={viewMode === 'card' ? 'bg-primary hover:bg-primary/90' : ''}
            >
              Card View
            </Button>
            <Button
              onClick={() => setViewMode('table')}
              variant={viewMode === 'table' ? 'default' : 'outline'}
              size="sm"
              className={viewMode === 'table' ? 'bg-primary hover:bg-primary/90' : ''}
            >
              Table View
            </Button>
          </div>
        </motion.div>
        
        {viewMode === 'card' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {institutions.map((institution) => (
              <motion.div
                key={institution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: institution.id * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-effect hover:shadow-lg transition-all duration-300 border-none">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                            <Building className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold">{institution.name}</h3>
                        </div>
                        <div className="text-xs font-medium bg-muted px-2 py-1 rounded-full">
                          Est. {institution.established}
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-4 flex-grow">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-secondary mr-2" />
                          <span className="text-sm">{institution.location}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-secondary mr-2" />
                          <span className="text-sm">{institution.studentCount.toLocaleString()} Students</span>
                        </div>
                        
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 text-secondary mr-2" />
                          <span className="text-sm">{institution.type} Education</span>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <a 
                          href={`https://${institution.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center"
                        >
                          {institution.website}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-none">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Institution Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Established</TableHead>
                    <TableHead>Website</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {institutions.map((institution) => (
                    <TableRow key={institution.id}>
                      <TableCell className="font-medium">{institution.name}</TableCell>
                      <TableCell>{institution.location}</TableCell>
                      <TableCell>{institution.studentCount.toLocaleString()}</TableCell>
                      <TableCell>{institution.type}</TableCell>
                      <TableCell>{institution.established}</TableCell>
                      <TableCell>
                        <a 
                          href={`https://${institution.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center"
                        >
                          {institution.website}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-lg group"
            size="lg"
            onClick={() => {
              document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join These Institutions
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisteredInstitutions;