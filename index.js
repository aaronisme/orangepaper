/** @format */

import { Navigation } from "react-native-navigation";
import MainPage from './src/pages/MainPage';
import Logo from './src/components/Logo'

Navigation.registerComponent(`MainPage`, () => MainPage);
Navigation.registerComponent('Logo', () => Logo)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'MainPage',
              options: {
                topBar: {
                  title: {
                    component: {
                      name: 'Logo',
                      alignment: 'center'
                    },
                  },
                  drawBehind: false,
                  visible: true
                }
              },
            }
          }
        ]
      }
    }
  });
    });
