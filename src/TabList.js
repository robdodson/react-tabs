import React from 'react';

function TabList(props) {
  const { children: childrenProp, selectedIndex } = props;
  const children = React.Children.map(childrenProp, (child, i) => {
    if (!React.isValidElement(child)) {
      return;
    }

    return React.cloneElement(child, { selected: i === selectedIndex });
  });

  return (
    <div className="TabList" role="tablist">
      {children}
    </div>
  );
}

export default TabList;
