/** @format */

import { Navigation } from "react-native-navigation";
import MainPage from './src/pages/MainPage';
import DetailPage from './src/pages/DetailPage';
import Logo from './src/components/Logo';
import './src/libs/track';


Navigation.registerComponent(`MainPage`, () => MainPage);
Navigation.registerComponent('Logo', () => Logo)
Navigation.registerComponent('DetailPage', () => DetailPage)


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
