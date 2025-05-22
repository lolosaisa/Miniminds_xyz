"use client";

import { motion } from "framer-motion";
import { BarChart2, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const students = [
  { name: "Jane Mwangi", progress: 80 },
  { name: "Brian Otieno", progress: 65 },
  { name: "Amina Yusuf", progress: 92 },
  { name: "Kelvin Kipkoech", progress: 70 },
];

export default function StudentsProgress() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Summary Card */}
      <Card className="col-span-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium text-gray-800">Overall Progress</CardTitle>
          <BarChart2 className="w-5 h-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-2">Students are progressing well in their respective classes.</p>
          <Progress value={75} className="h-2 bg-secondary/20" />
        </CardContent>
      </Card>

      {/* Individual Progress Cards */}
      {students.map((student) => (
        <Card key={student.name}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base text-gray-700">{student.name}</CardTitle>
              <Trophy className="w-4 h-4 text-yellow-500" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-1">Progress</p>
            <Progress value={student.progress} className="h-2" />
            <p className="mt-2 text-xs text-gray-500">{student.progress}% complete</p>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
}
