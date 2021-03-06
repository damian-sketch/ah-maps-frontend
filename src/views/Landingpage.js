import React from 'react';
import App from '../containers/Article/ArticleList';
import TemplateDefault from './Templates/TemplateDefault';

const LandingPage = ({ ...props }) => (
  <TemplateDefault {...props}>
    <App {...props} />
  </TemplateDefault>
);

export default LandingPage;
