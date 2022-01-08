import './TabPanel.css';

function TabPanel({ children, selected }) {
  return (
    <div
      className="TabPanel"
      role="tabpanel"
      data-selected={selected ? '' : null}
    >
      {children}
    </div>
  );
}

export default TabPanel;
