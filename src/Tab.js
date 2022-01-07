import { createRef, Component } from 'react';

export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = createRef();
  }

  componentDidUpdate() {
    if (this.props.isSelected) {
      this.buttonRef.current.focus();
    }
  }

  render() {
    const { isSelected, children } = this.props;
    return (
      <button
        className="Tab"
        data-active={isSelected ? '' : null}
        ref={this.buttonRef}
      >
        {children}
      </button>
    );
  }
}
