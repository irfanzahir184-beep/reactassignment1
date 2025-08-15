import React from 'react';
import { Link } from 'react-router-dom';
import { GamepadIcon, ArrowRight, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

/**
 * Index Page Component
 * 
 * Landing page that showcases featured articles and provides navigation
 * to the main article about esports. This serves as the home page for
 * the gaming blog/news site.
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GamepadIcon className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                GameHub
              </h1>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                Categories
              </Button>
              <Button size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-gaming py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Esports Gaming
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Dive deep into the world of competitive gaming. Discover the latest trends, 
            technologies, and insights shaping the esports industry.
          </p>
          <Link to="/article">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-gaming">
              Read Featured Article
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Main Featured Article */}
            <Card className="md:col-span-2 lg:col-span-2 p-0 overflow-hidden shadow-card hover:shadow-gaming transition-all duration-300 group">
              <div className="bg-gradient-primary h-48 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  The Future of Esports: Where Virtual Meets Reality
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Explore the cutting-edge technologies and trends that are reshaping competitive gaming, 
                  from VR integration to AI coaching systems.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>Alex Chen</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>8 min read</span>
                    </div>
                  </div>
                  <Link to="/article">
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Secondary Articles */}
            <div className="space-y-6">
              <Card className="p-6 shadow-card hover:shadow-gaming transition-all duration-300 group">
                <h3 className="font-bold mb-3 group-hover:text-primary transition-colors">
                  AI Coaches: The New Frontier
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  How artificial intelligence is revolutionizing player training and strategy development.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>6 min read</span>
                </div>
              </Card>

              <Card className="p-6 shadow-card hover:shadow-gaming transition-all duration-300 group">
                <h3 className="font-bold mb-3 group-hover:text-primary transition-colors">
                  Mobile Esports Rising
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Breaking down geographic barriers with accessible competitive gaming on mobile devices.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>7 min read</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest insights from the world of esports delivered to your inbox. 
            Never miss a breakthrough in competitive gaming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
            />
            <Button>
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 GameHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
