import React, { Component } from 'react';

const TabName = 'Tab';

export default class TabList extends Component {
  render() {
    const { children: childrenProp, tabsRef } = this.props;

    const children = React.Children.map(childrenProp, (child, i) => {
      if (!React.isValidElement(child)) {
        return;
      }

      if (child.type.name !== TabName) {
        return;
      }

      return React.cloneElement(child, {
        tabsRef,
      });
    });

    return (
      <div className="TabList" role="tablist">
        {children}
      </div>
    );
  }
}
