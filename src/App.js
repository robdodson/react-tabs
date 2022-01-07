import Tabs from './Tabs';
import TabList from './TabList';
import Tab from './Tab';
// import TabPanels from './TabPanels';
// import TabPanel from './TabPanel';

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab label="First tab" />
          <Tab label="Second tab" />
          <Tab label="Third tab" />
        </TabList>
      </Tabs>

      {/* <Tabs>
        <TabList>
          <Tab>First tab</Tab>
          <Tab>Second tab</Tab>
          <Tab>Third tab</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>First panel</p>
          </TabPanel>
          <TabPanel>
            <p>Second panel</p>
          </TabPanel>
          <TabPanel>
            <p>Third panel</p>
          </TabPanel>
        </TabPanels>
      </Tabs> */}
    </div>
  );
}

export default App;
