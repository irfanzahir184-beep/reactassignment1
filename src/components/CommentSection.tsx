import React, { useState } from 'react';
import { Heart, ThumbsUp, Zap, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import ReactionButton from './ReactionButton';

/**
 * CommentSection Component
 * 
 * Displays a comments section with:
 * - List of existing comments with reactions
 * - Form to add new comments
 * - Each comment has its own reaction system (single-select)
 * - Dummy data for demonstration
 */

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  reactions: {
    like: number;
    love: number;
    clap: number;
  };
}

const CommentSection: React.FC = () => {
  // State to track which reaction is selected for each comment
  const [selectedReactions, setSelectedReactions] = useState<{[commentId: string]: string | null}>({});
  
  // State for new comment text
  const [newComment, setNewComment] = useState('');
  
  // State for comments list (dummy data)
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Sarah Kim',
      content: 'Great analysis! The VR section was particularly insightful. I had no idea the technology had advanced so much in competitive gaming.',
      timestamp: '2 hours ago',
      reactions: { like: 12, love: 5, clap: 8 }
    },
    {
      id: '2', 
      author: 'Marcus Rodriguez',
      content: 'As someone who works in AI development, I can confirm that AI coaching is already showing incredible results in professional teams. The future is exciting!',
      timestamp: '4 hours ago',
      reactions: { like: 18, love: 3, clap: 15 }
    },
    {
      id: '3',
      author: 'Emily Zhang',
      content: 'Mobile esports is huge in Asia. Its amazing to see it finally getting recognition in Western markets too.',
      timestamp: '6 hours ago', 
      reactions: { like: 9, love: 7, clap: 4 }
    }
  ]);

  // Handle reaction clicks for comments
  const handleCommentReaction = (commentId: string, reactionType: string) => {
    const currentReaction = selectedReactions[commentId];
    
    if (currentReaction === reactionType) {
      // Deselect current reaction
      setSelectedReactions(prev => ({
        ...prev,
        [commentId]: null
      }));
      
      // Decrease count
      setComments(prev => prev.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            reactions: {
              ...comment.reactions,
              [reactionType]: comment.reactions[reactionType as keyof typeof comment.reactions] - 1
            }
          };
        }
        return comment;
      }));
    } else {
      // Select new reaction
      setSelectedReactions(prev => ({
        ...prev,
        [commentId]: reactionType
      }));
      
      // Update counts
      setComments(prev => prev.map(comment => {
        if (comment.id === commentId) {
          const newReactions = { ...comment.reactions };
          
          // Decrease old reaction if there was one
          if (currentReaction) {
            newReactions[currentReaction as keyof typeof newReactions] -= 1;
          }
          
          // Increase new reaction
          newReactions[reactionType as keyof typeof newReactions] += 1;
          
          return {
            ...comment,
            reactions: newReactions
          };
        }
        return comment;
      }));
    }
  };

  // Handle submitting new comment
  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: Date.now().toString(),
        author: 'You',
        content: newComment.trim(),
        timestamp: 'Just now',
        reactions: { like: 0, love: 0, clap: 0 }
      };
      
      setComments(prev => [newCommentObj, ...prev]);
      setNewComment('');
    }
  };

  return (
    <Card className="p-6 shadow-card">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-semibold">Comments ({comments.length})</h3>
      </div>

      {/* Add Comment Form */}
      <div className="mb-8">
        <Textarea
          placeholder="Share your thoughts on this article..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-3 min-h-[100px] resize-none"
        />
        <div className="flex justify-end">
          <Button 
            onClick={handleSubmitComment}
            disabled={!newComment.trim()}
            className="flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Post Comment
          </Button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-border last:border-0 pb-6 last:pb-0">
            {/* Comment Header */}
            <div className="flex items-center gap-3 mb-3">
              {/* Author Avatar */}
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                {comment.author.split(' ').map(n => n[0]).join('')}
              </div>
              
              {/* Author Name and Timestamp */}
              <div>
                <span className="font-semibold text-sm">{comment.author}</span>
                <span className="text-muted-foreground text-sm ml-2">{comment.timestamp}</span>
              </div>
            </div>

            {/* Comment Content */}
            <p className="text-foreground mb-4 leading-relaxed">
              {comment.content}
            </p>

            {/* Comment Reactions */}
            <div className="flex gap-3">
              <ReactionButton
                icon={ThumbsUp}
                label="Like"
                count={comment.reactions.like}
                isActive={selectedReactions[comment.id] === 'like'}
                onClick={() => handleCommentReaction(comment.id, 'like')}
                color="like"
              />
              
              <ReactionButton
                icon={Heart}
                label="Love"
                count={comment.reactions.love}
                isActive={selectedReactions[comment.id] === 'love'}
                onClick={() => handleCommentReaction(comment.id, 'love')}
                color="love"
              />
              
              <ReactionButton
                icon={Zap}
                label="Clap"
                count={comment.reactions.clap}
                isActive={selectedReactions[comment.id] === 'clap'}
                onClick={() => handleCommentReaction(comment.id, 'clap')}
                color="clap"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Load More Comments Button */}
      <div className="text-center mt-6">
        <Button variant="outline">
          Load More Comments
        </Button>
      </div>
    </Card>
  );
};

export default CommentSection;