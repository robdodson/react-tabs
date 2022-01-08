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
      data-selected={selected ? '' : null}
      ref={buttonRef}
    >
      {label}
    </button>
  );
}

export default Tab;
