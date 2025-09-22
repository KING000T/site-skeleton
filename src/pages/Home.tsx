import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Users, Award, BookOpen, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-college.jpg";

const Home = () => {
  const courses = [
    "Civil Engineering",
    "Mechanical Engineering", 
    "Computer Engineering",
    "Electrical Engineering",
    "Automobile Engineering",
    "Architecture Assistantship"
  ];

  const announcements = [
    { title: "Mock Test Schedule Released", date: "25 Jan 2025", badge: "Academic" },
    { title: "Annual Sports Meet", date: "10 Feb 2025", badge: "Event" },
    { title: "Mid-Term Results Declared", date: "20 Mar 2025", badge: "Results" }
  ];

  const stats = [
    { icon: BookOpen, value: "6", label: "Diploma Courses" },
    { icon: Users, value: "360", label: "Total Seats" },
    { icon: Award, value: "3.2 LPA", label: "Average Package" },
    { icon: Calendar, value: "50+", label: "Years of Excellence" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                ABC Polytechnic
                <span className="block text-accent">Institute</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                Empowering Skills for a Better Tomorrow
              </p>
              <p className="text-lg opacity-80 leading-relaxed">
                Premier government institute offering diploma-level technical education 
                in various engineering disciplines at Sundertown, Himachal Pradesh.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/admissions">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    Apply Now
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    View Courses
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="ABC Polytechnic Institute Campus"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Diploma Courses Offered</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of technical diploma programs designed to meet industry standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Diploma in {course}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <p>Duration: 3 Years</p>
                    <p>Eligibility: 10th Pass (50%)</p>
                    <p>Seats: 60</p>
                  </div>
                  <Link to="/courses">
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/courses">
              <Button size="lg">
                View All Courses
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Announcements</h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest news and events
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {announcements.map((announcement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary">{announcement.badge}</Badge>
                    <span className="text-sm text-muted-foreground">{announcement.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{announcement.title}</h3>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/announcements">
              <Button size="lg">
                View All Announcements
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Access</h2>
            <p className="text-lg text-muted-foreground">
              Frequently accessed resources and information
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Timetable", desc: "Class schedules and timing" },
              { title: "Results", desc: "Examination results and grades" },
              { title: "Academic Calendar", desc: "Important academic dates" },
              { title: "Mandatory Disclosures", desc: "Official documents and policies" }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <Button variant="outline" size="sm">
                    Access Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;