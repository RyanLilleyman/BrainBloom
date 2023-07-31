import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Thoughts from '../thoughts/thoughts.view';
import Attention from '../attention/attention.view';

const routes = [
  { key: 'thoughts', title: 'Thoughts', icon: 'lightbulb-on' },
  { key: 'attention', title: 'Attention', icon: 'alert-circle' },
];

const renderScene = BottomNavigation.SceneMap({
  thoughts: Thoughts,
  attention: Attention,
});

/**
 * Renders the main view component.
 *
 * @return {React.FC} The main view component.
 */
const MainView: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MainView;
