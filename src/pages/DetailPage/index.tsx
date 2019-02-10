import React from 'react';
import { Component } from 'react'
import { WebView } from 'react-native';
import { NavigationInjectedProps, HeaderBackButton } from 'react-navigation'
import { fetchArticle } from '../MainPage/service';
import { htmlTemp } from './template';
import Logo from '../../components/Logo'
import { withAlert, withAlertProps } from '../../components/hoc'
import { logger } from '../../libs/error';


interface Props {
    sourceUrl: string,
    id: number,
    title: string,
    headerImage: string,
    time: string,
}

interface State {
    content: string
    title: string,
    headerImage: string,
    time: string,
    key: number
}

class DetailPage extends Component<Props & withAlertProps & NavigationInjectedProps, State> {
    static navigationOptions = ({ navigation }: NavigationInjectedProps)   => {
        return {
            headerBackImage: <HeaderBackButton tintColor={'#A6A6A6'} onPress={() => navigation.goBack()} />
        }
    };

    constructor(props: Props & withAlertProps & NavigationInjectedProps) {
        super(props)
        this.state = {
            content: '',
            title: '',
            headerImage: '',
            time: '',
            key: 1
        }
    }

    componentDidMount() {
        this.fetchContent()
    }

    componentDidCatch(e: Error, info: React.ErrorInfo) {
        logger.error(e, info)
    }

    fetchContent = (): void => {
        const id = this.props.navigation.getParam('id')
        const title = this.props.navigation.getParam('title', '')
        const headerImage = this.props.navigation.getParam('headerImage', '')
        const time = this.props.navigation.getParam('time', '')
        fetchArticle(id).then(data => this.setState(
            {
                content: data,
                title,
                headerImage,
                time,
                key: this.state.key + 1
            })).catch(e => {
                logger.error(e)
                this.props.showAlert('error', 'oops,网络出了点状况,请稍后再试')
            })
    }


    render() {
        const { headerImage, content, title, time, key } = this.state
        return <WebView
            key={key}
            source={{ html: htmlTemp(headerImage, title, time, content) }}
            automaticallyAdjustContentInsets={false} />

    }
}

export default withAlert(DetailPage)