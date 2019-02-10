import React from "react";
import Logo from './src/components/Logo'
import { createStackNavigator, createAppContainer, HeaderBackButton } from "react-navigation";
import { StackViewTransitionConfigs } from 'react-navigation-stack'
import MainPage from './src/pages/MainPage'
import DetailPage from './src/pages/DetailPage'

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainPage
  },
  Detail: {
    screen: DetailPage
  }
},{
    initialRouteName: 'Main',
    headerLayoutPreset: 'center',
    headerMode: 'screen',
    defaultNavigationOptions:{
      headerTitle: <Logo />,
      headerBackTitle: null,
      gesturesEnabled: true,
    },
    transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS
});

export default createAppContainer(AppNavigator);