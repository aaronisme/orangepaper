import React from 'react';
import { Component } from 'react';
import { FlatList } from 'react-native';
import ArticleItem from './ArticleItem'
import { article } from '../../../models/article'


interface Props {
    articles: Array<article>
}

export default class ArticleList extends Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    _keyExtractor = (item: article):string => item.id.toString()

    render(){
        return <FlatList data={this.props.articles} keyExtractor={this._keyExtractor} renderItem={({item}) => <ArticleItem article={item} />}/>
    }

}