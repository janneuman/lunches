import * as React from 'react';
import './App.css';
import { Pane, Tablist, Tab, Spinner } from 'evergreen-ui';
import { useEffect } from 'react';

const getMenu = async url => {
  const data = await fetch(url);
  return await data.text();
};

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [tabs, setTabs] = React.useState([
    {
      name: 'Kantyna Ecko',
      url: '/api/ecko',
      content: '',
    },
    {
      name: 'Pivo Karlin',
      url: '/api/pivo-karlin',
      content: '',
    },
    {
      name: 'Salanda',
      url: '/api/salanda',
      content: '',
    },
    {
      name: 'Gastro Karlin',
      url: '/api/gastro-karlin',
      content: '',
    },
    {
      name: 'Sklizeno My Food',
      url: '/api/sklizeno-myfood',
      content: '',
    },
    {
      name: 'Spojka Karlin',
      url: '/api/spojka-karlin',
      content: '',
    },
    {
      name: 'Gate',
      url: '/api/gate',
      content: '',
    },
    {
      name: 'Globus',
      url: '/api/globus',
      content: '',
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
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
      setIsLoading(false);
    }
    if (tabs[tabIndex].content === '') {
      fetchData();
    }
  }, [tabIndex]);

  return (
    <Pane height={100} display="flex" flexDirection="column">
      <Tablist className="tablist">
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
            {isLoading ? (
              <Spinner />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: tab.content }} />
            )}
          </Pane>
        ))}
      </Pane>
    </Pane>
  );
}

export default App;
