"use client";
import { useEffect, useRef, useState } from 'react';
import { skill_title, list_of_skills } from '@/constant/skill-constant';
import { typography_types } from '@/constant/typography-constant';
import './skill.scss';

export default function Skill() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [animatedBars, setAnimatedBars] = useState(new Set());
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
              // Trigger bar animation after card appears
              setTimeout(() => {
                setAnimatedBars((prev) => new Set([...prev, index]));
              }, 300);
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
    <section id="skills" className="skill-section py-fluid">
      <div className="container-narrow">
        <div className="skill-header">
          <h2 className={`${typography_types.heading_1_bold} skill-title`}>
            {skill_title}
          </h2>
        </div>
        <div className="skill-grid">
          {list_of_skills.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={(el) => (itemRefs.current[categoryIndex] = el)}
              className={`skill-category-card ${visibleItems.has(categoryIndex) ? 'visible' : ''}`}
            >
              <h3 className={`${typography_types.heading_3_bold} category-title`}>
                {category.title}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className={`${typography_types.body_2_bold} skill-name`}>
                        {skill.name}
                      </span>
                      <span className={`${typography_types.caption_1_bold} skill-percentage`}>
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="skill-bar-container">
                      <div
                        className={`skill-bar ${animatedBars.has(categoryIndex) ? 'animated' : ''}`}
                        style={{
                          '--skill-percentage': `${skill.percentage}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

