import React from 'react';
import { Sentry } from 'react-native-sentry';
import { sentryDsn } from '../config'
Sentry.config(sentryDsn).install();
// if(!__DEV__) {
//     Sentry.config(sentryDsn).install();
// }


type logger = {
    error(e: Error, info?: React.ErrorInfo):void 
}

export const logger:logger = {
    error: (e, info) => Sentry.captureException(e, info) 
}