import React from 'react';
import { PureComponent } from 'react';
import { FlatList } from 'react-native';
import ArticleItem from './ArticleItem'
import { article } from '../../../models/article'


interface Props {
    componentId: string,
    onRefresh: () => void,
    refreshing: boolean,
    articles: Array<article>
}

const viewConfig = {
    waitForInteraction: true,
    itemVisiblePercentThreshold: 95
}

export default class ArticleList extends PureComponent<Props> {
    constructor(props: Props) {
        super(props)

    }

    _keyExtractor = (item: article): string => item.id.toString()

    renderItem = ({ item }: { item: article }) => <ArticleItem key={item.id} article={item} componentId={this.props.componentId} />

    render() {
        return <FlatList
            showsVerticalScrollIndicator={false}
            data={this.props.articles}
            onRefresh={this.props.onRefresh}
            refreshing={this.props.refreshing}
            keyExtractor={this._keyExtractor}
            initialNumToRender={4}
            renderItem={this.renderItem}
        />
    }

}