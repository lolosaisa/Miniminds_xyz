import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { Search, Plus, Trash2, Pencil } from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';
import ProgressBar from '@/components/ProgressBar';

const API_URL = 'http://localhost:5000/api/institutions/students';

const StudentsTable = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [formData, setFormData] = useState({ name: '', grade: '', status: 'active', performance: 0, subjects: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log('fetched students:', data);
      setStudents(Array.isArray(data.students) ? data.students : []);
    } catch (err) {
      setError('Failed to fetch students.');
      setStudents([]); //this is the fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddOrUpdateStudent = async () => {
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `${API_URL}/${editingId}` : API_URL;
    const body = {
      ...formData,
      subjects: formData.subjects.split(',').map(s => s.trim()),
    };

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error('Failed to save student');
      setFormData({ name: '', grade: '', status: 'active', performance: 0, subjects: '' });
      setEditingId(null);
      fetchStudents();
    } catch (err) {
      alert(err);
    }
  };

  const handleDeleteStudent = async (id: string) => {
    if (!confirm('Are you sure you want to delete this student?')) return;
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete student');
      fetchStudents();
    } catch (err) {
      alert(err);
    }
  };

  const handleEditStudent = (student: any) => {
    setFormData({
      name: student.name,
      grade: student.grade,
      status: student.status,
      performance: student.performance,
      subjects: student.subjects.join(', '),
    });
    setEditingId(student.id);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Student Overview</h2>

      <div className="flex flex-col md:flex-row gap-4 items-start">
        <Input
          placeholder="Student name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          placeholder="Grade (e.g., 3B)"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
        />
        <Input
          placeholder="Performance %"
          name="performance"
          type="number"
          value={formData.performance}
          onChange={handleChange}
        />
        <Input
          placeholder="Subjects (comma separated)"
          name="subjects"
          value={formData.subjects}
          onChange={handleChange}
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border rounded px-2 py-1"
        >
          <option value="active">Active</option>
          <option value="needs-attention">Needs Attention</option>
          <option value="top-performer">Top Performer</option>
        </select>
        <Button onClick={handleAddOrUpdateStudent}>
          {editingId ? 'Update Student' : 'Add Student'}
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Performance</TableHead>
              <TableHead>Subjects</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-red-500">{error}</TableCell>
              </TableRow>
            ) : (
              students.map((student: any) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell><StatusBadge status={student.status} /></TableCell>
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
                    {student.subjects?.length ? student.subjects.map((sub: string) => (
                      <span key={sub} className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs mr-1">{sub}</span>
                    )) : <span className="text-xs text-gray-500">None</span>}
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEditStudent(student)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteStudent(student.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StudentsTable;
