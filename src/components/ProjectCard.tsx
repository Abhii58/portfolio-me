import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  repoLink?: string;
  details: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoLink,
  repoLink,
  details
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="group h-full">
      <div 
        className="glass-panel overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:shadow-xl"
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <div 
            className="w-full h-full bg-secondary/80 flex items-center justify-center"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {!image && (
              <div className="text-4xl font-bold text-primary/20">{title.charAt(0)}</div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          
          {/* Tags */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
          
          {/* Actions */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm font-medium text-primary"
            >
              {showDetails ? 'Hide Details' : 'View Details'}
            </button>
            
            <div className="flex items-center space-x-3">
              {repoLink && (
                <a 
                  href={repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="View GitHub Repository"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              
              {demoLink && (
                <a 
                  href={demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="View Live Demo"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* Details (collapsible) */}
        <div 
          className={`overflow-hidden transition-all duration-300 ${
            showDetails ? 'max-h-80' : 'max-h-0'
          }`}
        >
          <div className="p-6 pt-0">
            <div className="bg-secondary/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Project Details:</h4>
              <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
