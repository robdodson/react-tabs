import React from 'react';

function TabPanels(props) {
  const { children: childrenProp, selectedIndex } = props;
  const children = React.Children.map(childrenProp, (child, i) => {
    if (!React.isValidElement(child)) {
      return;
    }

    return React.cloneElement(child, { selected: i === selectedIndex });
  });

  return (
    <div className="TabPanels" role="presentation">
      {children}
    </div>
  );
}

export default TabPanels;
