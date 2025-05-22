
import React from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Trash, Plus } from 'lucide-react';
import ProgressBar from '@/components/ProgressBar'; // Make sure it's correctly imported

// Mock data – replace with props or real data as needed
const mockClasses = [
  {
    id: 1,
    name: 'Class 8A',
    grade: 8,
    students: 32,
    teacher: 'Mr. Kamau',
    progress: 78,
  },
  {
    id: 2,
    name: 'Class 7B',
    grade: 7,
    students: 28,
    teacher: 'Ms. Njeri',
    progress: 64,
  },
  {
    id: 3,
    name: 'Class 6C',
    grade: 6,
    students: 25,
    teacher: 'Mr. Otieno',
    progress: 85,
  },
];

const ClassManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Class Management</h2>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" /> Create New Class
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Class Name</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Teacher</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockClasses.map((classItem) => (
              <TableRow key={classItem.id}>
                <TableCell className="font-medium">{classItem.name}</TableCell>
                <TableCell>Grade {classItem.grade}</TableCell>
                <TableCell>{classItem.students} students</TableCell>
                <TableCell>{classItem.teacher}</TableCell>
                <TableCell className="w-40">
                  <div className="flex items-center space-x-2">
                    <ProgressBar value={classItem.progress} />
                    <span className="text-xs font-medium">{classItem.progress}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-3.5 w-3.5" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ClassManagement;
