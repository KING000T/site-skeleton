import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Download, Pin, Clock } from "lucide-react";
import { useState } from "react";

const Announcements = () => {
  const [filter, setFilter] = useState("all");

  const announcements = [
    {
      id: 1,
      title: "Mock Test Schedule Released",
      content: "Mock test schedule for all diploma courses has been released. Students are advised to check their respective timetables and prepare accordingly.",
      date: "2025-01-25",
      category: "Academic",
      priority: "high",
      isPinned: true,
      downloadLink: true
    },
    {
      id: 2,
      title: "Annual Sports Meet 2025",
      content: "The annual sports meet will be held from February 10-12, 2025. Registration for various sports events is now open.",
      date: "2025-02-10",
      category: "Event",
      priority: "medium",
      isPinned: true,
      downloadLink: false
    },
    {
      id: 3,
      title: "Mid-Term Results Declared",
      content: "Mid-term examination results for all courses have been declared. Students can check their results on the official portal.",
      date: "2025-03-20",
      category: "Results",
      priority: "high",
      isPinned: false,
      downloadLink: false
    },
    {
      id: 4,
      title: "Library Extended Hours",
      content: "Library will remain open till 9:00 PM during examination period. Students can utilize the extended hours for study.",
      date: "2025-01-20",
      category: "Facility",
      priority: "low",
      isPinned: false,
      downloadLink: false
    },
    {
      id: 5,
      title: "Scholarship Application Deadline",
      content: "Last date to apply for merit-based scholarships is January 31, 2025. Eligible students should submit their applications.",
      date: "2025-01-31",
      category: "Scholarship",
      priority: "high",
      isPinned: true,
      downloadLink: true
    },
    {
      id: 6,
      title: "Guest Lecture on AI in Engineering",
      content: "Dr. Rajesh Sharma from IIT Delhi will deliver a guest lecture on 'Artificial Intelligence in Modern Engineering' on February 5, 2025.",
      date: "2025-02-05",
      category: "Event",
      priority: "medium",
      isPinned: false,
      downloadLink: false
    },
    {
      id: 7,
      title: "Fee Payment Reminder",
      content: "Reminder for semester fee payment. Last date for fee submission is February 15, 2025. Late fee will be applicable after the deadline.",
      date: "2025-02-15",
      category: "Administrative",
      priority: "high",
      isPinned: false,
      downloadLink: true
    },
    {
      id: 8,
      title: "Industrial Visit to Manufacturing Plant",
      content: "Second-year students will visit ABC Manufacturing Plant on March 1, 2025. Participation is mandatory for all mechanical engineering students.",
      date: "2025-03-01",
      category: "Academic",
      priority: "medium",
      isPinned: false,
      downloadLink: false
    }
  ];

  const categories = ["all", "Academic", "Event", "Results", "Scholarship", "Administrative", "Facility"];

  const filteredAnnouncements = announcements.filter(announcement => 
    filter === "all" || announcement.category === filter
  );

  const pinnedAnnouncements = filteredAnnouncements.filter(announcement => announcement.isPinned);
  const regularAnnouncements = filteredAnnouncements.filter(announcement => !announcement.isPinned);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Announcements</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news, events, and important information from ABC Polytechnic Institute.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category === "all" ? "All Categories" : category}
            </Button>
          ))}
        </div>

        {/* Pinned Announcements */}
        {pinnedAnnouncements.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Pin className="h-6 w-6 mr-2 text-primary" />
              Pinned Announcements
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {pinnedAnnouncements.map((announcement) => (
                <Card key={announcement.id} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant={getPriorityColor(announcement.priority)}>
                            {announcement.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {announcement.priority.toUpperCase()}
                          </Badge>
                          {announcement.isPinned && (
                            <Pin className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <CardTitle className="text-lg">{announcement.title}</CardTitle>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <CalendarDays className="h-4 w-4" />
                          <span>{formatDate(announcement.date)}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{announcement.content}</p>
                    <div className="flex space-x-2">
                      <Button size="sm">Read More</Button>
                      {announcement.downloadLink && (
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Announcements */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Clock className="h-6 w-6 mr-2 text-primary" />
            Recent Announcements
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {regularAnnouncements.map((announcement) => (
              <Card key={announcement.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant={getPriorityColor(announcement.priority)}>
                          {announcement.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {announcement.priority.toUpperCase()}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{formatDate(announcement.date)}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{announcement.content}</p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Read More</Button>
                    {announcement.downloadLink && (
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Archive Notice */}
        <div className="mt-12 text-center">
          <Card className="inline-block">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Looking for older announcements?</h3>
              <p className="text-muted-foreground mb-4">
                You can find all previous announcements in our archive section.
              </p>
              <Button variant="outline">
                View Archive
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Announcements;