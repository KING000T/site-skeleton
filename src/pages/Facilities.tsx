import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  BookOpen, 
  Utensils, 
  Trophy, 
  Laptop, 
  Theater,
  Users,
  Wifi,
  Car,
  Shield
} from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      icon: Building,
      title: "Boys Hostel",
      description: "Well-furnished accommodation for 200 students with modern amenities including WiFi, mess facility, and 24/7 security.",
      features: ["200 Bed Capacity", "WiFi Connectivity", "24/7 Security", "Mess Facility", "Recreation Room"],
      image: "hostel-boys.jpg"
    },
    {
      icon: Building,
      title: "Girls Hostel", 
      description: "Safe and secure accommodation for female students with dedicated warden and strict security protocols.",
      features: ["150 Bed Capacity", "Lady Warden", "CCTV Surveillance", "Common Room", "Study Hall"],
      image: "hostel-girls.jpg"
    },
    {
      icon: BookOpen,
      title: "Central Library",
      description: "Modern library with extensive collection of technical books, journals, and digital resources.",
      features: ["10,000+ Books", "Digital Library", "Reading Hall", "Research Section", "Internet Access"],
      image: "library.jpg"
    },
    {
      icon: Utensils,
      title: "Canteen",
      description: "Hygienic canteen serving nutritious meals and snacks at affordable prices throughout the day.",
      features: ["Hygienic Food", "Affordable Prices", "Variety of Cuisines", "Extended Hours", "Seating for 150"],
      image: "canteen.jpg"
    },
    {
      icon: Trophy,
      title: "Sports Ground",
      description: "Well-maintained sports facilities for cricket, football, volleyball, and athletics.",
      features: ["Cricket Ground", "Football Field", "Volleyball Court", "Athletic Track", "Indoor Games"],
      image: "sports.jpg"
    },
    {
      icon: Laptop,
      title: "Computer Lab",
      description: "State-of-the-art computer laboratory with latest hardware and software for practical training.",
      features: ["60 Computers", "Latest Software", "High-Speed Internet", "Air Conditioned", "Projector Facility"],
      image: "computer-lab.jpg"
    },
    {
      icon: Theater,
      title: "Auditorium",
      description: "Modern auditorium with seating capacity of 300 for seminars, cultural events, and guest lectures.",
      features: ["300 Seating", "Audio-Visual System", "Air Conditioned", "Stage Lighting", "Green Room"],
      image: "auditorium.jpg"
    },
    {
      icon: Users,
      title: "Staff Quarters",
      description: "Comfortable residential accommodation for faculty and staff members within the campus premises.",
      features: ["Faculty Housing", "Family Accommodation", "Modern Amenities", "Security", "Parking"],
      image: "staff-quarters.jpg"
    }
  ];

  const additionalServices = [
    {
      icon: Wifi,
      title: "WiFi Campus",
      description: "High-speed internet connectivity throughout the campus"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance"
    },
    {
      icon: Car,
      title: "Parking Facility",
      description: "Ample parking space for students and staff vehicles"
    },
    {
      icon: BookOpen,
      title: "Study Halls",
      description: "Dedicated quiet study areas for focused learning"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Facilities</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ABC Polytechnic Institute provides world-class infrastructure and facilities to ensure 
            a conducive learning environment for all students.
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Acres Campus</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-muted-foreground">Laboratories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">350</div>
            <div className="text-muted-foreground">Hostel Beds</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Library Books</div>
          </div>
        </div>

        {/* Main Facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <facility.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{facility.description}</p>
                
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline">
                    View Gallery
                  </Button>
                  <Button size="sm" variant="ghost">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Laboratory Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Specialized Laboratories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Computer Programming Lab",
              "Electrical Machines Lab", 
              "Civil Engineering Lab",
              "Mechanical Workshop",
              "Electronics Lab",
              "Physics Lab",
              "Chemistry Lab",
              "Engineering Drawing Hall",
              "Language Lab"
            ].map((lab, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Laptop className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{lab}</h3>
                  <p className="text-sm text-muted-foreground">
                    Well-equipped with modern instruments and tools for practical learning
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Campus Layout */}
        <div className="bg-primary-light rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Campus Layout</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Explore our beautifully designed campus with modern infrastructure and green spaces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Download Campus Map
            </Button>
            <Button size="lg" variant="outline">
              Virtual Campus Tour
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;