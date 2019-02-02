/** @format */

import { Navigation } from "react-native-navigation";
import MainPage from './src/pages/MainPage';

Navigation.registerComponent(`MainPage`, () => MainPage);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            title: {
              text: 'Orangepaper'
            },
            alignment: 'center',
            visible: true
          }
        },
        children: [
          {
            component: {
              name: 'MainPage',
            }
          }
        ]
      }
    }
  });
    });
