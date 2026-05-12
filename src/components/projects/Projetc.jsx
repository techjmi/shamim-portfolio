/*
project section
**/
"use client";
import React from 'react';
import { project_title, project_description } from '@/constant/project.constant';
import { Navigation_Url } from '@/constant/global-constant';
import Button from '@/components/ui/Button';
import { Icon } from '@/icons';
import './project.scss';

const Projetc = () => {
  return (
    <section id='project' className="project-section py-fluid">
      <div className="project-container">
        <div className="project-header">
          <h2 className="project-title">{project_title}</h2>
          <p className="project-description">{project_description}</p>
        </div>
        <div className="project-cta-wrapper">
          <Button
            as="a"
            href={Navigation_Url.PROJECTS}
            variant="filled"
            size="lg"
            color="primary"
            icon={() => <Icon name="arrowRight" size={20} />}
            iconPosition="right"
            className="view-all-button"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projetc
