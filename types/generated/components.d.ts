import type { Struct, Schema } from '@strapi/strapi';

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'apps';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'Project';
    icon: 'folder';
  };
  attributes: {
    title: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    projectSummary: Schema.Attribute.Text;
  };
}

export interface InterestInterest extends Struct.ComponentSchema {
  collectionName: 'components_interest_interests';
  info: {
    displayName: 'Interest';
    icon: 'message';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface CertificatesCertificates extends Struct.ComponentSchema {
  collectionName: 'components_certificates_certificates';
  info: {
    displayName: 'Certificates';
    icon: 'file';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    workSummary: Schema.Attribute.RichText;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
  };
  attributes: {
    universityName: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'skills.skills': SkillsSkills;
      'project.project': ProjectProject;
      'interest.interest': InterestInterest;
      'certificates.certificates': CertificatesCertificates;
      'experience.experience': ExperienceExperience;
      'education.education': EducationEducation;
    }
  }
}
