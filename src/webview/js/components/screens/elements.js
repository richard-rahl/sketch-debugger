import React, { Component } from 'react';
import LogList from 'components/console/log-list';
import _ from 'lodash';
import { connect } from 'react-redux';
import ElementTree from 'components/elements/element-tree';

const mapStateToProps = state => {
  return {
    tree: state.elements.tree
  };
};

@connect(mapStateToProps)
export default class Elements extends Component {
  render () {
    const { tree } = this.props;
    return (
      <div className="elements tab-content-inner">
        {tree.length > 0 ? (
          <ElementTree tree={tree} />
        ) : (
          <p className="empty-message">
            No Elements found! We'll keep looking, just to be sure ;)
          </p>
        )}
      </div>
    );
  }
}
