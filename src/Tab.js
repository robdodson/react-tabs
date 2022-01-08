import { useEffect, useRef } from 'react';

function Tab({ label, selected }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (selected) {
      buttonRef.current.focus();
    }
  }, [selected]);

  return (
    <button
      className="Tab"
      role="tab"
      tabIndex={selected ? 0 : -1}
      ref={buttonRef}
    >
      {label}
    </button>
  );
}

export default Tab;
