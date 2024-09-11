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
  };
}

export interface LayoutProjects extends Schema.Component {
  collectionName: 'components_layout_projects';
  info: {
    displayName: 'Projects';
  };
  attributes: {
    title: Attribute.String;
    titleShadow: Attribute.String;
  };
}

export interface LayoutHome extends Schema.Component {
  collectionName: 'components_layout_homes';
  info: {
    displayName: 'Home';
  };
  attributes: {
    description: Attribute.Text;
    url: Attribute.String;
  };
}

export interface LayoutGetInTouch extends Schema.Component {
  collectionName: 'components_layout_get_in_touches';
  info: {
    displayName: 'Get In Touch';
  };
  attributes: {
    title: Attribute.String;
    titleShadow: Attribute.String;
    description: Attribute.Text;
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
