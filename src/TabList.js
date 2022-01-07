import React, { Component } from 'react';

export default class TabList extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIdx: 0 };
  }

  handleKeyUp = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        this.previousTab();
        break;
      case 'ArrowRight':
        this.nextTab();
        break;
      default:
        break;
    }
  };

  nextTab = () => {
    let idx = this.state.activeIdx;
    idx = (idx + 1) % this.props.children.length;
    this.setState({ activeIdx: idx });
  };

  previousTab = () => {
    let idx = this.state.activeIdx;
    idx = (idx - 1 + this.props.children.length) % this.props.children.length;
    this.setState({ activeIdx: idx });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyUp);
  }

  render() {
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, (child, i) => {
      // Checking isValidElement is the safe way and avoids a typescript
      // error too.
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          isSelected: i === this.state.activeIdx,
        });
      }
      return child;
    });
    return <div className="TabList">{childrenWithProps}</div>;
  }
}
