import React from 'react';
import TemplateWithoutMenu from './Templates/TemplateWithoutMenu';
import LoginComponent from '../containers/Login';

const Login = ({ ...props }) => (
  <TemplateWithoutMenu {...props}>
    <LoginComponent {...props} />
  </TemplateWithoutMenu>
);

export default Login;
