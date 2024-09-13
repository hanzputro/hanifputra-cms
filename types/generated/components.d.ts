import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutSkills extends Schema.Component {
  collectionName: 'components_layout_skills';
  info: {
    displayName: 'Skills';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    titleShadow: Attribute.String;
    category1: Attribute.String;
    category2: Attribute.String;
    design: Attribute.Relation<
      'layout.skills',
      'oneToMany',
      'api::skill.skill'
    >;
    code: Attribute.Relation<'layout.skills', 'oneToMany', 'api::skill.skill'>;
  };
}

export interface LayoutProjects extends Schema.Component {
  collectionName: 'components_layout_projects';
  info: {
    displayName: 'Projects';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    titleShadow: Attribute.String;
    projects: Attribute.Relation<
      'layout.projects',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface LayoutHome extends Schema.Component {
  collectionName: 'components_layout_homes';
  info: {
    displayName: 'Home';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    urlSpline: Attribute.String;
    title1: Attribute.String;
    title2: Attribute.String;
    titleShadow1: Attribute.String;
    titleShadow2: Attribute.String;
    titleShadow3: Attribute.String;
    slogan: Attribute.String;
  };
}

export interface LayoutGetInTouch extends Schema.Component {
  collectionName: 'components_layout_get_in_touches';
  info: {
    displayName: 'Get In Touch';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    titleShadow: Attribute.String;
    description: Attribute.Text;
    social_medias: Attribute.Relation<
      'layout.get-in-touch',
      'oneToMany',
      'api::social-media.social-media'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.skills': LayoutSkills;
      'layout.projects': LayoutProjects;
      'layout.home': LayoutHome;
      'layout.get-in-touch': LayoutGetInTouch;
    }
  }
}
