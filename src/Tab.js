import { Component } from 'react';

export default class Tab extends Component {
  render() {
    const { label, tabsRef } = this.props;
    return (
      <button
        className="Tab"
        role="tab"
        ref={(el) => el && tabsRef.current.push(el)}
      >
        {label}
      </button>
    );
  }
}
