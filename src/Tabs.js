import React, { Component } from 'react';

const TabListName = 'TabList';
const TabPanelsName = 'TabPanels';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIdx: 0 };
    this.tabsRef = React.createRef();
    this.panelsRef = React.createRef();
  }

  handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        this.previousTab(e);
        break;
      case 'ArrowRight':
        this.nextTab(e);
        break;
      default:
        break;
    }
  };

  nextTab = (e) => {
    console.log(this.tabsRef);
    const { target } = e;
    // Keyboard navigation assumes that [role="tab"] are siblings
    // though we might warn in the future about nested, interactive elements
    // as a a11y violation
    const role = target.getAttribute('role');
    if (role !== 'tab') {
      return;
    }

    console.log('next tab');
    // let idx = this.state.activeIdx;
    // idx = (idx + 1) % this.props.children.length;
    // this.setState({ activeIdx: idx });
  };

  previousTab = (e) => {
    console.log('previous tab');
    // let idx = this.state.activeIdx;
    // idx = (idx - 1 + this.props.children.length) % this.props.children.length;
    // this.setState({ activeIdx: idx });
  };

  render() {
    const { children: childrenProp } = this.props;

    this.tabsRef.current = [];
    this.panelsRef.current = [];
    const children = React.Children.map(childrenProp, (child) => {
      if (!React.isValidElement(child)) {
        return;
      }

      if (child.type.name === TabListName) {
        return React.cloneElement(child, {
          tabsRef: this.tabsRef,
        });
      } else if (child.type.name === TabPanelsName) {
        return React.cloneElement(child, {
          panelsRef: this.panelsRef,
        });
      }
    });

    return (
      <div className="Tabs" onKeyDown={this.handleKeyDown}>
        {children}
      </div>
    );
  }
}
