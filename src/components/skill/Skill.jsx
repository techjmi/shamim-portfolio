"use client";
import { useEffect, useRef, useState } from 'react';
import { skill_title, list_of_skills } from '@/constant/skill-constant';
import Badge from '@/components/ui/Badge';
import './skill.scss';
import Image from 'next/image';

export default function Skill() {
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
    <section id="skills" className="skill-section py-fluid">
      <div className="skill-container">
        <div className="skill-header">
          {/* <h2 className="skill-title text-3xl md:text-5xl">{skill_title}</h2> */}
               <span className="relative inline-flex items-center skill-title text-3xl md:text-5xl font-semibold">
              {skill_title}
              <i className="shape absolute inset-0 flex items-center justify-center pointer-events-none">
                <Image
                  src="/svg/text-decoration.svg"
                  alt="Hiring highlight"
                  width={206}
                  height={53}
                  className="partner-heading-svg"
                />
              </i>
            </span>
        </div>
        <div className="skill-grid">
          {list_of_skills.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={(el) => (itemRefs.current[categoryIndex] = el)}
              className={`skill-category-card ${visibleItems.has(categoryIndex) ? 'visible' : ''}`}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-badge-container">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="primary"
                    className="skill-badge"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

