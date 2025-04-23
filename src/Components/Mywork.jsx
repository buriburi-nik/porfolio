import { useState, useEffect } from 'react';
import './Mywork.css';
import u1 from '../assets/theme_pattern.svg';
import mywork_data from '../assets/mywork_data';
import arrow_icon from '../assets/arrow_icon.svg';
import { X, Github, ExternalLink } from 'lucide-react';

const Mywork = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  
  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
  }, [selectedProject]);

  // Filter logic
  const categories = ['All', ...new Set(mywork_data.map(p => p.category))];
  const filtered = filter === 'All'
    ? mywork_data
    : mywork_data.filter(p => p.category === filter);

  // Show more
  const handleShowMore = () =>
    setVisibleProjects(v => Math.min(v + 3, filtered.length));

  return (
    <div className="container">
      <div className="mywork" id="work">
        <div className="mywork-title">
          <h1>My latest work</h1>
          <img src={u1} alt="" />
        </div>

        <div className="mywork-filters">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => { setFilter(cat); setVisibleProjects(3); }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mywork-container grid-auto-fit">
          {filtered.slice(0, visibleProjects).map((proj, i) => (
            <div
              className="project-card"
              key={i}
              onClick={() => setSelectedProject(proj)}
            >
              <div className="project-image">
                <img src={proj.w_img} alt={proj.w_name} loading="lazy" />
                <div className="project-overlay">
                  <h3>{proj.w_name}</h3>
                  <p>{proj.description}</p>
                  <div className="project-tags">
                    {proj.technologies?.map((t,k) => (
                      <span key={k} className="project-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < filtered.length && (
          <div className="mywork-showmore" onClick={handleShowMore}>
            <p>Show more</p>
            <img src={arrow_icon} alt="Show more" />
          </div>
        )}

        {selectedProject && (
          <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="project-modal" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setSelectedProject(null)}>
                <X size={24} stroke="currentColor" />
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
                      {selectedProject.technologies?.map((t,k) => (
                        <span key={k} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-features">
                    <h3>Key Features</h3>
                    <ul>
                      {selectedProject.features?.map((f,k) => (
                        <li key={k}>{f}</li>
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
    </div>
  );
};

export default Mywork;
