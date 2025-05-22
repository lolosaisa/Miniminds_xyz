// components/dashboard/TeachersTab.tsx

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";
import  ProgressBar  from "@/components/ProgressBar";
import { TabsContent } from "@/components/ui/tabs";
//import { mockTeachers } from "@/constants"; // Ensure this is imported correctly

const mockTeachers = [
  { id: 1, name: "Sarah Johnson", students: 58, badges: 124, avgScore: 87 },
  { id: 2, name: "Michael Smith", students: 64, badges: 98, avgScore: 82 },
  { id: 3, name: "Emily Williams", students: 30, badges: 156, avgScore: 91 },
  { id: 4, name: "David Wilson", students: 45, badges: 78, avgScore: 76 },
];

const TeachersTab = () => (
  <TabsContent value="teachers" className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-800">Teacher Performance</h2>
      <Button className="bg-primary hover:bg-primary/90">
        <Plus className="mr-2 h-4 w-4" /> Add New Teacher
      </Button>
    </div>

    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Teacher Name</TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Badges Awarded</TableHead>
            <TableHead>Avg. Student Score</TableHead>
            <TableHead>Performance</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockTeachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell className="font-medium">{teacher.name}</TableCell>
              <TableCell>{teacher.students} students</TableCell>
              <TableCell>{teacher.badges} badges</TableCell>
              <TableCell>{teacher.avgScore}/100</TableCell>
              <TableCell className="w-40">
                <div className="flex items-center space-x-2">
                  <ProgressBar 
                    value={teacher.avgScore}
                    color={
                      teacher.avgScore >= 90
                        ? "bg-green-500"
                        : teacher.avgScore >= 80
                        ? "bg-primary"
                        : teacher.avgScore >= 70
                        ? "bg-amber-500"
                        : "bg-red-500"
                    }
                  />
                  <span className="text-xs font-medium">{teacher.avgScore}%</span>
                </div>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View Profile</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </TabsContent>
);

export default TeachersTab;
