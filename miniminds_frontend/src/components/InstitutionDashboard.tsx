// 💡 This file is being refactored to fully integrate with API calls and remove mock data.
// 🔧 We'll move data fetching, modal forms, and CRUD actions to organized components.

// File: /app/dashboard/InstitutionDashboard.tsx

'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, User, BarChart2, Calendar, Settings } from "lucide-react";

import StudentTable from "@/components/Dashboard/StudentTable";
import TeacherTable from "@/components/Dashboard/TeachersTable";
import ClassTable from "@/components/Dashboard/ClassTable";
import SubjectProgress from "@/components/Dashboard/SubjectProgress";
import RewardsPanel from "@/components/Dashboard/RewardsTable";

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
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-800">Sunrise Academy</h3>
              <p className="text-sm text-gray-500">Admin Dashboard</p>
            </div>

            <nav className="space-y-1">
              {[{ icon: Users, label: "Classes", value: "classes" },
                { icon: User, label: "Students", value: "students" },
                { icon: BarChart2, label: "Progress", value: "progress" },
                { icon: Calendar, label: "Teachers", value: "teachers" },
                { icon: Settings, label: "Rewards", value: "rewards" },
              ].map((item) => (
                <button
                  key={item.value}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl transition-colors ${
                    activeTab === item.value ? "bg-secondary/10 text-secondary" : "hover:bg-gray-100 text-gray-700"
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

              <TabsContent value="classes">
                <ClassTable />
              </TabsContent>

              <TabsContent value="students">
                <StudentTable />
              </TabsContent>

              <TabsContent value="progress">
                <SubjectProgress />
              </TabsContent>

              <TabsContent value="teachers">
                <TeacherTable />
              </TabsContent>

              <TabsContent value="rewards">
                <RewardsPanel />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
};



// const Trophy = ({ className }: { className?: string }) => (
//   <svg 
//     xmlns="http://www.w3.org/2000/svg" 
//     viewBox="0 0 24 24" 
//     fill="none" 
//     stroke="currentColor" 
//     strokeWidth="2" 
//     strokeLinecap="round" 
//     strokeLinejoin="round" 
//     className={className}
//   >
//     <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
//     <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
//     <path d="M4 22h16" />
//     <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
//     <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
//     <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
//   </svg>
// );

// const Medal = ({ className }: { className?: string }) => (
//   <svg 
//     xmlns="http://www.w3.org/2000/svg" 
//     viewBox="0 0 24 24" 
//     fill="none" 
//     stroke="currentColor" 
//     strokeWidth="2" 
//     strokeLinecap="round" 
//     strokeLinejoin="round" 
//     className={className}
//   >
//     <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
//     <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
//     <path d="M15.79 10.11 17 1l-5 3-5-3 1.21 9.12" />
//   </svg>
// );

export default InstitutionDashboard;
