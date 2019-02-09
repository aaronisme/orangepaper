import React from 'react';
import { Component } from 'react'
import { WebView } from 'react-native';
import { fetchArticle } from '../MainPage/service';
import { htmlTemp } from './template';
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

const tagStyles = { p: { fontSize: 15, paddingHorizontal: 16, marginBottom: 25 } }

class DetailPage extends Component<Props & withAlertProps, State> {
    static options(passProps: Props) {
        return {
            topBar: {
                title: {
                    component: {
                        name: 'Logo',
                        alignment: 'center'
                    }
                },
                visible: true,
                buttonColor: '#A6A6A6',
                backButton: {
                    color: '#A6A6A6',
                    visible: true
                }
            },
        };
    }

    constructor(props: Props & withAlertProps) {
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
        this.fetchContent(this.props.id)
    }

    componentDidCatch(e: Error, info: React.ErrorInfo) {
        logger.error(e, info)
    }

    fetchContent = (id: number): void => {
        fetchArticle(id).then(data => this.setState(
            {
                content: data,
                title: this.props.title,
                headerImage: this.props.headerImage,
                time: this.props.time,
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