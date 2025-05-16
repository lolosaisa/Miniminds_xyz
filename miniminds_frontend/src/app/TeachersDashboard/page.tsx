
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Group, 
  LogOut,
  Search,
  Calendar,
  FileText,
  FilePlus,
  Edit,
  Trash2,
  Copy,
  Filter,
  School,
  ClipboardList
} from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Mock data for activities
const mockActivities = [
  {
    id: 1,
    title: "Introduction to Coding",
    status: "Published",
    viewCount: 24,
    completionRate: 75,
    avgScore: 85,
    date: "2025-05-10"
  },
  {
    id: 2,
    title: "Mathematics: Algebra Basics",
    status: "Scheduled",
    viewCount: 0,
    completionRate: 0,
    avgScore: 0,
    date: "2025-05-20"
  },
  {
    id: 3,
    title: "Science: Solar System",
    status: "Draft",
    viewCount: 0,
    completionRate: 0,
    avgScore: 0,
    date: "2025-05-15"
  },
  {
    id: 4,
    title: "History: Ancient Civilizations",
    status: "Published",
    viewCount: 18,
    completionRate: 60,
    avgScore: 78,
    date: "2025-05-05"
  }
];

// Mock data for students
const mockStudents = [
  {
    id: 1,
    name: "Emma Thompson",
    completionRate: 90,
    avgScore: 92,
    lastActivity: "2025-05-14"
  },
  {
    id: 2,
    name: "Noah Garcia",
    completionRate: 75,
    avgScore: 80,
    lastActivity: "2025-05-13"
  },
  {
    id: 3,
    name: "Olivia Johnson",
    completionRate: 95,
    avgScore: 95,
    lastActivity: "2025-05-14"
  },
  {
    id: 4,
    name: "Liam Smith",
    completionRate: 60,
    avgScore: 72,
    lastActivity: "2025-05-12"
  },
  {
    id: 5,
    name: "Ava Williams",
    completionRate: 85,
    avgScore: 88,
    lastActivity: "2025-05-14"
  }
];

// Mock data for shared resources
const mockResources = [
  {
    id: 1,
    title: "Fractions Worksheet",
    subject: "Mathematics",
    author: "Michael Brown",
    rating: 4.5,
    downloads: 124
  },
  {
    id: 2,
    title: "Coding Project Template",
    subject: "Computer Science",
    author: "Anna Lee",
    rating: 4.8,
    downloads: 250
  },
  {
    id: 3,
    title: "Cell Biology Slides",
    subject: "Biology",
    author: "Robert Davis",
    rating: 4.2,
    downloads: 180
  },
  {
    id: 4,
    title: "World War II Timeline",
    subject: "History",
    author: "Sofia Martinez",
    rating: 4.7,
    downloads: 210
  }
];

const TeachersDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your teacher account",
      duration: 3000,
    });
    // In a real app, this would clear auth state and redirect to home
    window.location.href = "/teachers";
  };

  const handleSaveActivity = () => {
    toast({
      title: "Activity saved as draft",
      description: "Your activity has been saved successfully",
      duration: 3000,
    });
  };

  const handlePublishActivity = () => {
    toast({
      title: "Activity published",
      description: "Your activity has been published successfully",
      duration: 3000,
    });
  };

  const handleScheduleActivity = () => {
    toast({
      title: "Activity scheduled",
      description: "Your activity has been scheduled successfully",
      duration: 3000,
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "create":
        return <CreateActivityPanel 
          onSave={handleSaveActivity} 
          onPublish={handlePublishActivity} 
          onSchedule={handleScheduleActivity} 
        />;
      case "assigned":
        return <AssignedActivitiesPanel />;
      case "progress":
        return <StudentProgressPanel />;
      case "resources":
        return <SharedResourcesPanel />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex">
        <Sidebar variant="sidebar" collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <School className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">MiniMinds</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Teacher Dashboard</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => setActiveTab("overview")}
                    isActive={activeTab === "overview"}
                    tooltip="Dashboard"
                  >
                    <LayoutDashboard />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => setActiveTab("create")}
                    isActive={activeTab === "create"}
                    tooltip="Create Activity"
                  >
                    <BookOpen />
                    <span>Create Activity</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => setActiveTab("assigned")}
                    isActive={activeTab === "assigned"}
                    tooltip="Assigned Activities"
                  >
                    <ClipboardList />
                    <span>Assigned Activities</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => setActiveTab("progress")}
                    isActive={activeTab === "progress"}
                    tooltip="Student Progress"
                  >
                    <Users />
                    <span>Student Progress</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => setActiveTab("resources")}
                    isActive={activeTab === "resources"}
                    tooltip="Shared Resources"
                  >
                    <Group />
                    <span>Shared Resources</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel>User</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
                    <LogOut />
                    <span>Logout</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset>
          <div className="p-6">
            <header className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                {activeTab === "overview" && "Teacher Dashboard"}
                {activeTab === "create" && "Create New Activity"}
                {activeTab === "assigned" && "Assigned Activities"}
                {activeTab === "progress" && "Student Progress"}
                {activeTab === "resources" && "Shared Resources"}
              </h1>
              <p className="text-gray-600">
                Welcome back, Ms. Johnson!
              </p>
            </header>
            
            {renderTabContent()}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

// Dashboard Overview Component
const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Activities Created</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">28</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">78%</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">82%</div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            {mockActivities.slice(0, 3).map(activity => (
              <div key={activity.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <span>{activity.date}</span>
                    <span>•</span>
                    <Badge variant={
                      activity.status === "Published" ? "default" : 
                      activity.status === "Scheduled" ? "secondary" : "outline"
                    }>
                      {activity.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">View All Activities</Button>
        </CardContent>
      </Card>
      
      {/* Top Performing Students */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Students</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockStudents.slice(0, 3).map(student => (
              <div key={student.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-muted-foreground">Last active: {student.lastActivity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{student.avgScore}%</p>
                  <p className="text-sm text-muted-foreground">Average Score</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">View All Students</Button>
        </CardContent>
      </Card>
    </div>
  );
};

// Create Activity Component
type CreateActivityPanelProps = {
  onSave: () => void;
  onPublish: () => void;
  onSchedule: () => void;
};

const CreateActivityPanel = ({ onSave, onPublish, onSchedule }: CreateActivityPanelProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">Activity Title</label>
              <Input id="title" placeholder="Enter activity title" />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
              <textarea 
                id="description" 
                rows={5} 
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter activity description or instructions"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Upload Files</label>
              <div className="border-2 border-dashed border-muted-foreground/20 rounded-md p-6 text-center">
                <FilePlus className="mx-auto h-10 w-10 text-muted-foreground/70" />
                <p className="mt-2 text-sm text-muted-foreground">
                  Drag and drop files here, or click to select files
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Supports PDF, video, slides, and images
                </p>
                <Input 
                  type="file" 
                  className="hidden" 
                  id="file-upload" 
                  multiple 
                />
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    const input = document.getElementById('file-upload');
                    if (input) (input as HTMLInputElement).click();
                  }}
                >
                  Select Files
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="target" className="block text-sm font-medium mb-1">Target Class/Students</label>
                <select 
                  id="target" 
                  className="w-full rounded-md border border-input bg-background px-3 h-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select class or students</option>
                  <option value="class-5a">Class 5A</option>
                  <option value="class-5b">Class 5B</option>
                  <option value="individual">Select Individual Students</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="difficulty" className="block text-sm font-medium mb-1">Difficulty Level</label>
                <select 
                  id="difficulty" 
                  className="w-full rounded-md border border-input bg-background px-3 h-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select difficulty level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="objectives" className="block text-sm font-medium mb-1">Learning Objectives</label>
              <Input id="objectives" placeholder="Enter comma-separated learning objectives" />
            </div>
            
            <div>
              <label htmlFor="schedule-date" className="block text-sm font-medium mb-1">Schedule Date (Optional)</label>
              <div className="flex items-center gap-2">
                <Input id="schedule-date" type="date" />
                <Button variant="outline" size="icon">
                  <Calendar className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-end">
            <Button variant="outline" onClick={onSave}>
              Save as Draft
            </Button>
            <Button variant="secondary" onClick={onSchedule}>
              Schedule
            </Button>
            <Button onClick={onPublish}>
              Publish Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Assigned Activities Component
const AssignedActivitiesPanel = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center w-full md:w-auto">
          <Input placeholder="Search activities..." className="md:w-80" />
          <Button variant="ghost" size="icon" className="ml-2">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <select 
            className="h-9 rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="scheduled">Scheduled</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">Activity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Completion</TableHead>
                  <TableHead>Avg. Score</TableHead>
                  <TableHead className="w-[15%] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockActivities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell className="font-medium">
                      <div>
                        <div>{activity.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">{activity.date}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        activity.status === "Published" ? "default" : 
                        activity.status === "Scheduled" ? "secondary" : "outline"
                      }>
                        {activity.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{activity.viewCount}</TableCell>
                    <TableCell>{activity.completionRate}%</TableCell>
                    <TableCell>{activity.avgScore}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Showing 4 of 4 activities
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" disabled>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Student Progress Component
const StudentProgressPanel = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center w-full md:w-auto">
          <Input placeholder="Search students..." className="md:w-80" />
          <Button variant="ghost" size="icon" className="ml-2">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <select 
            className="h-9 rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="all">All Classes</option>
            <option value="class-5a">Class 5A</option>
            <option value="class-5b">Class 5B</option>
          </select>
        </div>
      </div>
      
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%]">Student Name</TableHead>
                <TableHead>Completion Rate</TableHead>
                <TableHead>Avg. Score</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">
                        {student.name.charAt(0)}
                      </div>
                      <span>{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${student.completionRate}%` }}
                      ></div>
                    </div>
                    <span className="text-xs">{student.completionRate}%</span>
                  </TableCell>
                  <TableCell>{student.avgScore}%</TableCell>
                  <TableCell>{student.lastActivity}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

// Shared Resources Component
const SharedResourcesPanel = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center w-full md:w-auto">
          <Input placeholder="Search resources..." className="md:w-80" />
          <Button variant="ghost" size="icon" className="ml-2">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <select 
            className="h-9 rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="all">All Subjects</option>
            <option value="math">Mathematics</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="cs">Computer Science</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockResources.map((resource) => (
          <Card key={resource.id} className="h-full">
            <CardHeader className="p-0">
              <AspectRatio ratio={16 / 9}>
                <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                  <FileText className="h-10 w-10 text-muted-foreground/70" />
                </div>
              </AspectRatio>
            </CardHeader>
            <CardContent className="p-5">
              <div>
                <Badge className="mb-2">{resource.subject}</Badge>
                <h3 className="font-semibold text-lg mb-1">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">By {resource.author}</p>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    {Array(5).fill(0).map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(resource.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm text-muted-foreground">{resource.rating}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{resource.downloads} downloads</div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button variant="secondary" className="flex-1">Preview</Button>
                  <Button className="flex-1">Use Resource</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button variant="outline">Load More Resources</Button>
      </div>
    </div>
  );
};

export default TeachersDashboard;
