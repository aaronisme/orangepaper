import React from 'react';
import { createRef } from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import hoistNonReactStatics from 'hoist-non-react-statics';


export type DropdownAlertType =
    | 'info'
    | 'warn'
    | 'error'
    | 'custom'
    | 'success'

export interface withAlertProps {
    showAlert(type: DropdownAlertType, message: string): void
}

const styles = {
    titleStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    messageStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    image:{
        display: 'none'
    }
    
};



export const withAlert = (Component: React.ComponentType<any>) => {
    class withAlert extends React.Component<any> {
        private Ref = createRef<DropdownAlert>()
        constructor(props: any) {
            super(props)
        }
        showAlert = (type: DropdownAlertType, message: string): void => {
            if (this.Ref.current) {
                this.Ref.current.alertWithType(type, '', message)
            }
        }
        render() {
            return [
                <Component {...this.props} showAlert={this.showAlert} />,
                <DropdownAlert ref={this.Ref}
                    closeInterval={3000}
                    messageNumOfLines={5}
                    successColor={'#5350F3'}
                    errorColor={'#F02153'}
                    titleStyle={styles.titleStyle}
                    imageStyle={styles.image}
                    messageStyle={styles.messageStyle} />
            ]
        }
    };
    return hoistNonReactStatics(withAlert, Component)
}

