// components/dashboard/RewardsTab.tsx

import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import  ProgressBar  from "@/components/ProgressBar";
import { Medal, Star, Trophy } from "@/components/CustomIcons"; // Adjust path if needed

const milestones = [
  { title: "Complete Math Unit 2", reward: "Math Explorer Badge", progress: 65 },
  { title: "Read 10 Books", reward: "Bookworm Badge", progress: 80 },
  { title: "Perfect Attendance - May", reward: "Attendance Star", progress: 92 },
  { title: "Science Project Completion", reward: "Lab Genius Badge", progress: 45 },
];

const RewardsTab = () => (
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
        {milestones.map((milestone, i) => (
          <div key={i} className="p-4 border border-gray-100 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h4 className="font-medium text-gray-800">{milestone.title}</h4>
                <p className="text-sm text-gray-500">Reward: {milestone.reward}</p>
              </div>
              <Button variant="outline" size="sm">Edit</Button>
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
);

export default RewardsTab;
