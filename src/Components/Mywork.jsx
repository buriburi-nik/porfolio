// src/Components/Mywork.jsx
import { useState } from 'react';
import './Mywork.css';
import u1 from '../assets/theme_pattern.svg';
import mywork_data from '../assets/mywork_data';
import arrow_icon from '../assets/arrow_icon.svg';
import { X, Github, ExternalLink, Code } from 'lucide-react';

const Mywork = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  
  const handleShowMore = () => {
    setVisibleProjects(prev => 
      prev + 3 <= mywork_data.length ? prev + 3 : mywork_data.length
    );
  };
  
  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Get unique categories from project data
  const categories = ['All', ...new Set(mywork_data.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? mywork_data 
    : mywork_data.filter(project => project.category === filter);
  
  return (
    <div className='mywork' id='work'>  
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={u1} alt="" />
      </div>
      
      <div className="mywork-filters">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="mywork-container">
        {filteredProjects.slice(0, visibleProjects).map((project, index) => (
          <div className="project-card" key={index} onClick={() => openProjectModal(project)}>
            <div className="project-image">
              <img src={project.w_img} alt={project.w_name} loading="lazy" />
              <div className="project-overlay">
                <h3>{project.w_name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="project-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {visibleProjects < filteredProjects.length && (
        <div className="mywork-showmore" onClick={handleShowMore}>
          <p>Show more</p>
          <img src={arrow_icon} alt="" />
        </div>
      )}
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeProjectModal}>
              <X size={24} />
            </button>
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedProject.w_img} alt={selectedProject.w_name} />
              </div>
              <div className="modal-details">
                <h2>{selectedProject.w_name}</h2>
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
                  <ul>
                    {selectedProject.features?.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-links">
                  {selectedProject.githubLink && (
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={20} />
                      <span>Source Code</span>
                    </a>
                  )}
                  {selectedProject.demoLink && (
                    <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
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