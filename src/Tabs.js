import React, { Component } from 'react';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
    this.ref = React.createRef();
  }

  getTabs = () => {
    return Array.from(this.ref.current.querySelectorAll('[role = "tab"]'));
  };

  // Riffing on the focus managemenet code from Material UI
  // https://github.com/mui-org/material-ui/blob/c224f32bb8f144e590c096d103c9d59c2509ed93/packages/material-ui/src/Tabs/Tabs.js#L415-L454
  handleKeyDown = (e) => {
    const { target } = e;
    const { selectedIndex } = this.state;

    const role = target.getAttribute('role');
    if (role !== 'tab') {
      return;
    }

    e.preventDefault();

    const tabs = this.getTabs();
    const tabsLength = tabs.length;
    let newSelectedIndex = this.state.selectedIndex;
    switch (e.key) {
      case 'ArrowLeft':
        newSelectedIndex = Math.max(newSelectedIndex - 1, 0);
        break;
      case 'ArrowRight':
        newSelectedIndex = Math.min(newSelectedIndex + 1, tabsLength - 1);
        break;
      default:
        break;
    }

    if (newSelectedIndex !== selectedIndex) {
      this.setState({ selectedIndex: newSelectedIndex });
    }
  };

  handleClick = (e) => {
    console.log('clicked', e.target);
  };

  render() {
    const { children: childrenProp } = this.props;
    const { selectedIndex } = this.state;

    const children = React.Children.map(childrenProp, (child) => {
      if (!React.isValidElement(child)) {
        return;
      }

      return React.cloneElement(child, { selectedIndex });
    });

    return (
      <div
        className="Tabs"
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClick}
        ref={this.ref}
      >
        {children}
      </div>
    );
  }
}
