import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ThumbsUp, Zap, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ReactionButton from '@/components/ReactionButton';
import CommentSection from '@/components/CommentSection';

/**
 * Article Page Component
 * 
 * This page displays an esports article with:
 * - Article content about "The Future of Esports"
 * - Author information as a clickable link
 * - Reaction buttons (like, love, clap) - only one can be active
 * - Comments section with reactions
 * - Pagination for browsing more articles
 */
const Article = () => {
  // State to track which reaction is currently selected (only one can be active)
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
  
  // State to track reaction counts (dummy data for demonstration)
  const [reactionCounts, setReactionCounts] = useState({
    like: 142,
    love: 89,
    clap: 203
  });

  // Dummy article data
  const article = {
    title: "The Future of Esports: Where Virtual Meets Reality",
    author: "Alex Chen",
    publishDate: "December 15, 2024",
    readTime: "8 min read",
    content: `
      The esports industry has evolved from a niche hobby to a global phenomenon worth billions of dollars. 
      As we look toward the future, several key trends are shaping the landscape of competitive gaming.

      **Virtual Reality Integration**
      
      One of the most exciting developments is the integration of virtual reality technology. VR esports are 
      creating entirely new categories of competition, where players don't just control characters on screen 
      but become fully immersed in digital worlds. Games like "Echo Arena" and "Beat Saber" are pioneering 
      this space, offering unprecedented levels of physical engagement.

      **Artificial Intelligence and Player Development**
      
      AI is revolutionizing how players train and improve. Advanced analytics can now break down gameplay 
      frame by frame, identifying micro-improvements that can make the difference between amateur and 
      professional level play. Teams are investing heavily in AI coaches that can provide real-time feedback 
      and strategic insights.

      **The Rise of Mobile Esports**
      
      Mobile gaming continues to dominate globally, with titles like "PUBG Mobile" and "Mobile Legends" 
      attracting massive audiences. The accessibility of mobile devices means that esports is reaching 
      new demographics and geographic regions that were previously underserved.

      **Blockchain and NFTs**
      
      While controversial, blockchain technology is creating new possibilities for digital ownership in 
      gaming. Players can now truly own rare in-game items, and tournaments can offer unique digital 
      collectibles as prizes. This trend is still evolving but shows significant potential.

      **Infrastructure and Streaming**
      
      The infrastructure supporting esports continues to grow. Dedicated esports arenas are being built 
      worldwide, and streaming technology is advancing to support higher quality broadcasts with lower 
      latency. Cloud gaming is also making high-end competitive gaming more accessible.

      **Conclusion**
      
      The future of esports looks incredibly bright. As technology continues to advance and global 
      connectivity improves, we can expect even more innovation in how games are played, watched, 
      and experienced. The line between traditional sports and esports continues to blur, creating 
      exciting opportunities for players, fans, and investors alike.
    `
  };

  // Handle reaction button clicks
  const handleReactionClick = (reactionType: string) => {
    if (selectedReaction === reactionType) {
      // If clicking the same reaction, deselect it
      setSelectedReaction(null);
      setReactionCounts(prev => ({
        ...prev,
        [reactionType]: prev[reactionType as keyof typeof prev] - 1
      }));
    } else {
      // If clicking a different reaction, select it and deselect others
      const oldReaction = selectedReaction;
      setSelectedReaction(reactionType);
      
      setReactionCounts(prev => {
        const newCounts = { ...prev };
        // Decrease old reaction count if there was one
        if (oldReaction) {
          newCounts[oldReaction as keyof typeof newCounts] -= 1;
        }
        // Increase new reaction count
        newCounts[reactionType as keyof typeof newCounts] += 1;
        return newCounts;
      });
    }
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
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Browse Articles
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Article Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <span>By</span>
            {/* Author link that navigates to profile page */}
            <Link 
              to={`/author/${encodeURIComponent(article.author)}`}
              className="text-primary hover:text-primary-glow font-semibold transition-colors underline decoration-2 underline-offset-4"
            >
              {article.author}
            </Link>
            <span>•</span>
            <span>{article.publishDate}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        {/* Article Content */}
        <Card className="p-8 mb-8 shadow-card">
          <div className="prose prose-lg max-w-none">
            {/* Split content by paragraphs and render with proper formatting */}
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.trim() === '') return null;
              
              // Handle bold text (markdown-style **)
              if (paragraph.includes('**')) {
                const parts = paragraph.split('**');
                return (
                  <p key={index} className="mb-6 text-foreground leading-relaxed">
                    {parts.map((part, partIndex) => 
                      partIndex % 2 === 1 ? (
                        <strong key={partIndex} className="font-bold text-primary">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              }
              
              return (
                <p key={index} className="mb-6 text-foreground leading-relaxed">
                  {paragraph.trim()}
                </p>
              );
            })}
          </div>
        </Card>

        {/* Reactions Section */}
        <Card className="p-6 mb-8 shadow-card">
          <h3 className="text-xl font-semibold mb-4">What did you think?</h3>
          <div className="flex gap-4">
            {/* Like Button */}
            <ReactionButton
              icon={ThumbsUp}
              label="Like"
              count={reactionCounts.like}
              isActive={selectedReaction === 'like'}
              onClick={() => handleReactionClick('like')}
              color="like"
            />
            
            {/* Love Button */}
            <ReactionButton
              icon={Heart}
              label="Love"
              count={reactionCounts.love}
              isActive={selectedReaction === 'love'}
              onClick={() => handleReactionClick('love')}
              color="love"
            />
            
            {/* Clap Button */}
            <ReactionButton
              icon={Zap}
              label="Clap"
              count={reactionCounts.clap}
              isActive={selectedReaction === 'clap'}
              onClick={() => handleReactionClick('clap')}
              color="clap"
            />
          </div>
        </Card>

        {/* Comments Section */}
        <CommentSection />

        {/* Pagination Section */}
        <Card className="p-6 mt-8 shadow-card">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Page 1 of 12 • 156 articles
            </div>
            
            <div className="flex gap-2">
              {/* Previous Page Button */}
              <Button 
                variant="outline" 
                size="sm" 
                disabled
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              
              {/* Page Numbers */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((pageNum) => (
                  <Button 
                    key={pageNum}
                    variant={pageNum === 1 ? "default" : "outline"}
                    size="sm"
                    className="w-10"
                  >
                    {pageNum}
                  </Button>
                ))}
                <span className="flex items-center px-2 text-muted-foreground">...</span>
                <Button variant="outline" size="sm" className="w-10">
                  12
                </Button>
              </div>
              
              {/* Next Page Button */}
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Article;