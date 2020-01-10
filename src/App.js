import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Pane, Tablist, Tab, Paragraph } from 'evergreen-ui';

function App() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [tabs, setTabs] = React.useState(['Traits', 'Event History', 'Identities']);

  return (
    <Pane height={120}>
      <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
        {tabs.map((tab, index) => (
          <Tab
            key={tab}
            id={tab}
            onSelect={() => setTabIndex(index)}
            isSelected={index === tabIndex}
            aria-controls={`panel-${tab}`}
          >
            {tab}
          </Tab>
        ))}
      </Tablist>
      <Pane padding={16} background="tint1" flex="1">
        {tabs.map((tab, index) => (
          <Pane
            key={tab}
            id={`panel-${tab}`}
            role="tabpanel"
            aria-labelledby={tab}
            aria-hidden={index !== tabIndex}
            display={index === tabIndex ? 'block' : 'none'}
          >
            <Paragraph>Panel {tab}</Paragraph>
          </Pane>
        ))}
      </Pane>
    </Pane>
  );
}

export default App;
