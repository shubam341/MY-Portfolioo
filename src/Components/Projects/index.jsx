import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { sumArray } from '../../helper';
import { projects } from '../../data';
import Card from './Card';

const tabs = [
  { name: 'All' },
  { name: 'Frontend' },
  { name: 'Backend' },
];

const Projects = () => {
  const [displayableProjects, setDisplayableProjects] = useState(projects);
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef([]);

  useEffect(() => {
    const activeElement = itemsEls.current[activeIndex];
    if (activeElement) {
      const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
      setOffset(sumArray(prevEl.map(item => item.offsetWidth)));
      setIndicatorWidth(activeElement.offsetWidth);
    }
  }, [activeIndex]);

  const setProjects = (category) => {
    if (category === "All") {
      setDisplayableProjects(projects);
    } else {
      const filteredProjects = projects.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setDisplayableProjects(filteredProjects);
    }
  };

  return (
    <section id='projects'>
      <div className='section__wrapper projects__container'>
        <div className='section__header center'>
          <h2 className='primary__title'>Projects</h2>
        </div>

        <nav>
          {tabs.map((tab, index) => (
            <button
              ref={(el) => (itemsEls.current[index] = el)}
              onClick={() => {
                setActiveIndex(index);
                setProjects(tab.name);
              }}
              key={index}
              className={activeIndex === index ? 'active' : ''}
            >
              {tab.name}
            </button>
          ))}

          <span
            className='active__indicator'
            style={{
              left: `${offset}px`,
              width: `${indicatorWidth}px`,
            }}
          ></span>
        </nav>

        <div className='card__container'>
          {displayableProjects?.map((project, index) => (
            <Card
              key={project.id || index}
              title={project.title}
              image={project.image}
              data={project.data}
              stack={project.stack}
              demoLink={project.data.demoLink}  // Pass demoLink properly
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
