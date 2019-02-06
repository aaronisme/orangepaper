import React from 'react';
import { PureComponent } from 'react';
import FastImage from 'react-native-fast-image'
import { View, Text, TouchableOpacity } from 'react-native';
import format from 'date-fns/format';
import { Navigation } from "react-native-navigation";
import { track } from '../../../libs/track'


interface Props {
    article: {
        imageUrl: string,
        title: string,
        description: string
        createdTime: string,
        id: number,
    },
    componentId: string,
}


class ArticleItem extends PureComponent<Props> {
    constructor(props: Props) {
        super(props)
    }

    onItemPress = (): void => {
        const { article, componentId } = this.props
        Navigation.push(componentId, {
            component: {
                name: 'DetailPage',
                passProps: {
                    title: article.title,
                    id: article.id,
                    sourceUrl: `https://orange.xyz/p/${article.id}`,
                    headerImage: article.imageUrl,
                    time: format(article.createdTime, 'YYYY-MM-DD HH:MM')
                }
            }
        })
        track('article', {id: article.id, title: article.title})
    }

    render() {
        const { article } = this.props
        return (
            <TouchableOpacity onPress={this.onItemPress}>
                <View style={{
                    marginBottom: 15,
                    backgroundColor: 'white',
                    shadowRadius: 5,
                    shadowColor: '#EFF0F1',
                    shadowOpacity: 1,
                    shadowOffset: {
                        width: 0,
                        height: 5
                    },
                }}>
                    <FastImage source={{ uri: article.imageUrl }} style={{
                        width: '100%', height: 220,
                    }}/>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 14, paddingVertical: 10, width: '84%' }}>{article.title}</Text>
                        <Text style={{ color: '#A6A6A6', fontSize: 10, width: '15%', paddingTop: 10, textAlign: 'right' }}>{`${format(article.createdTime, 'YY/MM/DD')}`}</Text>
                    </View>
                    <Text style={{ color: '#A6A6A6', fontSize: 12, paddingTop: 5, paddingBottom: 10 }}>{article.description}</Text>
                </View>
            </TouchableOpacity>
        )

    }
}

export default ArticleItem