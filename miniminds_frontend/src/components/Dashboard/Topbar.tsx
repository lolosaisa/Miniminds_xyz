// components/Topbar.jsx
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

type TopbarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Topbar = ({  }: TopbarProps) => {
  return (
    <div className="flex justify-between items-center mb-6 px-4 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-800">Institution Dashboard</h1>
      <div className="flex items-center space-x-4">
        <TabsList className="hidden sm:grid grid-cols-5 gap-1">
          <TabsTrigger value="classes">Classes</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="teachers">Teachers</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
            SA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
