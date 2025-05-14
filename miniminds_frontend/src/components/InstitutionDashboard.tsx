
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Users,
  Plus,
  Search,
  Calendar,
  Settings,
  User,
  Check,
  ArrowRight,
  Edit,
  Trash,
  BarChart2
} from "lucide-react";

// Mock data for dashboard
const mockClasses = [
  { id: 1, name: "Grade 1A", grade: "1", students: 28, teacher: "Ms. Johnson", progress: 78 },
  { id: 2, name: "Grade 2C", grade: "2", students: 32, teacher: "Mr. Smith", progress: 65 },
  { id: 3, name: "Grade 3B", grade: "3", students: 30, teacher: "Mrs. Williams", progress: 82 },
  { id: 4, name: "Grade 4A", grade: "4", students: 26, teacher: "Mr. Davis", progress: 59 },
];

const mockStudents = [
  { id: 1, name: "Emma Johnson", grade: "3B", status: "active", performance: 92, subjects: ["Math", "Science"] },
  { id: 2, name: "Liam Wilson", grade: "2C", status: "needs-attention", performance: 68, subjects: ["Reading"] },
  { id: 3, name: "Olivia Smith", grade: "4A", status: "top-performer", performance: 98, subjects: [] },
  { id: 4, name: "Noah Davis", grade: "1A", status: "active", performance: 85, subjects: ["Writing"] },
  { id: 5, name: "Ava Brown", grade: "3B", status: "needs-attention", performance: 72, subjects: ["Math", "Science"] },
];

const mockTeachers = [
  { id: 1, name: "Sarah Johnson", students: 58, badges: 124, avgScore: 87 },
  { id: 2, name: "Michael Smith", students: 64, badges: 98, avgScore: 82 },
  { id: 3, name: "Emily Williams", students: 30, badges: 156, avgScore: 91 },
  { id: 4, name: "David Wilson", students: 45, badges: 78, avgScore: 76 },
];

const mockSubjects = [
  { name: "Math", progress: 72 },
  { name: "Science", progress: 68 },
  { name: "Reading", progress: 85 },
  { name: "Writing", progress: 63 },
  { name: "Social Studies", progress: 79 },
];

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "active":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "needs-attention":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "top-performer":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case "active":
        return "Active";
      case "needs-attention":
        return "Needs Attention";
      case "top-performer":
        return "Top Performer";
      default:
        return status;
    }
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles()}`}>
      {getStatusLabel()}
    </span>
  );
};

// Progress bar component
const ProgressBar = ({ value, color = "bg-primary" }: { value: number; color?: string }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div
      className={`h-2.5 rounded-full ${color}`}
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

const InstitutionDashboard = () => {
  const [activeTab, setActiveTab] = useState("classes");

  return (
    <div className="min-h-screen bg-[#F5F7FB] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 bg-white rounded-2xl shadow-sm p-5"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <School className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-800">Sunrise Academy</h3>
              <p className="text-sm text-gray-500">Admin Dashboard</p>
            </div>

            <nav className="space-y-1">
              {[
                { icon: Users, label: "Classes", value: "classes" },
                { icon: User, label: "Students", value: "students" },
                { icon: BarChart2, label: "Progress", value: "progress" },
                { icon: Calendar, label: "Teachers", value: "teachers" },
                { icon: Settings, label: "Rewards", value: "rewards" },
              ].map((item) => (
                <button
                  key={item.value}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl transition-colors ${
                    activeTab === item.value
                      ? "bg-secondary/10 text-secondary"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setActiveTab(item.value)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="pt-6 mt-6 border-t border-gray-200">
              <Button variant="outline" className="w-full justify-start text-gray-700">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <Tabs defaultValue="classes" value={activeTab} onValueChange={setActiveTab}>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Institution Dashboard</h1>
                <TabsList className="grid grid-cols-5">
                  <TabsTrigger value="classes">Classes</TabsTrigger>
                  <TabsTrigger value="students">Students</TabsTrigger>
                  <TabsTrigger value="progress">Progress</TabsTrigger>
                  <TabsTrigger value="teachers">Teachers</TabsTrigger>
                  <TabsTrigger value="rewards">Rewards</TabsTrigger>
                </TabsList>
              </div>

              {/* Classes Tab */}
              <TabsContent value="classes" className="space-y-6">
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
              </TabsContent>

              {/* Students Tab */}
              <TabsContent value="students" className="space-y-6">
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
                                color={student.performance >= 90 ? "bg-green-500" : 
                                      student.performance >= 75 ? "bg-primary" : 
                                      student.performance >= 60 ? "bg-amber-500" : "bg-red-500"}
                              />
                              <span className="text-xs font-medium">{student.performance}%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            {student.subjects.length > 0 ? (
                              <div className="flex flex-wrap gap-1">
                                {student.subjects.map((subject) => (
                                  <span key={subject} className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs">
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
              </TabsContent>

              {/* Progress Tab */}
              <TabsContent value="progress" className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Learning Progress Tracker</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            color={classItem.progress >= 80 ? "bg-green-500" : 
                                  classItem.progress >= 65 ? "bg-primary" : 
                                  classItem.progress >= 50 ? "bg-amber-500" : "bg-red-500"}  
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
              </TabsContent>

              {/* Teachers Tab */}
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
                                color={teacher.avgScore >= 90 ? "bg-green-500" : 
                                      teacher.avgScore >= 80 ? "bg-primary" : 
                                      teacher.avgScore >= 70 ? "bg-amber-500" : "bg-red-500"}
                              />
                              <span className="text-xs font-medium">{teacher.avgScore}%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                View Profile
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              {/* Rewards Tab */}
              <TabsContent value="rewards" className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Rewards Center</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">456</h3>
                    <p className="text-gray-600">Total Badges Awarded</p>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                      <Trophy className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">12</h3>
                    <p className="text-gray-600">Achievement Milestones</p>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-4">
                      <Medal className="w-8 h-8 text-[#9b87f5]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">89%</h3>
                    <p className="text-gray-600">Student Engagement</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Reward Milestones</h3>
                  
                  <div className="space-y-4">
                    {[
                      { title: "Complete Math Unit 2", reward: "Math Explorer Badge", progress: 65 },
                      { title: "Read 10 Books", reward: "Bookworm Badge", progress: 80 },
                      { title: "Perfect Attendance - May", reward: "Attendance Star", progress: 92 },
                      { title: "Science Project Completion", reward: "Lab Genius Badge", progress: 45 },
                    ].map((milestone, i) => (
                      <div key={i} className="p-4 border border-gray-100 rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <h4 className="font-medium text-gray-800">{milestone.title}</h4>
                            <p className="text-sm text-gray-500">Reward: {milestone.reward}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ProgressBar value={milestone.progress} />
                          <span className="text-xs font-medium">{milestone.progress}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    <Plus className="mr-2 h-4 w-4" /> Create New Milestone
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Missing icon components
const School = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m4 20 8-8 8 8" />
    <path d="M6 16V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v8" />
    <path d="M18 12h.01" />
    <path d="M22 20H2" />
    <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
    <path d="M12 4v4" />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Trophy = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const Medal = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
    <path d="M15.79 10.11 17 1l-5 3-5-3 1.21 9.12" />
  </svg>
);

export default InstitutionDashboard;
