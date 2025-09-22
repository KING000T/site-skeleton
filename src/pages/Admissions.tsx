import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Download, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react";

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      title: "Fill Online Form",
      description: "Complete the application form with accurate details and upload required documents.",
      status: "current"
    },
    {
      step: 2,
      title: "Upload Documents",
      description: "Upload 10th marksheet, transfer certificate, category certificate (if applicable).",
      status: "pending"
    },
    {
      step: 3,
      title: "Pay Fees",
      description: "Pay the application fee of ₹500 through online payment gateway.",
      status: "pending"
    },
    {
      step: 4,
      title: "Submit Application",
      description: "Review all details and submit your completed application form.",
      status: "pending"
    }
  ];

  const importantDates = [
    { event: "Application Start Date", date: "01 January 2025", status: "completed" },
    { event: "Last Date to Apply", date: "15 March 2025", status: "upcoming" },
    { event: "Merit List Release", date: "25 March 2025", status: "upcoming" },
    { event: "Counselling Starts", date: "01 April 2025", status: "upcoming" },
    { event: "Classes Begin", date: "15 July 2025", status: "upcoming" }
  ];

  const documents = [
    "10th Class Marksheet & Certificate",
    "Transfer Certificate from Last Attended Institution",
    "Character Certificate",
    "Caste Certificate (if applicable)",
    "Income Certificate (for scholarship)",
    "Domicile Certificate (HP Residents)",
    "Recent Passport Size Photographs (4 copies)",
    "Aadhar Card Copy"
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions 2025-26</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join ABC Polytechnic Institute and embark on your journey towards technical excellence. 
            Applications are now open for all diploma courses.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-accent/10 border border-accent rounded-lg p-6 mb-12">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Important Notice</h3>
              <p className="text-muted-foreground">
                Last date to apply is 15 March 2025. Late applications will not be accepted. 
                Ensure all documents are ready before starting the application process.
              </p>
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Important Dates</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <CalendarDays className="h-5 w-5 text-primary" />
                      <span className="font-medium">{item.event}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-muted-foreground">{item.date}</span>
                      <Badge variant={item.status === 'completed' ? 'default' : 'secondary'}>
                        {item.status === 'completed' ? 'Completed' : 'Upcoming'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admission Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <Card key={index} className={`relative ${step.status === 'current' ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg ${
                    step.status === 'current' ? 'bg-primary' : 'bg-muted-foreground'
                  }`}>
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Eligibility Criteria */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Eligibility Criteria</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Educational Qualification</h4>
                <p className="text-sm text-muted-foreground">
                  Passed 10th class or equivalent from a recognized board with minimum 50% marks 
                  (45% for SC/ST candidates)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Age Limit</h4>
                <p className="text-sm text-muted-foreground">
                  Minimum 16 years and maximum 25 years as on July 31, 2025 
                  (Age relaxation as per government norms)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Domicile</h4>
                <p className="text-sm text-muted-foreground">
                  Preference given to Himachal Pradesh domicile holders
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Fee Structure */}
          <Card>
            <CardHeader>
              <CardTitle>Fee Structure (Per Year)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Tuition Fee</span>
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
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold text-lg text-primary">
                    <span>Total Annual Fee</span>
                    <span>₹22,000</span>
                  </div>
                </div>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Scholarship available for meritorious and economically 
                  weaker students as per government schemes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Required Documents */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Required Documents</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((document, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">{document}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hostel Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Hostel Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Boys Hostel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Well-furnished rooms with modern amenities including WiFi, mess facility, 
                  and 24/7 security.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Accommodation Fee</span>
                    <span className="font-semibold">₹18,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mess Fee</span>
                    <span className="font-semibold">₹24,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Deposit</span>
                    <span className="font-semibold">₹5,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Girls Hostel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Safe and secure accommodation with all modern facilities, dedicated 
                  warden, and strict security protocols.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Accommodation Fee</span>
                    <span className="font-semibold">₹18,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mess Fee</span>
                    <span className="font-semibold">₹24,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Deposit</span>
                    <span className="font-semibold">₹5,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact & Support */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Contact & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Admission Helpline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91-99999-99999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>admissions@abcpolytechnic.edu.in</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Office Hours: 9:00 AM - 5:00 PM (Monday to Friday)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Download Forms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Application Form (PDF)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Prospectus 2025-26
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Fee Structure Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Apply Now CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-primary/90 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-lg mb-6 opacity-90">
            Don't miss the opportunity to be part of ABC Polytechnic Institute
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Apply Now Online
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admissions;