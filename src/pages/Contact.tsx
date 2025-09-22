import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  User,
  FileText,
  Scale
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch with ABC Polytechnic Institute. We're here to help with admissions, 
            general inquiries, and any support you may need.
          </p>
        </div>

        {/* Quick Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-sm text-muted-foreground">
                ABC Polytechnic Institute<br />
                Tech Road, Sundertown<br />
                Himachal Pradesh, 123456
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">
                Main Office: +91-88888-88888<br />
                Admissions: +91-99999-99999<br />
                Hostel: +91-77777-77777
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">
                General: info@abcpolytechnic.edu.in<br />
                Admissions: admissions@abcpolytechnic.edu.in<br />
                Support: support@abcpolytechnic.edu.in
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address</label>
                    <Input type="email" placeholder="Enter your email address" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="What is this regarding?" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Please provide details about your inquiry..." 
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Office Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-muted-foreground">Closed</span>
                </div>
                <div className="text-sm text-muted-foreground mt-4">
                  <strong>Note:</strong> During examination periods, extended hours may apply.
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Location Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">
                      ABC Polytechnic Institute, Sundertown, HP
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View on Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Department Contacts */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Department Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: User,
                title: "Principal's Office",
                phone: "+91-88888-88881",
                email: "principal@abcpolytechnic.edu.in",
                hours: "10:00 AM - 4:00 PM"
              },
              {
                icon: MessageSquare,
                title: "Admission Office",
                phone: "+91-99999-99999",
                email: "admissions@abcpolytechnic.edu.in",
                hours: "9:00 AM - 5:00 PM"
              },
              {
                icon: FileText,
                title: "Academic Office",
                phone: "+91-88888-88882",
                email: "academics@abcpolytechnic.edu.in",
                hours: "9:00 AM - 5:00 PM"
              },
              {
                icon: User,
                title: "Training & Placement",
                phone: "+91-99999-99998",
                email: "placements@abcpolytechnic.edu.in",
                hours: "9:00 AM - 5:00 PM"
              },
              {
                icon: MessageSquare,
                title: "Student Welfare",
                phone: "+91-88888-88883",
                email: "welfare@abcpolytechnic.edu.in",
                hours: "9:00 AM - 5:00 PM"
              },
              {
                icon: FileText,
                title: "Examination Cell",
                phone: "+91-88888-88884",
                email: "exam@abcpolytechnic.edu.in",
                hours: "9:00 AM - 4:00 PM"
              }
            ].map((department, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <department.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{department.title}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{department.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="break-all">{department.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{department.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support & Help */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Support & Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Scale className="h-5 w-5 text-primary" />
                  <span>Grievance Redressal</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  For any complaints or grievances, please contact our grievance officer.
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Grievance Officer:</strong> Dr. Ramesh Chandra
                  </div>
                  <div>
                    <strong>Email:</strong> grievance@abcpolytechnic.edu.in
                  </div>
                  <div>
                    <strong>Phone:</strong> +91-88888-88885
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Submit Grievance
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>RTI Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Right to Information queries and requests can be submitted here.
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>RTI Officer:</strong> Mr. Dummy Sharma
                  </div>
                  <div>
                    <strong>Email:</strong> rti@abcpolytechnic.edu.in
                  </div>
                  <div>
                    <strong>Phone:</strong> +91-77777-77777
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  RTI Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;