import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  TrendingUp, 
  Building2, 
  Users, 
  Award,
  Star,
  Briefcase,
  GraduationCap,
  Mail
} from "lucide-react";

const Placements = () => {
  const placementStats = [
    { label: "Average Package", value: "₹3.2 LPA", icon: TrendingUp },
    { label: "Highest Package", value: "₹8.5 LPA", icon: Award },
    { label: "Companies Visited", value: "45+", icon: Building2 },
    { label: "Students Placed", value: "87%", icon: Users }
  ];

  const recruiters = [
    "Dummy Tech Pvt Ltd", "BuildCorp India", "ElectroWorks", "MechaniCorp Solutions",
    "Civil Constructions Ltd", "AutoTech Industries", "InfoSys Technologies", 
    "TechMahindra", "Digital Solutions Inc", "Engineering Dynamics", 
    "Power Systems Ltd", "Construction Giants", "Manufacturing Hub",
    "Software Solutions", "Infrastructure Developers", "Industrial Automation"
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      batch: "2023",
      company: "Dummy Tech Pvt Ltd",
      package: "₹4.5 LPA",
      course: "Computer Engineering",
      testimonial: "The practical training and industry exposure at ABC Polytechnic helped me secure a great position in the tech industry.",
      avatar: "RS"
    },
    {
      name: "Priya Kumari",
      batch: "2023", 
      company: "BuildCorp India",
      package: "₹3.8 LPA",
      course: "Civil Engineering",
      testimonial: "The faculty guidance and hands-on experience prepared me well for the challenges in the construction industry.",
      avatar: "PK"
    },
    {
      name: "Amit Verma",
      batch: "2022",
      company: "ElectroWorks",
      package: "₹4.2 LPA",
      course: "Electrical Engineering",
      testimonial: "ABC Polytechnic's strong industry connections and placement support made my career transition smooth and successful.",
      avatar: "AV"
    }
  ];

  const upcomingEvents = [
    {
      title: "Campus Placement Drive 2025",
      company: "TechCorp Solutions",
      date: "15 February 2025",
      positions: "Software Developer, System Engineer",
      eligibility: "Computer Engineering, Final Year"
    },
    {
      title: "Job Fair - Manufacturing Sector",
      company: "Multiple Companies",
      date: "20 February 2025", 
      positions: "Production Engineer, Quality Analyst",
      eligibility: "Mechanical, Civil Engineering"
    },
    {
      title: "Internship Program",
      company: "Industrial Automation Ltd",
      date: "25 February 2025",
      positions: "Technical Intern",
      eligibility: "All Branches, 2nd & 3rd Year"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Training & Placements</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our dedicated Training & Placement Cell ensures excellent career opportunities for students 
            with industry partnerships and comprehensive skill development programs.
          </p>
        </div>

        {/* Placement Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Recruiters */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Recruiting Partners</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {recruiters.map((company, index) => (
                  <div key={index} className="text-center p-4 rounded-lg border hover:shadow-md transition-shadow">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">{company}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alumni Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.course} • Batch {testimonial.batch}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{testimonial.company}</Badge>
                    <Badge className="bg-success text-success-foreground">{testimonial.package}</Badge>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.testimonial}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Placement Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Placement Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.company}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Date</div>
                      <div className="text-sm text-muted-foreground">{event.date}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Positions</div>
                      <div className="text-sm text-muted-foreground">{event.positions}</div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2 block">{event.eligibility}</Badge>
                      <Button size="sm">Register Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Training Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Soft Skills Development",
                description: "Communication, leadership, and personality development sessions",
                icon: Users
              },
              {
                title: "Technical Training",
                description: "Industry-specific technical skills and certification programs",
                icon: GraduationCap
              },
              {
                title: "Interview Preparation",
                description: "Mock interviews, group discussions, and aptitude training",
                icon: Briefcase
              }
            ].map((program, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <program.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Alumni Registration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Alumni Registration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Join our alumni network and stay connected with your alma mater. 
                Share your success story and help current students.
              </p>
              <div className="space-y-3">
                <div className="text-sm">
                  <strong>Benefits:</strong>
                  <ul className="list-disc list-inside mt-1 text-muted-foreground">
                    <li>Network with fellow alumni</li>
                    <li>Mentorship opportunities</li>
                    <li>Job referrals and recommendations</li>
                    <li>Alumni events and meetups</li>
                  </ul>
                </div>
              </div>
              <Button className="w-full">
                Register as Alumni
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>Placement Cell Contact</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Training & Placement Officer</h4>
                <p className="text-sm text-muted-foreground">Dr. Sunita Sharma</p>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Email:</strong> placements@abcpolytechnic.edu.in
                </div>
                <div>
                  <strong>Phone:</strong> +91-99999-99998
                </div>
                <div>
                  <strong>Office Hours:</strong> 9:00 AM - 5:00 PM (Mon-Fri)
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Contact Placement Cell
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Placements;