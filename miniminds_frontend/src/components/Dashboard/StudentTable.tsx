import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Plus } from 'lucide-react';
//import { mockStudents } from '@/constants'; // make sure this path is correct
import StatusBadge from '@/components/StatusBadge';     // adjust path if needed
import ProgressBar from '@/components/ProgressBar';     // adjust path if needed

const mockStudents = [
  { id: 1, name: "Emma Johnson", grade: "3B", status: "active", performance: 92, subjects: ["Math", "Science"] },
  { id: 2, name: "Liam Wilson", grade: "2C", status: "needs-attention", performance: 68, subjects: ["Reading"] },
  { id: 3, name: "Olivia Smith", grade: "4A", status: "top-performer", performance: 98, subjects: [] },
  { id: 4, name: "Noah Davis", grade: "1A", status: "active", performance: 85, subjects: ["Writing"] },
  { id: 5, name: "Ava Brown", grade: "3B", status: "needs-attention", performance: 72, subjects: ["Math", "Science"] },
];


const StudentsTable = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-800">Student Overview</h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search students..." className="pl-9" />
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" /> Register Student
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Performance</TableHead>
              <TableHead>Subjects Needing Attention</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>Grade {student.grade}</TableCell>
                <TableCell>
                  <StatusBadge status={student.status} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <ProgressBar
                      value={student.performance}
                      color={
                        student.performance >= 90
                          ? 'bg-green-500'
                          : student.performance >= 75
                          ? 'bg-primary'
                          : student.performance >= 60
                          ? 'bg-amber-500'
                          : 'bg-red-500'
                      }
                    />
                    <span className="text-xs font-medium">{student.performance}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  {student.subjects.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {student.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xs text-gray-500">None</span>
                  )}
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StudentsTable;
