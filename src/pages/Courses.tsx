import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Clock, Users, GraduationCap } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      name: "Civil Engineering",
      description: "Comprehensive program covering construction, structural design, and infrastructure development.",
      duration: "3 Years",
      eligibility: "10th Pass with minimum 50%",
      seats: 60,
      subjects: ["Engineering Drawing", "Building Construction", "Surveying", "Concrete Technology"]
    },
    {
      name: "Mechanical Engineering", 
      description: "Focuses on machine design, manufacturing processes, and thermal engineering principles.",
      duration: "3 Years",
      eligibility: "10th Pass with minimum 50%",
      seats: 60,
      subjects: ["Machine Design", "Thermodynamics", "Manufacturing Processes", "Material Science"]
    },
    {
      name: "Computer Engineering",
      description: "Modern curriculum covering programming, software development, and computer systems.",
      duration: "3 Years", 
      eligibility: "10th Pass with minimum 50%",
      seats: 60,
      subjects: ["Programming Languages", "Database Systems", "Web Development", "Computer Networks"]
    },
    {
      name: "Electrical Engineering",
      description: "Comprehensive study of electrical systems, power generation, and electronic circuits.",
      duration: "3 Years",
      eligibility: "10th Pass with minimum 50%", 
      seats: 60,
      subjects: ["Electrical Machines", "Power Systems", "Control Systems", "Electronics"]
    },
    {
      name: "Automobile Engineering",
      description: "Specialized program in automotive technology, vehicle design, and maintenance.",
      duration: "3 Years",
      eligibility: "10th Pass with minimum 50%",
      seats: 60,
      subjects: ["Engine Technology", "Automotive Electronics", "Vehicle Design", "Maintenance Practices"]
    },
    {
      name: "Architecture Assistantship",
      description: "Foundation course in architectural design, drafting, and construction planning.",
      duration: "3 Years",
      eligibility: "10th Pass with minimum 50%",
      seats: 60,
      subjects: ["Architectural Drawing", "Building Materials", "Construction Technology", "Design Fundamentals"]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Diploma Courses</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive diploma programs are designed to provide industry-relevant technical education 
            with hands-on practical training and modern curriculum standards.
          </p>
        </div>

        {/* Affiliation Info */}
        <div className="bg-primary-light rounded-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">Affiliated To</h3>
              <p className="text-muted-foreground">Himachal Pradesh Technical University</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Approved By</h3>
              <p className="text-muted-foreground">All India Council for Technical Education (AICTE)</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Academic Session</h3>
              <p className="text-muted-foreground">July 2025 - June 2028</p>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-primary">
                    Diploma in {course.name}
                  </CardTitle>
                  <Badge variant="secondary">Available</Badge>
                </div>
                <p className="text-muted-foreground">{course.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Course Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">{course.seats} Seats</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span className="text-sm">3 Year Program</span>
                  </div>
                </div>

                {/* Eligibility */}
                <div>
                  <h4 className="font-semibold mb-2">Eligibility Criteria</h4>
                  <p className="text-sm text-muted-foreground">{course.eligibility}</p>
                </div>

                {/* Key Subjects */}
                <div>
                  <h4 className="font-semibold mb-2">Key Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Download Syllabus
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Academic Calendar 2025-26</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span>Admission Start</span>
                <span className="font-semibold">01 January 2025</span>
              </div>
              <div className="flex justify-between">
                <span>Last Date to Apply</span>
                <span className="font-semibold">15 March 2025</span>
              </div>
              <div className="flex justify-between">
                <span>Session Starts</span>
                <span className="font-semibold">15 July 2025</span>
              </div>
              <Button className="w-full mt-4">
                <Download className="mr-2 h-4 w-4" />
                Download Full Calendar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fee Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span>Tuition Fee (Per Year)</span>
                <span className="font-semibold">₹15,000</span>
              </div>
              <div className="flex justify-between">
                <span>Development Fee</span>
                <span className="font-semibold">₹5,000</span>
              </div>
              <div className="flex justify-between">
                <span>Exam Fee</span>
                <span className="font-semibold">₹2,000</span>
              </div>
              <div className="flex justify-between font-semibold text-primary">
                <span>Total (Per Year)</span>
                <span>₹22,000</span>
              </div>
              <Button className="w-full mt-4">
                <Download className="mr-2 h-4 w-4" />
                Download Fee Details
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;