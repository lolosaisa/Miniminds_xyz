// components/Sidebar.jsx
import { motion } from "framer-motion";
import {
  Users,
  User,
  BarChart2,
  Calendar,
  Settings,
  School,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type sidebarProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<sidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { icon: Users, label: "Classes", value: "classes" },
    { icon: User, label: "Students", value: "students" },
    { icon: BarChart2, label: "Progress", value: "progress" },
    { icon: Calendar, label: "Teachers", value: "teachers" },
    { icon: Settings, label: "Rewards", value: "rewards" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:w-64 w-full lg:block hidden bg-white rounded-2xl shadow-sm p-5"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <School className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-semibold text-gray-800">Sunrise Academy</h3>
        <p className="text-sm text-gray-500">Admin Dashboard</p>
      </div>

      <nav className="space-y-1" aria-label="Sidebar navigation">
        {navItems.map((item) => (
          <button
            key={item.value}
            className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl transition-colors focus:outline-none ${
              activeTab === item.value
                ? "bg-secondary/10 text-secondary font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            aria-current={activeTab === item.value ? "page" : undefined}
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
  );
};

export default Sidebar;
