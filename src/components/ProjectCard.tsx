import { useState, useRef } from 'react';
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
  const [rippleStyle, setRippleStyle] = useState<React.CSSProperties | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleRipple = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.2;
    const x = e.clientX - rect.left - (size / 2);
    const y = e.clientY - rect.top - (size / 2);
    setRippleStyle({
      top: y,
      left: x,
      width: size,
      height: size,
    });
    setTimeout(() => setRippleStyle(null), 600);
  };

  return (
    <div className="group h-full perspective-[1000px]">
      <div
        ref={cardRef}
        className={`
          relative w-full min-h-[400px]
          transition-transform duration-700
          transform-style-preserve-3d
          ${showDetails ? 'rotate-y-180' : ''}
        `}
        onMouseDown={handleRipple}
        style={{ cursor: 'pointer' }}
      >
        {rippleStyle && (
          <span className="absolute bg-black/10 rounded-full pointer-events-none animate-ping" style={rippleStyle} />
        )}

        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden  rounded-lg shadow-md overflow-hidden flex flex-col front"  style={{ backgroundColor: '#cebaced8' }}>
        
          <div className="relative h-48 overflow-hidden">
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                backgroundImage: image ? `url(${image})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: image ? 'transparent' : 'rgba(182,245,209,0.12)'
              }}
            >
              {!image && (
                <div className="text-4xl font-bold text-black/20">{title.charAt(0)}</div>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-black"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-black">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          </div>

          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
            <p className="text-black text-sm mb-4 flex-grow">{description}</p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
              <button
                onClick={() => setShowDetails(true)}
                className="text-sm font-medium text-black"
                type="button"
              >
                View Details
              </button>
              <div className="flex items-center space-x-3">
                {repoLink && (
                  <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {demoLink && (
                  <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-lg shadow-md flex flex-col p-6 back">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-black">{title}</h3>
            <button
              onClick={() => setShowDetails(false)}
              className="text-sm font-medium text-black"
              type="button"
            >
              Back
            </button>
          </div>

          <div className="flex-grow">
            <div className="bg-gray-100 p-4 rounded-lg h-full">
              <h4 className="font-medium mb-4 text-black">Project Details:</h4>
              <ul className="space-y-3 list-disc list-inside text-sm text-black">
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>

         {/* <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-medium mb-2 text-sm text-black">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-200 rounded-full text-xs font-medium text-black"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
         

          <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-200">
            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-black hover:text-gray-600"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm">Repository</span>
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-black hover:text-gray-600"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
