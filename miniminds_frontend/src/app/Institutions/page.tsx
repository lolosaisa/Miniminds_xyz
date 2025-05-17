"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import {
  Search,
  Bell,
  FileText,
  Bookmark,
  LayoutGrid,
  Users,
  Headphones,
  Settings,
  LogOut,
  Calendar,
  BarChart2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Cookies from "js-cookie"; // Import js-cookie

// Define useSession hook (if not already in a separate file)
const useSession = () => {
  const [sessionState, setSessionState] = useState(() => {
    const authToken = Cookies.get("auth_token");
    const institutionId = Cookies.get("institution_id");

    return {
      data: authToken && institutionId ? { authToken, institutionId } : null,
    };
  });

  useEffect(() => {
    const updateSession = () => {
      const authToken = Cookies.get("auth_token");
      const institutionId = Cookies.get("institution_id");

      setSessionState({
        data: authToken && institutionId ? { authToken, institutionId } : null,
      });
    };

    window.addEventListener("storage", updateSession);
    return () => window.removeEventListener("storage", updateSession);
  }, []);

  return sessionState;
};

export default function AdminDashboard() {
  const router = useRouter(); // Initialize router for redirection
  const { data: session } = useSession(); // Retrieve session
  const [activeFilter, setActiveFilter] = useState("All sections");
  type Institution = {
    institutionName: string;
    institutionType?: string;
    // Add other properties as needed
  };
  const [institution, setInstitution] = useState<Institution | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filters = ["All sections", "Teachers", "Students", "Courses"];

  // Mock data (replace with API calls if needed)
  const teachersSummary = [
    { id: "01", name: "Conner Garcia", subject: "Math", avatar: "/placeholder.svg?height=40&width=40", experience: "5 years" },
    { id: "02", name: "Saira Goodman", subject: "Science", avatar: "/placeholder.svg?height=40&width=40", experience: "8 years" },
    { id: "03", name: "Tony Ware", subject: "Technology", avatar: "/placeholder.svg?height=40&width=40", experience: "3 years" },
  ];

  const studentsSummary = [
    { id: "s1", name: "Noah Davis", age: "12", course: "Math Basics", avatar: "/placeholder.svg?height=40&width=40" },
    { id: "s2", name: "Ava Wilson", age: "15", course: "Science Intro", avatar: "/placeholder.svg?height=40&width=40" },
  ];

  const coursesSummary = [
    { id: "c1", name: "Math Basics", teacher: "Conner Garcia", students: 25, progress: 5, total: 20, backgroundColor: "#FFDD80" },
    { id: "c2", name: "Science Intro", teacher: "Saira Goodman", students: 30, progress: 12, total: 50, backgroundColor: "#E0CCFF" },
    { id: "c3", name: "Tech Fundamentals", teacher: "Tony Ware", students: 20, progress: 18, total: 22, backgroundColor: "#CCF2FF" },
  ];

  const schedulesSummary = [
    { id: "sch1", date: "2025-05-18", course: "Math Basics", time: "10:00 AM - 11:30 AM" },
    { id: "sch2", date: "2025-05-19", course: "Science Intro", time: "1:00 PM - 2:30 PM" },
  ];

  const stats = [
    { label: "Total Teachers", value: "25" },
    { label: "Total Students", value: "150" },
    { label: "Active Courses", value: "12" },
  ];

  // Fetch institution data using session
  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        if (!session) {
          throw new Error("No session found. Please log in.");
        }

        const { authToken, institutionId } = session;

        console.log("Fetching session", session);

        const response = await fetch(`http://localhost:5000/api/institutions/${institutionId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch institution");
        }

        const data = await response.json();
        setInstitution(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
        // Redirect to login if no session
        if (err.message.includes("No session found")) {
          router.push("/login");
        }
      }
    };

    fetchInstitution();
  }, [session, router]);

  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="flex h-screen items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex h-screen bg-[#B8D1E0]">
      {/* Sidebar */}
      <div className="w-20 bg-[#2D2D2D] flex flex-col items-center py-6 space-y-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="bg-[#FFD24C] p-3 rounded-xl">
            <LayoutGrid className="text-[#2D2D2D] h-6 w-6" />
          </div>
          <FileText className="text-white h-6 w-6" />
          <Bookmark className="text-white h-6 w-6" />
          <Users className="text-white h-6 w-6" />
          <Calendar className="text-white h-6 w-6" />
          <BarChart2 className="text-white h-6 w-6" />
          <div className="border-t border-gray-700 w-10 pt-8">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </div>
          <Headphones className="text-white h-6 w-6" />
          <Settings className="text-white h-6 w-6" />
        </div>
        <div className="mt-auto">
          <LogOut className="text-white h-6 w-6" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex-col">
        <div className="bg-white rounded-3xl m-4 p-6 flex-1 overflow-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <span className="text-gray-600 mr-1">Welcome to</span>
              <span className="text-[#FF5533] font-bold text-xl">
                {institution?.institutionName || "STEM Innovate Academy"}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input placeholder="Search" className="w-64 rounded-full border-gray-300 pl-4 pr-10" />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#FF5533] rounded-full p-1">
                  <Search className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-500" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar className="h-10 w-10 border-2 border-[#FF5533]">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Admin User</div>
                  <div className="text-xs text-gray-500">@admin_stem</div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-4 flex items-center space-x-2 overflow-auto pb-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`rounded-full whitespace-nowrap ${
                  activeFilter === filter ? "bg-[#2D2D2D] text-white" : "bg-white text-black"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Courses Summary */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Courses Overview</h2>
                  <Button variant="ghost" className="text-[#FF5533]">
                    View all
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {coursesSummary.map((course) => (
                    <div key={course.id} className="rounded-xl overflow-hidden border-0 shadow-sm">
                      <

div className="p-4" style={{ backgroundColor: course.backgroundColor }}>
                        <div className="flex justify-between">
                          <Badge className="bg-black text-white">{course.teacher}</Badge>
                          <Bookmark className="h-5 w-5 fill-black text-black" />
                        </div>
                        <h3 className="text-base font-bold mt-2 mb-4">{course.name}</h3>
                        <div className="mb-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>
                              {course.progress}/{course.total} lessons
                            </span>
                          </div>
                          <Progress value={(course.progress / course.total) * 100} className="h-2 bg-black/20" />
                        </div>
                      </div>
                      <div className="bg-white p-4 flex justify-between items-center">
                        <div className="flex -space-x-2">
                          <Avatar className="border-2 border-white h-6 w-6">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                          <div className="bg-[#FF5533] text-white text-xs flex items-center justify-center rounded-full h-6 w-6 border-2 border-white">
                            +{course.students}
                          </div>
                        </div>
                        <Button size="sm" className="bg-[#FF5533] text-white rounded-full hover:bg-[#FF5533]/90">
                          Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teachers Summary */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Teachers Overview</h2>
                  <Button variant="ghost" className="text-[#FF5533]">
                    View all teachers
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-12 text-sm text-gray-500 px-4">
                    <div className="col-span-6">Teacher</div>
                    <div className="col-span-3">Subject</div>
                    <div className="col-span-3">Experience</div>
                  </div>
                  {teachersSummary.map((teacher) => (
                    <div key={teacher.id} className="grid grid-cols-12 items-center py-2">
                      <div className="col-span-6 flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={teacher.avatar || "/placeholder.svg"} />
                          <AvatarFallback>T</AvatarFallback>
                        </Avatar>
                        <span>{teacher.name}</span>
                      </div>
                      <div className="col-span-3">
                        <Badge className="bg-black text-white">{teacher.subject}</Badge>
                      </div>
                      <div className="col-span-3 text-gray-500">{teacher.experience}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Students Summary */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Students Overview</h2>
                  <Button variant="ghost" className="text-[#FF5533]">
                    View all students
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-12 text-sm text-gray-500 px-4">
                    <div className="col-span-6">Student</div>
                    <div className="col-span-3">Age</div>
                    <div className="col-span-3">Course</div>
                  </div>
                  {studentsSummary.map((student) => (
                    <div key={student.id} className="grid grid-cols-12 items-center py-2">
                      <div className="col-span-6 flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={student.avatar || "/placeholder.svg"} />
                          <AvatarFallback>S</AvatarFallback>
                        </Avatar>
                        <span>{student.name}</span>
                      </div>
                      <div className="col-span-3 text-gray-500">{student.age}</div>
                      <div className="col-span-3 text-gray-500">{student.course}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedules Summary */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Schedules Overview</h2>
                  <Button variant="ghost" className="text-[#FF5533]">
                    View all schedules
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-12 text-sm text-gray-500 px-4">
                    <div className="col-span-4">Date</div>
                    <div className="col-span-4">Course</div>
                    <div className="col-span-4">Time</div>
                  </div>
                  {schedulesSummary.map((schedule) => (
                    <div key={schedule.id} className="grid grid-cols-12 items-center py-2">
                      <div className="col-span-4">{schedule.date}</div>
                      <div className="col-span-4">{schedule.course}</div>
                      <div className="col-span-4 text-gray-500">{schedule.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Stats and Shortcuts */}
            <div className="space-y-6">
              {/* Stats */}
              <div className="bg-[#2D2D2D] rounded-xl p-6 text-white">
                <h2 className="text-lg font-bold mb-4">Institution Stats</h2>
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{stat.label}</span>
                      <span className="font-bold">{stat.value}</span>
                    </div>
                  ))}
                  {institution && (
                    <div className="flex justify-between">
                      <span>Institution Type</span>
                      <span className="font-bold">{institution.institutionType}</span>
                    </div>
                  )}
                </div>
                <Button className="w-full bg-[#FF5533] text-white rounded-full hover:bg-[#FF5533]/90 mt-6">
                  More Details
                </Button>
              </div>

              {/* Shortcuts */}
              <div className="bg-[#2D2D2D] rounded-xl p-6 text-white">
                <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Button className="w-full bg-[#FFD24C] text-black rounded-full hover:bg-[#FFD24C]/90">
                    Manage Teachers
                  </Button>
                  <Button className="w-full bg-[#FFD24C] text-black rounded-full hover:bg-[#FFD24C]/90">
                    Manage Students
                  </Button>
                  <Button className="w-full bg-[#FFD24C] text-black rounded-full hover:bg-[#FFD24C]/90">
                    Manage Courses
                  </Button>
                  <Button className="w-full bg-[#FFD24C] text-black rounded-full hover:bg-[#FFD24C]/90">
                    Manage Schedules
                  </Button>
                  <Button className="w-full bg-[#FFD24C] text-black rounded-full hover:bg-[#FFD24C]/90">
                    Generate Reports
                  </Button>
                  <Button className="w-full bg-[#FFD24C] text-black rounded-full hover:bg-[#FFD24C]/90">
                    Institution Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}