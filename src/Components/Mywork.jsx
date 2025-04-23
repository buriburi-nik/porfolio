
// src/Components/Mywork.jsx
import { useState, useEffect, useRef } from 'react';
import './Mywork.css';
import u1 from '../assets/theme_pattern.svg';
import mywork_data from '../assets/mywork_data';
import arrow_icon from '../assets/arrow_icon.svg';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Magnetic from '../common/Magnetic';


const Mywork = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const [activeSlide, setActiveSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const workSectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (workSectionRef.current) {
      observer.observe(workSectionRef.current);
    }
    
    return () => {
      if (workSectionRef.current) {
        observer.unobserve(workSectionRef.current);
      }
    };
  }, []);
  
  const handleShowMore = () => {
    setVisibleProjects(prev => 
      prev + 3 <= mywork_data.length ? prev + 3 : mywork_data.length
    );
  };
  
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setActiveSlide(0);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const handlePrevSlide = () => {
    setActiveSlide(prev => 
      prev === 0 ? (selectedProject?.images?.length || 1) - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setActiveSlide(prev => 
      prev === (selectedProject?.images?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  // Get unique categories from project data
  const categories = ['All', ...new Set(mywork_data.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? mywork_data 
    : mywork_data.filter(project => project.category === filter);
  
  return (
    <div className={`mywork ${isInView ? 'in-view' : ''}`} id='work' ref={workSectionRef}>  
      <div className="mywork-title">
        <h1 className="animate-title">My latest work</h1>
        <img src={u1} alt="" className="animate-pattern" />
      </div>
      
      <div className="mywork-filters animate-filters">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => {
              setFilter(category);
              setVisibleProjects(3); // Reset to show first 3 projects when changing filter
            }}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="mywork-container">
        {filteredProjects.slice(0, visibleProjects).map((project, index) => (
          <div 
            className={`project-card animate-card`} 
            key={index} 
            onClick={() => openProjectModal(project)}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="project-image">
              <img src={project.w_img} alt={project.w_name} loading="lazy" />
              <div className="project-overlay">
                <h3>{project.w_name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.technologies?.slice(0, 3).map((tech, i) => (
                    <span key={i} className="project-tag">{tech}</span>
                  ))}
                  {project.technologies?.length > 3 && (
                    <span className="project-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
                
                <div className="view-project-btn">
                  <span>View Project</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {visibleProjects < filteredProjects.length && (
        <Magnetic> {/* Apply magnetic effect to the Show More button */}
          <div className="mywork-showmore animate-btn" onClick={handleShowMore}>
        <p>Show more</p>
        <img src={arrow_icon} alt="" className="arrow-icon" />
      </div>
    </Magnetic>
      )}
      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeProjectModal}>
              <X size={24} />
            </button>
            <div className="modal-content">
              <div className="modal-image-carousel">
                <img 
                  src={selectedProject.images?.[activeSlide] || selectedProject.w_img} 
                  alt={selectedProject.w_name} 
                />
                
                {(selectedProject.images?.length > 1 || selectedProject.images) && (
                  <>
                    <button className="carousel-nav prev" onClick={handlePrevSlide}>
                      <ChevronLeft size={24} />
                    </button>
                    <button className="carousel-nav next" onClick={handleNextSlide}>
                      <ChevronRight size={24} />
                    </button>
                    <div className="carousel-indicators">
                      {Array.from({ length: selectedProject.images?.length || 1 }).map((_, i) => (
                        <span 
                          key={i} 
                          className={`indicator ${i === activeSlide ? 'active' : ''}`}
                          onClick={() => setActiveSlide(i)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <div className="modal-details">
                <div className="modal-header">
                  <h2>{selectedProject.w_name}</h2>
                  <span className="project-category">{selectedProject.category}</span>
                </div>
                
                <p className="project-description">{selectedProject.description}</p>
                
                <div className="project-tech-stack">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {selectedProject.technologies?.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-features">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {selectedProject.features?.map((feature, i) => (
                      <li key={i} className="feature-item">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-links">
                  {selectedProject.githubLink && (
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                      <Github size={20} />
                      <span>Source Code</span>
                    </a>
                  )}
                  {selectedProject.demoLink && (
                    <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mywork;