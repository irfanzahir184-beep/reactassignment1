import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Calendar, Users, BookOpen, Award, Twitter, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * Author Profile Page Component
 * 
 * This page displays detailed information about an article author including:
 * - Author name (passed from the article page via URL params)
 * - Profile image and bio
 * - Author stats and achievements
 * - Social media links
 * - Recent articles
 */
const AuthorProfile = () => {
  // Get the author name from the URL parameters
  const { authorName } = useParams<{ authorName: string }>();
  
  // Decode the author name from URL encoding
  const decodedAuthorName = decodeURIComponent(authorName || '');

  // Dummy author data (in a real app, this would come from an API)
  const authorData = {
    name: decodedAuthorName,
    title: "Senior Esports Journalist",
    bio: "Passionate about the intersection of technology and competitive gaming. With over 8 years of experience covering the esports industry, I've witnessed its evolution from underground tournaments to mainstream entertainment. My mission is to bring insightful analysis and compelling stories from the world of competitive gaming.",
    location: "San Francisco, CA",
    joinDate: "January 2018",
    followers: "24.7K",
    articlesPublished: 156,
    awards: ["Best Esports Coverage 2023", "Gaming Journalist of the Year 2022"],
    expertise: ["Esports", "Gaming Technology", "VR/AR", "Industry Analysis", "Player Interviews"],
    profileImage: "/api/placeholder/120/120", // Placeholder image
    socialLinks: {
      twitter: "@alexchen_gaming",
      github: "alexchen-dev", 
      linkedin: "alex-chen-gaming"
    },
    recentArticles: [
      {
        title: "The Future of Esports: Where Virtual Meets Reality",
        publishDate: "Dec 15, 2024",
        readTime: "8 min read",
        reactions: 434
      },
      {
        title: "AI Coaches: The New Frontier in Professional Gaming",
        publishDate: "Dec 10, 2024", 
        readTime: "6 min read",
        reactions: 298
      },
      {
        title: "Mobile Esports: Breaking Down Geographic Barriers",
        publishDate: "Dec 5, 2024",
        readTime: "7 min read", 
        reactions: 521
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              GameHub
            </h1>
            <div className="flex gap-4">
              <Link 
                to="/article" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Back to Article
              </Link>
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Browse Articles
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Profile Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Profile Card */}
            <Card className="p-6 shadow-card">
              <div className="text-center">
                {/* Profile Image */}
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary">
                    {authorData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                {/* Name and Title */}
                <h1 className="text-2xl font-bold mb-2">{authorData.name}</h1>
                <p className="text-primary font-semibold mb-4">{authorData.title}</p>
                
                {/* Location and Join Date */}
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{authorData.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {authorData.joinDate}</span>
                  </div>
                </div>

                {/* Follow Button */}
                <Button className="w-full mb-4">
                  Follow Author
                </Button>
              </div>
            </Card>

            {/* Stats Card */}
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold mb-4">Author Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">Followers</span>
                  </div>
                  <span className="font-semibold">{authorData.followers}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm">Articles</span>
                  </div>
                  <span className="font-semibold">{authorData.articlesPublished}</span>
                </div>
              </div>
            </Card>

            {/* Social Links Card */}
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-3">
                <a 
                  href={`https://twitter.com/${authorData.socialLinks.twitter.replace('@', '')}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-4 h-4" />
                  <span className="text-sm">{authorData.socialLinks.twitter}</span>
                </a>
                
                <a 
                  href={`https://github.com/${authorData.socialLinks.github}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">{authorData.socialLinks.github}</span>
                </a>
                
                <a 
                  href={`https://linkedin.com/in/${authorData.socialLinks.linkedin}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">{authorData.socialLinks.linkedin}</span>
                </a>
              </div>
            </Card>
          </div>

          {/* Right Column - Bio and Articles */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Bio Section */}
            <Card className="p-6 shadow-card">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-foreground leading-relaxed mb-6">
                {authorData.bio}
              </p>
              
              {/* Expertise Tags */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {authorData.expertise.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Awards Section */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Awards & Recognition
                </h4>
                <ul className="space-y-2">
                  {authorData.awards.map((award, index) => (
                    <li key={index} className="text-muted-foreground">
                      • {award}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Recent Articles */}
            <Card className="p-6 shadow-card">
              <h2 className="text-xl font-semibold mb-4">Recent Articles</h2>
              <div className="space-y-4">
                {authorData.recentArticles.map((article, index) => (
                  <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                    <h3 className="font-semibold mb-2 hover:text-primary transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{article.publishDate}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <span className="text-primary">{article.reactions}</span>
                        reactions
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-6">
                View All Articles
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthorProfile;