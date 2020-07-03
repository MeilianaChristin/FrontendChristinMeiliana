import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {bottomRoutes} from '../configs/routes';
import {Text} from 'react-native';
import styles from './style';

const Tab = createBottomTabNavigator();
const getTabIcon = (iconName, focused) => {
  const iconStyles = [styles.iconLogo];
  if (focused) {
    iconStyles.push(styles.activeIcon);
  }

  return <FontAwesome name={iconName} style={iconStyles} />;
};

function MyTabBarLabel(props) {
  return (
    <Text
      style={[
        styles.tabBarLabel,
        props.focused ? styles.tabBarLabelActive : {},
      ]}>
      {props.title}
    </Text>
  );
}

MyTabBarLabel.propTypes = {
  focused: PropTypes.any,
  title: PropTypes.any,
};

const tabBarLabel = (focused, title) => {
  return <MyTabBarLabel title={title} focused={focused} />;
};

export default function BottomTab(props) {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      shifting={true}
      inactiveColor={styles.buttonText.color}
      activeColor={styles.activeButtonText.color}
      barStyle={[styles.container, props.style]}
      backBehavior="initialRoute">
      {bottomRoutes.map((route, index) => (
        <Tab.Screen
          key={index}
          name={route.name}
          component={route.component}
          options={{
            tabBarLabel: ({focused}) => tabBarLabel(focused, route.name),
            tabBarIcon: ({focused}) => getTabIcon(route.icon, focused),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

BottomTab.propTypes = {
  style: PropTypes.any,
};