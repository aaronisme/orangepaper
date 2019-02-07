import React from 'react';
import { Sentry } from 'react-native-sentry';
    
if(!__DEV__) {
    const { sentryDsn } = require('../config')
    Sentry.config(sentryDsn).install();
}


type logger = {
    error(e: Error, info?: React.ErrorInfo):void 
}

export const logger:logger = {
    error: (e, info) => Sentry.captureException(e, info) 
}