import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ABC Polytechnic Institute</h3>
            <p className="text-sm opacity-90">
              Empowering Skills for a Better Tomorrow
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Tech Road, Sundertown, HP, 123456</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>+91-88888-88888</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>info@abcpolytechnic.edu.in</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-accent transition-colors">Courses</Link></li>
              <li><Link to="/admissions" className="hover:text-accent transition-colors">Admissions</Link></li>
              <li><Link to="/announcements" className="hover:text-accent transition-colors">Announcements</Link></li>
              <li><Link to="/facilities" className="hover:text-accent transition-colors">Facilities</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Academics */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Academics</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Timetable</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Results</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Syllabus</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mandatory Disclosures</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <p>Grievance: grievance@abcpolytechnic.edu.in</p>
              <p>RTI Officer: Mr. Dummy Sharma</p>
              <p>+91-77777-77777</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 ABC Polytechnic Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;