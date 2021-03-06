import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import AuthMenuItem from './AuthMenuItem';
import Search from '../../containers/Search';
import { isLoggedIn } from '../../utils/auth';

export default class MenuExampleBasic extends Component {
  state = {}

  render() {
    return (
      <Menu secondary inverted pointing className="large align-items-right">
        <Menu.Item className="toc">
          <i className="sidebar icon" />
        </Menu.Item>
        <div className="right menu">
          <Search {...this.props} />
          <AuthMenuItem {...this.props} authenticated={isLoggedIn()} />
        </div>
      </Menu>
    );
  }
}
