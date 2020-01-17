import * as React from 'react';
import './App.css';
import { Pane, Tablist, Tab } from 'evergreen-ui';
import { Content } from './Content';

import { useEffect } from 'react';

const getMenu = async restaurant => {
  const data = await fetch(restaurant.url);
  if (restaurant.json) {
    return await data.json();
  } else {
    return await data.text();
  }
};

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [tabs, setTabs] = React.useState([
    {
      name: 'Kantyna Ecko',
      url: '/api/ecko',
      content: '',
      className: 'ecko',
    },
    {
      name: 'Pivo Karlin',
      url: '/api/pivo-karlin',
      content: '',
      className: 'pivokarlin',
    },
    {
      name: 'Salanda',
      url: '/api/salanda',
      content: '',
      className: 'salanda',
    },
    {
      name: 'Gastro Karlin',
      url: '/api/gastro-karlin',
      content: '',
      className: 'gastro',
    },
    {
      name: 'Sklizeno My Food',
      url: '/api/sklizeno-myfood',
      content: '',
      className: 'sklizeno',
    },
    {
      name: 'Spojka Karlin',
      url: '/api/spojka-karlin',
      content: '',
      className: 'spojka',
    },
    {
      name: 'Gate',
      url: '/api/gate',
      content: '',
      className: 'gate',
    },
    {
      name: 'Globus',
      url: '/api/globus',
      content: '',
      className: 'globus',
    },
    {
      name: 'Tankovna',
      url: '/api/tankovna',
      content: '',
      className: 'tankovna',
      json: true,
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const content = await getMenu(tabs[tabIndex]);

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
  }, [tabs, tabIndex]);

  return (
    <Pane display="flex" flexDirection="column">
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
            height={35}
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
            className={tab.className}
          >
            <Content
              content={tab.content}
              isLoading={isLoading}
              isJsonFormat={tab.json}
            />
          </Pane>
        ))}
      </Pane>
    </Pane>
  );
}

export default App;
