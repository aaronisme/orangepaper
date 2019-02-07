import Amplitude from 'react-native-amplitude-analytics';
import DeviceInfo from 'react-native-device-info';

let amplitude : Amplitude;

if(!__DEV__) {
    const { amplitudeApiKey } = require('../config')
    amplitude = new Amplitude(amplitudeApiKey);
    const uuid = DeviceInfo.getUniqueID()
    let userId = uuid || 'John Doe'
    amplitude.setUserId(userId)
}



export const track = (event:string, options:object): void => {
    if(!__DEV__) {
        amplitude.logEvent(event, options)
    }
} 