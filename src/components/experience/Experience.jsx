"use client";
import { useEffect, useRef, useState } from 'react';
import Badge from '@/components/ui/Badge';
import { experience_title, experience_description, list_of_experiences } from '@/constant/experience-constant';
import { parseHighlightedText } from '@/utils/textParser';
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
      <div className="container-exp">
        <div className="experience-header">
          <h2 className="experience-title">
            {experience_title}
          </h2>
          <p className="experience-description">
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
              {/* Mobile: Dot + Duration Header */}
              <div className="timeline-mobile-header">
                <div className="timeline-dot-mobile" />
                <span className="timeline-duration-mobile">{experience.duration}</span>
              </div>

              {/* Desktop: Timeline line and dot */}
              <div className="timeline-line-wrapper">
                <div className="timeline-dot" />
                {index < list_of_experiences.length - 1 && <div className="timeline-line" />}
              </div>

              {/* Desktop: Year label */}
              <div className="timeline-year">
                <span className="year-text">{experience.duration}</span>
              </div>

              {/* Content card */}
              <div className="timeline-content">
                <div className="experience-card py-fluid px-fluid">
                  <div className="card-header">
                    <h3 className="company-name">{experience.company}</h3>
                    <Badge variant="primary" className="job-type-badge">{experience.type}</Badge>
                  </div>
                  <h4 className="role-title">{experience.role}</h4>
                  <p className="description">
                    {parseHighlightedText(experience.description).map((part, idx) => (
                      part.highlighted ? (
                        <span key={idx} className="highlight-text">{part.text}</span>
                      ) : (
                        <span key={idx}>{part.text}</span>
                      )
                    ))}
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

