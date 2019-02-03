import React from 'react';
import { Component } from 'react';
import { FlatList } from 'react-native';
import ArticleItem from './ArticleItem'
import { article } from '../../../models/article'


interface Props {
    onRefresh: () => void,
    refreshing: boolean,
    articles: Array<article>
}

const viewConfig = {
    waitForInteraction: true,
    itemVisiblePercentThreshold: 95
}

export default class ArticleList extends Component<Props> {
    constructor(props: Props) {
        super(props)
        
    }

    _keyExtractor = (item: article): string => item.id.toString()

    render() {
        return <FlatList
            showsVerticalScrollIndicator={false}
            data={this.props.articles}
            onRefresh={this.props.onRefresh}
            refreshing={this.props.refreshing}
            viewabilityConfig={viewConfig}
            keyExtractor={this._keyExtractor}
            initialNumToRender={4}
            renderItem={({ item }) => <ArticleItem article={item} />}
        />
    }

}