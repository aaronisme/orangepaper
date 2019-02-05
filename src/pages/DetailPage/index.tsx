import React from 'react';
import { Component } from 'react'
import { WebView } from 'react-native';
import { fetchArticle } from '../MainPage/service';
import { htmlTemp } from './template';

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
}

const tagStyles = { p: { fontSize: 15, paddingHorizontal: 16, marginBottom: 25 } }

class DetailPage extends Component<Props, State> {
    static options(passProps: Props) {
        return {
            topBar: {
                title: {
                    text: passProps.title
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

    constructor(props: Props) {
        super(props)
        this.state = {
            content: '',
            title: '',
            headerImage: '',
            time: '',
        }
    }

    componentDidMount() {
        this.fetchContent(this.props.id)
    }

    fetchContent = (id: number): void => {
        fetchArticle(id).then(data => this.setState(
            {
                content: data,
                title: this.props.title,
                headerImage: this.props.headerImage,
                time: this.props.time
            }))
    }


    render() {
        const { headerImage, content, title, time } = this.state
        return <WebView source={{ html: htmlTemp(headerImage, title, time, content) }} />
    }
}

export default DetailPage