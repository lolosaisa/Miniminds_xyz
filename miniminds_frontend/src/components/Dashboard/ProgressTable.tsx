import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import ProgressBar from '@/components/ProgressBar'; // Make sure this exists and is imported properly

// Dummy data for illustration (replace with props or actual data source)
const mockSubjects = [
  { name: 'Mathematics', progress: 85 },
  { name: 'Science', progress: 70 },
  { name: 'English', progress: 92 },
];

const mockClasses = [
  { id: 1, name: 'Class 8A', progress: 76 },
  { id: 2, name: 'Class 7B', progress: 58 },
  { id: 3, name: 'Class 6C', progress: 88 },
];

const ProgressTracker = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Learning Progress Tracker</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Subject Progress */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Subject Progress</h3>
          <div className="space-y-5">
            {mockSubjects.map((subject) => (
              <div key={subject.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{subject.name}</span>
                  <span className="text-sm text-gray-500">{subject.progress}%</span>
                </div>
                <ProgressBar value={subject.progress} />
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <Button variant="outline" className="w-full">
              View Detailed Reports
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Class Completion */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Class Completion</h3>
          <div className="space-y-5">
            {mockClasses.map((classItem) => (
              <div key={classItem.id} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{classItem.name}</span>
                  <span className="text-sm text-gray-500">{classItem.progress}%</span>
                </div>
                <ProgressBar
                  value={classItem.progress}
                  color={
                    classItem.progress >= 80
                      ? 'bg-green-500'
                      : classItem.progress >= 65
                      ? 'bg-primary'
                      : classItem.progress >= 50
                      ? 'bg-amber-500'
                      : 'bg-red-500'
                  }
                />
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between">
            <Button variant="outline">
              Mark Complete
              <Check className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              Assign Homework
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
