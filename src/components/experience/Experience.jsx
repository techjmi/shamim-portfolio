"use client";
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import { experience_title, experience_description, list_of_experiences } from '@/constant/experience-constant';
import { typography_types } from '@/constant/typography-constant';
import './experience.scss';

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -100px 0px'
        }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="experience" className="experience-section py-fluid">
      <div className="container-narrow">
        <div className="experience-header">
          <h2 className={`${typography_types.heading_1_bold} experience-title`}>
            {experience_title}
          </h2>
          <p className={`${typography_types.body_1_bold} experience-description`}>
            {experience_description}
          </p>
        </div>
        <div className="timeline-wrapper">
          {list_of_experiences.map((experience, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`timeline-item ${visibleItems.has(index) ? 'visible' : ''}`}
            >
              {/* Timeline line and dot */}
              <div className="timeline-line-wrapper">
                <div className="timeline-dot" />
                {index < list_of_experiences.length - 1 && <div className="timeline-line" />}
              </div>

              {/* Year label */}
              <div className="timeline-year">
                <span className={`${typography_types.body_2_bold} year-text`}>
                  {experience.duration}
                </span>
              </div>

              {/* Content card */}
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <h3 className={`${typography_types.heading_3_bold} company-name`}>
                      {experience.company}
                    </h3>
                    <Button variant="outline" size="sm" className="job-type-badge">
                      {experience.type}
                    </Button>
                  </div>
                  <h4 className={`${typography_types.body_1_bold} role-title`}>
                    {experience.role}
                  </h4>
                  <p className={`${typography_types.body_2_bold} description`}>
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

