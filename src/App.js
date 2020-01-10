import * as React from 'react';
import './App.css';
import { Pane, Tablist, Tab, Paragraph } from 'evergreen-ui';
import { useEffect } from 'react';

const getMenu = async url => {
  const data = await fetch(`http://localhost:3000${url}`);
  return await data.text();
};

function App() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [tabs, setTabs] = React.useState([
    {
      name: 'Kantyna Ecko',
      url: '/ecko',
      content: '',
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const content = await getMenu(tabs[tabIndex].url);

      const newTabs = tabs.map((tab, index) => {
        if (index === tabIndex) {
          return {
            ...tab,
            content,
          };
        }
        return tab;
      });
      setTabs(newTabs);
    }
    fetchData();

  }, [tabIndex]);

  return (
    <Pane height={120}>
      <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
        {tabs.map((tab, index) => (
          <Tab
            key={tab.name}
            id={tab.name}
            onSelect={() => {
              setTabIndex(index);
            }}
            isSelected={index === tabIndex}
            aria-controls={`panel-${tab.name}`}
          >
            {tab.name}
          </Tab>
        ))}
      </Tablist>
      <Pane padding={16} background="tint1" flex="1">
        {tabs.map((tab, index) => (
          <Pane
            key={tab.name}
            id={`panel-${tab.name}`}
            role="tabpanel"
            aria-labelledby={tab.name}
            aria-hidden={index !== tabIndex}
            display={index === tabIndex ? 'block' : 'none'}
          >
            <div dangerouslySetInnerHTML={{__html: tab.content}} />
          </Pane>
        ))}
      </Pane>
    </Pane>
  );
}

export default App;
